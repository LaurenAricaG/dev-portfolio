import Container from "../layout/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground dark:bg-background border-t border-background/10 dark:border-white/10 mt-15">
      <Container className="py-10 text-center ">
        <div className="hidden" aria-hidden="true">
          <h2>Lauren Arica - Desarrollador Full Stack en Perú</h2>
          <p> Desarrollo de aplicaciones web. </p>
        </div>
        <p className="text-text-muted text-xs text-center">
          &copy; {currentYear} — Diseñado y desarrollado por{" "}
          <a
            href="https://github.com/laurenaricag"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-status hover:underline"
            title="Ver perfil de Lauren Arica"
          >
            Lauren Arica
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
