import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { useCrypto } from '../contexts/CryptoContext';
import PortfolioSummary from '../components/portfolio/PortfolioSummary';
import PortfolioList from '../components/portfolio/PortfolioList';
import { CryptoData } from '../types';

const PortfolioPage: React.FC = () => {
  const { cryptoData, portfolio, addToPortfolio, removeFromPortfolio, updatePortfolioItem, isLoading } = useCrypto();
  const [isAddingCoin, setIsAddingCoin] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<CryptoData | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const handleOpenAddCoin = () => {
    setIsAddingCoin(true);
    setSelectedCoin(null);
    setAmount('');
    setSearchTerm('');
  };
  
  const handleCloseAddCoin = () => {
    setIsAddingCoin(false);
  };
  
  const handleSelectCoin = (coin: CryptoData) => {
    setSelectedCoin(coin);
    setSearchTerm('');
  };
  
  const handleAddToPortfolio = () => {
    if (selectedCoin && amount) {
      addToPortfolio(selectedCoin, parseFloat(amount));
      setIsAddingCoin(false);
      setSelectedCoin(null);
      setAmount('');
    }
  };
  
  // Filter cryptocurrencies based on search term
  const filteredCryptoData = searchTerm 
    ? cryptoData.filter(coin => 
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Your Portfolio</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Track and manage your cryptocurrency investments
          </p>
        </div>
        
        <button 
          onClick={handleOpenAddCoin}
          className="mt-4 md:mt-0 btn-primary flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Crypto</span>
        </button>
      </div>
      
      {/* Portfolio Summary */}
      <PortfolioSummary 
        portfolio={portfolio} 
        cryptoData={cryptoData} 
      />
      
      {/* Portfolio List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Assets</h2>
        
        <PortfolioList 
          portfolio={portfolio}
          cryptoData={cryptoData}
          onUpdateAmount={updatePortfolioItem}
          onRemove={removeFromPortfolio}
        />
      </div>
      
      {/* Add Coin Modal */}
      {isAddingCoin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-dark-800 rounded-xl shadow-xl max-w-md w-full max-h-[80vh] overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-dark-700">
              <h3 className="text-xl font-semibold">Add Cryptocurrency</h3>
              <button 
                onClick={handleCloseAddCoin}
                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 max-h-[calc(80vh-128px)] overflow-y-auto">
              {selectedCoin ? (
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <img src={selectedCoin.image} alt={selectedCoin.name} className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-medium">{selectedCoin.name}</h4>
                      <span className="text-sm text-gray-500 dark:text-gray-400 uppercase">{selectedCoin.symbol}</span>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="font-medium">
                        ${selectedCoin.current_price.toLocaleString()}
                      </div>
                      <span className={`text-sm ${
                        selectedCoin.price_change_percentage_24h >= 0 
                          ? 'text-success-500' 
                          : 'text-error-500'
                      }`}>
                        {selectedCoin.price_change_percentage_24h >= 0 ? '+' : ''}
                        {selectedCoin.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Amount
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="amount"
                        className="input pr-16"
                        placeholder="0.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="0"
                        step="0.000001"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-gray-500 dark:text-gray-400 uppercase">{selectedCoin.symbol}</span>
                      </div>
                    </div>
                    
                    {amount && (
                      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        ≈ ${(parseFloat(amount) * selectedCoin.current_price).toLocaleString()}
                      </div>
                    )}
                  </div>
                  
                  <button 
                    onClick={handleAddToPortfolio}
                    disabled={!amount || parseFloat(amount) <= 0}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add to Portfolio
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="relative">
                    <input
                      type="text"
                      className="input w-full"
                      placeholder="Search cryptocurrencies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {isLoading ? (
                      <div className="animate-pulse space-y-4">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="flex items-center space-x-4 p-3">
                            <div className="rounded-full bg-gray-200 dark:bg-dark-700 h-10 w-10"></div>
                            <div className="flex-1">
                              <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-3/4"></div>
                              <div className="h-3 mt-2 bg-gray-200 dark:bg-dark-700 rounded w-1/2"></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : searchTerm.length > 0 && filteredCryptoData.length === 0 ? (
                      <div className="text-center py-4">
                        <p className="text-gray-500 dark:text-gray-400">No cryptocurrencies found</p>
                      </div>
                    ) : (
                      filteredCryptoData.map(coin => (
                        <div
                          key={coin.id}
                          onClick={() => handleSelectCoin(coin)}
                          className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-150 cursor-pointer"
                        >
                          <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                          <div>
                            <h4 className="font-medium">{coin.name}</h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">{coin.symbol}</span>
                          </div>
                          <div className="ml-auto text-right">
                            <div className="text-sm font-medium">
                              ${coin.current_price.toLocaleString()}
                            </div>
                            <span className={`text-xs ${
                              coin.price_change_percentage_24h >= 0 
                                ? 'text-success-500' 
                                : 'text-error-500'
                            }`}>
                              {coin.price_change_percentage_24h >= 0 ? '+' : ''}
                              {coin.price_change_percentage_24h.toFixed(2)}%
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                  
                  {!searchTerm && (
                    <div className="text-center py-4">
                      <p className="text-gray-500 dark:text-gray-400">Search for a cryptocurrency to add to your portfolio</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;