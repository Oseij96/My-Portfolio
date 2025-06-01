import React, { useState } from 'react';
import { certificates } from '../data/certificates';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning is key to growth. Here are some of my 
            professional certifications and achievements.
          </p>
        </div>

        {/* Desktop Certificates Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative h-56 bg-gray-200 dark:bg-gray-700">
                <img
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-purple-600/70 dark:bg-purple-800/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                      View Credential
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{certificate.issuer}</p>
                <p className="text-gray-700 dark:text-gray-300">{certificate.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Certificates Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {certificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
                    <div className="relative h-56 bg-gray-200 dark:bg-gray-700">
                      <img
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{certificate.issuer}</p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{certificate.date}</p>
                      {certificate.credentialUrl && (
                        <a
                          href={certificate.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center px-4 py-2 bg-purple-600 dark:bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-800 transition-colors duration-200"
                        >
                          View Credential
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 left-0 -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-800 dark:text-gray-200"
            aria-label="Previous certificate"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-gray-800 dark:text-gray-200"
            aria-label="Next certificate"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === activeIndex
                    ? 'bg-purple-600 dark:bg-purple-400'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;