import Container from "@/components/layout/Container";
import Title from "@/components/Tittle";

const ProjectsPage = () => {
  return (
    <section>
      <Container className="mt-5 md:mt-10">
        <Title label="Portafolio" title="Mis" subtitle="Proyectos" level="h1" />
        <div className="flex flex-col gap-16 mt-12">Mapear los projectos</div>
      </Container>
    </section>
  );
};

export default ProjectsPage;
