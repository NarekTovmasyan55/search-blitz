// Import generated game images
import gatesOfOlympusImg from '@/assets/games/gates-of-olympus.jpg';
import sweetBonanzaImg from '@/assets/games/sweet-bonanza.jpg';
import bookOfDeadImg from '@/assets/games/book-of-dead.jpg';
import blackjackImg from '@/assets/games/blackjack.jpg';
import rouletteImg from '@/assets/games/roulette.jpg';
import wantedDeadImg from '@/assets/games/wanted-dead.jpg';
import starburstImg from '@/assets/games/starburst.jpg';
import liveGamesImg from '@/assets/games/live-games.jpg';
import megaMoolahImg from '@/assets/games/mega-moolah.jpg';
import vikingsImg from '@/assets/games/vikings.jpg';

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
  rtp?: number; // Return to Player percentage
  volatility?: 'Low' | 'Medium' | 'High';
  maxWin?: string;
  features?: string[];
}

export const mockGames: Game[] = [
  // Slots - Pragmatic Play
  {
    id: "1",
    title: "Gates of Olympus",
    provider: "Pragmatic Play",
    category: "Slots",
    image: gatesOfOlympusImg,
    popularity: 95,
    isNew: false,
    isRestricted: false,
    tags: ["zeus", "mythology", "high volatility", "gates", "multiplier", "tumble"],
    description: "Epic slot game featuring Zeus and mythological themes with cascading reels",
    rtp: 96.5,
    volatility: "High",
    maxWin: "5000x",
    features: ["Cascading Reels", "Multipliers", "Free Spins"]
  },
  {
    id: "2",
    title: "Sweet Bonanza",
    provider: "Pragmatic Play",
    category: "Slots",
    image: sweetBonanzaImg,
    popularity: 92,
    isNew: false,
    isRestricted: false,
    tags: ["sweet", "candy", "fruit", "bonanza", "tumble", "multiplier"],
    description: "Sweet candy-themed slot with tumbling reels and multipliers",
    rtp: 96.48,
    volatility: "High",
    maxWin: "21100x",
    features: ["Tumbling Reels", "Free Spins", "Multipliers"]
  },
  {
    id: "3",
    title: "The Dog House",
    provider: "Pragmatic Play",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=512&h=512&fit=crop",
    popularity: 88,
    isNew: false,
    isRestricted: false,
    tags: ["dog", "house", "animals", "wilds", "multiplier"],
    description: "Fun dog-themed slot with sticky wilds and multipliers",
    rtp: 96.51,
    volatility: "Medium",
    maxWin: "6750x",
    features: ["Sticky Wilds", "Free Spins", "Multipliers"]
  },
  {
    id: "4",
    title: "Wolf Gold",
    provider: "Pragmatic Play",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=512&h=512&fit=crop",
    popularity: 90,
    isNew: false,
    isRestricted: false,
    tags: ["wolf", "gold", "wildlife", "jackpot", "money respin"],
    description: "Wildlife-themed slot with progressive jackpots",
    rtp: 96.01,
    volatility: "Medium",
    maxWin: "1000x + Jackpots",
    features: ["Money Respin", "Free Spins", "Progressive Jackpots"]
  },
  {
    id: "5",
    title: "Great Rhino",
    provider: "Pragmatic Play",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=512&h=512&fit=crop",
    popularity: 85,
    isNew: false,
    isRestricted: false,
    tags: ["rhino", "safari", "africa", "wilds", "respins"],
    description: "African safari adventure with expanding symbols",
    rtp: 96.53,
    volatility: "Medium",
    maxWin: "1500x",
    features: ["Super Respin", "Free Spins", "Expanding Symbols"]
  },

  // Slots - Play'n GO
  {
    id: "6",
    title: "Book of Dead",
    provider: "Play'n GO",
    category: "Slots",
    image: bookOfDeadImg,
    popularity: 88,
    isNew: false,
    isRestricted: false,
    tags: ["egypt", "adventure", "book", "dead", "expanding", "rich wilde"],
    description: "Egyptian adventure slot with expanding symbols and Rich Wilde",
    rtp: 96.21,
    volatility: "High",
    maxWin: "5000x",
    features: ["Expanding Symbols", "Free Spins", "Scatter Pays"]
  },
  {
    id: "7",
    title: "Reactoonz",
    provider: "Play'n GO",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=512&h=512&fit=crop",
    popularity: 87,
    isNew: false,
    isRestricted: false,
    tags: ["aliens", "space", "cluster", "cascade", "quantum"],
    description: "Alien-themed cascading slot with quantum features",
    rtp: 96.51,
    volatility: "High",
    maxWin: "4570x",
    features: ["Cascading Reels", "Quantum Features", "Cluster Pays"]
  },
  {
    id: "8",
    title: "Legacy of Dead",
    provider: "Play'n GO",
    category: "Slots",
    image: bookOfDeadImg,
    popularity: 84,
    isNew: false,
    isRestricted: false,
    tags: ["egypt", "legacy", "dead", "expanding", "pharaoh"],
    description: "Sequel to Book of Dead with enhanced features",
    rtp: 96.58,
    volatility: "High",
    maxWin: "5000x",
    features: ["Expanding Symbols", "Free Spins", "Enhanced Features"]
  },
  {
    id: "9",
    title: "Rise of Olympus",
    provider: "Play'n GO",
    category: "Slots",
    image: gatesOfOlympusImg,
    popularity: 86,
    isNew: false,
    isRestricted: false,
    tags: ["olympus", "gods", "zeus", "hades", "poseidon", "cascade"],
    description: "Greek gods slot with cascading wins and divine powers",
    rtp: 96.5,
    volatility: "High",
    maxWin: "5000x",
    features: ["Cascading Reels", "God Powers", "Free Spins"]
  },

  // Slots - NetEnt
  {
    id: "10",
    title: "Starburst",
    provider: "NetEnt",
    category: "Slots",
    image: starburstImg,
    popularity: 80,
    isNew: false,
    isRestricted: false,
    tags: ["space", "gems", "classic", "starburst", "expanding wilds"],
    description: "Classic space-themed slot with expanding wilds",
    rtp: 96.09,
    volatility: "Low",
    maxWin: "500x",
    features: ["Expanding Wilds", "Re-spins", "Both Ways Pays"]
  },
  {
    id: "11",
    title: "Gonzo's Quest",
    provider: "NetEnt",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=512&h=512&fit=crop",
    popularity: 83,
    isNew: false,
    isRestricted: false,
    tags: ["adventure", "gonzo", "quest", "avalanche", "multiplier"],
    description: "Adventure slot with avalanche feature and increasing multipliers",
    rtp: 95.97,
    volatility: "Medium",
    maxWin: "2500x",
    features: ["Avalanche Feature", "Free Falls", "Multipliers"]
  },
  {
    id: "12",
    title: "Dead or Alive 2",
    provider: "NetEnt",
    category: "Slots",
    image: wantedDeadImg,
    popularity: 89,
    isNew: false,
    isRestricted: false,
    tags: ["western", "dead", "alive", "sticky wilds", "high volatility"],
    description: "High volatility western slot with sticky wilds",
    rtp: 96.82,
    volatility: "High",
    maxWin: "100000x",
    features: ["Sticky Wilds", "Free Spins", "Multiple Features"]
  },

  // Slots - Hacksaw Gaming
  {
    id: "13",
    title: "Wanted Dead or a Wild",
    provider: "Hacksaw Gaming",
    category: "Slots",
    image: wantedDeadImg,
    popularity: 78,
    isNew: true,
    isRestricted: false,
    tags: ["western", "wild", "wanted", "hacksaw", "expanding"],
    description: "Wild west themed slot with expanding reels",
    rtp: 96.38,
    volatility: "High",
    maxWin: "12500x",
    features: ["Expanding Reels", "Wild Multipliers", "Free Spins"]
  },
  {
    id: "14",
    title: "The Hand of Midas",
    provider: "Hacksaw Gaming",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=512&h=512&fit=crop",
    popularity: 75,
    isNew: true,
    isRestricted: false,
    tags: ["midas", "gold", "ancient", "hacksaw", "multiplier"],
    description: "Golden touch themed slot with multipliers",
    rtp: 96.1,
    volatility: "High",
    maxWin: "10000x",
    features: ["Midas Touch", "Multipliers", "Bonus Buy"]
  },
  {
    id: "15",
    title: "RIP City",
    provider: "Hacksaw Gaming",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=512&h=512&fit=crop",
    popularity: 76,
    isNew: true,
    isRestricted: false,
    tags: ["city", "urban", "rip", "hacksaw", "expanding"],
    description: "Urban themed slot with expanding features",
    rtp: 96.2,
    volatility: "High",
    maxWin: "15000x",
    features: ["Expanding Reels", "City Features", "Bonus Buy"]
  },

  // Slots - Microgaming
  {
    id: "16",
    title: "Mega Moolah",
    provider: "Microgaming",
    category: "Slots",
    image: megaMoolahImg,
    popularity: 85,
    isNew: false,
    isRestricted: false,
    tags: ["progressive", "jackpot", "safari", "mega", "lions"],
    description: "Progressive jackpot slot with safari theme",
    rtp: 88.12,
    volatility: "Medium",
    maxWin: "Progressive Jackpots",
    features: ["Progressive Jackpots", "Free Spins", "Multipliers"]
  },
  {
    id: "17",
    title: "Thunderstruck II",
    provider: "Microgaming",
    category: "Slots",
    image: gatesOfOlympusImg,
    popularity: 82,
    isNew: false,
    isRestricted: false,
    tags: ["thor", "norse", "thunder", "mythology", "great hall"],
    description: "Norse mythology slot with Great Hall of Spins",
    rtp: 96.65,
    volatility: "Medium",
    maxWin: "2400x",
    features: ["Great Hall of Spins", "Multiple Free Spin Features", "Wild Multipliers"]
  },

  // Slots - Yggdrasil
  {
    id: "18",
    title: "Gates of Valhalla",
    provider: "Yggdrasil",
    category: "Slots",
    image: vikingsImg,
    popularity: 73,
    isNew: true,
    isRestricted: false,
    tags: ["vikings", "valhalla", "gates", "norse", "warriors"],
    description: "Viking themed slot with Norse mythology",
    rtp: 96.3,
    volatility: "High",
    maxWin: "25000x",
    features: ["Viking Features", "Free Spins", "Multipliers"]
  },
  {
    id: "19",
    title: "Valley of the Gods",
    provider: "Yggdrasil",
    category: "Slots",
    image: bookOfDeadImg,
    popularity: 77,
    isNew: false,
    isRestricted: false,
    tags: ["egypt", "gods", "valley", "scarabs", "expanding"],
    description: "Egyptian themed slot with expanding reels",
    rtp: 96.2,
    volatility: "Medium",
    maxWin: "3360x",
    features: ["Expanding Reels", "Re-spins", "Scarab Collection"]
  },

  // Table Games - Evolution
  {
    id: "20",
    title: "Blackjack Classic",
    provider: "Evolution",
    category: "Table Games",
    image: blackjackImg,
    popularity: 85,
    isNew: false,
    isRestricted: false,
    tags: ["blackjack", "21", "cards", "classic", "dealer"],
    description: "Classic blackjack game with professional dealers",
    rtp: 99.28,
    features: ["Live Dealer", "Multiple Tables", "Side Bets"]
  },
  {
    id: "21",
    title: "European Roulette",
    provider: "Evolution",
    category: "Table Games",
    image: rouletteImg,
    popularity: 82,
    isNew: false,
    isRestricted: false,
    tags: ["roulette", "wheel", "european", "rulet", "single zero"],
    description: "Traditional European roulette with single zero",
    rtp: 97.3,
    features: ["Single Zero", "Live Dealer", "Statistics"]
  },
  {
    id: "22",
    title: "Lightning Roulette",
    provider: "Evolution",
    category: "Live Games",
    image: rouletteImg,
    popularity: 87,
    isNew: false,
    isRestricted: false,
    tags: ["lightning", "roulette", "live", "multiplier", "electric"],
    description: "Live roulette with random multipliers up to 500x",
    rtp: 97.3,
    features: ["Lightning Multipliers", "Live Dealer", "RNG Numbers"]
  },
  {
    id: "23",
    title: "Blackjack VIP",
    provider: "Evolution",
    category: "Live Games",
    image: blackjackImg,
    popularity: 79,
    isNew: false,
    isRestricted: false,
    tags: ["blackjack", "vip", "live", "premium", "high limit"],
    description: "VIP blackjack table with higher limits",
    rtp: 99.28,
    features: ["VIP Experience", "High Limits", "Premium Service"]
  },
  {
    id: "24",
    title: "Crazy Time",
    provider: "Evolution",
    category: "Live Games",
    image: liveGamesImg,
    popularity: 90,
    isNew: false,
    isRestricted: true,
    tags: ["crazy", "time", "live", "wheel", "bonus rounds"],
    description: "Live game show with multiple bonus rounds",
    rtp: 96.08,
    features: ["Bonus Wheels", "Multipliers", "Interactive Features"]
  },
  {
    id: "25",
    title: "Dream Catcher",
    provider: "Evolution",
    category: "Live Games",
    image: liveGamesImg,
    popularity: 81,
    isNew: false,
    isRestricted: false,
    tags: ["dream", "catcher", "wheel", "live", "money wheel"],
    description: "Live money wheel game with multipliers",
    rtp: 96.58,
    features: ["Money Wheel", "Live Host", "Multipliers"]
  },

  // More Table Games
  {
    id: "26",
    title: "French Roulette",
    provider: "NetEnt",
    category: "Table Games",
    image: rouletteImg,
    popularity: 71,
    isNew: false,
    isRestricted: false,
    tags: ["roulette", "french", "la partage", "rulet", "en prison"],
    description: "French roulette with La Partage rule",
    rtp: 98.65,
    features: ["La Partage Rule", "Single Zero", "En Prison"]
  },
  {
    id: "27",
    title: "American Roulette",
    provider: "Microgaming",
    category: "Table Games",
    image: rouletteImg,
    popularity: 68,
    isNew: false,
    isRestricted: true,
    tags: ["roulette", "american", "double zero", "rulet", "00"],
    description: "American roulette with double zero",
    rtp: 94.74,
    features: ["Double Zero", "American Layout", "Five Number Bet"]
  },
  {
    id: "28",
    title: "European Blackjack",
    provider: "NetEnt",
    category: "Table Games",
    image: blackjackImg,
    popularity: 74,
    isNew: false,
    isRestricted: false,
    tags: ["blackjack", "european", "cards", "21", "hole card"],
    description: "European style blackjack variant",
    rtp: 99.6,
    features: ["No Hole Card", "Dealer Stands on Soft 17", "Double After Split"]
  },

  // More Slots - Various Providers
  {
    id: "29",
    title: "Fire Joker",
    provider: "Play'n GO",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=512&h=512&fit=crop",
    popularity: 78,
    isNew: false,
    isRestricted: false,
    tags: ["fire", "joker", "classic", "respin", "wheel"],
    description: "Classic fruit slot with fire features",
    rtp: 96.15,
    volatility: "High",
    maxWin: "800x",
    features: ["Respin of Fire", "Wheel of Multipliers", "Classic Symbols"]
  },
  {
    id: "30",
    title: "Jammin' Jars",
    provider: "Push Gaming",
    category: "Slots",
    image: sweetBonanzaImg,
    popularity: 84,
    isNew: false,
    isRestricted: false,
    tags: ["jam", "jars", "cluster", "disco", "dancing"],
    description: "Disco-themed cluster pays slot with dancing wilds",
    rtp: 96.83,
    volatility: "High",
    maxWin: "20000x",
    features: ["Cluster Pays", "Dancing Wilds", "Free Spins"]
  },
  {
    id: "31",
    title: "Money Train 2",
    provider: "Relax Gaming",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=512&h=512&fit=crop",
    popularity: 88,
    isNew: false,
    isRestricted: false,
    tags: ["money", "train", "western", "bonus", "multiplier"],
    description: "Wild west slot with money collect feature",
    rtp: 96.4,
    volatility: "High",
    maxWin: "50000x",
    features: ["Money Collect", "Persistent Symbols", "Bonus Buy"]
  },
  {
    id: "32",
    title: "Big Bass Bonanza",
    provider: "Pragmatic Play",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=512&h=512&fit=crop",
    popularity: 91,
    isNew: false,
    isRestricted: false,
    tags: ["bass", "fishing", "bonanza", "money", "collect"],
    description: "Fishing themed slot with money collect feature",
    rtp: 96.71,
    volatility: "High",
    maxWin: "2100x",
    features: ["Money Collect", "Free Spins", "Fisherman Wild"]
  },
  {
    id: "33",
    title: "Razor Shark",
    provider: "Push Gaming",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=512&h=512&fit=crop",
    popularity: 86,
    isNew: false,
    isRestricted: false,
    tags: ["shark", "underwater", "razor", "mystery", "stack"],
    description: "Underwater adventure with mystery stacks",
    rtp: 96.7,
    volatility: "High",
    maxWin: "50000x",
    features: ["Mystery Stacks", "Free Spins", "Razor Reveal"]
  },
  {
    id: "34",
    title: "Gate of Babylon",
    provider: "Relax Gaming",
    category: "Slots",
    image: bookOfDeadImg,
    popularity: 72,
    isNew: true,
    isRestricted: false,
    tags: ["babylon", "ancient", "gate", "mystery", "expanding"],
    description: "Ancient Babylon themed slot with mystery features",
    rtp: 96.15,
    volatility: "High",
    maxWin: "10000x",
    features: ["Mystery Symbols", "Expanding Reels", "Free Spins"]
  },
  {
    id: "35",
    title: "Bonanza",
    provider: "Big Time Gaming",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=512&h=512&fit=crop",
    popularity: 89,
    isNew: false,
    isRestricted: false,
    tags: ["bonanza", "megaways", "mining", "cascade", "unlimited"],
    description: "Original Megaways slot with unlimited win multiplier",
    rtp: 96,
    volatility: "High",
    maxWin: "12000x",
    features: ["Megaways", "Cascading Reels", "Unlimited Multiplier"]
  },
  {
    id: "36",
    title: "Extra Chilli",
    provider: "Big Time Gaming",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=512&h=512&fit=crop",
    popularity: 83,
    isNew: false,
    isRestricted: false,
    tags: ["chilli", "megaways", "spicy", "feature", "drop"],
    description: "Spicy Megaways slot with feature drop",
    rtp: 96.82,
    volatility: "High",
    maxWin: "20000x",
    features: ["Megaways", "Feature Drop", "Free Spins"]
  },

  // Poker Games
  {
    id: "37",
    title: "Casino Hold'em",
    provider: "Evolution",
    category: "Table Games",
    image: blackjackImg,
    popularity: 70,
    isNew: false,
    isRestricted: false,
    tags: ["poker", "holdem", "casino", "cards", "ante"],
    description: "Casino poker variant based on Texas Hold'em",
    rtp: 97.84,
    features: ["Ante Bet", "Call/Fold Decision", "Side Bets"]
  },
  {
    id: "38",
    title: "Three Card Poker",
    provider: "Evolution",
    category: "Table Games",
    image: blackjackImg,
    popularity: 68,
    isNew: false,
    isRestricted: false,
    tags: ["poker", "three card", "ante", "play", "pair plus"],
    description: "Fast-paced poker variant with three cards",
    rtp: 96.63,
    features: ["Ante & Play", "Pair Plus Side Bet", "Quick Rounds"]
  },

  // Baccarat
  {
    id: "39",
    title: "Baccarat",
    provider: "Evolution",
    category: "Table Games",
    image: blackjackImg,
    popularity: 75,
    isNew: false,
    isRestricted: false,
    tags: ["baccarat", "banker", "player", "tie", "cards"],
    description: "Classic baccarat with banker and player bets",
    rtp: 98.94,
    features: ["Banker/Player/Tie Bets", "Live Dealer", "Road Maps"]
  },
  {
    id: "40",
    title: "Speed Baccarat",
    provider: "Evolution",
    category: "Live Games",
    image: blackjackImg,
    popularity: 73,
    isNew: false,
    isRestricted: false,
    tags: ["baccarat", "speed", "fast", "quick", "live"],
    description: "Fast-paced baccarat with quick rounds",
    rtp: 98.94,
    features: ["Fast Rounds", "Live Dealer", "Side Bets"]
  },

  // More New Games
  {
    id: "41",
    title: "Fruit Party",
    provider: "Pragmatic Play",
    category: "Slots",
    image: sweetBonanzaImg,
    popularity: 87,
    isNew: true,
    isRestricted: false,
    tags: ["fruit", "party", "cluster", "tumble", "multiplier"],
    description: "Fruity cluster pays slot with multipliers",
    rtp: 96.5,
    volatility: "High",
    maxWin: "5000x",
    features: ["Cluster Pays", "Tumbling Reels", "Multipliers"]
  },
  {
    id: "42",
    title: "Mental",
    provider: "Nolimit City",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=512&h=512&fit=crop",
    popularity: 79,
    isNew: true,
    isRestricted: true,
    tags: ["mental", "asylum", "dark", "split", "enhance"],
    description: "Dark themed slot with split and enhance features",
    rtp: 96.08,
    volatility: "High",
    maxWin: "66666x",
    features: ["xSplit", "Enhance", "Autopsy Bonus"]
  },
  {
    id: "43",
    title: "Book of Tut",
    provider: "Pragmatic Play",
    category: "Slots",
    image: bookOfDeadImg,
    popularity: 82,
    isNew: true,
    isRestricted: false,
    tags: ["book", "tut", "egypt", "expanding", "pharaoh"],
    description: "Egyptian slot with expanding symbols",
    rtp: 96.69,
    volatility: "High",
    maxWin: "5000x",
    features: ["Expanding Symbols", "Free Spins", "Gamble Feature"]
  },
  {
    id: "44",
    title: "The Wild Machine",
    provider: "Red Tiger",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=512&h=512&fit=crop",
    popularity: 74,
    isNew: true,
    isRestricted: false,
    tags: ["wild", "machine", "steampunk", "industrial", "gears"],
    description: "Steampunk themed slot with wild features",
    rtp: 96.16,
    volatility: "Medium",
    maxWin: "2000x",
    features: ["Wild Features", "Free Spins", "Gear Modifiers"]
  },
  {
    id: "45",
    title: "Piggy Riches Megaways",
    provider: "Red Tiger",
    category: "Slots",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=512&h=512&fit=crop",
    popularity: 80,
    isNew: false,
    isRestricted: false,
    tags: ["piggy", "riches", "megaways", "pigs", "wealth"],
    description: "Wealthy pigs themed Megaways slot",
    rtp: 96.18,
    volatility: "High",
    maxWin: "10000x",
    features: ["Megaways", "Free Spins", "Pig Features"]
  },

  // More Live Games
  {
    id: "46",
    title: "Monopoly Live",
    provider: "Evolution",
    category: "Live Games",
    image: liveGamesImg,
    popularity: 85,
    isNew: false,
    isRestricted: false,
    tags: ["monopoly", "live", "board", "bonus", "wheel"],
    description: "Monopoly themed live game show",
    rtp: 96.23,
    features: ["3D Bonus Board", "Chance Cards", "Live Host"]
  },
  {
    id: "47",
    title: "Football Studio",
    provider: "Evolution",
    category: "Live Games",
    image: liveGamesImg,
    popularity: 77,
    isNew: false,
    isRestricted: false,
    tags: ["football", "studio", "cards", "home", "away"],
    description: "Football themed card game",
    rtp: 96.27,
    features: ["Simple Rules", "Fast Rounds", "Football Theme"]
  },
  {
    id: "48",
    title: "Deal or No Deal",
    provider: "Evolution",
    category: "Live Games",
    image: liveGamesImg,
    popularity: 78,
    isNew: false,
    isRestricted: false,
    tags: ["deal", "no deal", "cases", "banker", "live"],
    description: "Live version of the famous TV show",
    rtp: 95.42,
    features: ["Case Selection", "Banker Offers", "Live Host"]
  },

  // Specialty Games
  {
    id: "49",
    title: "Aviator",
    provider: "Spribe",
    category: "Specialty",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=512&h=512&fit=crop",
    popularity: 94,
    isNew: true,
    isRestricted: false,
    tags: ["aviator", "crash", "multiplier", "plane", "cashout"],
    description: "Popular crash game with multiplying airplane",
    rtp: 97,
    features: ["Auto Cashout", "Live Multiplier", "Chat Feature"]
  },
  {
    id: "50",
    title: "Plinko",
    provider: "Spribe",
    category: "Specialty",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=512&h=512&fit=crop",
    popularity: 76,
    isNew: true,
    isRestricted: false,
    tags: ["plinko", "ball", "pegs", "drop", "multiplier"],
    description: "Ball drop game with multiplier paths",
    rtp: 99,
    features: ["Adjustable Risk", "Multiple Rows", "Instant Results"]
  }
];

