import { useState } from 'react';
import { AdvancedSearch } from '@/components/AdvancedSearch';
import { GameCard } from '@/components/GameCard';
import { SearchStats } from '@/components/SearchStats';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { 
  Game, 
  popularGames, 
  newGames, 
  categories, 
  mockGames,
  gamesByProvider,
  gamesByCategory,
  gamesByVolatility,
  jackpotGames,
  megawaysGames,
  highRTPGames
} from '@/data/mockGames';
import { Sparkles, TrendingUp, Star, Gamepad2, Search, Filter, BarChart3, Shuffle, Eye, Menu, X, Home, Heart, Settings, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [favoriteGames, setFavoriteGames] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [displayedGames, setDisplayedGames] = useState<Game[]>(popularGames);
  const [currentFilter, setCurrentFilter] = useState<string>('popular');
  const [showStats, setShowStats] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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

  const handleFilter = (filterType: string, value: string) => {
    let filtered: Game[] = [];
    
    switch (filterType) {
      case 'provider':
        filtered = gamesByProvider(value);
        setCurrentFilter(`Provider: ${value}`);
        break;
      case 'category':
        filtered = gamesByCategory(value);
        setCurrentFilter(`Category: ${value}`);
        setSelectedCategory(value);
        break;
      case 'volatility':
        filtered = gamesByVolatility(value);
        setCurrentFilter(`Volatility: ${value}`);
        break;
      case 'collection':
        switch (value) {
          case 'jackpot':
            filtered = jackpotGames;
            setCurrentFilter('Jackpot Games');
            break;
          case 'megaways':
            filtered = megawaysGames;
            setCurrentFilter('Megaways Games');
            break;
          case 'high-rtp':
            filtered = highRTPGames;
            setCurrentFilter('High RTP Games');
            break;
          case 'popular':
            filtered = popularGames;
            setCurrentFilter('Popular Games');
            break;
          default:
            filtered = popularGames;
        }
        break;
      default:
        filtered = popularGames;
    }
    
    setDisplayedGames(filtered);
    // Close mobile menu when filter is applied
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleRandomGame = () => {
    const randomIndex = Math.floor(Math.random() * mockGames.length);
    setSelectedGame(mockGames[randomIndex]);
  };

  const filteredPopularGames = displayedGames;

  // Mobile Navigation Menu Items
  const mobileMenuItems = [
    { icon: Home, label: 'Home', action: () => handleFilter('collection', 'popular') },
    { icon: Star, label: 'Favorites', action: () => console.log('Favorites') },
    { icon: BarChart3, label: 'Stats', action: () => setShowStats(!showStats) },
    { icon: Filter, label: 'Filters', action: () => console.log('Filters') },
    { icon: Shuffle, label: 'Random Game', action: handleRandomGame },
    { icon: Settings, label: 'Settings', action: () => console.log('Settings') },
  ];

  return (
    <div className="min-h-screen bg-gradient-casino">
      {/* Mobile Header */}
      {isMobile && (
        <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-40">
          <div className="px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo and Title */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center shadow-gold">
                  <Gamepad2 className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-bold bg-gradient-gold bg-clip-text text-transparent">
                    Elite Casino
                  </h1>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost_casino" size="sm" className="p-2">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-80 bg-card/95 backdrop-blur-md border-r border-border/50">
                  <SheetHeader className="pb-6">
                    <SheetTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                        <Gamepad2 className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="bg-gradient-gold bg-clip-text text-transparent">Elite Casino</span>
                    </SheetTitle>
                  </SheetHeader>
                  
                  {/* Mobile Menu Items */}
                  <nav className="space-y-2">
                    {mobileMenuItems.map((item, index) => (
                      <Button
                        key={index}
                        variant="ghost_casino"
                        className="w-full justify-start h-12"
                        onClick={() => {
                          item.action();
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.label}
                      </Button>
                    ))}
                  </nav>

                  {/* Category Filters */}
                  <div className="mt-8 pt-6 border-t border-border/30">
                    <h3 className="text-sm font-medium text-muted-foreground mb-3 px-3">Categories</h3>
                    <div className="space-y-1">
                      <Button
                        variant={selectedCategory === 'All' ? 'casino' : 'ghost_casino'}
                        size="sm"
                        className="w-full justify-start"
                        onClick={() => {
                          setSelectedCategory('All');
                          setDisplayedGames(popularGames);
                          setCurrentFilter('All Games');
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        All Games ({mockGames.length})
                      </Button>
                      {categories.map((category) => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? 'casino' : 'ghost_casino'}
                          size="sm"
                          className="w-full justify-start"
                          onClick={() => {
                            handleFilter('category', category);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* User Section */}
                  <div className="mt-auto pt-6 border-t border-border/30">
                    <Button variant="casino" className="w-full">
                      <User className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>
      )}

      {/* Desktop Header */}
      {!isMobile && (
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
                <Button 
                  variant="ghost_casino" 
                  size="sm"
                  onClick={() => setShowStats(!showStats)}
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  {showStats ? 'Hide' : 'Show'} Stats
                </Button>
                <Button variant="ghost_casino" size="sm" onClick={handleRandomGame}>
                  <Shuffle className="w-4 h-4 mr-2" />
                  Random Game
                </Button>
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
      )}

      {/* Hero Section with Search */}
      <section className="relative py-8 md:py-20 bg-gradient-to-br from-background via-card/50 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-gold bg-clip-text text-transparent">
                Discover Your Next
              </span>
              <br />
              <span className="text-foreground">Favorite Game</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Advanced search with intelligent suggestions, provider filtering, and personalized recommendations
            </p>
          </div>

          {/* Advanced Search Component */}
          <div className="mb-8 md:mb-16">
            <AdvancedSearch onGameSelect={handleGameSelect} />
          </div>

          {/* Search Features Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-border/50 hover:shadow-neon transition-all duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <Search className="w-6 h-6 md:w-8 md:h-8 text-neon-blue mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-sm md:text-base">Smart Search</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Real-time search with typo correction and fuzzy matching
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50 hover:shadow-gold transition-all duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-gold mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-sm md:text-base">AI Suggestions</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Personalized recommendations based on your preferences
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 border-border/50 hover:shadow-neon transition-all duration-300">
              <CardContent className="p-4 md:p-6 text-center">
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-neon-purple mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-sm md:text-base">Smart Ordering</h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Results ordered by relevance and popularity
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-16">
            {/* Category Filter */}
            <section className="py-8 border-b border-border/30">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-muted-foreground">
                    Current Filter:
                  </span>
                  <Badge variant="outline" className="bg-gold/20 text-gold border-gold/30">
                    {currentFilter}
                  </Badge>
                </div>
                <Button
                  variant={selectedCategory === 'All' ? 'casino' : 'ghost_casino'}
                  size="sm"
                  onClick={() => {
                    setSelectedCategory('All');
                    setDisplayedGames(popularGames);
                    setCurrentFilter('All Games');
                  }}
                >
                  All Games ({mockGames.length})
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'casino' : 'ghost_casino'}
                    size="sm"
                    onClick={() => handleFilter('category', category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </section>

            {/* New Games Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-neon-blue" />
                  <h2 className="text-3xl font-bold">Latest Releases</h2>
                  <Badge variant="secondary" className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
                    {newGames.length} New
                  </Badge>
                </div>
                <Button 
                  variant="ghost_casino" 
                  onClick={() => handleFilter('collection', 'new')}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View All New
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
            </section>

            <Separator className="opacity-30" />

            {/* Main Games Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-gold" />
                  <h2 className="text-3xl font-bold">Featured Games</h2>
                  <Badge variant="outline" className="bg-gold/20 text-gold border-gold/30">
                    {displayedGames.length} games
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {displayedGames.slice(0, 18).map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onPlay={handlePlay}
                    onFavorite={handleFavorite}
                    isFavorited={favoriteGames.has(game.id)}
                  />
                ))}
              </div>
              
              {displayedGames.length > 18 && (
                <div className="text-center mt-8">
                  <Button variant="outline" size="lg">
                    Load More Games
                  </Button>
                </div>
              )}
            </section>
          </div>

          {/* Sidebar - Stats */}
          {showStats && (
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <SearchStats onFilter={handleFilter} />
              </div>
            </div>
          )}
        </div>
      </div>

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