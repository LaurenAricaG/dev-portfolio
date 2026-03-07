"use client";

import { useState } from "react";
import Container from "../layout/Container";
import Navbar from "./Navbar";
import ThemeToggle from "./ThemeToggle";
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="relative border-b border-background/10 dark:border-white/10">
        <Container>
          <div className="flex items-center justify-between py-4">
            <h1 className="uppercase font-semibold tracking-wide">
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
