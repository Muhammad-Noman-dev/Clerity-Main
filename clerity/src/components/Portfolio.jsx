import React from 'react';
import Portfolio1 from './Portfolio1';

const Portfolio = () => {
  return (
    <div className="bg-[#020222] text-white py-20 md:py-28 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Portfolio
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          <button className="px-8 py-3.5 bg-[#3e3e8f] hover:bg-[#5050aa] text-white rounded-full font-medium transition-all duration-300 active:scale-95">
            All Projects
          </button>
          
          <button className="px-8 py-3.5 bg-transparent border border-[#6464b4] hover:border-[#7c7cd1] text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300 active:scale-95">
            Web Design
          </button>
          
          <button className="px-8 py-3.5 bg-transparent border border-[#6464b4] hover:border-[#7c7cd1] text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300 active:scale-95">
            Mobile Apps
          </button>
          
          <button className="px-8 py-3.5 bg-transparent border border-[#6464b4] hover:border-[#7c7cd1] text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300 active:scale-95">
            Branding
          </button>
          
          <button className="px-8 py-3.5 bg-transparent border border-[#6464b4] hover:border-[#7c7cd1] text-gray-300 hover:text-white rounded-full font-medium transition-all duration-300 active:scale-95">
            UI/UX
          </button>
        </div>

        {/* Projects Grid */}
        <Portfolio1 />
      </div>
    </div>
  );
};

export default Portfolio;