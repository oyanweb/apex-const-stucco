"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaSearch, FaPenFancy, FaSitemap, FaRocket } from "react-icons/fa";

const steps = [
  { id: 1, title: "Strategy & Audit", icon: <FaSearch />, description: "We dive into your business, goals, and users to guide strategy." },
  { id: 2, title: "UX & Wireframe Thinking", icon: <FaPenFancy />, description: "We design with structure and flow, building wireframes that work." },
  { id: 3, title: "Custom Design & Development", icon: <FaSitemap />, description: "We craft custom, scalable websites with personality and power." }
];

export default function WhoWeAre() {
  return (
    <section className="relative mt-10">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 ml-20">
          <h2 className="text-4xl font-bold   text-primary dark:text-white mb-6">
            Strategy‑first. Design‑second.
          </h2>
          <p className="  text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-20">
          We’re an all-in-one web agency based in Toronto, Canada, crafting custom-coded, strategy-first solutions for small companies—built to convert, scale, and stand out.
          </p>
        </div>

        {/* Vertical line */}
        <div className="absolute    transform -translate-x-1/2 h-full z-0">
          <div className="w-1 h-full border-l-2  border-primary" />
        </div>

        {/* Steps */}
        <div className="ml-20 md:w-1/2 space-y-24 relative z-10">
          {steps.map((step, i) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                ref={ref}
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="relative flex items-start md:items-center"
              >
                {/* Number circle in center */}
                <div className="absolute transform -translate-x-1/2">
                  <div
                    className={`w-13 h-13 rounded-full dark:shadow-[0_0_10px_#8B2E2E] border-2 border-[#8B2E2E] dark:border-[#8B2E2E] flex items-center justify-center text-lg font-bold transition-all duration-300 bg-[#8B2E2E]  dark:bg-[var(--primary)]
                      ${inView ? "bg-[#8B2E2E] text-[var(--secondary)] dark:text-[var(--secondary)] scale-105" : "text-transparent"}
                      hover:scale-110`}
                  >
                    {step.id}
                  </div>
                </div>

                {/* Content box   */}
                <div className="  w-full   p-6 md:pl-12  "> 
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}