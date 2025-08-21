import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#0B0E29] text-white  select-none w-full max-w-7xl mx-auto ">
      <div className="  py-14 px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10">
        
        {/* Column 1: Logo & Tagline */}
        <div className="flex flex-col space-y-5">
          <h2 className="text-2xl font-bold tracking-wide">CONSTR</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            We believe construction is more than just building structures —
            it’s about creating comfort, beauty, and durability.
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 pt-2">
            <a href="#" aria-label="Whatsapp">
              <FaWhatsapp size={22} className="hover:text-gray-400 transition" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube size={22} className="hover:text-gray-400 transition" />
            </a>
            <a href="#" aria-label="TikTok">
              <FaTiktok size={22} className="hover:text-gray-400 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={22} className="hover:text-gray-400 transition" />
            </a>
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div className="md:ml-6">
          <h3 className="text-lg font-semibold mb-4 tracking-wide">USEFUL LINKS</h3>
          <ul className="space-y-4 md:ml-2 text-sm tracking-wide">
            <li>
              <Link href="/" className="hover:text-gray-300 transition uppercase">
                HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300 transition uppercase">
                ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-300 transition uppercase">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-300 transition uppercase">
                PROJECTS
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">OUR SERVICES</h3>
          <ul className="space-y-4 md:ml-2 text-sm tracking-wide">
            <li className="hover:text-gray-300 transition uppercase">EXTERIOR WALLS</li>
            <li className="hover:text-gray-300 transition uppercase">STUCCO</li>
            <li className="hover:text-gray-300 transition uppercase">STONE</li>
            <li className="hover:text-gray-300 transition uppercase">CLADDING</li>
          </ul>
        </div>


        {/* Column 4: Contact Info */}
        <div className="space-y-5 text-sm">
          <div>
            <p className="text-sm font-thin">Call us:</p>
            <p className="text-2xl font-semibold">(767) 767-7676</p>
          </div>
          <div>
            <p className="text-sm font-thin">Email:</p>
            <p className="text-xl text-base font-semibold">info@email.com</p>
          </div>
          <div>
            <p className="text-sm font-thin">Meet us:</p>
            <p>
              Trump Pmurt Str., 999 House <br />
              Planet Mars
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-6 text-sm text-white">
        © {new Date().getFullYear()} CONSTR. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

