import { Game } from '@/data/mockGames';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lock, Play, Star } from 'lucide-react';

interface GameCardProps {
  game: Game;
  onPlay?: (game: Game) => void;
  onFavorite?: (game: Game) => void;
  isFavorited?: boolean;
}

export function GameCard({ game, onPlay, onFavorite, isFavorited = false }: GameCardProps) {
  const handlePlay = () => {
    onPlay?.(game);
  };

  const handleFavorite = () => {
    onFavorite?.(game);
  };

  return (
    <Card className="group relative overflow-hidden bg-card hover:shadow-card-casino transition-all duration-300 hover:scale-105">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Game Info Overlay */}
        <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="space-y-2">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={game.isRestricted ? "outline" : "casino"}
                onClick={handlePlay}
                disabled={game.isRestricted}
                className="flex-1"
              >
                {game.isRestricted ? (
                  <>
                    <Lock className="w-4 h-4 mr-2" />
                    Restricted
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Play
                  </>
                )}
              </Button>
              <Button
                size="sm"
                variant="ghost_casino"
                onClick={handleFavorite}
                className="w-10"
              >
                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-casino-red text-casino-red' : ''}`} />
              </Button>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {game.isNew && (
            <Badge variant="secondary" className="bg-neon-blue text-white">
              NEW
            </Badge>
          )}
          {game.popularity >= 85 && (
            <Badge variant="outline" className="bg-gold/20 border-gold text-gold">
              <Star className="w-3 h-3 mr-1 fill-current" />
              HOT
            </Badge>
          )}
        </div>

        {/* Restriction indicator */}
        {game.isRestricted && (
          <div className="absolute top-2 right-2">
            <Badge variant="destructive">
              <Lock className="w-3 h-3 mr-1" />
              Restricted
            </Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground truncate">{game.title}</h3>
        <p className="text-sm text-muted-foreground">{game.provider}</p>
        <div className="flex items-center justify-between mt-2">
          <Badge variant="outline" className="text-xs">
            {game.category}
          </Badge>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star className="w-3 h-3 fill-gold text-gold" />
            {game.popularity}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}