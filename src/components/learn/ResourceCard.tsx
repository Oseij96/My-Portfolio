import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen } from 'lucide-react';
import { LearnResource } from '../../types';

interface ResourceCardProps {
  resource: LearnResource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  // Map difficulty to color
  const difficultyColor = {
    beginner: 'bg-success-500',
    intermediate: 'bg-warning-500',
    advanced: 'bg-error-500',
  }[resource.difficulty];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="crypto-card flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold text-lg">{resource.title}</h3>
        <span className={`text-xs text-white px-2 py-1 rounded-full ${difficultyColor}`}>
          {resource.difficulty}
        </span>
      </div>
      
      <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
        <img 
          src={resource.imageUrl} 
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {resource.description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-primary-500 dark:text-primary-400 px-2 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20">
          {resource.category}
        </span>
        
        <a 
          href={resource.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-sm text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
        >
          <span>Learn More</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default ResourceCard;