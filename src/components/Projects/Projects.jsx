import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const Projects = ({ title, dataSource }) => {
  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-10 md:px-20 bg-[var(--color-background)] text-[var(--color-foreground)]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-12">
        {title}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {dataSource.map((project, index) => (
          <div
            key={index}
            className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl overflow-hidden shadow-[0_0_20px_var(--color-primary)/20] hover:shadow-[0_0_25px_var(--color-primary)] transition duration-300 flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-foreground)] mb-3">
                  {project.description}
                </p>
              </div>

              <div className="mt-3 mb-4 flex flex-wrap gap-2 text-xs text-[var(--color-primary)] font-mono">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[var(--color-border)] px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[var(--color-primary)] transition"
                >
                  <FaGithub size={18} />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-[var(--color-primary)] transition"
                >
                  <FiExternalLink size={18} />
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
