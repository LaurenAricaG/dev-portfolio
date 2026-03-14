"use client";

import { motion } from "framer-motion";
import TechCard from "./TechCard";
import { technologies } from "@/config/stack.config";
import Container from "../layout/Container";
import Title from "../Tittle";

const allTech = [...technologies, ...technologies, ...technologies];

export default function TechStack() {
  return (
    <section className="pt-15 overflow-hidden bg-foreground dark:bg-background">
      <Container className="py-10">
        <Title label="Tecnologías" title="Stack" subtitle="Tecnológico" />

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-linear-to-r from-foreground dark:from-background to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-linear-to-l from-foreground dark:from-background to-transparent" />

          <motion.div
            className="flex gap-5 md:gap-12 items-center py-4 px-4"
            style={{ width: "max-content" }}
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            whileHover={{ transition: { duration: 9999 } }}
          >
            {allTech.map((tech, i) => (
              <TechCard key={i} tech={tech} />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
