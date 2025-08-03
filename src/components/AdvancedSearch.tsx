import { useState, useRef, useEffect } from 'react';
import { Search, X, Clock, TrendingUp, Sparkles, Users } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useGameSearch } from '@/hooks/useGameSearch';
import { GameCard } from './GameCard';
import { Game } from '@/data/mockGames';

interface AdvancedSearchProps {
  onGameSelect?: (game: Game) => void;
}

export function AdvancedSearch({ onGameSelect }: AdvancedSearchProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    query,
    setQuery,
    isSearching,
    searchResults,
    suggestions,
    autocompleteResults,
    searchHistory,
    providers,
    searchByProvider,
    clearSearch,
    getNoResultsSuggestions,
    hasResults,
    showNoResults
  } = useGameSearch();

  // Close search dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
        setShowResults(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
    setShowResults(true);
  };

  const handleGameSelect = (game: Game) => {
    onGameSelect?.(game);
    setIsFocused(false);
    setShowResults(false);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    inputRef.current?.focus();
  };

  const handleProviderSearch = (provider: string) => {
    searchByProvider(provider);
    setQuery(provider);
    setShowResults(true);
  };

  const handleClear = () => {
    clearSearch();
    inputRef.current?.focus();
  };

  const noResultsSuggestions = getNoResultsSuggestions();

  return (
    <div className="w-full max-w-4xl mx-auto relative" ref={searchRef}>
      {/* Search Input */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            ref={inputRef}
            type="text"
            placeholder="Search for games, providers, or categories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={handleFocus}
            className="pl-12 pr-12 h-14 text-lg bg-input/50 backdrop-blur-sm border-2 border-border hover:border-gold/50 focus:border-gold focus:bg-input transition-all duration-300"
          />
          {query && (
            <Button
              variant="ghost_casino"
              size="sm"
              onClick={handleClear}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <X className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Loading indicator */}
        {isSearching && (
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <div className="w-5 h-5 border-2 border-gold border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {(isFocused || showResults) && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-[600px] overflow-hidden bg-card/95 backdrop-blur-sm border-border shadow-card-casino">
          <CardContent className="p-0">
            {query.length === 0 && (
              /* Initial Suggestions */
              <div className="p-6">
                <div className="space-y-6">
                  {/* Search History */}
                  {searchHistory.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">Recent Searches</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {searchHistory.map((item, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="cursor-pointer hover:bg-gold/10 hover:border-gold transition-colors"
                            onClick={() => handleSuggestionClick(item)}
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Popular Providers */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Popular Providers</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {providers.slice(0, 6).map((provider) => (
                        <Badge
                          key={provider}
                          variant="outline"
                          className="cursor-pointer hover:bg-neon-blue/10 hover:border-neon-blue transition-colors"
                          onClick={() => handleProviderSearch(provider)}
                        >
                          {provider}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Suggestions */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Sparkles className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Suggested Games</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {suggestions.map((game) => (
                        <div
                          key={game.id}
                          className="p-3 rounded-lg border border-border hover:border-gold/50 cursor-pointer transition-all duration-300 hover:bg-muted/50"
                          onClick={() => handleGameSelect(game)}
                        >
                          <div className="flex items-center gap-3">
                            <img 
                              src={game.image} 
                              alt={game.title}
                              className="w-12 h-12 rounded object-cover"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm truncate">{game.title}</p>
                              <p className="text-xs text-muted-foreground">{game.provider}</p>
                              {game.isNew && (
                                <Badge variant="secondary" className="text-xs mt-1">NEW</Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {query.length >= 1 && query.length < 3 && autocompleteResults.length > 0 && (
              /* Autocomplete Results */
              <div className="p-4">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground mb-3">
                    Suggestions for "{query}"
                  </div>
                  {autocompleteResults.map((game) => (
                    <div
                      key={game.id}
                      className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                      onClick={() => handleGameSelect(game)}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={game.image} 
                          alt={game.title}
                          className="w-10 h-10 rounded object-cover"
                        />
                        <div>
                          <p className="font-medium text-sm">{game.title}</p>
                          <p className="text-xs text-muted-foreground">{game.provider}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {query.length >= 3 && hasResults && (
              /* Search Results */
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-muted-foreground">
                    Found {searchResults.length} games for "{query}"
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-gold" />
                    <span className="text-xs text-muted-foreground">Sorted by relevance & popularity</span>
                  </div>
                </div>
                
                <div className="max-h-80 overflow-y-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {searchResults.map((game) => (
                      <div
                        key={game.id}
                        className="p-3 rounded-lg border border-border hover:border-gold/50 cursor-pointer transition-all duration-300 hover:bg-muted/50"
                        onClick={() => handleGameSelect(game)}
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={game.image} 
                            alt={game.title}
                            className="w-16 h-16 rounded object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{game.title}</p>
                            <p className="text-xs text-muted-foreground">{game.provider}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">{game.category}</Badge>
                              {game.isNew && <Badge variant="secondary" className="text-xs">NEW</Badge>}
                              {game.isRestricted && <Badge variant="destructive" className="text-xs">Restricted</Badge>}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {showNoResults && (
              /* No Results */
              <div className="p-6 text-center">
                <div className="mb-4">
                  <p className="text-muted-foreground">No games found for "{query}"</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Try different keywords or check out these popular games:
                  </p>
                </div>
                
                <Separator className="my-4" />
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {noResultsSuggestions.map((game) => (
                    <div
                      key={game.id}
                      className="p-3 rounded-lg border border-border hover:border-gold/50 cursor-pointer transition-all duration-300 hover:bg-muted/50"
                      onClick={() => handleGameSelect(game)}
                    >
                      <div className="flex items-center gap-3">
                        <img 
                          src={game.image} 
                          alt={game.title}
                          className="w-12 h-12 rounded object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm truncate">{game.title}</p>
                          <p className="text-xs text-muted-foreground">{game.provider}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}