import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

// data/testimonials.js
 const testimonials = [
    {
      name: "Alex Hirs",
      role: "Director, UrbanEdge Realty",
      message:
        "They transformed the exterior of our home with beautiful stonework. The quality and attention to detail were beyond what we expected. We’ve received so many compliments from neighbors!",
      image: "/testimonial_1.jpg",
    },
    {
      name: "David Anderson",
      role: "CTO, GreenLeaf Developments",
      message:
        "The stucco finish they applied made our house look brand new. Durable, modern, and done right the first time. I’d recommend them to anyone looking to upgrade their home’s exterior",
      image: "/testimonial_2.jpg",
    },
    {
      name: "Ryan Mitchell",
      role: "Founder, BuildSmart",
      message:
        "Their cladding work gave our office building a sleek, professional look. The team worked efficiently and kept everything on schedule — very reliable and skilled.",
      image: "/testimonial_3.jpg",
    },
    {
        name: "Jason Miller",
        role: "Project Manager, StoneWorks",
        message: "From consultation to installation, everything was smooth. The stone façade they installed completely changed the curb appeal of our property. Fantastic craftsmanship!",
        image: "/testimonial_4.jpg",
      },
  ];
  
const Testimonials = () => {
    return (
        <section className="shadow-3xl bg-[#EDEDED] py-16 md:mt-35"
          style={{ 
            backgroundImage: "url('/testimonials_bg.jpg')",
            backgroundSize: "cover",   // fills the container
            backgroundPosition: "center",
          }}
        >
 
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">        
            
            {/* Left Side */}
            <div className="flex flex-col justify-center md:ml-9 md:-mt-50">
              <h4 className="text-sm md:text-xl font-bold uppercase tracking-wider text-[#FF6600] flex items-center gap-2">
                <span></span> Testimonials
              </h4>
              <h2 className="mt-2 text-3xl md:text-5xl font-bold text-gray-900">
                Our Happy Clients <br /> Says About Us
              </h2>
              <p className="mt-4 md:mt-9 text-gray-600">
              Trusted by property owners, developers, and industry leaders — we deliver exterior solutions that last. Here’s what our clients have to say about working with us.
              </p>
            </div>
    

            {/* Right Side */}
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              
              {/* Left column testimonials */}
              <div className="flex flex-col gap-6">
                {testimonials.slice(0, 2).map((t, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-300  p-5 shadow-lg"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-10 w-10 rounded-full border border-gray-300 mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{t.name}</h4>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mt-5 mb-5">{t.message}</p>
                  </div>
                ))}
              </div>

              {/* Right column testimonials (lifted up) */}
              <div className="flex flex-col md:flex-col gap-6 md:-mt-33">
                {testimonials.slice(2).map((t, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-300 p-5 shadow-lg"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-10 w-10 rounded-full border border-gray-300 mr-3"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900">{t.name}</h4>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm  mt-5 mb-5">{t.message}</p>
                  </div>
                ))}
              </div>
            </div>



          </div>
        </section>
      );
};

export default Testimonials;
