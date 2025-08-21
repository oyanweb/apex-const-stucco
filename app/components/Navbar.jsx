"use client";

import React, { useState, useEffect } from "react";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";
import Image from "next/image"; 

import { useTheme } from "next-themes";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);


  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/portfolio" }, 
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className=" max-w-7xl  mx-auto  bg-[#111111] select-none bg-white dark:bg-[var(--primary)] sticky top-0 z-50 backdrop-blur-md"> 
    <div className=" shadow-[0_0_10px_rgba(0,0,0,0.15)] dark:border-2 dark:border-[#8B2E2E] dark:shadow-[0_0_10px_#8B2E2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mr-10">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center transition-transform duration-300 hover:scale-105"
            >
              {/* Logo Symbol */}
       
            <div className="relative w-22 h-10 mt-1 md:ml-15">
                {/* <Image
                  src="/logo-light.svg"
                  alt="Oyan Web Agency Logo"
                  fill
                  className="object-contain"
                  priority
                />   */}


                {mounted && (
                  <Image
                    src={resolvedTheme === "dark" ? "/logo-dark.svg" : "/logo-light.svg"}
                    alt="Oyan Web Agency Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                )}
              </div>   
              
                
              {/* Logo Text
              <div className="relative">
                <span className="text-2xl ml-20 font-semibold  text-[var(--primary)] dark:text-white">  
                  OyanWeb
                </span> 
              </div> */}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className="text-lg text-[#000]  dark:text-[var(--secondary)] font-medium transition-all duration-300 relative group drop-shadow-sm">
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-1  bg-[#0B0E29] transition-all duration-300 group-hover:w-full" />
                </span>
              </Link>
            ))} 
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden dark:bg-gray-900 flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-primary  dark:text-[var(--secondary)] transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-primary dark:bg-[var(--primary)]  overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 text-center sm:px-3">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              <span className="block px-3 py-2 text-white font-semibold text-lg hover:bg-white/10 rounded-md transition-all duration-300 hover:translate-x-2">
                {item.name}
              </span>
            </Link>
          ))}
          {/* <div className="px-3 py-2">
            <ToggleTheme />
          </div> */}
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;