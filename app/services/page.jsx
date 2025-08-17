"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  FaLaptopCode,
  FaSearch,
  FaTools,
  FaLightbulb,
  FaRocket,
  FaCode,
  FaGlobe,
  FaHandshake,
  FaChartLine,
  FaPaintBrush,
  FaTrophy,
  FaSpinner,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const Services = () => {

  const services = [
    {
      title: "Starter Strategy",
      description: [
        "Brand Discovery Session",
        "Website & Competitor Audit",
        "Ideal Customer Persona",
        "Tone of Voice & Messaging Guide",
        "Homepage Wireframe (non-visual)",
        "1-Hour Strategy Review Call",
      ],
      price: "$299",
      ctaText: "Book Strategy Sprint",
      icon: <FaLightbulb />,
      bgColor: "bg-white dark:bg-zinc-900",
      textColor: "text-black dark:text-white",
    },
    {
      title: "Growth Package",
      description: [
        "Everything in Starter",
        "Full Website Content Map",
        "CTA Optimization Strategy",
        "SEO Keyword Planning",
        "5-page Custom Design + Dev (Next.js + Tailwind)",
        "Mobile Optimization",
        "Performance + Accessibility Testing",
        "Basic On-page SEO Setup",
      ],
      price: "$1,000-3,500",
      ctaText: "Start Your Website",
      icon: <FaLaptopCode />,
      bgColor: "bg-white dark:bg-zinc-900",
      textColor: "text-black dark:text-white",
    },
    {
      title: "Scaling Mastery",
      description: [
        "Everything in Growth Package",
        "Conversion-Focused Page Design (Landing, PDP, Cart)",
        "Custom Checkout Optimization",
        "Headless CMS (Sanity or Contentful)",
        "Email Marketing Strategy + Opt-in Flow",
        "Product Schema / SEO Optimization",
        "Monthly Analytics Reports",
      ],
      price: "$3,500-5,000",
      ctaText: "Launch Your Store",
      icon: <FaRocket />,
      bgColor: "bg-white dark:bg-zinc-900",
      textColor: "text-black dark:text-white",
    },
    // {
    //     title: "Brand + Strategy Essentials",
    //     description: [
    //         "Everything in Starter Strategy Sprint",
    //         "Visual Moodboard & Style Tile",
    //         "Brand Color Palette & Typography",
    //         "Logo Refinement or Starter Logo (optional)",
    //         "2 Page Website Design Mockups (Figma)",
    //         "Strategic Content Writing Guide (SEO-friendly)",
    //         "Customer Journey Map",
    //         "1-Hour Design Review Call",
    //     ],
    //     price: "$750-1,200",
    //     ctaText: "Start With Strategy & Design",
    //     icon: <FaChartLine />,
    //     bgColor: "bg-white dark:bg-zinc-900",
    //     textColor: "text-black dark:text-white",
    //   },
    //   {
    //     title: "Content Growth Retainer",
    //     description: [
    //       "Monthly Strategy Call (30 min)",
    //       "2 Blog Posts or SEO Pages",
    //       "On-page SEO Adjustments",
    //       "A/B Testing for CTAs or Landing Pages",
    //       "Ongoing Performance Reports",
    //       "Quarterly UX Review",
    //     ],
    //     price: "$500-1,200/month",
    //     ctaText: "Apply for Retainer",
    //     icon: <FaGlobe />,
    //     bgColor: "bg-white dark:bg-zinc-900",
    //     textColor: "text-black dark:text-white",
    //   },
    //   {
    //     title: "Landing Page Conversion Kit",
    //     description: [
    //         "1 Custom Landing Page Design + Dev",
    //         "Conversion Copywriting",
    //         "Mobile Optimization",
    //         "Speed + Performance Tuning",
    //         "A/B Variant (optional)",
    //         "Simple Analytics Dashboard",
    //     ],
    //     price: "$800-1,500",
    //     ctaText: "Get High-Converting Page",
    //     icon: <FaHandshake />,
    //     bgColor: "bg-white dark:bg-zinc-900",
    //     textColor: "text-black dark:text-white",
    //   },
    //   {
    //     title: "Brand Identity Package",
    //     description: [
    //         "Logo Design (3 Concepts + 2 Revisions)",
    //         "Color + Typography System",
    //         "Brand Guidelines PDF",
    //         "Favicon + Social Media Assets",
    //         "Business Card / Social Banner Templates",
    //         "Design Handoff Files (Figma/Adobe)",
    //     ],
    //     price: "$1,200-2,500",
    //     ctaText: "Build Your Brand Look",
    //     icon: <FaLaptopCode />,
    //     bgColor: "bg-white dark:bg-zinc-900",
    //     textColor: "text-black dark:text-white",
    //   },
  ];



  return (
    <section className="py-12 px-4">
    <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-[var(--secondary)] text-center mb-12">
      Our Packages  
    </h2>

    {/* Subscription-style 3-Box Layout */}
    
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {services.map((service, index) => (
      <Card
        key={index}
        className={`${service.bgColor} border border-gray-200 dark:border-gray-700 shadow-md rounded-2xl flex flex-col justify-between h-full`}
      >
        <CardContent className={`flex flex-col flex-grow justify-between p-6 ${service.textColor}`}>
          {/* Title & Icon */}
          <div>
            <h3 className="text-2xl text-center mb-2">{service.title}</h3>
            <p className="text-center text-2xl mb-6">{service.price}</p>
          </div>

          {/* Feature List */}
          <ul className="ml-4 text-sm space-y-2 mb-6 flex-grow">
            {service.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <FaCheckCircle className=" text-[#8B2E2E] mr-2 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          
        </CardContent>
      </Card>
    ))}
  </div>
  </section>

 
 
  );
};

export default Services;