import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-blue-100 dark:bg-blue-900/20 rounded-bl-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-purple-100 dark:bg-purple-900/20 rounded-tr-full opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="block">Hi, I'm</span>
              <span className="text-blue-600 dark:text-blue-400 block">Joel Osei</span>
              <span className="block">Web Developer</span>
            </h1>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              I build exceptional digital experiences that are fast, accessible, 
              visually appealing, and responsive. Let's turn your vision into reality.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 text-lg font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors duration-300 text-lg font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFssS77C3xtFg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1694274862336?e=1753920000&v=beta&t=kciHKhHrZbHfryI6DwkQZZd7yJcP2tXGB68OsFKLfjQ"
                alt="Joel Osei"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" aria-label="Scroll down">
          <ChevronDown size={32} className="text-blue-600 dark:text-blue-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;