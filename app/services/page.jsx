"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link"; 

import dynamic from 'next/dynamic';
const Contact = dynamic(() => import('../components/Contact'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,  
});
const ServicesSection = dynamic(() => import('../components/ServiceSection'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,  
});

const Services = () => {

  return (
      <section className="w-full max-w-7xl mx-auto ">
        {/* Hero Section */}
        <div
          className="relative h-64 flex items-center justify-center bg-center bg-cover"
          style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>
  
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl font-bold">Services</h1>
            <p className="mt-2 text-sm uppercase tracking-wider">
              Home / Services
            </p>
          </div>
        </div>
        
        <ServicesSection /> 
        <Contact /> 
      </section>
    );
  }

export default Services;