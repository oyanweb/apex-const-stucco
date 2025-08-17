// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import projects from "../../data/projects";


export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }) {
    const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">{project.title}</h1>

      <Image
        src={project.image}
        alt={project.title}
        width={800}
        height={400}
        className="w-full rounded-xl mb-6"
      />

      <p className="mb-6 text-lg">{project.description}</p>

      <div className="mb-6">
        <h2 className="font-semibold text-xl mb-2">Tech Stack:</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold text-xl mb-2">Developer Notes:</h2>
        <p>{project.developerNotes}</p>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--primary)] underline text-2xl"
      >
        View Live Site
      </a>
    </div>
  );
}
