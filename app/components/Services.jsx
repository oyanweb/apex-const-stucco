"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Exterior Wall Systems",
      description:
        "Complete solutions for protection, insulation, and lasting performance.",
      image: "/ext_walls.webp",
    },
    {
      number: "02",
      title: "Stucco Finishes",
      description:
        "Smooth, textured, and durable plaster coatings for any style.",
      image: "/stucco.jpg",
    },
    {
      number: "03",
      title: "Stone Veneers & Masonry",
      description:
        "Timeless beauty and strength with natural or manufactured stone.",
      image: "/cladding.webp",
    },
    {
      number: "04",
      title: "Modern Cladding",
      description:
        "Stylish, low-maintenance panels that enhance and protect exteriors.",
      image: "/modern-cladding.webp",
    },
  ];

  return (
    <section className="md:py-16 px-0">
      {/* Section Header */}
      <div className="max-w-4xl md:ml-10 md:mb-10 px-4">
          <p className=" text-[#FFAA17] text-sm font-medium mb-2">
            —— Discover our services
          </p>
          <h2 className=" text-3xl sm:text-4xl font-bold  text-[var(--primary-text)]  dark:text-white mb-4">
            High Quality Services Of <br className="hidden md:flex"/> 
            Multiple Industries
          </h2> 
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 w-full">
        {services.map((service, index) => (
          <Card
          key={index}
          className="relative shadow-sm hover:shadow-md transition-none rounded-none h-110 overflow-hidden"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for the background image */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        
           {/* Number at the top */}
        <span className="absolute top-4 left-6 text-lg font-bold text-gray-200 z-10">
          {service.number}
        </span>

        {/* Content at the bottom */}
        <CardContent className="relative p-6 flex flex-col justify-end h-full text-white z-10">
          <h3 className="font-semibold text-lg">{service.title}</h3>
          <p className="mt-2 text-sm">{service.description}</p>
          <Link href="/services" className="mt-4 inline-block font-medium underline">
            Read more
          </Link>
          </CardContent>
        </Card>
        
        ))}
      </div>
    </section>
  );
};

export default Services;
