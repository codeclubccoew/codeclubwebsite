import React, { useState,useEffect } from 'react';
import eventsData from './EventsData.json';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [yearFilter, setYearFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [eventsPerPage, setEventsPerPage] = useState(4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      // Adjust events per page based on screen size
      if (window.innerWidth < 640) { // Mobile
        setEventsPerPage(1);
      } else if (window.innerWidth < 1024) { // Tablet
        setEventsPerPage(2);
      } else { // Desktop
        setEventsPerPage(4);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Previous arrow click handler
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  // Next arrow click handler
  const handleNext = () => {
    setCurrentIndex(prev => 
      Math.min(prev + 1, Math.ceil(filteredEvents.length / eventsPerPage) - 1)
    );
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
   
    let suffix = 'th';
    if (day % 10 === 1 && day !== 11) suffix = 'st';
    else if (day % 10 === 2 && day !== 12) suffix = 'nd';
    else if (day % 10 === 3 && day !== 13) suffix = 'rd';
   
    return `${day}${suffix} ${month} ${year}`;
  };

  // Filter events by year
  const filteredEvents = eventsData.filter(event => 
    yearFilter === 'All' || 
    new Date(event.date).getFullYear().toString() === yearFilter
  );

  // Get unique years for filter
  const availableYears = [...new Set(eventsData.map(event => 
    new Date(event.date).getFullYear().toString()
  ))].sort((a, b) => b - a);

  const handleLearnMore = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  // Get current events to display
  const currentEvents = filteredEvents.slice(
    currentIndex * eventsPerPage,
    (currentIndex + 1) * eventsPerPage
  );

  return (
    <section id="events" className="min-h-screen flex flex-col items-center justify-center bg-[#1F2833] text-white p-4 relative">
      <h1 className="text-3xl md:text-4xl font-bold text-white-500 mb-8 md:mb-12">Events Timeline</h1>
      
      {/* Year Filter - Responsive sizing */}
      <div className="flex flex-wrap gap-2 justify-center mb-6 md:mb-8">
        <button
          onClick={() => {
            setYearFilter('All');
            setCurrentIndex(0);
          }}
          className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base ${yearFilter === 'All' ? 'bg-cyan-600' : 'bg-gray-700'} hover:bg-cyan-700 transition-colors`}
        >
          All Years
        </button>
        {availableYears.map(year => (
          <button
            key={year}
            onClick={() => {
              setYearFilter(year);
              setCurrentIndex(0);
            }}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base ${yearFilter === year ? 'bg-cyan-600' : 'bg-gray-700'} hover:bg-cyan-700 transition-colors`}
          >
            {year}
          </button>
        ))}
      </div>
     
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Navigation Arrows - Responsive positioning */}
        {currentIndex > 0 && (
          <button 
            onClick={handlePrev}
            className={`absolute ${windowWidth < 640 ? 'left-2' : 'left-0'} top-1/2 -translate-y-1/2 z-20 p-1 md:p-2 rounded-full bg-gray-800 bg-opacity-70 hover:bg-opacity-100 transition-all group`}
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-full transform rotate-45 group-hover:rotate-[30deg] transition-transform
                            shadow-[0_0_10px_3px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_15px_5px_rgba(34,211,238,0.8)]"></div>
              <div className="absolute left-2 top-2 md:left-3 md:top-3 w-3 h-3 md:w-4 md:h-4 border-l-2 border-b-2 border-cyan-300"></div>
            </div>
            <span className="sr-only">Previous events</span>
          </button>
        )}

        {currentIndex < Math.ceil(filteredEvents.length / eventsPerPage) - 1 && (
          <button 
            onClick={handleNext}
            className={`absolute ${windowWidth < 640 ? 'right-2' : 'right-0'} top-1/2 -translate-y-1/2 z-20 p-1 md:p-2 rounded-full bg-gray-800 bg-opacity-70 hover:bg-opacity-100 transition-all group`}
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-full transform -rotate-45 group-hover:-rotate-[30deg] transition-transform
                            shadow-[0_0_10px_3px_rgba(34,211,238,0.5)] group-hover:shadow-[0_0_15px_5px_rgba(34,211,238,0.8)]"></div>
              <div className="absolute right-2 top-2 md:right-3 md:top-3 w-3 h-3 md:w-4 md:h-4 border-r-2 border-b-2 border-cyan-300"></div>
            </div>
            <span className="sr-only">Next events</span>
          </button>
        )}

        {/* Animated Glowing Timeline - Hidden on small mobile */}
        <div className="hidden sm:block absolute left-0 right-0 top-1/2 h-[4px] bg-cyan-400 transform -translate-y-1/2 z-0
                      shadow-[0_0_15px_5px_rgba(34,211,238,0.7)] animate-[pulse_3s_ease-in-out_infinite]"></div>
       
        {/* Events container with horizontal scroll on mobile */}
        <div className="relative overflow-x-auto sm:overflow-visible pb-4 sm:pb-0">
          <div className={`flex ${windowWidth < 640 ? 'justify-start gap-4 pl-4' : 'justify-between'} z-10 px-2 sm:px-10 w-max sm:w-full mx-auto`}>
            {currentEvents.map((event, index) => (
              <EventWithDiamond
                key={index}
                event={event}
                index={index}
                formatDate={formatDate}
                onLearnMore={handleLearnMore}
                isMobile={windowWidth < 640}
              />
            ))}
          </div>
        </div>
      </div>
     
      {/* Help Text - Responsive text size */}
      <div className="mt-6 md:mt-8 text-white-300 text-xs md:text-sm flex items-center">
        <span className="mr-2">Click the diamonds</span>
        <DiamondHint />
        <span className="ml-2">to view event details</span>
      </div>

      {/* Event Details Modal - Responsive sizing */}
      {isModalOpen && selectedEvent && (
  <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4">
    <div className="bg-[#1F2833] rounded-lg w-full max-w-[95vw] sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto border-2 border-cyan-500 shadow-xl shadow-cyan-500/30">
      <div className="p-3 sm:p-4 md:p-6">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-cyan-400">{selectedEvent.title}</h2>
          <button 
            onClick={closeModal}
            className="text-gray-400 hover:text-white text-xl sm:text-2xl"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6">
          <div className="md:w-1/3">
            <img 
              src={selectedEvent.image} 
              alt={selectedEvent.title} 
              className="w-full h-auto rounded-lg border border-cyan-500"
            />
          </div>
          
          <div className="md:w-2/3">
            <div className="mb-2 sm:mb-3 md:mb-4">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cyan-300 mb-1 sm:mb-2">Event Date</h3>
              <p className="text-xs sm:text-sm md:text-base">{formatDate(selectedEvent.date)}</p>
            </div>
            
            <div className="mb-2 sm:mb-3 md:mb-4">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cyan-300 mb-1 sm:mb-2">Description</h3>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
                {selectedEvent.fullDescription}
              </p>
            </div>
            
            {selectedEvent.socialLinks?.length > 0 && (
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-cyan-300 mb-1 sm:mb-2">Related Links</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {selectedEvent.socialLinks.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-1 text-xs sm:text-sm md:text-base bg-cyan-600 hover:bg-cyan-700 rounded-md text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-2 sm:p-3 md:p-4 bg-[#0B0C10] rounded-b-lg flex justify-end">
        <button 
          onClick={closeModal}
          className="px-3 py-1 sm:px-4 sm:py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-white text-sm sm:text-base transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
  )}
  </section>
  );
};

