import React from 'react';
import img1 from '../assets/img1.webp';

const stats = [
  { value: '150+', label: 'Projects completed' },
  { value: '95%', label: 'Client satisfaction' },
  { value: '24', label: 'Team members' },
];

const Home = () => {
  return (
    <section className="min-h-screen bg-[#05050f] flex items-center py-20 px-6 md:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left - Text Content */}
        <div className="space-y-8 lg:pt-12">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm font-semibold tracking-widest text-[#b7aeff]">
            Web development · Branding · Growth
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[68px] leading-[1.05] font-bold text-white tracking-tighter">
            Transform your{' '}
            <span className="bg-gradient-to-r from-[#8f7bff] via-[#a78bff] to-[#ff8a65] bg-clip-text text-transparent">
              digital presence
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-lg leading-relaxed">
            We create innovative digital solutions that drive growth and elevate your brand. 
            From web development to digital marketing, we're your partners in digital transformation.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-[#7c6cff] to-[#6a5af0] text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 hover:-translate-y-1 transition-all duration-300">
              Get Started
            </button>
            <button className="border border-white/30 hover:border-white/50 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/5 transition-all duration-300">
              Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-10 pt-6">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">{stat.value}</h2>
                  <p className="text-gray-400 text-sm md:text-base mt-1">{stat.label}</p>
                </div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-12 bg-white/10" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right - Visual */}
        <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
          {/* Glow Effect */}
          <div className="absolute w-[420px] h-[420px] bg-gradient-to-br from-purple-500/30 to-violet-500/20 rounded-full blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Main Image */}
          <img
            src={img1}
            alt="Team collaborating on a digital project"
            className="w-full max-w-[520px] lg:max-w-[480px] rounded-3xl shadow-2xl border border-white/10 relative z-10"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-4 md:-left-8 bg-[#14142e]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex items-start gap-4 z-20">
            <div className="w-4 h-4 mt-1.5 rounded-full bg-green-400 ring-4 ring-green-400/30 flex-shrink-0" />
            <div>
              <strong className="block text-white">150+ projects</strong>
              <p className="text-gray-400 text-sm">Delivered on time, every time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;