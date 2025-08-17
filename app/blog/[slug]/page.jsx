import fs from "fs/promises";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import Link from "next/link";
import OnThisPage from "@/components/onthispage";
import Image from "next/image";
import "../../../styles/blog-content.css";

export async function generateStaticParams() {
  const contentDir = "content";
  try {
    const filenames = await fs.readdir(contentDir);
    const params = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = `${contentDir}/${filename}`;
        const fileContent = await fs.readFile(filePath, "utf-8");
        const { data } = matter(fileContent);
        return {
          slug: data.slug.toLowerCase(),
        };
      })
    );
    console.log("Generated Static Params:", params);
    return params;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export default async function Page({ params }) {
  const { slug } =  params;
  const lowercaseSlug = slug.toLowerCase();
  const filepath = `content/${lowercaseSlug}.md`;

  console.log("File Path:", filepath);

  let fileContent;
  try {
    fileContent = await fs.readFile(filepath, "utf-8");
  } catch (error) {
    console.error("File Read Error:", error);
    return notFound();
  }

  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify);

  const htmlContent = (await processor.process(content)).toString();

  console.log("HTML Content:", htmlContent);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1e2a44] py-16 px-4 font-sans">
      <article className="max-w-5xl mx-auto bg-white dark:bg-[#000] rounded-2xl shadow-xl p-10 transition-all duration-300">
        <header className="mb-12 border-b border-gray-200 dark:border-gray-700 pb-8 animate-fade-in-up">
          {/* Back Button */}
          <Link href="/blog">
            <button className="mb-8 inline-flex items-center bg-[var(--primary)] dark:bg-white dark:text-black text-white font-semibold px-5 py-3 rounded-full transition-all duration-300 hover:bg-[var(--primary)]/80 dark:hover:bg-white-800 hover:scale-105 hover:shadow-lg">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blog
            </button>
          </Link>
          {/* Back Button */}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#000] dark:text-[#ffff] relative animate-fade-in-up">
            {data.title}
            <span className="absolute -bottom-2 left-0 w-24 h-1 bg-[var(--primary)] dark:bg-[var(--primary)]"></span>
          </h1>
          {/* Title */}

          {data.image && (
            <div className="mt-6 mb-6 animate-fade-in-up">
              <Image
                src={data.image}
                alt={`${data.title} cover image`}
                width={1200}
                height={400}
                style={{
                  width: "100%",
                  height: "30rem",
                  objectFit: "cover",
                  borderRadius: "0.5rem",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease",
                }}
                className="hover:scale-[1.02]"
              />
            </div>
          )}
          <blockquote
            className="text-xl mt-6 mb-6 border-l-4 border-[var(--primary)] dark:border-[var(--primary)] pl-4 italic text-gray-600 dark:text-[#a0aec0] bg-gray-50/50 dark:bg-[#2d3748]/50 py-3 rounded-r-lg animate-fade-in-up"
            aria-label="Description"
          >
            "{data.description}"
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-600 dark:text-[#fffff] animate-fade-in-up">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--primary)] dark:bg-[var(--primary)] rounded-full"></span>
              By {data.author}
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[var(--primary)] dark:bg-[var(--primary)] rounded-full"></span>
              {new Date(data.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <main className="lg:col-span-3">
            {htmlContent ? (
              <div
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="blog-content"
              />
            ) : (
              <p className="text-gray-600 dark:text-white">
                No content available.
              </p>
            )}
          </main>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white dark:bg-[#1e2a44] border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-6 shadow-lg animate-fade-in-right">
              <OnThisPage htmlContent={htmlContent} />
            </div>
          </aside>
        </div>

      </article>
    </div>
  );
}