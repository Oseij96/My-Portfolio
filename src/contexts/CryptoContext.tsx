import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';
import { CryptoData, PortfolioItem } from '../types';

interface CryptoContextType {
  cryptoData: CryptoData[];
  trendingCoins: CryptoData[];
  portfolio: PortfolioItem[];
  isLoading: boolean;
  error: string | null;
  addToPortfolio: (coin: CryptoData, amount: number) => void;
  removeFromPortfolio: (coinId: string) => void;
  updatePortfolioItem: (coinId: string, amount: number) => void;
}

const CryptoContext = createContext<CryptoContextType | undefined>(undefined);

export const CryptoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [trendingCoins, setTrendingCoins] = useState<CryptoData[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const savedPortfolio = localStorage.getItem('portfolio');
    return savedPortfolio ? JSON.parse(savedPortfolio) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch crypto data
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        setIsLoading(true);
        
        // In a real application, you would use a real API like CoinGecko
        // For demo purposes, we'll simulate data
        const mockData: CryptoData[] = [
          {
            id: 'bitcoin',
            symbol: 'btc',
            name: 'Bitcoin',
            image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
            current_price: 63245.12,
            market_cap: 1235491824512,
            market_cap_rank: 1,
            price_change_percentage_24h: 2.35,
            price_change_percentage_7d: 5.68,
            high_24h: 64102.32,
            low_24h: 61896.45,
            sparkline_7d: generateMockSparkline(),
          },
          {
            id: 'ethereum',
            symbol: 'eth',
            name: 'Ethereum',
            image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
            current_price: 3245.78,
            market_cap: 389721635421,
            market_cap_rank: 2,
            price_change_percentage_24h: 1.23,
            price_change_percentage_7d: 3.45,
            high_24h: 3301.24,
            low_24h: 3189.67,
            sparkline_7d: generateMockSparkline(),
          },
          {
            id: 'binancecoin',
            symbol: 'bnb',
            name: 'Binance Coin',
            image: 'https://assets.coingecko.com/coins/images/825/large/binance-coin-logo.png',
            current_price: 567.89,
            market_cap: 87654321098,
            market_cap_rank: 3,
            price_change_percentage_24h: -0.75,
            price_change_percentage_7d: 2.15,
            high_24h: 578.12,
            low_24h: 563.45,
            sparkline_7d: generateMockSparkline(),
          },
          {
            id: 'solana',
            symbol: 'sol',
            name: 'Solana',
            image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
            current_price: 123.45,
            market_cap: 45678901234,
            market_cap_rank: 4,
            price_change_percentage_24h: 3.21,
            price_change_percentage_7d: 8.76,
            high_24h: 128.90,
            low_24h: 120.15,
            sparkline_7d: generateMockSparkline(),
          },
          {
            id: 'cardano',
            symbol: 'ada',
            name: 'Cardano',
            image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png',
            current_price: 0.456,
            market_cap: 15987654321,
            market_cap_rank: 5,
            price_change_percentage_24h: -1.23,
            price_change_percentage_7d: -0.45,
            high_24h: 0.467,
            low_24h: 0.452,
            sparkline_7d: generateMockSparkline(),
          },
          {
            id: 'ripple',
            symbol: 'xrp',
            name: 'XRP',
            image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png',
            current_price: 0.567,
            market_cap: 27891234567,
            market_cap_rank: 6,
            price_change_percentage_24h: 0.89,
            price_change_percentage_7d: 2.34,
            high_24h: 0.579,
            low_24h: 0.561,
            sparkline_7d: generateMockSparkline(),
          },
          {
            id: 'polkadot',
            symbol: 'dot',
            name: 'Polkadot',
            image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png',
            current_price: 5.67,
            market_cap: 7654321098,
            market_cap_rank: 7,
            price_change_percentage_24h: -0.45,
            price_change_percentage_7d: 1.23,
            high_24h: 5.78,
            low_24h: 5.65,
            sparkline_7d: generateMockSparkline(),
          },
          {
            id: 'dogecoin',
            symbol: 'doge',
            name: 'Dogecoin',
            image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png',
            current_price: 0.123,
            market_cap: 16273849506,
            market_cap_rank: 8,
            price_change_percentage_24h: 5.67,
            price_change_percentage_7d: 12.34,
            high_24h: 0.128,
            low_24h: 0.117,
            sparkline_7d: generateMockSparkline(),
          }
        ];
        
        setCryptoData(mockData);
        
        // Set trending coins (top 4 by market cap)
        setTrendingCoins(mockData.slice(0, 4));
        
        setIsLoading(false);
      } catch (err) {
        setError('Failed to fetch cryptocurrency data');
        setIsLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchCryptoData();
    
    // In a real app, you might want to refresh the data periodically
    const interval = setInterval(() => fetchCryptoData(), 60000);
    return () => clearInterval(interval);
  }, []);

  // Save portfolio to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  const addToPortfolio = (coin: CryptoData, amount: number) => {
    const existingCoin = portfolio.find(item => item.id === coin.id);
    
    if (existingCoin) {
      updatePortfolioItem(coin.id, existingCoin.amount + amount);
    } else {
      setPortfolio([...portfolio, {
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol,
        image: coin.image,
        amount,
        purchasePrice: coin.current_price,
        purchaseDate: new Date().toISOString(),
      }]);
    }
  };

  const removeFromPortfolio = (coinId: string) => {
    setPortfolio(portfolio.filter(item => item.id !== coinId));
  };

  const updatePortfolioItem = (coinId: string, amount: number) => {
    setPortfolio(portfolio.map(item => 
      item.id === coinId ? { ...item, amount } : item
    ));
  };

  return (
    <CryptoContext.Provider value={{
      cryptoData,
      trendingCoins,
      portfolio,
      isLoading,
      error,
      addToPortfolio,
      removeFromPortfolio,
      updatePortfolioItem,
    }}>
      {children}
    </CryptoContext.Provider>
  );
};

// Helper function to generate mock sparkline data
function generateMockSparkline() {
  const prices = [];
  let currentPrice = 100 + Math.random() * 50;
  
  for (let i = 0; i < 7; i++) {
    currentPrice = currentPrice + (Math.random() * 10 - 5);
    prices.push(currentPrice);
  }
  
  return { price: prices };
}

export const useCrypto = (): CryptoContextType => {
  const context = useContext(CryptoContext);
  if (context === undefined) {
    throw new Error('useCrypto must be used within a CryptoProvider');
  }
  return context;
};