export interface Market {
  id: string;
  question: string;
  description: string;
  endTime: Date;
  yesPool: number;
  noPool: number;
  category: string;
  status: 'active' | 'ended';
  imageUrl: string;
}

export const mockMarkets: Market[] = [
  {
    id: '1',
    question: 'Will BONK reach $0.00005 before December 31, 2025?',
    description: 'Market resolves YES if BONK hits $0.00005 or higher on CoinGecko before the deadline.',
    endTime: new Date('2025-12-31'),
    yesPool: 1250.50,
    noPool: 890.30,
    category: 'PRICE',
    status: 'active',
    imageUrl: '/tokens/Bonk.png'
  },
  {
    id: '2',
    question: 'Will POPCAT market cap surpass $1B in October 2025?',
    description: 'Market resolves based on CoinGecko data at 11:59 PM UTC on October 31, 2025.',
    endTime: new Date('2025-10-31'),
    yesPool: 2100.00,
    noPool: 1800.00,
    category: 'MARKET CAP',
    status: 'active',
    imageUrl: '/tokens/Popcat.png'
  },
  {
    id: '3',
    question: 'Will Solana hit $200 before Q1 2026 ends?',
    description: 'Resolves YES if SOL reaches $200 on any major exchange before March 31, 2026.',
    endTime: new Date('2026-03-31'),
    yesPool: 3450.75,
    noPool: 2620.25,
    category: 'PRICE',
    status: 'active',
    imageUrl: '/tokens/Solana.png'
  },
  {
    id: '4',
    question: 'Will NEET be listed on Coinbase before November 2025?',
    description: 'Resolves YES if NEET token is officially listed for trading on Coinbase exchange.',
    endTime: new Date('2025-11-30'),
    yesPool: 890.50,
    noPool: 1120.75,
    category: 'Listing',
    status: 'active',
    imageUrl: '/tokens/Neet.png' // nanti ganti dengan path gambar Anda
  },
  {
    id: '5',
    question: 'Will total Solana TVL exceed $10B in 2025?',
    description: 'Resolves based on DeFiLlama data at end of December 2025.',
    endTime: new Date('2025-12-31'),
    yesPool: 1580.25,
    noPool: 920.50,
    category: 'TVL',
    status: 'active',
    imageUrl: '/tokens/Solana.png'
  },
  {
    id: '6',
    question: 'Will USDUC launch perpetuals by Q3 2025?',
    description: 'Resolves YES if USDUC launches perpetual trading before September 30, 2025.',
    endTime: new Date('2025-09-30'),
    yesPool: 2340.80,
    noPool: 1670.20,
    category: 'PRODUCT',
    status: 'active',
    imageUrl: '/tokens/Usduc.png'
  },
  {
    id: '7',
    question: 'Will PUMP reach $10B market cap in 2025?',
    description: 'Resolves YES if any memecoin on Solana achieves $10B Marketcap.',
    endTime: new Date('2025-12-31'),
    yesPool: 1920.40,
    noPool: 2180.60,
    category: 'MARKET CAP',
    status: 'active',
    imageUrl: '/tokens/Pump.png'
  },
  {
    id: '8',
    question: 'Will KLED be listed on Binance before end of 2025?',
    description: 'Resolves YES if KLED token is officially listed for trading on Binance exchange.',
    endTime: new Date('2025-12-31'),
    yesPool: 3120.90,
    noPool: 1890.10,
    category: 'LISTING',
    status: 'active',
    imageUrl: '/tokens/Kled.png'
  },
  {
    id: '9',
    question: 'Will POPCAT flip BONK in market cap by November 2025?',
    description: 'Resolves YES if POPCAT market cap exceeds BONK market cap at any point.',
    endTime: new Date('2025-11-30'),
    yesPool: 1450.30,
    noPool: 1560.70,
    category: 'MARKET CAP',
    status: 'active',
    imageUrl: '/tokens/Popcat.png'
  },
  {
    id: '10',
    question: 'Will NYX release NFT before ends of 2025?',
    description: 'Resolves YES if NYX Token release NFT before ends of 2025.',
    endTime: new Date('2025-12-30'),
    yesPool: 980.60,
    noPool: 1240.40,
    category: 'PRODUCT',
    status: 'active',
    imageUrl: '/tokens/Nyx.png'
  },
  {
    id: '11',
    question: 'Will TOKABU reach $1 before October 2025?',
    description: 'Resolves based on CoinGecko price data for TOKABU token.',
    endTime: new Date('2025-10-31'),
    yesPool: 1670.20,
    noPool: 1330.80,
    category: 'PRICE',
    status: 'active',
    imageUrl: '/tokens/Tokabu.png'
  },
  {
    id: '12',
    question: 'Will FARTCOIN reach $1 before October 2025?',
    description: 'Resolves based on CoinGecko price data for FARTCOIN token.',
    endTime: new Date('2025-10-31'),
    yesPool: 2140.50,
    noPool: 1860.50,
    category: 'PRICE',
    status: 'active',
    imageUrl: '/tokens/Fartcoin.png'
  },
];

export function calculateOdds(yesPool: number, noPool: number) {
  const total = yesPool + noPool;
  return {
    yes: ((yesPool / total) * 100).toFixed(1),
    no: ((noPool / total) * 100).toFixed(1)
  };
}

export function calculatePayout(betAmount: number, currentPool: number, totalPool: number, fee: number = 0.03) {
  const potentialWinnings = (betAmount / currentPool) * totalPool;
  return potentialWinnings * (1 - fee);
}