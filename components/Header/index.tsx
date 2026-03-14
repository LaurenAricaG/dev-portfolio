"use client";

import { useEffect, useState } from "react";
import { cn } from "@/utils/cn.utils";
import Container from "../layout/Container";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 backdrop-blur-md transition-all duration-300",
          "bg-foreground/60 dark:bg-background/60",
          "border-b border-black/5 dark:border-white/5",
          "shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.25)]",
        )}
      >
        <Container>
          <div
            className={cn(
              "flex items-center justify-between transition-[padding] duration-300",
              scrolled ? "py-3" : "py-4",
            )}
          >
            <h1 className="uppercase font-semibold tracking-wide text-background dark:text-foreground">
              Lauren Arica
            </h1>
            <div className="flex flex-row-reverse md:flex-row items-center gap-3 md:gap-10">
              <Navbar onOpenMenu={() => setMenuOpen(true)} />
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </header>

      <MenuMobile isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Header;
