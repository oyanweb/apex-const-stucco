"use client";

import React, { useState, useEffect, useRef } from "react";

const Achievements = () => {
  const CountUpStat = ({ end, duration, label, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCount(Math.floor(start));
            }, 16);
            return () => clearInterval(timer);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [end, duration, hasAnimated]);

    return (
      <div ref={ref} className="flex flex-col items-center text-center">
        <h3 className="text-3xl sm:text-5xl font-semibold text-white mb-2">
          {count}
          {suffix}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base">{label}</p>
      </div>
    );
  };

  return (
    <section className="py-16 px-4 bg-[#0B0E29]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-4 gap-10">
          <CountUpStat end={126} duration={2000} label="Happy Customers" suffix="+" />
          <CountUpStat end={32} duration={2000} label="On-Going Projects" suffix="+" />
          <CountUpStat end={50} duration={2000} label="Happy Customers" suffix="k" />
          <CountUpStat end={50} duration={2000} label="Awards Achievement" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
