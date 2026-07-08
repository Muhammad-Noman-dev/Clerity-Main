import React from 'react';
import about1 from '../assets/about1.webp';
import about2 from '../assets/about2.webp';
import about3 from '../assets/about3.png';

const About = () => {
  return (
    <div className="bg-[#020217] py-20 px-6 md:px-10 lg:px-16 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-block">
            <p className="text-blue-500 font-semibold tracking-[3px] text-sm md:text-base">
              DISCOVER OUR STORY
            </p>
          </div>
          
          <h2 className="text-white text-4xl md:text-5xl lg:text-[52px] leading-[1.1] font-semibold">
            Innovative Solutions for a <br className="hidden md:block" />
            Digital-First World
          </h2>

          <p className="text-gray-300 text-[17px] leading-relaxed max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <div className="space-y-3">
            <div className="flex items-start gap-3 text-gray-200">
              <span className="text-green-400 text-xl mt-0.5">✔</span>
              <p>Excepteur sint occaecat cupidatat non proident.</p>
            </div>
            <div className="flex items-start gap-3 text-gray-200">
              <span className="text-green-400 text-xl mt-0.5">✔</span>
              <p>Nemo enim ipsam voluptatem quia voluptas sit.</p>
            </div>
            <div className="flex items-start gap-3 text-gray-200">
              <span className="text-green-400 text-xl mt-0.5">✔</span>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
            </div>
          </div>

          <button className="bg-[#3e3e8f] hover:bg-[#5050aa] transition-all duration-300 text-white px-10 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95">
            DISCOVER MORE
          </button>
        </div>

        {/* Image Section */}
        <div className="relative h-[520px] lg:h-[560px] flex justify-center order-1 lg:order-2 mx-auto max-w-[420px] lg:max-w-none">
          {/* Main Image */}
          <img
            src={about1}
            alt="About main"
            className="w-full max-w-[420px] h-auto rounded-2xl border-8 border-gray-400 shadow-2xl object-cover z-10"
          />

          {/* Child Image 1 - Bottom Left */}
          <img
            src={about2}
            alt="About secondary 1"
            className="absolute -bottom-6 -left-8 md:-left-12 w-60 h-60 md:w-64 md:h-64 rounded-2xl border-8 border-gray-300 shadow-xl object-cover z-20"
          />

          {/* Child Image 2 - Top Right */}
          <img
            src={about3}
            alt="About secondary 2"
            className="absolute -top-8 -right-6 md:-right-10 w-52 h-52 md:w-56 md:h-56 rounded-2xl border-8 border-gray-300 shadow-xl object-cover z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default About;