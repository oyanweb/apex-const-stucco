import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section >
      <div
        className="relative max-w-7xl mx-auto h-screen flex items-center justify-center bg-center bg-no-repeat bg-cover"
        style={{ 
          backgroundImage: "url('/hero-section-background.jpg')",
          backgroundSize: "1280px auto", // fixed size
         }}
      >
        {/* Overlay (optional, for darkening image) */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Left content */}
        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <h4 className="text-white">
            Great Experience In Building
          </h4>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
            The Best Solution <br /> Industry Business
          </h1>
          <p className="text-gray-100 max-w-md mb-6">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
            dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </p>
          <Link href="/contact"> 
            <button className="px-6 py-3 bg-[#FFAA17] shadow font-medium hover:bg-gray-100 transition">
              Start Project 
            </button>
          </Link>
        </div>

        {/* Right angled social bar */}
        {/* Right angled social bar */}
        <div className="absolute right-0 top-0 h-full w-20 bg-white flex flex-col items-center justify-center clip-angles z-20 shadow-lg">
          <div className="flex flex-col items-center gap-6 text-black font-medium text-sm">
        
            <Link className="[writing-mode:vertical-rl] rotate-180" href="#">FACEBOOK</Link>
            <Link className="[writing-mode:vertical-rl] rotate-180" href="#">INSTAGRAM</Link>
            <Link className="[writing-mode:vertical-rl] rotate-180" href="#">LINKEDIN</Link>
            <Link className="[writing-mode:vertical-rl] rotate-180" href="#">DRIBBLE</Link>
          </div>
        </div> 
        {/* Custom CSS for sharp angles */}
        <style jsx>{`
          .clip-angles {
            clip-path: polygon(0 40px, 100% 0, 100% 100%, 0 calc(100% - 40px));
          }
        `}</style>
      </div>
    </section>
  );
};

export default Hero;
