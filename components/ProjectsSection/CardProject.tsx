import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const CardProject = () => {
  return (
    <article className="group relative flex flex-col bg-foreground dark:bg-white/5 border border-background/10 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-green-500 hover:shadow-xl">
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src="/projects/image-clinicaenfoquesalud.webp"
          alt="Captura del proyecto"
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="100vw"
        />
      </div>

      <div className="flex flex-col gap-5 p-5">
        <h3 className="text-xl font-bold text-status">Clínica Enfoque Salud</h3>

        <p className="text-background/70 dark:text-foreground/80 leading-relaxed text-sm">
          Sistema web para gestión de pacientes, citas médicas y control
          administrativo con panel de administración y reportes. Administrativo
          con panel de administración y reportes.
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "Next.js",
            "TypeScript",
            "Tailwind",
            "Prisma",
            "CSS",
            "JavaScript",
          ].map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-background/10 dark:bg-white/10 border border-background/10 dark:border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 pt-3 text-sm font-medium  border-t border-background/10 dark:border-white/10">
          <a
            href="#"
            className="flex items-center gap-2 hover:text-status transition"
          >
            <FaExternalLinkAlt size={16} />
            Demo
          </a>

          <a
            href="#"
            className="flex items-center gap-2 hover:text-status transition"
          >
            <BsGithub size={16} />
            Código
          </a>
        </div>
      </div>
    </article>
  );
};

export default CardProject;
