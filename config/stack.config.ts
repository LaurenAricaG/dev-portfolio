import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiTypeorm,
  SiGit,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

import { DiMsqlServer } from "react-icons/di";
import { Tech } from "@/types/tech.type";

export const technologies: Tech[] = [
  // FRONTEND
  {
    name: "Next.js",
    category: "Frontend",
    color: "#ffffff",
    lightColor: "#000000",
    icon: SiNextdotjs,
  },
  {
    name: "React",
    category: "Frontend",
    color: "#61DAFB",
    icon: SiReact,
  },

  {
    name: "TailwindCSS",
    category: "Frontend",
    color: "#06B6D4",
    icon: SiTailwindcss,
  },

  // LANGUAGES
  {
    name: "TypeScript",
    category: "Language",
    color: "#3178C6",
    icon: SiTypescript,
  },
  {
    name: "JavaScript",
    category: "Language",
    color: "#F7DF1E",
    icon: SiJavascript,
  },
  {
    name: "PHP",
    category: "Language",
    color: "#777BB4",
    icon: SiPhp,
  },

  // BACKEND
  {
    name: "Node.js",
    category: "Backend",
    color: "#339933",
    icon: SiNodedotjs,
  },
  {
    name: "Laravel",
    category: "Backend",
    color: "#FF2D20",
    icon: SiLaravel,
  },

  // DATABASE
  {
    name: "PostgreSQL",
    category: "Database",
    color: "#4169E1",
    icon: SiPostgresql,
  },
  {
    name: "MySQL",
    category: "Database",
    color: "#4479A1",
    icon: SiMysql,
  },
  {
    name: "SQL Server",
    category: "Database",
    color: "#CC2927",
    icon: DiMsqlServer,
  },

  // ORM
  {
    name: "TypeORM",
    category: "ORM",
    color: "#FE0803",
    icon: SiTypeorm,
  },

  // TOOLS
  {
    name: "Git",
    category: "Tools",
    color: "#F05032",
    icon: SiGit,
  },
];
