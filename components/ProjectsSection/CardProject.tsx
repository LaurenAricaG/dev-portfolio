"use client";
import { techConfig } from "@/config/tech.config";
import useThemeStore from "@/store/useTheme";
import { Project } from "@/types/projects.type";
import { cn } from "@/utils/cn.utils";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

const CardProject = ({ project }: { project: Project }) => {
  const theme = useThemeStore((state) => state.theme);
  const {
    title,
    description,
    technologies,
    githubUrl,
    liveUrl,
    imageUrl,
    type,
  } = project;
  const getTypeBadgeClasses = (type: "FrontEnd" | "BackEnd" | "FullStack") => {
    const baseClasses =
      "flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border shrink-0";

    const typeClasses = {
      FrontEnd: "bg-blue-500/10 border-blue-400/50 text-blue-400",
      BackEnd: "bg-emerald-500/10 border-emerald-400/50 text-emerald-400",
      FullStack: "bg-violet-500/10 border-violet-400/50 text-violet-400",
    };

    return cn(baseClasses, typeClasses[type]);
  };

  const getTypeDot = (type: "FrontEnd" | "BackEnd" | "FullStack") => {
    const dots = {
      FrontEnd: "bg-blue-400 shadow-blue-400",
      BackEnd: "bg-emerald-400 shadow-emerald-400",
      FullStack: "bg-violet-400 shadow-violet-400",
    };
    return cn(
      "w-[6px] h-[6px] rounded-full shadow-[0_0_4px_0.5px]",
      dots[type],
    );
  };
  return (
    <article className="group relative flex flex-col h-full bg-foreground dark:bg-white/5 border border-background/10 dark:border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-green-500 hover:shadow-xl">
      <div className="relative w-full h-80 overflow-hidden">
        <Image
          src={imageUrl}
          alt="Captura del proyecto"
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
          sizes="100vw"
        />
      </div>

      <div className="flex flex-col gap-5 p-5 flex-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold text-status">{title}</h3>
          {type && (
            <span className={getTypeBadgeClasses(type)}>
              <span className={getTypeDot(type)} />
              {type === "FullStack" ? "Full Stack" : type}
            </span>
          )}
        </div>

        <p className="text-background/70 dark:text-foreground/80 leading-relaxed text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => {
            const config = techConfig[tech];
            if (!config) return null;

            const Icon = config.icon;
            const activeColor =
              theme === "dark"
                ? config.color
                : config.lightColor || config.color;
            const activeBg =
              theme === "dark" ? `${activeColor}15` : `${activeColor}10`;

            return (
              <div
                key={tech}
                style={{
                  backgroundColor: activeBg,
                  borderColor: `${activeColor}30`,
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-bold tracking-wide transition-all duration-300"
              >
                {Icon && <Icon style={{ color: activeColor }} size={18} />}
                <span style={{ color: activeColor }}>{tech}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-auto flex items-center gap-6 pt-3 text-sm border-t border-background/10 dark:border-white/10">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-status transition text-background/70 dark:text-foreground/80"
            >
              <FaExternalLinkAlt size={17} />
              Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-status transition text-background/70 dark:text-foreground/80"
            >
              <BsGithub size={17} />
              Código
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default CardProject;
