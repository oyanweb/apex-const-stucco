"use client";

import React, { useState, useEffect, useRef } from "react";

const Achievements = () => {
  const CountUpStat = ({ end, duration, label }) => {
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
      <div ref={ref} className="flex flex-col items-center">
        <h3 className="text-4xl sm:text-5xl font-bold text-[var(--secondary)] mb-2">
          {label.includes("Projects") || label.includes("Years")
            ? `${count}+`
            : `${count}%`}
        </h3>
        <p className=" text-[var(--secondary)] dark:text-gray-400 text-sm sm:text-base">
          {label}
        </p>
      </div>
    );
  };

  return (
    <section className="py-16 px-4 bg-[var(--primary)]">
      <div className="max-w-7xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <CountUpStat end={150} duration={2000} label="Projects Delivered" />
          <CountUpStat end={98} duration={2000} label="Client Satisfaction" />
          <CountUpStat end={5} duration={2000} label="Years of Excellence" />
          <CountUpStat end={5} duration={2000} label="Years of Excellence" />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
