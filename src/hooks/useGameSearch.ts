import { useState, useEffect, useMemo } from 'react';
import { mockGames, Game, popularGames, newGames, providers } from '@/data/mockGames';

// Fuzzy search function for typo handling
function fuzzyMatch(query: string, target: string, threshold = 0.6): boolean {
  const q = query.toLowerCase();
  const t = target.toLowerCase();
  
  // Exact match
  if (t.includes(q)) return true;
  
  // Calculate Levenshtein distance
  const matrix = Array(q.length + 1).fill(null).map(() => Array(t.length + 1).fill(null));
  
  for (let i = 0; i <= q.length; i++) matrix[i][0] = i;
  for (let j = 0; j <= t.length; j++) matrix[0][j] = j;
  
  for (let i = 1; i <= q.length; i++) {
    for (let j = 1; j <= t.length; j++) {
      const cost = q[i - 1] === t[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  
  const distance = matrix[q.length][t.length];
  const similarity = 1 - distance / Math.max(q.length, t.length);
  
  return similarity >= threshold;
}

export function useGameSearch() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Game[]>([]);
  const [suggestions, setSuggestions] = useState<Game[]>([]);
  const [autocompleteResults, setAutocompleteResults] = useState<Game[]>([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Debounced search effect
  useEffect(() => {
    if (query.length < 3) {
      setSearchResults([]);
      setAutocompleteResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    const timeoutId = setTimeout(() => {
      performSearch(query);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  // Generate suggestions when search is focused (no query)
  useEffect(() => {
    if (query === '') {
      generateSuggestions();
    }
  }, [query, searchHistory]);

  // Generate autocomplete as user types
  useEffect(() => {
    if (query.length >= 1 && query.length < 3) {
      generateAutocomplete(query);
    }
  }, [query]);

  const performSearch = (searchQuery: string) => {
    const normalizedQuery = searchQuery.toLowerCase().trim();
    
    let results: Game[] = [];
    
    // 1. Exact title matches (highest priority)
    const exactMatches = mockGames.filter(game => 
      game.title.toLowerCase() === normalizedQuery
    );
    
    // 2. Title starts with query
    const titleStartMatches = mockGames.filter(game => 
      game.title.toLowerCase().startsWith(normalizedQuery) && 
      !exactMatches.includes(game)
    );
    
    // 3. Partial title matches
    const partialTitleMatches = mockGames.filter(game => 
      game.title.toLowerCase().includes(normalizedQuery) && 
      !exactMatches.includes(game) && 
      !titleStartMatches.includes(game)
    );
    
    // 4. Provider matches
    const providerMatches = mockGames.filter(game => 
      game.provider.toLowerCase().includes(normalizedQuery) && 
      !exactMatches.includes(game) && 
      !titleStartMatches.includes(game) && 
      !partialTitleMatches.includes(game)
    );
    
    // 5. Tag matches
    const tagMatches = mockGames.filter(game => 
      game.tags.some(tag => tag.toLowerCase().includes(normalizedQuery)) && 
      !exactMatches.includes(game) && 
      !titleStartMatches.includes(game) && 
      !partialTitleMatches.includes(game) && 
      !providerMatches.includes(game)
    );
    
    // 6. Fuzzy matches for typos
    const fuzzyMatches = mockGames.filter(game => {
      const alreadyMatched = [
        ...exactMatches, ...titleStartMatches, ...partialTitleMatches, 
        ...providerMatches, ...tagMatches
      ].includes(game);
      
      if (alreadyMatched) return false;
      
      return fuzzyMatch(normalizedQuery, game.title) || 
             game.tags.some(tag => fuzzyMatch(normalizedQuery, tag));
    });

    // Combine results in priority order
    results = [
      ...exactMatches,
      ...titleStartMatches.sort((a, b) => b.popularity - a.popularity),
      ...partialTitleMatches.sort((a, b) => b.popularity - a.popularity),
      ...providerMatches.sort((a, b) => b.popularity - a.popularity),
      ...tagMatches.sort((a, b) => b.popularity - a.popularity),
      ...fuzzyMatches.sort((a, b) => b.popularity - a.popularity)
    ];

    // Filter restricted games based on user location (mock implementation)
    const userRegion = 'US'; // This would come from user context
    if (userRegion === 'US') {
      results = results.map(game => ({
        ...game,
        isRestricted: game.id === '8' || game.id === '14' // Mock restriction
      }));
    }

    setSearchResults(results.slice(0, 20)); // Limit to 20 results for infinite scroll

    // Add to search history
    if (!searchHistory.includes(normalizedQuery)) {
      setSearchHistory(prev => [normalizedQuery, ...prev.slice(0, 4)]);
    }
  };

  const generateSuggestions = () => {
    const suggestions: Game[] = [];
    
    // New released games (highest priority)
    suggestions.push(...newGames.slice(0, 3));
    
    // Based on search history
    if (searchHistory.length > 0) {
      const historyBasedGames = mockGames.filter(game => 
        searchHistory.some(historyQuery => 
          game.title.toLowerCase().includes(historyQuery) ||
          game.tags.some(tag => tag.toLowerCase().includes(historyQuery))
        )
      ).slice(0, 2);
      suggestions.push(...historyBasedGames);
    }
    
    // Popular games to fill remaining slots
    const remainingSlots = 6 - suggestions.length;
    const popularNotIncluded = popularGames.filter(game => 
      !suggestions.some(s => s.id === game.id)
    ).slice(0, remainingSlots);
    
    suggestions.push(...popularNotIncluded);
    
    setSuggestions(suggestions.slice(0, 6));
  };

  const generateAutocomplete = (partialQuery: string) => {
    const normalizedQuery = partialQuery.toLowerCase();
    
    const autocomplete = mockGames
      .filter(game => 
        game.title.toLowerCase().includes(normalizedQuery) ||
        game.tags.some(tag => tag.toLowerCase().includes(normalizedQuery)) ||
        game.provider.toLowerCase().includes(normalizedQuery)
      )
      .sort((a, b) => {
        // Prioritize title matches over tag matches
        const aTitle = a.title.toLowerCase().includes(normalizedQuery);
        const bTitle = b.title.toLowerCase().includes(normalizedQuery);
        
        if (aTitle && !bTitle) return -1;
        if (!aTitle && bTitle) return 1;
        
        return b.popularity - a.popularity;
      })
      .slice(0, 5);
    
    setAutocompleteResults(autocomplete);
  };

  const getNoResultsSuggestions = () => {
    return popularGames.slice(0, 6);
  };

  const searchByProvider = (providerName: string) => {
    const results = mockGames
      .filter(game => game.provider.toLowerCase() === providerName.toLowerCase())
      .sort((a, b) => b.popularity - a.popularity);
    
    setSearchResults(results);
    setQuery(providerName);
  };

  const clearSearch = () => {
    setQuery('');
    setSearchResults([]);
    setAutocompleteResults([]);
  };

  return {
    query,
    setQuery,
    isSearching,
    searchResults,
    suggestions,
    autocompleteResults,
    searchHistory,
    providers,
    performSearch,
    searchByProvider,
    clearSearch,
    getNoResultsSuggestions,
    hasResults: searchResults.length > 0,
    showNoResults: query.length >= 3 && searchResults.length === 0 && !isSearching
  };
}