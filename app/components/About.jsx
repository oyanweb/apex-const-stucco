// app/components/About.jsx
"use client";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <section className=" px-4 py-16  ">
      <div className=" flex flex-col lg:flex-row items-center gap-12">
        {/* Images on the left */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
        
        {/* <div className="border-t-6 border-black absolute flex flex-col top-17 left-85 w-27 h-30 bg-[#FBB040] dark:bg-gray-600 z-40 flex items-center justify-center text-black font-bold text-5xl text-center">
          10+ <span className="block font-bold text-sm font-extralight text-sm font-semibold">YEARS OF EXPERIENCE</span>
        </div> */}
          <div className="relative flex items-start">
          {/* Image container for overlap */}
          <div className="relative">
            <img
              src="/about-section-2.jpg"
              alt="About Image 1"
              className="w-84 h-94 object-cover shadow-lg z-20"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10 z-30"></div>
          </div>

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
          <p className=" text-[#FFAA17] text-sm font-medium -mb-3">
            —— Welcome to our construction company
          </p>
          <h2 className="font-poppins text-2xl sm:text-4xl font-semibold text-[var(--primary-text)] dark:text-white">
          Crafting durable, elegant, and energy-efficient exteriors.
          </h2>
          <p className=" text-[var(--primary-text)]  dark:text-gray-300 text-sm sm:text-base tex-gray-300">
          Your building’s exterior is the first impression — and we make it unforgettable. From stucco and stone to modern cladding systems, our team delivers long-lasting finishes that combine beauty with strength. 
          </p>

          {/* Feature boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {/* Box 1 */}
            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 shadow-md">
              {/* Icon with orange background */}
              <div className="relative top-1 flex items-center justify-center w-20 h-14 bg-[#FFAA17]">
                <img
                  src="/handcraft.png"
                  alt="Craftsmanship"
                  className="w-8 h-8 object-contain"
                />
                {/* Vertical accent line */}
                <span className="absolute -left-3 -top-3 bottom-0 w-1 h-20 bg-[#FFAA17] -ml-3"></span>
              </div>

              {/* Text */}
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  Quality services
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Construction is a general term meaning the art.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 shadow-md">
              <div className="relative top-1  flex items-center justify-center  w-20 h-14 bg-[#FFAA17]">
                <img
                  src="/builder.png"
                  alt="Developers"
                  className="w-8 h-8 object-contain"
                />
                <span className="absolute -left-3 -top-3 bottom-0 w-1 h-20 bg-[#FFAA17] -ml-3"></span>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                  Skilled developers
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Construction is a general term meaning the art.
                </p>
              </div>
            </div>
          </div>


          {/* More about us */}
          <div className="flex items-center gap-9 mt-4">
            <Link href="/about"> 
              <button className="bg-[#FFAA17]   text-sm px-9 py-2 hover:scale-105 transition-transform"> 
                MORE ABOUT US 
              </button>
            </Link>
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
