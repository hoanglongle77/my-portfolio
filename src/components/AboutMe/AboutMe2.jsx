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

const AboutMe2 = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-10 md:px-20 bg-[var(--color-background)] text-[var(--color-foreground)]"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Mô tả bản thân */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[var(--color-primary)] mb-6">
            About Me
          </h2>
          <p className="text-lg leading-relaxed">
            I'm a creative and detail-oriented{" "}
            <span className="text-[var(--color-primary)] font-semibold">
              Frontend Developer
            </span>{" "}
            with a strong passion for building modern, user-focused interfaces.
            I thrive in environments where design meets logic and love working
            with new technologies to push the boundaries of what’s possible on
            the web.
          </p>
        </div>

        {/* Tech stack */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">
            Tech Stack
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] hover:shadow-[0_0_15px] hover:shadow-[var(--color-primary)] transition duration-300"
              >
                <div style={{ color: tech.color }} className="text-3xl mb-2">
                  {tech.icon}
                </div>
                <p className="text-xs text-center">{tech.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe2;
