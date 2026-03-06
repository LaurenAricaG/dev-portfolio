import Container from "../layout/Container";
import Title from "../Tittle";
import CardProject from "./CardProject";

const ProjectsSection = () => {
  return (
    <section id="projects" className="pt-12">
      <Container>
        <Title label="Portafolio" title="Mis" subtitle="Proyectos" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
