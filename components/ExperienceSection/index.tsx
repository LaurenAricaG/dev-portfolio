"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import type { Experience } from "@/types/experience.types";
import experiencesData from "@/data/experience-data.json";
import CardExperience from "./CardExperience";
import Container from "../layout/Container";
import Title from "../Tittle";

const experiences = experiencesData.experience as Experience[];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative bg-foreground dark:bg-background overflow-hidden pt-20"
    >
      <Container>
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
