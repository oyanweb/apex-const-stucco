// app/portfolio/[slug]/page.jsx 
import { notFound } from "next/navigation";
import Image from "next/image";
import projects from "../../data/projects"; 
import { use } from "react"; 

import ContactWrapper from "../../components/ContactWrapper";
  

export default function ProjectPage({ params }) {
    const project = projects.find((p) => p.slug === params.slug);
  
  if (!project) return notFound();

  return (
    <section className="w-full max-w-7xl mx-auto shadow">
      <div className=" min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        {/* Hero Section */}
        <div
          className="relative h-64 flex items-center justify-center bg-center bg-cover"
          style={{ backgroundImage: "url('/breadcrumb.jpg')" }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl font-bold">Project Details</h1>
            <p className="mt-2 text-sm uppercase tracking-wider">
              Home / Project Details
            </p>
          </div>
        </div>
          
        {/* Main Content */}
        <div className="px-2 md:px-25 mt-15 grid grid-cols-1 lg:grid-cols-2  items-center">
          {/* Image */}
          <div className="">
            <Image
              src={project.image}
              alt={project.title}
              width={450}
              height={200}
              className="shadow-md "
            />
          </div>

          {/* Info Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <p className="text-gray-600 mb-6">{project.description}</p>

            <ul className="space-y-3 text-gray-800">
              <li>
                <span className="font-semibold w-24 inline-block">Category:</span>{" "}
                {project.category || "N/A"}
              </li>
              <li>
                <span className="font-semibold w-24 inline-block">Client:</span>{" "}
                {project.client || "N/A"}
              </li>
              <li>
                <span className="font-semibold w-24 inline-block">Start:</span>{" "}
                {project.start || "N/A"}
              </li>
              <li>
                <span className="font-semibold w-24 inline-block">End:</span>{" "}
                {project.end || "N/A"}
              </li>
              <li>
                <span className="font-semibold w-24 inline-block">Website:</span>{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--primary)] underline"
                >
                  {project.link}
                </a>
              </li>
              <li className="flex items-center">
                <span className="font-semibold w-24 inline-block">Rating:</span>
                <span className="text-orange-500 text-lg">★★★★★</span>
              </li>
            </ul>

            {/* Button */}
            {/* <div className="mt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold transition"
              >
                Read More →
              </a>
            </div> */}
          </div>
        </div>
        {/* NEW SECTION (Description + Client Goal) */}
        <div className="px-2 md:px-25 pb-15 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-3">Description Of Situation</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Client Goal */}
            <div>
              <h2 className="text-2xl font-bold md:mb-3">Client&apos;s Goal</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                The result of employees, over 115 detailers and engineers, all coming together to solve 
                problems before they arise. The teamwork it demonstrates both internally and externally 
                is outstanding.
              </p>

              <ul className="space-y-3">
                {[
                  "The triple pressures of more regulations outstanding in the creation.",
                  "The legacy of the financial crisis has meant a few tricky years.",
                  "Now, the triple pressures of more regulations more regulations.",
                  "Outstanding in the creation the triple pressures of more regulations.",
                  "The triple pressures of more regulations outstanding in the creation.",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-3 h-3 mt-2 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div>
            <Image
              src="/worker.jpg"
              alt="Client's Goal"
              width={500}
              height={400}
              className="shadow-md w-full"
            />
          </div>
        </div>
        <ContactWrapper />
      </div>
    </section>
  );
}
