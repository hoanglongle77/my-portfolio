"use client";

import {
  SiReact,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <SiReact />,
    certImg: "/certificates/react.png",
    certTitle: "Meta Front-End Certificate",
    certLink: "https://coursera.org/example-react-cert",
  },
  {
    name: "Firebase",
    icon: <SiFirebase />,
    certImg: "/certificates/firebase.png",
    certTitle: "Firebase Web Devs",
    certLink: "https://firebase.google.com/cert",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    certImg: "/certificates/next.png",
    certTitle: "Next.js Pro Course",
    certLink: "#",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss />,
    certImg: "/certificates/tailwind.png",
    certTitle: "TailwindCSS Mastery",
    certLink: "#",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-10">
          🎖️ Certifications & Badges
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.certLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-md hover:shadow-[0_0_20px_var(--color-primary)/40] transition"
            >
              {/* Badge Icon */}
              <div className="absolute top-2 left-2 bg-[var(--color-background)] p-1.5 rounded-full border border-[var(--color-border)] shadow-md text-[var(--color-primary)] text-xl">
                {skill.icon}
              </div>

              {/* Certificate image */}
              <img
                src={skill.certImg}
                alt={skill.name}
                className="w-full h-40 object-cover rounded-t-xl group-hover:scale-105 transition duration-300"
              />

              {/* Info */}
              <div className="p-4 text-center">
                <h4 className="text-[var(--color-foreground)] font-semibold text-lg">
                  {skill.name}
                </h4>
                <p className="text-xs text-gray-400 mt-1">{skill.certTitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
