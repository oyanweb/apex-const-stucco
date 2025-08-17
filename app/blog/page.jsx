import React from "react";
import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import path from "path";

// Read blog posts from content directory
const contentDirectory = path.join(process.cwd(), "content");
const blogFiles = fs.readdirSync(contentDirectory);

const getBlogPosts = () => {
  const posts = blogFiles
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(contentDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        title: data.title,
        description: data.description,
        slug: data.slug.toLowerCase(), // Ensure lowercase slug
        date: data.date,
        author: data.author,
        image: data.image,
      };
    });

  // Debug: Log the slugs to verify
  console.log(
    "Blog Post Slugs:",
    posts.map((post) => post.slug)
  );

  return posts;
};

const Blog = () => {
  const blogs = getBlogPosts();

  return (
    <div className="select-none min-h-screen bg-gradient-to-b from-gray-50 to-gray-100  dark:from-[#111111] dark:to-[#000000] text-gray-900 dark:text-white py-16 px-4">
      <div className="container max-w-7xl mx-auto">
        {/* <header className="mb-12 text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Blog
          </h1>
          <p className="mt-2  font-bold text-lg text-chart-2 text-primary">
            Explore our latest insights and stories
          </p>
        </header> */}

        <div className=" grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link href={`/blog/${blog.slug}`}  key={blog.slug}>
                  
            <article
              key={index}
              className="cursor-pointer bg-white dark:bg-[var(--primary)]  border-gray-200 dark:border-gray-700 border  rounded-2xl shadow-md transition-all duration-300 overflow-hidden animate-fade-in"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-t-2xl"
                  priority={index < 3} // Prioritize first 3 images
                />
              </div>
              {/* Content Container */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-200 mb-2">
                  {blog.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {blog.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--primary)] dark:bg-[var(--secondary)] rounded-full" />
                    {blog.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--primary)]  dark:bg-[var(--secondary)] rounded-full" />
                    {new Date(blog.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </article>
            
            </Link>

            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
