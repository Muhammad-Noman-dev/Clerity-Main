import React from "react";
import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.webp";
import about3 from "../assets/about3.png";

const About = () => {
  return (
    <section className="w-full bg-[#020217] py-24">
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <p className="text-[#5f7cff] uppercase tracking-[4px] text-sm font-semibold mb-5">
              Discover Our Story
            </p>

            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Innovative Solutions <br />
              for a Digital-First World
            </h2>

            <p className="text-gray-300 text-lg leading-8 mb-10 max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="space-y-5 mb-10">

              <div className="flex items-center gap-4">
                <span className="text-green-400 text-2xl">✔</span>
                <p className="text-gray-200 text-lg">
                  Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-green-400 text-2xl">✔</span>
                <p className="text-gray-200 text-lg">
                  Nemo enim ipsam voluptatem quia voluptas sit.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-green-400 text-2xl">✔</span>
                <p className="text-gray-200 text-lg">
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </p>
              </div>

            </div>

            <button className="bg-gradient-to-r from-[#5f5fff] to-[#4c4cff] hover:from-[#6f6fff] hover:to-[#5959ff] text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300">
              Discover More
            </button>
          </div>

          {/* Right Images */}
          <div className="relative flex justify-center lg:justify-end h-[650px]">

            {/* Main Image */}
            <img
              src={about1}
              alt="about"
              className="w-full max-w-[520px] h-full object-cover rounded-3xl border-8 border-gray-300 shadow-2xl"
            />

            {/* Bottom Left */}
            <img
              src={about2}
              alt="about"
              className="absolute bottom-0 left-0 w-60 md:w-72 rounded-3xl border-8 border-gray-300 shadow-2xl"
            />

            {/* Top Right */}
            <img
              src={about3}
              alt="about"
              className="absolute top-0 right-0 w-52 md:w-60 rounded-3xl border-8 border-gray-300 shadow-2xl"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;