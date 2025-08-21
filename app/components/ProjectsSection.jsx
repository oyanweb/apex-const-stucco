// app/components/ProjectsSection.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import projects from "../data/projects";

export default function ProjectsSection() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 md:px-15">
       
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="block border overflow-hidden hover:shadow-lg transition"
            >
              <div
                key={project.id}
                className="bg-white shadow-md overflow-hidden hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Category + Title */}
                <div className="relative p-4">
                  <span className="absolute -top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1">
                    {project.category}
                  </span>
                  <h3 className="mt-4 font-semibold text-gray-900 text-base">
                    {project.title}
                  </h3>
                </div>
              </div> 
            </Link>
            ))}
        </div>
    </section>
  );
}
