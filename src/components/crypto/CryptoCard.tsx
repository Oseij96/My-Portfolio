import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoData } from '../../types';
import PriceChart from './PriceChart';

interface CryptoCardProps {
  coin: CryptoData;
  onClick?: () => void;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ coin, onClick }) => {
  const isPositiveChange = coin.price_change_percentage_24h >= 0;
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img src={coin.image} alt={coin.name} className="w-8 h-8" />
          <div>
            <h3 className="font-medium">{coin.name}</h3>
            <span className="text-xs text-gray-500 uppercase">{coin.symbol}</span>
          </div>
        </div>
        <div>
          <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            #{coin.market_cap_rank}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-end mb-2">
        <div>
          <p className="text-xl font-bold">
            ${coin.current_price.toLocaleString()}
          </p>
          <div className={`flex items-center space-x-1 ${
            isPositiveChange ? 'text-green-500' : 'text-red-500'
          }`}>
            {isPositiveChange ? (
              <TrendingUp className="w-4 h-4" />
            ) : (
              <TrendingDown className="w-4 h-4" />
            )}
            <span>
              {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-500">Market Cap</div>
          <div className="font-medium">
            ${(coin.market_cap / 1e9).toFixed(2)}B
          </div>
        </div>
      </div>
      
      <div className="h-16 mt-4">
        <PriceChart 
          data={coin.sparkline_7d.price} 
          color={isPositiveChange ? '#22c55e' : '#ef4444'} 
        />
      </div>
    </div>
  );
};

export default CryptoCard;