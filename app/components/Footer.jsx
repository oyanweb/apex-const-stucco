import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-10 px-6 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Logo & Tagline */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">CONSTR</h2>
          <p className="text-sm max-w-xs">
            We believe construction is more than building structures
            <br /> it’s about creating
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Whatsapp">
              <FaWhatsapp size={24} className="hover:text-gray-700 transition" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube size={24} className="hover:text-gray-700 transition" />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok size={24} className="hover:text-gray-700 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={24} className="hover:text-gray-700 transition" />
            </a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">USEFUL LINKS</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/about">ABOUT US</Link>
            </li>
            <li>
              <Link href="/services">SERVICES</Link>
            </li>
            <li>
              <Link href="/projects">PROJECTS</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">OUR SERVICES</h3>
          <ul className="space-y-2">
            <li>EXTERIOR WALL SYSTEMS</li>
            <li>STONE & CLADDING</li>
            <li>STUCCO</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="space-y-4">
          <div>
            <p className="text-sm">Say hello!</p>
            <p className="text-xl font-semibold">(767) 767-7676</p>
          </div>
          <div>
            <p className="text-sm">Say hello!</p>
            <p className="text-base font-semibold">info@email.com</p>
          </div>
          <div>
            <p className="text-sm">Meet Us:</p>
            <p className="text-base font-semibold">
              Trump Pmurt Str., 999 house <br />
              planet Mars
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
