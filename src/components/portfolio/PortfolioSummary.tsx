import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, PieChart, Clock } from 'lucide-react';
import { CryptoData, PortfolioItem } from '../../types';

interface PortfolioSummaryProps {
  portfolio: PortfolioItem[];
  cryptoData: CryptoData[];
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({ portfolio, cryptoData }) => {
  // Calculate total portfolio value
  const calculateTotalValue = () => {
    if (portfolio.length === 0) return 0;
    
    return portfolio.reduce((total, item) => {
      const coin = cryptoData.find(c => c.id === item.id);
      if (!coin) return total;
      
      return total + (coin.current_price * item.amount);
    }, 0);
  };
  
  // Calculate total initial investment
  const calculateInitialInvestment = () => {
    if (portfolio.length === 0) return 0;
    
    return portfolio.reduce((total, item) => {
      return total + (item.purchasePrice * item.amount);
    }, 0);
  };
  
  // Calculate profit/loss
  const calculateProfitLoss = () => {
    const currentValue = calculateTotalValue();
    const initialValue = calculateInitialInvestment();
    
    return currentValue - initialValue;
  };
  
  // Calculate profit/loss percentage
  const calculateProfitLossPercentage = () => {
    const currentValue = calculateTotalValue();
    const initialValue = calculateInitialInvestment();
    
    if (initialValue === 0) return 0;
    
    return ((currentValue - initialValue) / initialValue) * 100;
  };
  
  const totalValue = calculateTotalValue();
  const initialInvestment = calculateInitialInvestment();
  const profitLoss = calculateProfitLoss();
  const profitLossPercentage = calculateProfitLossPercentage();
  const isPositive = profitLoss >= 0;
  
  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  
  // Summary items
  const summaryItems = [
    {
      title: 'Total Value',
      value: formatCurrency(totalValue),
      icon: DollarSign,
      color: 'bg-primary-500',
    },
    {
      title: 'Initial Investment',
      value: formatCurrency(initialInvestment),
      icon: Clock,
      color: 'bg-secondary-500',
    },
    {
      title: 'Profit/Loss',
      value: `${formatCurrency(profitLoss)} (${Math.abs(profitLossPercentage).toFixed(2)}%)`,
      icon: isPositive ? TrendingUp : TrendingDown,
      color: isPositive ? 'bg-success-500' : 'bg-error-500',
    },
    {
      title: 'Portfolio Assets',
      value: portfolio.length.toString(),
      icon: PieChart,
      color: 'bg-accent-500',
    },
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {summaryItems.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="glass-card p-6"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.title}</p>
              <p className={`text-2xl font-bold mt-1 ${
                item.title === 'Profit/Loss' && (isPositive ? 'text-success-500' : 'text-error-500')
              }`}>
                {item.value}
              </p>
            </div>
            <div className={`${item.color} p-2 rounded-lg text-white`}>
              <item.icon className="w-6 h-6" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioSummary;