import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";

const techStack = [
  { icon: <FaHtml5 />, label: "HTML5", color: "#e34c26" },
  { icon: <FaCss3Alt />, label: "CSS3", color: "#264de4" },
  { icon: <FaJs />, label: "JavaScript", color: "#f7df1e" },
  { icon: <SiTypescript />, label: "TypeScript", color: "#3178c6" },
  { icon: <FaReact />, label: "React", color: "#61dafb" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "#fff" },
  { icon: <SiTailwindcss />, label: "Tailwind", color: "#38bdf8" },
  { icon: <FaNodeJs />, label: "Node.js", color: "#68a063" },
  { icon: <SiFirebase />, label: "Firebase", color: "#ffca28" },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="py-8 px-6 sm:px-10 md:px-20 bg-[var(--color-background)] text-[var(--color-foreground)]"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[var(--color-primary)]">
          About Me
        </h2>

        <p className="text-lg leading-relaxed max-w-3xl">
          I'm a passionate{" "}
          <span className="text-[var(--color-primary)] font-semibold">
            Frontend Developer
          </span>{" "}
          who loves building interactive and visually stunning web applications.
          I enjoy working with modern tech stacks and continuously improving my
          craft to create seamless user experiences.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-20 h-20 rounded-xl bg-[var(--color-background)] border border-[var(--color-border)] shadow-md hover:shadow-[0_0_15px] hover:shadow-[var(--color-primary)] transition duration-300"
              >
                <div style={{ color: tech.color }} className="text-3xl">
                  {tech.icon}
                </div>
                <p className="text-xs mt-2 text-center">{tech.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
