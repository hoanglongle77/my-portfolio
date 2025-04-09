"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import clsx from "clsx";

const experiences = [
  {
    type: "education",
    year: "2019 - 2023",
    title: "Bachelor of Computer Science",
    desc: "Studied at XYZ University with a focus on frontend, UI/UX, and modern web technologies.",
  },
  {
    type: "work",
    year: "2022 - 2023",
    title: "Frontend Intern",
    desc: "Interned at ABC Tech, building responsive UIs using React and TailwindCSS.",
  },
  {
    type: "work",
    year: "2023 - Present",
    title: "Freelance Developer",
    desc: "Developing modern web apps with Next.js, Firebase, and Three.js.",
  },
];

const iconMap = {
  education: (
    <GraduationCap className="text-[var(--color-primary)]" size={20} />
  ),
  work: <Briefcase className="text-[var(--color-primary)]" size={20} />,
};

const Experiences = () => {
  return (
    <section
      id="experiences"
      className="py-20 px-6 sm:px-10 md:px-20 bg-[var(--color-background)]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-12">
          🕒 Experience Timeline
        </h2>

        <div className="relative border-l-4 border-[var(--color-primary)] pl-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-10 relative"
            >
              {/* Icon */}
              <div className="absolute -left-9 top-1 w-6 h-6 flex items-center justify-center bg-[var(--color-background)] border-2 border-[var(--color-primary)] rounded-full shadow-[0_0_10px_var(--color-primary)]">
                {iconMap[exp.type]}
              </div>

              <p className="text-sm text-gray-400">{exp.year}</p>
              <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
                {exp.title}
              </h3>
              <p className="text-[var(--color-muted)] mt-1">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
