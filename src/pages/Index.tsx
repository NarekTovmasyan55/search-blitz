import { useState } from 'react';
import { AdvancedSearch } from '@/components/AdvancedSearch';
import { GameCard } from '@/components/GameCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Game, popularGames, newGames, categories } from '@/data/mockGames';
import { Sparkles, TrendingUp, Star, Gamepad2, Search, Filter } from 'lucide-react';

const Index = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [favoriteGames, setFavoriteGames] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game);
    console.log('Selected game:', game);
  };

  const handleFavorite = (game: Game) => {
    const newFavorites = new Set(favoriteGames);
    if (newFavorites.has(game.id)) {
      newFavorites.delete(game.id);
    } else {
      newFavorites.add(game.id);
    }
    setFavoriteGames(newFavorites);
  };

  const handlePlay = (game: Game) => {
    console.log('Playing game:', game);
    // Here you would implement game launch logic
  };

  const filteredPopularGames = selectedCategory === 'All' 
    ? popularGames 
    : popularGames.filter(game => game.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-casino">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold">
                <Gamepad2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-gold bg-clip-text text-transparent">
                  Elite Casino
                </h1>
                <p className="text-sm text-muted-foreground">Premium Gaming Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost_casino" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="casino">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Search */}
      <section className="relative py-20 bg-gradient-to-br from-background via-card/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Discover Your Next
              </span>
              <br />
              <span className="text-foreground">Favorite Game</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced search with intelligent suggestions, provider filtering, and personalized recommendations
            </p>
          </div>

          {/* Advanced Search Component */}
          <div className="mb-16">
            <AdvancedSearch onGameSelect={handleGameSelect} />
          </div>

          {/* Search Features Showcase */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-border/50 hover:shadow-neon transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Search className="w-8 h-8 text-neon-blue mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Smart Search</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time search with typo correction and fuzzy matching
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50 hover:shadow-gold transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Sparkles className="w-8 h-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold mb-2">AI Suggestions</h3>
                <p className="text-sm text-muted-foreground">
                  Personalized recommendations based on your preferences
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50 hover:shadow-neon transition-all duration-300">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-neon-purple mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Smart Ordering</h3>
                <p className="text-sm text-muted-foreground">
                  Results ordered by relevance and popularity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              Categories:
            </span>
            <Button
              variant={selectedCategory === 'All' ? 'casino' : 'ghost_casino'}
              size="sm"
              onClick={() => setSelectedCategory('All')}
            >
              All Games
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'casino' : 'ghost_casino'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* New Games Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-neon-blue" />
            <h2 className="text-3xl font-bold">New Releases</h2>
            <Badge variant="secondary" className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
              Fresh
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {newGames.slice(0, 6).map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onPlay={handlePlay}
                onFavorite={handleFavorite}
                isFavorited={favoriteGames.has(game.id)}
              />
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-30" />

      {/* Popular Games Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-gold" />
            <h2 className="text-3xl font-bold">Popular Games</h2>
            <Badge variant="outline" className="bg-gold/20 text-gold border-gold/30">
              Trending
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredPopularGames.slice(0, 12).map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onPlay={handlePlay}
                onFavorite={handleFavorite}
                isFavorited={favoriteGames.has(game.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Selected Game Modal (placeholder) */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <CardHeader>
              <CardTitle>{selectedGame.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{selectedGame.description}</p>
              <div className="flex gap-2">
                <Button 
                  variant="casino" 
                  onClick={() => handlePlay(selectedGame)}
                  disabled={selectedGame.isRestricted}
                >
                  {selectedGame.isRestricted ? 'Restricted in Your Region' : 'Play Now'}
                </Button>
                <Button variant="outline" onClick={() => setSelectedGame(null)}>
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-border/30 bg-card/30 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              Elite Casino
            </span>
          </div>
          <p className="text-muted-foreground">
            Experience the future of online gaming with advanced search and personalization
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;