// Enhanced analytics and filtering
export const popularGames = mockGames
  .filter(game => game.popularity >= 80)
  .sort((a, b) => b.popularity - a.popularity);

export const newGames = mockGames
  .filter(game => game.isNew)
  .sort((a, b) => b.popularity - a.popularity);

export const providers = [...new Set(mockGames.map(game => game.provider))];

export const categories = [...new Set(mockGames.map(game => game.category))];

export const volatilityLevels = ['Low', 'Medium', 'High'];

export const gamesByProvider = (provider: string) => 
  mockGames.filter(game => game.provider === provider);

export const gamesByCategory = (category: string) => 
  mockGames.filter(game => game.category === category);

export const gamesByVolatility = (volatility: string) => 
  mockGames.filter(game => game.volatility === volatility);

export const highRTPGames = mockGames
  .filter(game => game.rtp && game.rtp >= 96)
  .sort((a, b) => (b.rtp || 0) - (a.rtp || 0));

export const jackpotGames = mockGames
  .filter(game => game.tags.includes('jackpot') || game.tags.includes('progressive'));

export const megawaysGames = mockGames
  .filter(game => game.tags.includes('megaways'));

// Provider statistics
export const providerStats = providers.map(provider => ({
  name: provider,
  gameCount: gamesByProvider(provider).length,
  avgPopularity: Math.round(
    gamesByProvider(provider).reduce((sum, game) => sum + game.popularity, 0) / 
    gamesByProvider(provider).length
  ),
  newGamesCount: gamesByProvider(provider).filter(game => game.isNew).length
}));

// Category statistics
export const categoryStats = categories.map(category => ({
  name: category,
  gameCount: gamesByCategory(category).length,
  avgPopularity: Math.round(
    gamesByCategory(category).reduce((sum, game) => sum + game.popularity, 0) / 
    gamesByCategory(category).length
  )
}));