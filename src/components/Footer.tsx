import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Portfolio</h3>
            <p className="mb-4 text-gray-400">
              Building beautiful, functional web experiences with modern technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#certificates" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Certificates
                </a>
              </li>
              <li>
                <a 
                  href="#timeline" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Timeline
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Let's Connect</h3>
            <p className="mb-4 text-gray-400">
              I'm always open to new opportunities and collaborations.
            </p>
            <a 
              href="#contact" 
              className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="flex items-center justify-center text-gray-400">
            <span>© {currentYear} Your Name. All rights reserved.</span>
            <span className="mx-2">|</span>
            <span className="flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" fill="currentColor" /> using React & Tailwind
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;