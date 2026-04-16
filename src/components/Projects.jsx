import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section>
      <h2>Meus Projetos</h2>

      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </section>
  );
}

export default Projects;