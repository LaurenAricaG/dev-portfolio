"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Experience } from "@/types/experience.types";

const typeStyles: Record<string, string> = {
  "Full-time":
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "Part-time":
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Contract:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  Freelance:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  Internship:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
};

export function TimelineLine({ color }: { color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="flex-1 flex justify-center mt-2 overflow-hidden">
      <motion.div
        className="w-px origin-top"
        style={{ backgroundColor: color, opacity: 0.3 }}
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.65, ease: "easeInOut", delay: 0.2 }}
      />
    </div>
  );
}

interface CardExperienceProps {
  exp: Experience;
  index: number;
  isLast: boolean;
}

const CardExperience = ({ exp, index, isLast }: CardExperienceProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const dotY = useTransform(scrollYProgress, [0, 1], [-10, 10]);

  return (
    <motion.div
      ref={cardRef}
      className="relative flex gap-5 sm:gap-7"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: index * 0.08,
      }}
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center shrink-0 w-10">
        <motion.div style={{ y: dotY }}>
          <motion.div
            className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold shadow-md mt-0.5 select-none cursor-default"
            style={{ backgroundColor: exp.accentColor }}
            initial={{ scale: 0, rotate: -15 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 18,
              delay: index * 0.08 + 0.15,
            }}
            whileHover={{ scale: 1.12, rotate: 3 }}
          >
            {exp.logo}
            {exp.current && (
              <>
                <motion.span
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      `0 0 0 0px ${exp.accentColor}55`,
                      `0 0 0 9px ${exp.accentColor}00`,
                    ],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white dark:border-zinc-950" />
                <motion.span
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400"
                  animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </>
            )}
          </motion.div>
        </motion.div>
        {!isLast && <TimelineLine color={exp.accentColor} />}
      </div>

      {/* Content */}
      <motion.div
        className={`flex-1 group relative ${isLast ? "pb-0" : "pb-10"}`}
        whileHover="hovered"
      >
        <motion.div
          className="absolute -inset-x-2 inset-y-0 rounded-2xl pointer-events-none"
          style={{ backgroundColor: exp.accentColor }}
          variants={{ hovered: { opacity: 0.04 }, initial: { opacity: 0 } }}
          initial="initial"
          transition={{ duration: 0.3 }}
        />

        {/* Position + badges */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
          {/* Left */}
          <div className="flex flex-col items-start gap-0.5">
            <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {exp.position}
            </h3>

            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {exp.company}
            </span>
          </div>

          {/* Right badges */}
          <div className="flex flex-wrap items-center gap-1.5 md:flex-col md:items-end">
            {/* Current + Type */}
            <div className="flex flex-wrap items-center gap-1.5">
              {exp.current && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Actual
                </span>
              )}

              <span
                className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${typeStyles[exp.type]}`}
              >
                {exp.type}
              </span>
            </div>

            {/* Period + Duration badge */}
            <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2.5 py-1 rounded-full bg-zinc-100 text-background/70 dark:text-foreground/80 dark:bg-zinc-800">
              {exp.period}

              {exp.duration && (
                <>
                  <span className="text-background/70 dark:text-foreground/80">
                    |
                  </span>
                  <span className="text-background/70 dark:text-foreground/80">
                    {exp.duration}
                  </span>
                </>
              )}
            </span>
          </div>
        </div>
        {/* Location */}
        {exp.location && (
          <div className="flex items-center gap-1 mb-4 text-xs text-background/70 dark:text-foreground/80 relative">
            <svg
              className="w-3 h-3 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {exp.location}
          </div>
        )}

        {/* Responsibilities */}
        <ul className="space-y-2 relative mb-4">
          {exp.responsibilities.map((resp, i) => (
            <motion.li
              key={i}
              className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400"
              initial={{ opacity: 0, x: -12 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.38,
                ease: "easeOut",
                delay: index * 0.08 + 0.3 + i * 0.06,
              }}
            >
              <motion.span
                className="mt-2 w-1 h-1 rounded-full shrink-0"
                style={{ backgroundColor: exp.accentColor }}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{
                  delay: index * 0.08 + 0.35 + i * 0.06,
                  type: "spring",
                  stiffness: 400,
                }}
              />
              {resp}
            </motion.li>
          ))}
        </ul>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 relative">
          {exp.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="inline-flex items-center text-[11px] font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                delay: index * 0.08 + 0.55 + i * 0.05,
                type: "spring",
                stiffness: 300,
              }}
              whileHover={{ scale: 1.08, transition: { duration: 0.15 } }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Links */}
        {(exp.websiteUrl || exp.certificateUrl) && (
          <div className="flex items-center gap-3 mt-4 relative">
            {exp.websiteUrl && (
              <a
                href={exp.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Sitio web
              </a>
            )}
            {exp.certificateUrl && (
              <a
                href={exp.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
              >
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                Certificado
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CardExperience;
