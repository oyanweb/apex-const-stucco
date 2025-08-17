// app/portfolio/page.jsx
import Link from "next/link";
import Image from "next/image";
import projects from "../data/projects";

export default function PortfolioPage() {
  return (
    <div className=" ">
      <h1 className="text-4xl font-bold text-center mt-12 mb-12">
        Study Cases
      </h1>

      <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6">

        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="block border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="px-4">
              <h2 className="text-xl font-semibold mt-4">{project.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
            </div>

            <div className="mb-6 px-4 mt-2">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}                          