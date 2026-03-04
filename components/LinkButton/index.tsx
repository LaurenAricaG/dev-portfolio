"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/utils/cn.utils";
import { IconType } from "react-icons";

interface Props {
  href: string;
  ariaLabel?: string;
  title?: string;
  icon: IconType;
  label: string;
  isExternal?: boolean;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

// ── Perímetro real de la pill ────
function usePillPerimeter(ref: React.RefObject<HTMLAnchorElement | null>) {
  const [state, setState] = useState({ w: 0, h: 0, perimeter: 0 });

  const measure = useCallback(() => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    const r = height / 2;
    const perimeter = 2 * (width - 2 * r) + 2 * Math.PI * r;
    setState({ w: width, h: height, perimeter });
  }, [ref]);

  useEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, [measure]);

  return state;
}

// ── Constantes ──

const STROKE_W = 1.5;

const traceColor = "#22c55e";

const variantStyles = {
  default:
    "bg-button/5 dark:bg-button/80 text-background/70 dark:text-foreground/80 border border-status/60 dark:border-status/40",
  outline:
    "bg-transparent text-foreground border border-foreground/10 hover:border-status/30",
  ghost:
    "bg-transparent text-foreground/70 hover:text-foreground border border-transparent",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 gap-2",
  lg: "px-8 py-4 text-lg gap-2.5",
};

const iconSizes = { sm: 15, md: 18, lg: 22 };

// ── Componente ──

const LinkButton = (props: Props) => {
  const {
    href,
    ariaLabel,
    title,
    icon: Icon,
    label,
    isExternal = true,
    variant = "default",
    size = "md",
  } = props;

  const isEmail = href.startsWith("mailto:");
  const ref = useRef<HTMLAnchorElement>(null);
  const controls = useAnimation();
  const { w, h, perimeter } = usePillPerimeter(ref);

  const handleMouseEnter = () => {
    if (!perimeter) return;
    controls.start({
      strokeDashoffset: 0,
      transition: { duration: 0.55, ease: "easeInOut" },
    });
  };

  const handleMouseLeave = () => {
    if (!perimeter) return;
    controls.start({
      strokeDashoffset: perimeter,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  };

  return (
    <a
      ref={ref}
      href={href}
      className={cn(
        "relative inline-flex items-center rounded-full font-medium",
        "transition-all duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-status/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variantStyles[variant],
        sizes[size],
      )}
      aria-label={
        ariaLabel || `${label} - ${isEmail ? "Enviar email" : "Abrir enlace"}`
      }
      title={title || label}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...(isExternal &&
        !isEmail && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {/* Trazo verde animado */}
      {perimeter > 0 && (
        <svg
          width={w}
          height={h}
          aria-hidden="true"
          overflow="visible"
          className="pointer-events-none absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.rect
            x={STROKE_W / 2}
            y={STROKE_W / 2}
            width={w - STROKE_W}
            height={h - STROKE_W}
            rx={h / 2}
            ry={h / 2}
            fill="none"
            stroke={traceColor}
            strokeWidth={STROKE_W}
            strokeLinecap="round"
            initial={{
              strokeDasharray: perimeter,
              strokeDashoffset: perimeter,
            }}
            animate={controls}
          />
        </svg>
      )}

      <Icon
        size={iconSizes[size]}
        aria-hidden="true"
        className="relative z-10 shrink-0"
      />
      <span className="relative z-10 tracking-wide">{label}</span>
    </a>
  );
};

export default LinkButton;
