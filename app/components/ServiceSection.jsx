"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

 
 
const services = [
  {
    id: "01",
    title: "Exterior Wall Systems",
    image: "/ext_walls.webp",
  },
  {
    id: "02",
    title: "Stucco Finishes",
    image: "/stucco.jpg",
  },
  {
    id: "03",
    title: "Stone Veneers & Masonry",
    image: "/cladding.webp",
  },
  {
    id: "04",
    title: "Modern Cladding",
    image: "/modern-cladding.webp",
  },
  {
    id: "05",
    title: "Consultation",
    image: "/consultation.jpg",
  },
];

export default function ServicesSection() {
  const firstTwo = services.filter((s) => s.id === "01" || s.id === "02");
  const remaining = services.filter((s) => s.id !== "01" && s.id !== "02");

  return (
    <section className="max-w-7xl mx-auto py-16 px-2 md:px-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Left text block */}
        <div className="col-span-1">
          <h2 className="text-3xl font-bold leading-snug text-gray-900">
          Exterior Construction to Build Strength<br className="hidden md:block"/>
          </h2>
          <p className="mt-4 text-gray-600">
          Our mission is more than construction — it’s creating exteriors that reflect strength, style, and lasting value.
          </p>
        </div>

        {/* First 2 services */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {firstTwo.map((service) => (
            <div
              key={service.id}
              className="group relative h-64 overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              {/* Background Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            
              {/* Bottom info bar */}
              <div className="absolute bottom-0 left-0 w-full bg-white/90 p-4 flex justify-between items-center">
                <span className="font-semibold text-gray-900 text-sm">
                  {service.id}. {service.title}
                </span>
                <Plus className="text-orange-500 w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Remaining services */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {remaining.map((service) => (
          <div
            key={service.id}
            className="group relative h-64 overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
            <div className="absolute bottom-0 left-0 w-full bg-white/90 p-4 flex justify-between items-center">
              <span className="font-semibold text-gray-900 text-sm">
                {service.id}. {service.title}
              </span>
              <Plus className="text-orange-500 w-5 h-5" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
