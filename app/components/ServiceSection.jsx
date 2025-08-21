"use client";

import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "01",
    title: "Exterior Wall Systems",
    image: "/ext_walls.webp",
    description: "Exterior wall systems are the outer shell of a building — everything that makes up the exterior walls beyond just the bricks or siding. They include materials, insulation, air/vapor barriers, and cladding systems."
  },
  {
    id: "02",
    title: "Stucco Finishes",
    image: "/stucco.jpg",
    description: "Stucco is a cement-based plaster applied to exterior (and sometimes interior) walls. It’s made from cement, sand, lime, and water, and is applied in layers over a base (metal lath, concrete, or insulation board)."
  },
  {
    id: "03",
    title: "Stone Veneers & Masonry",
    image: "/cladding.webp",
    description: "Stone veneers and masonry involve using natural stone, manufactured stone, or brickwork as part of a building’s exterior or interior design."
  },
  {
    id: "04",
    title: "Modern Cladding",
    image: "/modern-cladding.webp",
    description: "Modern cladding refers to contemporary exterior wall coverings that go beyond traditional stucco or brick. It includes materials like metal panels, composite boards, fiber cement, aluminum, high-pressure laminates, or glass systems."
  },
  {
    id: "05",
    title: "Consultation",
    image: "/consultation.jpg",
    description: "A consultation service is about giving clients expert advice before construction starts — helping them choose the right exterior systems (stucco, cladding, masonry, etc.) based on budget, design goals, building codes, and performance needs."
  },
];

export default function ServicesSection() {
  const [openId, setOpenId] = useState(null);

  const toggleDescription = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const firstTwo = services.filter((s) => s.id === "01" || s.id === "02");
  const remaining = services.filter((s) => s.id !== "01" && s.id !== "02");

  const renderServiceCard = (service) => (
    <div
      key={service.id}
      className="group relative h-auto overflow-hidden shadow-lg hover:shadow-xl transition"
    >
      {/* Background Image */}
      <div className="relative h-64">
      <div className="absolute inset-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
      </div>

      </div>

      {/* Bottom info bar */}
      <div className="bg-white/90 p-4 flex justify-between items-center">
        <span className="font-semibold text-gray-900 text-sm">
          {service.id}. {service.title}
        </span>
        <button onClick={() => toggleDescription(service.id)}>
          {openId === service.id ? (
            <Minus className="text-orange-500 w-5 h-5" />
          ) : (
            <Plus className="text-orange-500 w-5 h-5" />
          )}
        </button>
      </div>

      {/* Expandable Description */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          openId === service.id ? "max-h-40 p-4 bg-white/80" : "max-h-0"
        }`}
      >
        <p className="text-gray-700 text-sm">{service.description}</p>
      </div>
    </div>
  );

  return (
    <section className="max-w-7xl mx-auto py-16 px-2 md:px-40">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Left text block */}
        <div className="col-span-1">
          <h2 className="text-3xl font-bold leading-snug text-gray-900">
            Exterior Construction to Build Strength
            <br className="hidden md:block" />
          </h2>
          <p className="mt-4 text-gray-600">
            Our mission is more than construction — it’s creating exteriors that
            reflect strength, style, and lasting value.
          </p>
        </div>

        {/* First 2 services */}
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {firstTwo.map(renderServiceCard)}
        </div>
      </div>

      {/* Remaining services */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {remaining.map(renderServiceCard)}
      </div>
    </section>
  );
}
