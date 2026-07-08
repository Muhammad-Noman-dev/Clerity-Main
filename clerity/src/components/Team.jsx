import React from 'react';
import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';
import photo4 from '../assets/photo4.png';
import rocket from '../assets/rocket.png';

const Team = () => {
  return (
    <div className="bg-[#020222] text-white py-20 md:py-28 px-6">
      {/* Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Team</h2>
        <p className="text-gray-400 text-lg md:text-xl">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h3 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Meet Our Exceptional Team
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-5xl md:text-6xl font-bold text-blue-400">50+</h4>
              <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">Team Members</p>
            </div>
            <div className="text-center">
              <h4 className="text-5xl md:text-6xl font-bold text-blue-400">8</h4>
              <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">Departments</p>
            </div>
            <div className="text-center">
              <h4 className="text-5xl md:text-6xl font-bold text-blue-400">15+</h4>
              <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">Countries</p>
            </div>
          </div>
        </div>

        {/* Team Photos */}
        <div className="grid grid-cols-2 gap-6">
          <img 
            src={photo1} 
            alt="Team member 1" 
            className="rounded-3xl shadow-2xl w-full aspect-square object-cover hover:scale-105 transition-transform duration-500" 
          />
          <img 
            src={photo2} 
            alt="Team member 2" 
            className="rounded-3xl shadow-2xl w-full aspect-square object-cover hover:scale-105 transition-transform duration-500 mt-12" 
          />
          <img 
            src={photo3} 
            alt="Team member 3" 
            className="rounded-3xl shadow-2xl w-full aspect-square object-cover hover:scale-105 transition-transform duration-500" 
          />
          <img 
            src={photo4} 
            alt="Team member 4" 
            className="rounded-3xl shadow-2xl w-full aspect-square object-cover hover:scale-105 transition-transform duration-500 mt-12" 
          />
        </div>
      </div>

      {/* Join Us Section */}
      <div className="mt-28 max-w-xl mx-auto bg-[#101022] rounded-3xl p-12 md:p-16 text-center">
        <img 
          src={rocket} 
          alt="Rocket" 
          className="w-24 h-24 mx-auto mb-8" 
        />
        
        <h4 className="text-3xl font-semibold mb-6">Ready to Join Our Mission?</h4>
        
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#3131c9] hover:bg-[#3a3ad4] text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1">
            View Open Roles
          </button>
          <button className="border-2 border-[#2f2fdb] hover:bg-[#2f2fdb] text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1">
            Learn Our Culture
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;