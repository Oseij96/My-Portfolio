import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Wallet, TrendingUp, BookOpen, Bell } from 'lucide-react';
import { useCrypto } from '../contexts/CryptoContext';
import CryptoCard from '../components/crypto/CryptoCard';

const HomePage: React.FC = () => {
  const { trendingCoins, isLoading, error } = useCrypto();
  const [email, setEmail] = useState('');
  
  const features = [
    {
      icon: BarChart2,
      title: 'Real-time Market Data',
      description: 'Stay informed with up-to-the-minute cryptocurrency market data and price changes.'
    },
    {
      icon: Wallet,
      title: 'Portfolio Tracking',
      description: 'Manage your investments by tracking your crypto holdings and performance over time.'
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Visualize market trends with interactive charts and comprehensive analytics.'
    },
    {
      icon: Bell,
      title: 'Price Alerts',
      description: 'Set up customized alerts to notify you of significant price movements.'
    },
    {
      icon: BookOpen,
      title: 'Educational Resources',
      description: 'Learn about cryptocurrencies through our curated educational materials.'
    }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };
  
  return (
    <div className="space-y-16 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-3xl -z-10" />
        
        <div className="relative z-10 py-16 flex flex-col lg:flex-row items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 mb-12 lg:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text">
              Track, Analyze, and Optimize Your Crypto Portfolio
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              Your comprehensive dashboard for cryptocurrency tracking, portfolio management, and market analysis.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/markets" className="btn-primary flex items-center justify-center space-x-2">
                <span>Explore Markets</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link to="/portfolio" className="btn-outline flex items-center justify-center space-x-2">
                <span>Create Portfolio</span>
                <Wallet className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {isLoading ? (
              <div className="col-span-2 h-64 glass-card flex items-center justify-center">
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
              <div className="col-span-2 glass-card p-6 text-center text-error-500">
                <p>{error}</p>
              </div>
            ) : (
              trendingCoins.slice(0, 2).map((coin, index) => (
                <motion.div
                  key={coin.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                >
                  <CryptoCard coin={coin} />
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section>
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Powerful Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Everything you need to manage your cryptocurrency investments in one place.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Trending Coins Section */}
      <section>
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Trending Cryptocurrencies</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Stay updated with the most popular crypto assets in the market
            </p>
          </div>
          <Link 
            to="/markets" 
            className="mt-4 md:mt-0 btn-outline flex items-center space-x-2"
          >
            <span>View All Markets</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="glass-card p-6 animate-pulse">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-gray-200 dark:bg-dark-700 h-10 w-10"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-3/4"></div>
                    <div className="h-3 mt-2 bg-gray-200 dark:bg-dark-700 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="h-8 bg-gray-200 dark:bg-dark-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-1/3"></div>
                <div className="h-20 mt-4 bg-gray-200 dark:bg-dark-700 rounded"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="glass-card p-6 text-center text-error-500">
            <p>{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingCoins.map((coin, index) => (
              <motion.div
                key={coin.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <CryptoCard coin={coin} />
              </motion.div>
            ))}
          </div>
        )}
      </section>
      
      {/* CTA Section */}
      <section className="relative rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-90" />
        
        <div className="relative z-10 py-16 px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to optimize your crypto investments?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join our newsletter to receive market updates, investment tips, and exclusive insights directly to your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-primary-500 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;