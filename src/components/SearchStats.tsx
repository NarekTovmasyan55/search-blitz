import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  providerStats, 
  categoryStats, 
  volatilityLevels, 
  jackpotGames, 
  megawaysGames,
  highRTPGames,
  newGames,
  popularGames,
  mockGames 
} from '@/data/mockGames';
import { 
  TrendingUp, 
  Users, 
  Star, 
  Zap, 
  Crown, 
  Target, 
  Award,
  Flame,
  Database
} from 'lucide-react';

interface SearchStatsProps {
  onFilter?: (filterType: string, value: string) => void;
}

export function SearchStats({ onFilter }: SearchStatsProps) {
  const totalGames = mockGames.length;
  const avgRTP = Math.round(
    mockGames
      .filter(game => game.rtp)
      .reduce((sum, game) => sum + (game.rtp || 0), 0) / 
    mockGames.filter(game => game.rtp).length * 100
  ) / 100;

  return (
    <div className="space-y-6">
      {/* Overall Stats */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5 text-gold" />
            Casino Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gold">{totalGames}</div>
              <div className="text-sm text-muted-foreground">Total Games</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-blue">{newGames.length}</div>
              <div className="text-sm text-muted-foreground">New Games</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-neon-purple">{providerStats.length}</div>
              <div className="text-sm text-muted-foreground">Providers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-casino-red">{avgRTP}%</div>
              <div className="text-sm text-muted-foreground">Avg RTP</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Filters */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-neon-blue" />
            Quick Filters
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Special Collections */}
          <div>
            <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
              <Crown className="w-4 h-4 text-gold" />
              Special Collections
            </h4>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="ghost_casino"
                size="sm"
                onClick={() => onFilter?.('collection', 'jackpot')}
                className="text-xs"
              >
                <Star className="w-3 h-3 mr-1" />
                Jackpot Games ({jackpotGames.length})
              </Button>
              <Button
                variant="ghost_casino"
                size="sm"
                onClick={() => onFilter?.('collection', 'megaways')}
                className="text-xs"
              >
                <Zap className="w-3 h-3 mr-1" />
                Megaways ({megawaysGames.length})
              </Button>
              <Button
                variant="ghost_casino"
                size="sm"
                onClick={() => onFilter?.('collection', 'high-rtp')}
                className="text-xs"
              >
                <Award className="w-3 h-3 mr-1" />
                High RTP ({highRTPGames.length})
              </Button>
              <Button
                variant="ghost_casino"
                size="sm"
                onClick={() => onFilter?.('collection', 'popular')}
                className="text-xs"
              >
                <Flame className="w-3 h-3 mr-1" />
                Popular ({popularGames.length})
              </Button>
            </div>
          </div>

          <Separator className="opacity-30" />

          {/* Volatility Filter */}
          <div>
            <h4 className="text-sm font-medium mb-2">Volatility Levels</h4>
            <div className="flex flex-wrap gap-2">
              {volatilityLevels.map((level) => (
                <Button
                  key={level}
                  variant="outline"
                  size="sm"
                  onClick={() => onFilter?.('volatility', level)}
                  className="text-xs"
                >
                  {level}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Providers */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-neon-purple" />
            Top Providers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {providerStats
              .sort((a, b) => b.gameCount - a.gameCount)
              .slice(0, 8)
              .map((provider) => (
                <div
                  key={provider.name}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => onFilter?.('provider', provider.name)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-gold" />
                    <span className="font-medium">{provider.name}</span>
                    {provider.newGamesCount > 0 && (
                      <Badge variant="secondary" className="text-xs">
                        {provider.newGamesCount} NEW
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{provider.gameCount} games</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-gold" />
                      <span>{provider.avgPopularity}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card className="bg-card/50 border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-casino-red" />
            Game Categories
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categoryStats
              .sort((a, b) => b.gameCount - a.gameCount)
              .map((category) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 cursor-pointer transition-colors"
                  onClick={() => onFilter?.('category', category.name)}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-neon" />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{category.gameCount} games</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-gold" />
                      <span>{category.avgPopularity}</span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}