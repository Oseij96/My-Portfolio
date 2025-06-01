import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search, BookOpen, Bookmark, TrendingUp, Key } from 'lucide-react';
import ResourceCard from '../components/learn/ResourceCard';
import { LearnResource } from '../types';

const LearnPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<string>('all');
  
  // Sample learn resources
  const learnResources: LearnResource[] = [
    {
      id: '1',
      title: 'What is Blockchain?',
      description: 'Learn the fundamentals of blockchain technology and how it powers cryptocurrencies.',
      imageUrl: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'blockchain',
      difficulty: 'beginner',
      url: '#',
    },
    {
      id: '2',
      title: 'Understanding Bitcoin',
      description: 'Discover how Bitcoin works, its history, and why it has become so valuable.',
      imageUrl: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'bitcoin',
      difficulty: 'beginner',
      url: '#',
    },
    {
      id: '3',
      title: 'Ethereum and Smart Contracts',
      description: 'Explore Ethereum and how smart contracts are revolutionizing digital agreements.',
      imageUrl: 'https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'ethereum',
      difficulty: 'intermediate',
      url: '#',
    },
    {
      id: '4',
      title: 'DeFi: Decentralized Finance',
      description: 'Understanding the world of decentralized finance and its applications.',
      imageUrl: 'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'defi',
      difficulty: 'intermediate',
      url: '#',
    },
    {
      id: '5',
      title: 'NFTs Explained',
      description: 'What are NFTs and why are they transforming digital ownership and art?',
      imageUrl: 'https://images.pexels.com/photos/11386716/pexels-photo-11386716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'nft',
      difficulty: 'beginner',
      url: '#',
    },
    {
      id: '6',
      title: 'Advanced Crypto Trading',
      description: 'Master advanced trading techniques and strategies for cryptocurrency markets.',
      imageUrl: 'https://images.pexels.com/photos/6780789/pexels-photo-6780789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'trading',
      difficulty: 'advanced',
      url: '#',
    },
    {
      id: '7',
      title: 'Crypto Security Best Practices',
      description: 'Essential security tips to keep your cryptocurrency investments safe.',
      imageUrl: 'https://images.pexels.com/photos/5967799/pexels-photo-5967799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'security',
      difficulty: 'intermediate',
      url: '#',
    },
    {
      id: '8',
      title: 'Web3 and the Future of the Internet',
      description: 'How Web3 technologies are reshaping the internet and digital ownership.',
      imageUrl: 'https://images.pexels.com/photos/8438982/pexels-photo-8438982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'web3',
      difficulty: 'advanced',
      url: '#',
    },
  ];
  
  // Filter resources based on search term and category filter
  const filteredResources = learnResources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || resource.category === filter || 
                          resource.difficulty === filter;
    return matchesSearch && matchesFilter;
  });
  
  // Get unique categories for filter
  const categories = Array.from(new Set(['all', ...learnResources.map(r => r.category)]));
  const difficulties = ['beginner', 'intermediate', 'advanced'];
  
  // Featured topics with icons
  const featuredTopics = [
    { name: 'Blockchain Basics', icon: BookOpen },
    { name: 'Security & Privacy', icon: Key },
    { name: 'Trading Strategies', icon: TrendingUp },
    { name: 'Crypto Guides', icon: Bookmark },
  ];
  
  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Learn About Crypto</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Expand your knowledge with our educational resources
        </p>
      </div>
      
      {/* Featured Topics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredTopics.map((topic, index) => (
          <motion.div
            key={topic.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="glass-card p-6 flex items-center space-x-4"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white">
              <topic.icon className="w-5 h-5" />
            </div>
            <span className="font-medium">{topic.name}</span>
          </motion.div>
        ))}
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
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Filter:</span>
          </div>
          
          <select
            className="input py-1.5"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.filter(c => c !== 'all').map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
            <option value="divider" disabled>──────────</option>
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} Level
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Resources Grid */}
      {filteredResources.length === 0 ? (
        <div className="glass-card p-8 text-center">
          <h3 className="text-xl font-semibold mb-2">No resources found</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index % 4 * 0.1 }}
            >
              <ResourceCard resource={resource} />
            </motion.div>
          ))}
        </div>
      )}
      
      {/* Newsletter Sign Up */}
      <div className="glass-card p-8 mt-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="mb-6 lg:mb-0 lg:mr-8 lg:w-1/2">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Subscribe to our newsletter to receive the latest educational content, market updates, and crypto insights.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2">
            <form className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-2">
              <input
                type="email"
                className="input flex-grow"
                placeholder="Your email address"
                required
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;