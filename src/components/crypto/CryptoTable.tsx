import React, { useState } from 'react';
import { ArrowUp, ArrowDown, TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoData } from '../../types';
import PriceChart from './PriceChart';

interface CryptoTableProps {
  data: CryptoData[];
  onRowClick?: (coin: CryptoData) => void;
}

type SortKey = 'rank' | 'name' | 'price' | 'change_24h' | 'change_7d' | 'market_cap';
type SortDirection = 'asc' | 'desc';

const CryptoTable: React.FC<CryptoTableProps> = ({ data, onRowClick }) => {
  const [sortKey, setSortKey] = useState<SortKey>('rank');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  
  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };
  
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: value < 1 ? 4 : 2,
      maximumFractionDigits: value < 1 ? 6 : 2,
    }).format(value);
  };
  
  const formatMarketCap = (value: number): string => {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toLocaleString()}`;
  };
  
  const sortedData = [...data].sort((a, b) => {
    let comparison = 0;
    
    switch (sortKey) {
      case 'rank':
        comparison = a.market_cap_rank - b.market_cap_rank;
        break;
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'price':
        comparison = a.current_price - b.current_price;
        break;
      case 'change_24h':
        comparison = a.price_change_percentage_24h - b.price_change_percentage_24h;
        break;
      case 'change_7d':
        comparison = a.price_change_percentage_7d - b.price_change_percentage_7d;
        break;
      case 'market_cap':
        comparison = a.market_cap - b.market_cap;
        break;
      default:
        break;
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-700">
        <thead className="bg-gray-50 dark:bg-dark-800">
          <tr>
            <th 
              scope="col" 
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('rank')}
            >
              <div className="flex items-center space-x-1">
                <span>#</span>
                {sortKey === 'rank' && (
                  sortDirection === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />
                )}
              </div>
            </th>
            <th 
              scope="col" 
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('name')}
            >
              <div className="flex items-center space-x-1">
                <span>Name</span>
                {sortKey === 'name' && (
                  sortDirection === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />
                )}
              </div>
            </th>
            <th 
              scope="col" 
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('price')}
            >
              <div className="flex items-center justify-end space-x-1">
                <span>Price</span>
                {sortKey === 'price' && (
                  sortDirection === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />
                )}
              </div>
            </th>
            <th 
              scope="col" 
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('change_24h')}
            >
              <div className="flex items-center justify-end space-x-1">
                <span>24h %</span>
                {sortKey === 'change_24h' && (
                  sortDirection === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />
                )}
              </div>
            </th>
            <th 
              scope="col" 
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('change_7d')}
            >
              <div className="flex items-center justify-end space-x-1">
                <span>7d %</span>
                {sortKey === 'change_7d' && (
                  sortDirection === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />
                )}
              </div>
            </th>
            <th 
              scope="col" 
              className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer"
              onClick={() => handleSort('market_cap')}
            >
              <div className="flex items-center justify-end space-x-1">
                <span>Market Cap</span>
                {sortKey === 'market_cap' && (
                  sortDirection === 'asc' ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />
                )}
              </div>
            </th>
            <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider text-right">
              Last 7d
            </th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-dark-800 divide-y divide-gray-200 dark:divide-dark-700">
          {sortedData.map((coin) => {
            const isPricePositive24h = coin.price_change_percentage_24h >= 0;
            const isPricePositive7d = coin.price_change_percentage_7d >= 0;
            
            return (
              <tr 
                key={coin.id} 
                className="hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-150 cursor-pointer"
                onClick={() => onRowClick && onRowClick(coin)}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  {coin.market_cap_rank}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8">
                      <img className="h-8 w-8 rounded-full" src={coin.image} alt={coin.name} />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {coin.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 uppercase">
                        {coin.symbol}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900 dark:text-white">
                  {formatCurrency(coin.current_price)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className={`text-sm flex items-center justify-end space-x-1 ${
                    isPricePositive24h ? 'text-success-500' : 'text-error-500'
                  }`}>
                    {isPricePositive24h ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="font-medium">
                      {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className={`text-sm flex items-center justify-end space-x-1 ${
                    isPricePositive7d ? 'text-success-500' : 'text-error-500'
                  }`}>
                    {isPricePositive7d ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="font-medium">
                      {Math.abs(coin.price_change_percentage_7d).toFixed(2)}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 text-right">
                  {formatMarketCap(coin.market_cap)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-24 h-10 ml-auto">
                    <PriceChart 
                      data={coin.sparkline_7d.price} 
                      color={isPricePositive7d ? '#10B981' : '#EF4444'} 
                      height={40}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;