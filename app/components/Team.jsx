import React from "react";

const teamMembers = [
    // {
    //     name: "Hargobind Singh",
    //     role: "Cofounder & Lead Developer",
    //     image: "/harry_img.jpg",
    //     description:
    //       "Hargobind turns strategy into scalable code. With over 5+ years of development experience, he builds high-performance websites that execute on the strategic foundations. He specializes in clean, reliable tech — helping bring designs to life.",
    //   },
      {
        name: "Malika",
        role: "Developer",
        image: "malika_img.jpg",
        description:
          "Malika leads strategy and client success at Oyan. With a sharp eye for UX and positioning, she builds websites that convert — not just look nice. Every project runs through her brain before it hits the screen.",
      },
      {
        name: "Adilet",
        role: "Designer",
        image: "malika_img.jpg",
        description:
          "Malika leads strategy and client success at Oyan. With a sharp eye for UX and positioning, she builds websites that convert — not just look nice. Every project runs through her brain before it hits the screen.",
      },
];

const Team = () => (
  <section className="py-12 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary)] dark:text-[var(--secondary)] mb-12">
        Built By People Who Actually Care.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center bg-white dark:bg-[var(--primary)] px-4 py-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg border-b-2 border-[var(--primary)] dark:border-[var(--secondary)]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mb-4 border-2 border-[var(--primary)] dark:border-[var(--secondary)]"
                />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-[var(--secondary)]">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {member.role}
                </p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  {member.description}
                </p>
              </div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