const EventWithDiamond = ({ event, index, formatDate, onLearnMore, isMobile }) => {
  const [isRotated, setIsRotated] = useState(false);

  return (
    <div className={`flex flex-col items-center ${isMobile ? 'min-w-[150px]' : ''}`}>
      {/* Glowing Hollow Diamond with better mobile sizing */}
      <div className="flex items-center mb-3 md:mb-4 group relative">
        <button
          onClick={() => setIsRotated(!isRotated)}
          className="w-5 h-5 focus:outline-none mr-2 relative" // Fixed size for all devices
          aria-label="View event details"
        >
          <div className={`relative w-full h-full transition-transform duration-500 ${isRotated ? 'rotate-180' : ''}`}>
            <div className="absolute w-full h-full border-2 border-white-500 transform rotate-45
                          shadow-[0_0_10px_3px_rgba(34,211,238,0.7)]
                          hover:shadow-[0_0_15px_5px_rgba(34,211,238,0.9)]
                          transition-all duration-300"></div>
            <div className="absolute left-1/4 top-1/4 w-1/2 h-1/2 border-2 border-white-400 transform rotate-45
                          shadow-[0_0_6px_2px_rgba(34,211,238,0.6)]"></div>
          </div>
          <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Click me!
          </div>
        </button>
        <div className="text-cyan-400 text-xs md:text-sm whitespace-nowrap">
          {formatDate(event.date)}
        </div>
      </div>
     
      {/* Event Card - Responsive sizing */}
      <div className={`relative ${isMobile ? 'w-40 h-40' : 'w-36 h-36 md:w-48 md:h-48'} ${index % 2 === 1 ? 'mt-4 md:mt-8' : 'mb-4 md:mb-8'}`}>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover rounded-lg shadow-lg border-2 border-cyan-500"
        />
       
        {isRotated && (
          <div className="absolute inset-0 bg-black bg-opacity-80 rounded-lg flex flex-col justify-center items-center p-2 md:p-4 animate-[fadeIn_0.3s_ease-in-out]">
            <h3 className="text-sm md:text-xl font-bold text-center">{event.title}</h3>
            <p className="text-xs md:text-sm mt-1 md:mt-2 text-center">{event.description}</p>
            <button 
              onClick={() => onLearnMore(event)}
              className="mt-2 md:mt-4 px-3 py-1 md:px-4 md:py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-xs md:text-base transition-colors"
            >
              Learn More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const DiamondHint = () => (
  <div className="relative w-3 h-3 md:w-4 md:h-4">
    <div className="absolute w-3 h-3 md:w-4 md:h-4 border-2 border-cyan-500 transform rotate-45 animate-bounce
                   shadow-[0_0_8px_2px_rgba(34,211,238,0.8)] hover:shadow-[0_0_12pxa_4px_rgba(34,211,238,0.9)] transition-shadow"></div>
    <div className="absolute w-1 h-1 md:w-2 md:h-2 border-2 border-cyan-400 transform rotate-45 left-1 top-1
                   shadow-[0_0_4px_1px_rgba(34,211,238,0.6)]"></div>
  </div>
);

export default Events;