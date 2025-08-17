"use client";
import React, { useEffect, useState } from "react";

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const headingElements = tempDiv.querySelectorAll("h2, h3");
    const headingData = Array.from(headingElements).map((heading) => ({
      text: heading.textContent || "",
      id: heading.id,
      level: heading.tagName.toLowerCase() === "h2" ? 2 : 3,
    }));
    setHeadings(headingData);
  }, [htmlContent]);

  return (
    <div className="on-this-page text-center">
      <h2 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent mb-6 animate-slide-in-right">
        On This Page
      </h2>
      <ul className="space-y-4 flex flex-col items-center">
        {headings.map((heading, index) => (
          <li
            key={index}
            className={`${
              heading.level === 3 ? "ml-4" : ""
            } transition-all duration-200 animate-fade-in-up w-full max-w-xs`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <a
              href={`#${heading.id}`}
              className="text-gray-700 dark:text-[var(--secondary)] hover:text-[var(--primary)] font-semibold text-base block relative transition-all duration-300 group"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {heading.text}
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-[var(--primary)] transition-all duration-300 group-hover:w-1/2 group-hover:left-1/4"></span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;