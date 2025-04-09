import ProjectCard from "@/shared/UI/ProjectCard/ProjectCard";

const Projects = ({ title, dataSource }) => {
  return (
    <section
      id="projects"
      className="py-8 px-6 sm:px-10 md:px-10 lg:px-20 bg-[var(--color-background)] text-[var(--color-foreground)]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-[var(--color-primary)] mb-6">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dataSource.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
