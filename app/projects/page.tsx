import Container from "@/components/layout/Container";
import CardProject from "@/components/ProjectsSection/CardProject";
import Title from "@/components/Tittle";
import { Project } from "@/types/projects.type";
import projectsData from "@/data/projects-data.json";

const ProjectsPage = () => {
  const projects = projectsData.projects as Project[];

  return (
    <section>
      <Container className="mt-5 md:mt-10">
        <Title label="Portafolio" title="Mis" subtitle="Proyectos" level="h1" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <CardProject key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsPage;
