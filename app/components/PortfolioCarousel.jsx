"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const PortfolioCarousel = () => {
  const portfolioItems = [
    {
      title: "Sample Project",
      description:
        "Another innovative project description goes here for demo purposes.",
      link: "#",
      image: "/project4.jpg",
      tag: "Design",
    },
    {
      title: "Sample Project",
      description:
        "Another innovative project description goes here for demo purposes.",
      link: "#",
      image: "/project3.jpg",
      tag: "Design",
    },
    {
      title: "Sample Project",
      description:
        "Another innovative project description goes here for demo purposes.",
      link: "#",
      image: "/project2.jpg",
      tag: "Design",
    },
    {
      title: "Sample Project",
      description:
        "Another innovative project description goes here for demo purposes.",
      link: "#",
      image: "/project1.jpg",
      tag: "Design",
    },
  ];
  const [api, setApi] = useState(null);  // ✅ works in JS & TS


  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="px-4 py-12">
      {/* Section Header */}
      <div className="max-w-4xl md:ml-10 mb-10 md:flex  frid-2 justify-between ">
        <div>
          <p className="text-[#FFAA17] text-sm font-medium mb-2">
            —— Discover our projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary-text)]  dark:text-white mb-4">
          Shaping Exteriors <br />
          That Stand the Test of Time
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mb-6">
          We bring walls to life with premium stucco, stone, and cladding solutions — designed for durability, beauty, and lasting performance.
          </p>
        </div>
        
        <div>
          <Link href="/portfolio">
            <button className="md:mt-17 md:-mr-80 bg-[#FFAA17] font-medium px-6 py-2  dark:hover:bg-gray-700 transition">
              View other projects
            </button>
          </Link>
        </div>
      </div>

      {/* Carousel */}
      <div className="max-w-6xl mx-auto relative">
        <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
          <CarouselContent className="">
            {portfolioItems.map((item, index) => (
              <CarouselItem
                key={index}
                className=" basis-1/1 sm:basis-1/2 lg:basis-1/4 pb-16"
              >
                <div className="relative">
                  {/* Image */}
                  <div className="h-80  border border-gray-700">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div> 

                  {/* Floating Box (outside image) */}
                  <div className="absolute left-0 right-0 -bottom-16 px-5 ">
                    <div className="relative bg-white dark:bg-gray-800 shadow-md border border-gray-700 dark:border-gray-700 p-4 mt-80 h-20 flex flex-col">
                      {/* Tag */}
                      <span className="absolute -top-4 uppercase center  border border-gray-700 bg-[#FFAA17] dark:bg-gray-700 text-xs font-medium px-3 py-1 shadow">
                        {item.title}
                      </span>

                      {/* Title */}
                      {/* <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3> */}

                      {/* Description (truncated, but fills evenly) */}
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 flex-grow">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
            </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-50" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-50" />

        </Carousel>

        {/* Pagination dots */}
        {/* <div className="flex justify-center mt-6 space-x-2">
          {portfolioItems.map((_, i) => (
            <span
              key={i}
              className="w-2 h-2 bg-gray-400 dark:bg-gray-600 rounded-full"
            ></span>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default PortfolioCarousel;
