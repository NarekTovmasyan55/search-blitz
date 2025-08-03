export interface Game {
  id: string;
  title: string;
  provider: string;
  category: string;
  image: string;
  popularity: number; // 1-100
  isNew: boolean;
  isRestricted: boolean; // region restricted
  tags: string[];
  description: string;
}

export const mockGames: Game[] = [
  {
    id: "1",
    title: "Gates of Olympus",
    provider: "Pragmatic Play",
    category: "Slots",
    image: "/placeholder.svg",
    popularity: 95,
    isNew: false,
    isRestricted: false,
    tags: ["zeus", "mythology", "high volatility", "gates"],
    description: "Epic slot game featuring Zeus and mythological themes"
  },
  {
    id: "2",
    title: "Sweet Bonanza",
    provider: "Pragmatic Play",
    category: "Slots",
    image: "/placeholder.svg",
    popularity: 92,
    isNew: false,
    isRestricted: false,
    tags: ["sweet", "candy", "fruit", "bonanza"],
    description: "Sweet candy-themed slot with tumbling reels"
  },
  {
    id: "3",
    title: "Book of Dead",
    provider: "Play'n GO",
    category: "Slots",
    image: "/placeholder.svg",
    popularity: 88,
    isNew: false,
    isRestricted: false,
    tags: ["egypt", "adventure", "book", "dead"],
    description: "Egyptian adventure slot with expanding symbols"
  },
  {
    id: "4",
    title: "Blackjack Classic",
    provider: "Evolution",
    category: "Table Games",
    image: "/placeholder.svg",
    popularity: 85,
    isNew: false,
    isRestricted: false,
    tags: ["blackjack", "21", "cards", "classic"],
    description: "Classic blackjack game with professional dealers"
  },
  {
    id: "5",
    title: "European Roulette",
    provider: "NetEnt",
    category: "Table Games",
    image: "/placeholder.svg",
    popularity: 82,
    isNew: false,
    isRestricted: false,
    tags: ["roulette", "wheel", "european", "rulet"],
    description: "Traditional European roulette with single zero"
  },
  {
    id: "6",
    title: "Wanted Dead or a Wild",
    provider: "Hacksaw Gaming",
    category: "Slots",
    image: "/placeholder.svg",
    popularity: 78,
    isNew: true,
    isRestricted: false,
    tags: ["western", "wild", "wanted", "hacksaw"],
    description: "Wild west themed slot with expanding reels"
  },
  {
    id: "7",
    title: "The Hand of Midas",
    provider: "Hacksaw Gaming",
    category: "Slots",
    image: "/placeholder.svg",
    popularity: 75,
    isNew: true,
    isRestricted: false,
    tags: ["midas", "gold", "ancient", "hacksaw"],
    description: "Golden touch themed slot with multipliers"
  },
  {
    id: "8",
    title: "Crazy Time",
    provider: "Evolution",
    category: "Live Games",
    image: "/placeholder.svg",
    popularity: 90,
    isNew: false,
    isRestricted: true,
    tags: ["crazy", "time", "live", "wheel"],
    description: "Live game show with multiple bonus rounds"
  },
  {
    id: "9",
    title: "Starburst",
    provider: "NetEnt",
    category: "Slots",
    image: "/placeholder.svg",
    popularity: 80,
    isNew: false,
    isRestricted: false,
    tags: ["space", "gems", "classic", "starburst"],
    description: "Classic space-themed slot with expanding wilds"
  },
  {
    id: "10",
    title: "Lightning Roulette",
    provider: "Evolution",
    category: "Live Games",
    image: "/placeholder.svg",
    popularity: 87,
    isNew: false,
    isRestricted: false,
    tags: ["lightning", "roulette", "live", "multiplier"],
    description: "Live roulette with random multipliers"
  },
  {
    id: "11",
    title: "Gonzo's Quest",
    provider: "NetEnt",
    category: "Slots",
    image: "/placeholder.svg",
    popularity: 83,
    isNew: false,
    isRestricted: false,
    tags: ["adventure", "gonzo", "quest", "avalanche"],
    description: "Adventure slot with avalanche feature"
  },
  {
    id: "12",
    title: "Blackjack VIP",
    provider: "Evolution",
    category: "Live Games",
    image: "/placeholder.svg",
    popularity: 79,
    isNew: false,
    isRestricted: false,
    tags: ["blackjack", "vip", "live", "premium"],
    description: "VIP blackjack table with higher limits"
  },
  {
    id: "13",
    title: "Gate of Babylon",
    provider: "Relax Gaming",
    category: "Slots",
    image: "/placeholder.svg",
    popularity: 72,
    isNew: true,
    isRestricted: false,
    tags: ["babylon", "ancient", "gate", "mystery"],
    description: "Ancient Babylon themed slot with mystery features"
  },
  {
    id: "14",
    title: "American Roulette",
    provider: "Microgaming",
    category: "Table Games",
    image: "/placeholder.svg",
    popularity: 68,
    isNew: false,
    isRestricted: true,
    tags: ["roulette", "american", "double zero", "rulet"],
    description: "American roulette with double zero"
  },
  {
    id: "15",
    title: "RIP City",
    provider: "Hacksaw Gaming",
    category: "Slots",
    image: "/placeholder.svg",
    popularity: 76,
    isNew: true,
    isRestricted: false,
    tags: ["city", "urban", "rip", "hacksaw"],
    description: "Urban themed slot with expanding features"
  },
  {
    id: "16",
    title: "Mega Moolah",
    provider: "Microgaming",
    category: "Slots",
    image: "/placeholder.svg",
    popularity: 85,
    isNew: false,
    isRestricted: false,
    tags: ["progressive", "jackpot", "safari", "mega"],
    description: "Progressive jackpot slot with safari theme"
  },
  {
    id: "17",
    title: "European Blackjack",
    provider: "NetEnt",
    category: "Table Games",
    image: "/placeholder.svg",
    popularity: 74,
    isNew: false,
    isRestricted: false,
    tags: ["blackjack", "european", "cards", "21"],
    description: "European style blackjack variant"
  },
  {
    id: "18",
    title: "Dream Catcher",
    provider: "Evolution",
    category: "Live Games",
    image: "/placeholder.svg",
    popularity: 81,
    isNew: false,
    isRestricted: false,
    tags: ["dream", "catcher", "wheel", "live"],
    description: "Live money wheel game with multipliers"
  },
  {
    id: "19",
    title: "Gates of Valhalla",
    provider: "Yggdrasil",
    category: "Slots",
    image: "/placeholder.svg",
    popularity: 73,
    isNew: true,
    isRestricted: false,
    tags: ["vikings", "valhalla", "gates", "norse"],
    description: "Viking themed slot with Norse mythology"
  },
  {
    id: "20",
    title: "French Roulette",
    provider: "NetEnt",
    category: "Table Games",
    image: "/placeholder.svg",
    popularity: 71,
    isNew: false,
    isRestricted: false,
    tags: ["roulette", "french", "la partage", "rulet"],
    description: "French roulette with La Partage rule"
  }
];

export const popularGames = mockGames
  .filter(game => game.popularity >= 80)
  .sort((a, b) => b.popularity - a.popularity);

export const newGames = mockGames
  .filter(game => game.isNew)
  .sort((a, b) => b.popularity - a.popularity);

export const providers = [...new Set(mockGames.map(game => game.provider))];

export const categories = [...new Set(mockGames.map(game => game.category))];