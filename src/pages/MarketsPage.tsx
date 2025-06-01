import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { useCrypto } from '../contexts/CryptoContext';
import CryptoTable from '../components/crypto/CryptoTable';
import CryptoCard from '../components/crypto/CryptoCard';

const MarketsPage: React.FC = () => {
  const { cryptoData, isLoading, error } = useCrypto();
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');
  
  // Filter cryptocurrencies based on search term
  const filteredCryptoData = cryptoData.filter(coin => 
    coin.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Cryptocurrency Markets</h1>
        <p className="text-gray-600 dark:text-gray-300">
          View current prices and market data for the top cryptocurrencies
        </p>
      </div>
      
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="input pl-10 pr-4 py-2 w-full md:w-80"
            placeholder="Search by name or symbol..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex bg-gray-100 dark:bg-dark-700 rounded-lg p-1">
            <button
              className={`px-4 py-1.5 rounded-lg transition-colors duration-200 ${
                viewMode === 'table' 
                  ? 'bg-white dark:bg-dark-800 shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => setViewMode('table')}
            >
              Table View
            </button>
            <button
              className={`px-4 py-1.5 rounded-lg transition-colors duration-200 ${
                viewMode === 'grid' 
                  ? 'bg-white dark:bg-dark-800 shadow-sm' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
              onClick={() => setViewMode('grid')}
            >
              Grid View
            </button>
          </div>
          
          <button className="btn-outline flex items-center space-x-2">
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>
      </div>
      
      {/* Market Data */}
      {isLoading ? (
        <div className="glass-card p-8 flex items-center justify-center">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-gray-200 dark:bg-dark-700 h-12 w-12"></div>
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      ) : error ? (
        <div className="glass-card p-6 text-center text-error-500">
          <p>{error}</p>
        </div>
      ) : filteredCryptoData.length === 0 ? (
        <div className="glass-card p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">No results found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search criteria.
          </p>
        </div>
      ) : viewMode === 'table' ? (
        <div className="glass-card">
          <CryptoTable data={filteredCryptoData} />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCryptoData.map((coin, index) => (
            <motion.div
              key={coin.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index % 4 * 0.1 }}
            >
              <CryptoCard coin={coin} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarketsPage;