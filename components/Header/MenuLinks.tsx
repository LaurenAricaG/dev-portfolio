"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { menuItems } from "@/config/header.config";
import { cn } from "@/utils/cn.utils";

interface MenuLinksProps {
  onClick?: () => void;
  className?: string;
  itemClassName?: string;
}

const MenuLinks = ({
  onClick,
  className = "",
  itemClassName = "",
}: MenuLinksProps) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (hash) setActiveSection(hash);

    const sections = ["hero", "projects", "about", "contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.25; // 25% desde el top

      let current = "hero";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollY) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll(); // ejecutar al montar
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <ul className={className}>
      {menuItems.map((item) => {
        const Icon = item.icon;

        const isActive =
          item.path === "/projects"
            ? pathname.startsWith("/projects") || activeSection === "projects"
            : activeSection === item.id;

        return (
          <li key={item.id}>
            <Link
              href={item.path}
              onClick={onClick}
              className={cn(
                "flex items-center gap-2 transition-colors",
                itemClassName,
                isActive
                  ? "text-status font-semibold"
                  : "text-muted hover:text-status",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="text-base" />
              <span>{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuLinks;
