// app/portfolio/page.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import projects from "../data/projects";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../components/Contact"), {
  loading: () => <div style={{ height: 300 }} />,
  ssr: false,
});

const ProjectSection = dynamic(() => import("../components/ProjectsSection"), {
  loading: () => <div style={{ height: 300 }} />,
  ssr: false,
});

export default function PortfolioPage() {
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
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="mt-2 text-sm uppercase tracking-wider">
            Home / Projects
          </p>
        </div>
      </div>

      <ProjectSection/>
      <Contact /> 
    </section>
  );
}                         