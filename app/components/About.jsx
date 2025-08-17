// app/components/About.jsx
"use client";
import React from "react";

const About = () => {
  return (
    <section className=" px-4 py-16  ">
      <div className=" flex flex-col lg:flex-row items-center gap-12">
        {/* Images on the left */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
        
        <div className="absolute flex flex-col text-white top-17 left-85 w-27 h-30 bg-[#2F5540] dark:bg-gray-600 z-40 flex items-center justify-center text-black font-bold text-3xl text-center">
          10+ <span className="block font-bold text-2xl text-sm font-normal">Years of experience</span>
        </div>
          <div className="relative flex items-start">
          {/* Image container for overlap */}
          <img
            src="/about-section-2.jpg"
            alt="About Image 1"
            className="w-84 h-94 object-cover shadow-lg z-20"
          />

          {/* Image 2 lower than Image 1 */}
          <img
            src="/about-section-1.jpg"
            alt="About Image 2"
            className="w-74  h-84 object-cover shadow-lg z-30 -ml-55 mt-30"
          />
          {/* <div className="absolute top-12 left-12 w-48 h-48 bg-gray-400 dark:bg-gray-600 z-40 flex items-center justify-center text-black font-bold text-lg">
            10+ <span className="block text-sm font-normal">Years of experience</span>
          </div>
          <img
            src="/about-section-1.jpg"
            alt="About Image 1"
            className="relative right-20 w-84 h-84 object-cover z-20 shadow-lg"
          />
          <img
            src="/about-section-2.jpg"
            alt="About Image 2"
            className="absolute top-10 left-40 w-84 h-74 object-cover z-30  shadow-lg mt-32"
          /> */}
        </div>
        </div>

        {/* Text content on the right */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] dark:text-white">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            vehicula, urna in facilisis sagittis, metus justo venenatis purus,
            a tincidunt lacus lorem a orci.
          </p>

          {/* Feature boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-4 p-4 bg-gray-100 dark:bg-gray-800items-center">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Lorem ipsum dolor
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-gray-100 dark:bg-gray-800 items-center">
              <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Lorem ipsum dolor
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>

          {/* More about us */}
          <div className="flex items-center gap-4 mt-4">
            <button className="bg-[var(--primary)] text-white px-6 py-2 hover:scale-105 transition-transform">
              More about us
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">MAKTPEK</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Lorem ipsum dolor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
