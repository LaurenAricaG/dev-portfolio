import { Project } from "@/types/projects.type";
import Container from "../layout/Container";
import Title from "../Tittle";
import CardProject from "./CardProject";
import projectsData from "@/data/projects-data.json";

const ProjectsSection = () => {
  const projects = projectsData.projects as Project[];
  const previewProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="mt-20">
      <Container className="py-10">
        <Title label="Portafolio" title="Mis" subtitle="Proyectos" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {previewProjects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
