// app/components/ProjectsSection.jsx
"use client";

import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "The Hagia Sophia Istanbul Turkey",
    category: "ARCHITECTURE",
    image: "/projects/project1.jpg",
  },
  {
    id: 2,
    title: "Le Centre Pompidou Paris France",
    category: "BUILDING",
    image: "/projects/project2.jpg",
  },
  {
    id: 3,
    title: "Metropol Cathedral of Brasilia",
    category: "CONSTRUCTION",
    image: "/projects/project3.jpg",
  },
  {
    id: 4,
    title: "World Trade Center New York USA",
    category: "INDUSTRIAL",
    image: "/projects/project4.jpg",
  },
  {
    id: 5,
    title: "The White House Washington",
    category: "FACTORY",
    image: "/projects/project5.jpg",
  },
  {
    id: 6,
    title: "The White House Washington",
    category: "INDUSTRY",
    image: "/projects/project6.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 md:px-15">
       

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
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
        ))}
      </div>
    </section>
  );
}
