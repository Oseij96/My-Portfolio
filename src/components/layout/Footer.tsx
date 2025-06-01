import React from 'react';
import { Link } from 'react-router-dom';
import { Github as GitHub, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500">
                <span className="text-white font-bold text-xs">CV</span>
              </div>
              <span className="text-lg font-bold text-dark-800 dark:text-white">CryptoVision</span>
            </Link>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 max-w-md">
              Your comprehensive cryptocurrency portfolio tracker and market analysis tool. 
              Stay informed with real-time data and make informed decisions about your investments.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors duration-200">
                <GitHub className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: 'Markets', href: '/markets' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Learn', href: '/learn' },
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: 'API Documentation', href: '#' },
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Contact Support', href: '#' },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} CryptoVision. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 flex items-center">
            Made with <Heart className="w-4 h-4 mx-1 text-error-500" /> for your portfolio
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;