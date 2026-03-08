"use client";

import useThemeStore from "@/store/useTheme";
import { Tech } from "@/types/tech.type";
import { motion } from "framer-motion";
import { useState } from "react";

export default function TechCard({ tech }: { tech: Tech }) {
  const { name, category, icon: Icon, color, lightColor } = tech;
  const [hovered, setHovered] = useState(false);
  const theme = useThemeStore((state) => state.theme);

  const activeColor = theme === "light" && lightColor ? lightColor : color;

  const cornerPositions = [
    { top: 7, left: 7 },
    { top: 7, right: 7 },
    { bottom: 7, left: 7 },
    { bottom: 7, right: 7 },
  ] as const;

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.07 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="relative shrink-0"
    >
      <motion.div
        className="absolute -inset-px rounded-[20px] z-0"
        style={{
          background: `linear-gradient(135deg, ${activeColor}55, transparent 60%)`,
        }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div
        className="relative z-10 w-33 h-35 rounded-[18px] flex flex-col items-center justify-center overflow-hidden transition-[border-color,box-shadow] duration-300 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800"
        style={{
          boxShadow: hovered
            ? `0 0 0 1px ${activeColor}40, 0 0 40px -8px ${activeColor}55, 0 16px 40px -12px rgba(0,0,0,0.18)`
            : "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.07)",
          backgroundImage: hovered
            ? `radial-gradient(ellipse at 50% 50%, ${activeColor}22 0%, transparent 65%)`
            : undefined,
          borderColor: hovered ? activeColor + "60" : undefined,
        }}
      >
        <motion.div
          className="absolute top-0 bottom-0 w-[55%] pointer-events-none"
          style={{
            background: `linear-gradient(105deg, transparent 20%, ${activeColor}25 50%, transparent 80%)`,
          }}
          animate={hovered ? { left: "160%" } : { left: "-60%" }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-0 h-px"
          style={{
            left: "15%",
            right: "15%",
            background: `linear-gradient(to right, transparent, ${activeColor}, transparent)`,
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.25 }}
        />

        {hovered &&
          cornerPositions.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ delay: i * 0.04, duration: 0.2 }}
              className="absolute w-0.75 h-0.75 rounded-full"
              style={{ background: activeColor, ...pos }}
            />
          ))}

        <motion.div
          className="relative flex items-center justify-center mb-3 p-3 rounded-xl border transition-colors duration-300 bg-zinc-50 dark:bg-zinc-950/60 border-zinc-200 dark:border-zinc-800"
          style={{
            ...(hovered && { borderColor: activeColor + "60" }),
          }}
          animate={
            hovered
              ? {
                  boxShadow: `0 0 24px -4px ${activeColor}44, inset 0 0 8px -4px ${activeColor}18`,
                }
              : { boxShadow: "0 1px 4px rgba(0,0,0,0.06)" }
          }
          transition={{ duration: 0.3 }}
        >
          <Icon size={35} style={{ color: activeColor }} />
        </motion.div>

        <div className="relative h-5 flex items-center justify-center">
          <motion.p
            animate={{ opacity: hovered ? 0 : 1, y: hovered ? -8 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute text-xs font-bold tracking-wide leading-none text-zinc-500 dark:text-zinc-400 whitespace-nowrap"
          >
            {name}
          </motion.p>

          <motion.span
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute text-[8.5px] font-bold tracking-[0.18em] uppercase rounded-md px-1.75 py-0.5 whitespace-nowrap"
            style={{
              color: activeColor,
              background: activeColor + "18",
              border: `1px solid ${activeColor}40`,
            }}
          >
            {category}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}
