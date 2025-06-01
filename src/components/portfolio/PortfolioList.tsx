import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit2, Trash2, Save, X, TrendingUp, TrendingDown } from 'lucide-react';
import { CryptoData, PortfolioItem } from '../../types';

interface PortfolioListProps {
  portfolio: PortfolioItem[];
  cryptoData: CryptoData[];
  onUpdateAmount: (coinId: string, amount: number) => void;
  onRemove: (coinId: string) => void;
}

const PortfolioList: React.FC<PortfolioListProps> = ({
  portfolio,
  cryptoData,
  onUpdateAmount,
  onRemove,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editAmount, setEditAmount] = useState<number>(0);
  
  const handleEdit = (item: PortfolioItem) => {
    setEditingId(item.id);
    setEditAmount(item.amount);
  };
  
  const handleSave = (id: string) => {
    onUpdateAmount(id, editAmount);
    setEditingId(null);
  };
  
  const handleCancel = () => {
    setEditingId(null);
  };
  
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };
  
  if (portfolio.length === 0) {
    return (
      <div className="glass-card p-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Your portfolio is empty</h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Add cryptocurrencies to your portfolio to track their performance.
        </p>
      </div>
    );
  }
  
  return (
    <div className="glass-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-dark-700">
          <thead className="bg-gray-50 dark:bg-dark-700/50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Asset
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Holdings
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Avg. Buy Price
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Current Price
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Profit/Loss
              </th>
              <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-transparent divide-y divide-gray-200 dark:divide-dark-700">
            <AnimatePresence>
              {portfolio.map((item) => {
                const coin = cryptoData.find(c => c.id === item.id);
                const currentPrice = coin?.current_price || 0;
                const currentValue = currentPrice * item.amount;
                const initialValue = item.purchasePrice * item.amount;
                const profitLoss = currentValue - initialValue;
                const profitLossPercentage = (profitLoss / initialValue) * 100;
                const isPositive = profitLoss >= 0;
                
                return (
                  <motion.tr 
                    key={item.id}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-gray-50 dark:hover:bg-dark-700/50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <img className="h-8 w-8 rounded-full" src={item.image} alt={item.name} />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Added on {formatDate(item.purchaseDate)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      {editingId === item.id ? (
                        <input
                          type="number"
                          className="input text-right w-28 ml-auto"
                          value={editAmount}
                          onChange={(e) => setEditAmount(parseFloat(e.target.value))}
                          min="0"
                          step="0.000001"
                        />
                      ) : (
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {item.amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 6 })} {item.symbol.toUpperCase()}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            {formatCurrency(currentValue)}
                          </div>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-white">
                      {formatCurrency(item.purchasePrice)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900 dark:text-white">
                      {formatCurrency(currentPrice)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className={`flex items-center justify-end space-x-1 ${
                        isPositive ? 'text-success-500' : 'text-error-500'
                      }`}>
                        {isPositive ? (
                          <TrendingUp className="w-4 h-4" />
                        ) : (
                          <TrendingDown className="w-4 h-4" />
                        )}
                        <div>
                          <div className="text-sm font-medium">
                            {formatCurrency(profitLoss)}
                          </div>
                          <div className="text-xs">
                            {profitLossPercentage > 0 ? '+' : ''}{profitLossPercentage.toFixed(2)}%
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm">
                      {editingId === item.id ? (
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => handleSave(item.id)}
                            className="p-1.5 rounded-lg text-success-500 hover:bg-success-500/10 transition-colors duration-200"
                          >
                            <Save className="w-4 h-4" />
                          </button>
                          <button
                            onClick={handleCancel}
                            className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="p-1.5 rounded-lg text-primary-500 hover:bg-primary-500/10 transition-colors duration-200"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => onRemove(item.id)}
                            className="p-1.5 rounded-lg text-error-500 hover:bg-error-500/10 transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </td>
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioList;