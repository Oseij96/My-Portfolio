import React, { useState, useEffect, useRef } from 'react';
import { timelineEvents } from '../data/timeline';

const Timeline: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.2 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const handleEventClick = (eventId: string) => {
    setActiveEventId(activeEventId === eventId ? null : eventId);
  };

  return (
    <section id="timeline" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Coding Journey</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my path through the world of software development, from my first
            lines of code to where I am today.
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

          {/* Timeline Events */}
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className={`timeline-item mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } opacity-0 transition-opacity duration-500 ease-in-out`}
            >
              <div className="md:w-1/2 mb-6 md:mb-0">
                <div
                  className={`relative mx-4 p-6 rounded-lg shadow-md ${
                    activeEventId === event.id
                      ? 'bg-blue-100 dark:bg-blue-900/30'
                      : 'bg-white dark:bg-gray-900'
                  } transition-colors duration-300 hover:shadow-lg cursor-pointer`}
                  onClick={() => handleEventClick(event.id)}
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
                    {event.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {event.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    {activeEventId === event.id
                      ? event.description
                      : `${event.description.substring(0, 100)}${
                          event.description.length > 100 ? '...' : ''
                        }`}
                  </p>
                  {event.description.length > 100 && (
                    <button
                      className="mt-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEventClick(event.id);
                      }}
                    >
                      {activeEventId === event.id ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white dark:border-gray-800 bg-blue-600 dark:bg-blue-400"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;