import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandFramerMotion } from "react-icons/tb";
import {
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiDocker,
  SiMysql,
  SiExpo,
  SiJavascript,
  SiTypeorm,
  SiVite,
  SiDotnet,
  SiGit,
  SiPhp,
  SiExpress,
  SiLaravel,
  SiGraphql,
  SiMongodb,
  SiJest,
  SiStorybook,
} from "react-icons/si";

export const techConfig: Record<
  string,
  { color: string; lightColor?: string; icon: IconType; bg: string }
> = {
  JavaScript: {
    color: "#F7DF1E",
    icon: SiJavascript,
    bg: "rgba(247, 223, 30, 0.1)",
  },
  TypeScript: {
    color: "#3178C6",
    icon: SiTypescript,
    bg: "rgba(49, 120, 198, 0.15)",
  },
  PHP: { color: "#777BB4", icon: SiPhp, bg: "rgba(119, 123, 180, 0.15)" },

  React: {
    color: "#61DAFB",
    lightColor: "#087EA4",
    icon: SiReact,
    bg: "rgba(97, 218, 251, 0.15)",
  },
  "React.js": {
    color: "#61DAFB",
    lightColor: "#087EA4",
    icon: SiReact,
    bg: "rgba(97, 218, 251, 0.15)",
  },

  "Next.js": {
    color: "#ffffff",
    lightColor: "#000000",
    icon: SiNextdotjs,
    bg: "rgba(255, 255, 255, 0.1)",
  },

  "Framer Motion": {
    color: "#FEF62A",
    lightColor: "#d4cd00",
    icon: TbBrandFramerMotion,
    bg: "rgba(254, 246, 42, 0.1)",
  },
  "Tailwind CSS": {
    color: "#06B6D4",
    icon: SiTailwindcss,
    bg: "rgba(6, 182, 212, 0.15)",
  },

  Vite: { color: "#646CFF", icon: SiVite, bg: "rgba(100, 108, 255, 0.15)" },

  Express: {
    color: "#ffffff",
    lightColor: "#000000",
    icon: SiExpress,
    bg: "rgba(255, 255, 255, 0.1)",
  },
  "Node.js": {
    color: "#339933",
    icon: SiNodedotjs,
    bg: "rgba(51, 153, 51, 0.15)",
  },
  NestJS: { color: "#E0234E", icon: SiNestjs, bg: "rgba(224, 35, 78, 0.1)" },
  Laravel: { color: "#FF2D20", icon: SiLaravel, bg: "rgba(255, 45, 32, 0.1)" },
  GraphQL: { color: "#E10098", icon: SiGraphql, bg: "rgba(225, 0, 152, 0.1)" },
  ".Net": { color: "#ffffff", icon: SiDotnet, bg: "rgba(81, 43, 212, 0.7)" },

  PostgreSQL: {
    color: "#4169E1",
    icon: SiPostgresql,
    bg: "rgba(65, 105, 225, 0.15)",
  },
  MySQL: { color: "#4479A1", icon: SiMysql, bg: "rgba(68, 121, 161, 0.15)" },
  "SQL Server": {
    color: "#CC2927",
    icon: DiMsqlServer,
    bg: "rgba(204, 41, 39, 0.15)",
  },
  MongoDB: { color: "#47A248", icon: SiMongodb, bg: "rgba(71, 162, 72, 0.15)" },
  TypeORM: { color: "#FF6619", icon: SiTypeorm, bg: "rgba(255, 102, 25, 0.1)" },

  Docker: { color: "#2496ED", icon: SiDocker, bg: "rgba(36, 150, 237, 0.15)" },
  Git: { color: "#F05032", icon: SiGit, bg: "rgba(240, 80, 50, 0.15)" },
  Expo: {
    color: "#ffffff",
    lightColor: "#000000",
    icon: SiExpo,
    bg: "rgba(255, 255, 255, 0.1)",
  },

  Jest: { color: "#C21325", icon: SiJest, bg: "rgba(194, 19, 37, 0.1)" },
  Storybook: {
    color: "#FF4785",
    icon: SiStorybook,
    bg: "rgba(255, 71, 133, 0.12)",
  },
};
