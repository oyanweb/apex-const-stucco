// app/about/page.jsx
"use client";
 
import dynamic from 'next/dynamic';
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import React from "react";

const FAQSection = dynamic(() => import('../components/FAQSection'), {
    ssr: false,
    loading: () => <div style={{ height: 300 }} />,  
  });
 
const Contact = dynamic(() => import('../components/Contact'), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} />,  
});

const About = () => { 
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
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-sm uppercase tracking-wider">
            Home / About Us
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className=" relative ">
        <div className="bg-white rounded-lg shadow-[0_12px_25px_rgba(0,0,0,0.15)] p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Image */}
          <div className="relative">
            <Image
              src="/hero-section-background.jpg"
              alt="About Workers"
              width={600}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Professional And Expert Roofing Contractor
            </h2>
            <p className="text-gray-600 mb-6">
              Tortor, fames vitae penatibus sed et pharetra mi, mattis est donec 
              amet ac egestas urna, nascetur sem arcu libero, in lacinia amet eget 
              sem neque amet elit venenatis. Etiam eget eget phasellus quam aliquet 
              sed gravida non varius sit faucibus dictumst quis et arcu dapibus non 
              consequat.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Feature text="Certified Company" />
              <Feature text="Precise Builder" />
              <Feature text="Satisfied Guaranteed" />
              <Feature text="Excellence Support" />
            </div>
          </div>
        </div>
        
      <FAQSection />
      <Contact />
      </div>
    </section>
  );
}

export default About;
function Feature({ text }) {
  return (
    <div className="flex items-center gap-2 text-gray-700">
      <CheckCircle className="text-[#FF4C4C] w-5 h-5" />
      <span>{text}</span>
    </div>
  );
}
