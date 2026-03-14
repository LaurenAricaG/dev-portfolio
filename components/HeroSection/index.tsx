"use client";
import Container from "../layout/Container";
import LinkButton from "../LinkButton";
import { FiMail } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className=" relative isolate flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-foreground dark:bg-background text-background dark:text-foreground pt-20 sm:pt-24 md:pt-0"
    >
      <Container>
        <div
          className="
            relative z-10 mx-auto max-w-4xl
            text-center space-y-8
            animate-[fadeUp_0.8s_ease-out]
          "
        >
          <span
            className="
              inline-flex items-center gap-2 rounded-full
              border-2 border-status/10
              bg-status/5
              px-4 py-1 text-xs font-medium tracking-wide
              text-status
              backdrop-blur
            "
          >
            <span className="h-2 w-2 rounded-full bg-status" />
            Disponible para trabajar
          </span>

          <h1 className=" text-balance font-bold tracking-tight leading-[1.05] text-4xl sm:text-5xl lg:text-6xl ">
            Hola, soy Lauren Arica,
            <span className=" block mt-3 text-status drop-shadow-[0_0_14px_rgba(34,197,94,0.22)] dark:drop-shadow-[0_0_22px_rgba(34,197,94,0.32)] ">
              Software Developer
            </span>
          </h1>

          <p className="text-base md:text-lg max-w-3xl leading-relaxed mb-10 text-background/70 dark:text-foreground/80">
            Programar es tomar decisiones pensando en el futuro. La calidad nace
            de la claridad y la simplicidad: software fácil de entender,
            mantener y evolucionar con el tiempo.
          </p>
        </div>
        <nav
          className="flex flex-wrap items-center justify-center gap-5 mb-12"
          aria-label="Enlaces de contacto y redes sociales"
        >
          <LinkButton
            href="mailto:laurendavid159@gmail.com"
            ariaLabel="Enviar correo electrónico a laurendavid159@gmail.com"
            title="Contactar por email"
            icon={FiMail}
            label="Email"
          />

          <LinkButton
            href="https://github.com/laurenaricag"
            ariaLabel="Ver perfil de GitHub de Lauren Arica"
            title="Visitar GitHub"
            icon={FaGithub}
            label="GitHub"
            isExternal
          />

          <LinkButton
            href="https://linkedin.com/in/lauren-arica-guerrero"
            ariaLabel="Ver perfil de LinkedIn de Lauren Arica"
            title="Visitar LinkedIn"
            icon={FaLinkedinIn}
            label="LinkedIn"
            isExternal
          />

          <LinkButton
            href=""
            ariaLabel="Descargar currículum vitae en formato PDF"
            title="Descargar CV"
            icon={HiDocumentText}
            label="CV"
            isExternal
          />
        </nav>
      </Container>
    </section>
  );
};

export default HeroSection;
