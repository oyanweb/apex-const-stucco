"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "Starter Strategy",
      description:
        "Brand discovery, competitor audit, tone of voice, and homepage wireframe to set your foundation.",
      image: "/service-1-stucco.jpg",
    },
    {
      number: "02",
      title: "Growth Package",
      description:
        "Content mapping, CTA optimization, 5-page custom design + dev, and SEO planning for growth.",
      image: "/service-1-stucco.jpg",
    },
    {
      number: "03",
      title: "Scaling Mastery",
      description:
        "Conversion-focused design, headless CMS setup, checkout optimization, and analytics reporting.",
      image: "/service-1-stucco.jpg",
    },
    {
      number: "04",
      title: "SEO + Optimization",
      description:
        "Advanced keyword strategy, content optimization, schema setup, and ongoing performance tracking.",
      image: "/service-1-stucco.jpg",
    },
  ];

  return (
    <section className="py-16 px-0">
      {/* Section Header */}
      <div className="max-w-4xl ml-10 mb-10">
          <p className="text-sm font-medium text-gray-500 mb-2">
            —— Discover our projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--primary)] dark:text-white mb-4">
            High Quality Services Of <br /> 
            Multiple Industries
          </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
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
