import React from 'react';
import po1 from '../assets/po1.webp';
import po2 from '../assets/po2.webp';
import po3 from '../assets/po3.webp';
import po4 from '../assets/po4.webp';
import po5 from '../assets/po5.webp';
import po6 from '../assets/po6.webp';

const Portfolio1 = () => {
  const projects = [
    {
      image: po1,
      category: "WEB DESIGN",
      rating: "4.8",
      title: "Digital Innovation Platform",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      tags: ["React", "Node.Js", "AWS"]
    },
    {
      image: po2,
      category: "MOBILE APP",
      rating: "4.9",
      title: "Smart Productivity App",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
      tags: ["Flutter", "Firebase", "AI"]
    },
    {
      image: po3,
      category: "WEB DESIGN",
      rating: "5.0",
      title: "Digital Innovation Platform",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      tags: ["React", "Node.Js", "AWS"]
    },
    {
      image: po4,
      category: "WEB DESIGN",
      rating: "4.8",
      title: "Digital Innovation Platform",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      tags: ["React", "Node.Js", "AWS"]
    },
    {
      image: po5,
      category: "WEB DESIGN",
      rating: "4.7",
      title: "Digital Innovation Platform",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      tags: ["React", "Node.Js", "AWS"]
    },
    {
      image: po6,
      category: "WEB DESIGN",
      rating: "4.6",
      title: "Digital Innovation Platform",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      tags: ["React", "Node.Js", "AWS"]
    }
  ];

  return (
    <div>
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-[#101022] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
              />
            </div>

            <div className="p-8">
              {/* Category & Rating */}
              <div className="flex justify-between items-center mb-6">
                <button className="bg-[#46466d] text-white text-xs font-semibold px-5 py-2 rounded-full tracking-wider">
                  {project.category}
                </button>
                <div className="flex items-center gap-1 text-yellow-400 font-medium">
                  ⭐ {project.rating}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-white mb-4 leading-tight">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-[15px] leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i}
                    className="bg-[#21212b] text-gray-300 text-xs px-4 py-2 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="mt-24 bg-[#101022] rounded-3xl py-16 px-8 md:px-16 max-w-5xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to start your next project?
        </h3>
        <p className="text-gray-400 text-lg max-w-md mx-auto mb-10">
          Let's work together to bring your digital vision to life
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#2121ce] hover:bg-[#2a2ad9] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1">
            Start A Project
          </button>
          <button className="border-2 border-[#2121ce] hover:bg-white/5 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1">
            View All Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio1;