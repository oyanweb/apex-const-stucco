import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

// data/testimonials.js
 const testimonials = [
    {
      name: "Alex Hirs",
      role: "BII",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vitae lacus dapibus ultrices.",
      image: "/avatar1.png",
    },
    {
      name: "Sarah Lee",
      role: "CTO, TechCorp",
      message:
        "Working with this team was a game-changer. They delivered on time and exceeded expectations.",
      image: "/avatar2.png",
    },
    {
      name: "Michael Tan",
      role: "Founder, StartHub",
      message:
        "Amazing service! Our project scaled seamlessly thanks to their expertise.",
      image: "/avatar3.png",
    },
    {
        name: "Alex Hirs",
        role: "Bill",
        message: "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum",
        image: "/avatar1.png",
      },
  ];
  
const Testimonials = () => {
    return (
        <section className="bg-[#EDEDED] py-16 mt-25">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
            
            {/* Left Side */}
            <div className="flex flex-col justify-center ml-9">
              <h4 className="text-xl font-bold uppercase tracking-wider text-[#FF6600] flex items-center gap-2">
                <span></span> Testimonials
              </h4>
              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                Our Happy Clients <br /> Says About Us
              </h2>
              <p className="mt-4 text-gray-600">
                Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor
                sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
                dolor sit amet
              </p>
            </div>
    

            {/* Right Side */}
            <div className="grid grid-cols-2 gap-6 relative z-10">
              
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
              <div className="flex flex-col gap-6 -mt-33">
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
