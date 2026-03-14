"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import type { Experience } from "@/types/experience.types";
import experiencesData from "@/data/experience-data.json";
import CardExperience from "./CardExperience";
import Container from "../layout/Container";
import Title from "../Tittle";

const experiences = experiencesData.experience as Experience[];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-foreground dark:bg-background overflow-hidden pt-15"
    >
      <Container className="py-10">
        <Title label="carrera" title="Experiencia" subtitle="Profesional" />
        <motion.div className="pointer-events-none absolute inset-0" />

        <div>
          {experiences.map((exp, i) => (
            <CardExperience
              key={exp.id}
              exp={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExperienceSection;
