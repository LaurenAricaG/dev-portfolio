"use client";

import { FiMenu } from "react-icons/fi";
import MenuLinks from "./MenuLinks";

interface NavbarProps {
  onOpenMenu: () => void;
}

const Navbar = ({ onOpenMenu }: NavbarProps) => {
  return (
    <nav aria-label="Navegación principal" className="flex items-center">
      <MenuLinks
        className="hidden md:flex items-center gap-6"
        itemClassName="text-sm font-medium hover:underline underline-offset-4 transition-colors"
      />

      <button
        onClick={onOpenMenu}
        className="md:hidden p-2 cursor-pointer"
        aria-label="Abrir menú"
      >
        <FiMenu size={22} />
      </button>
    </nav>
  );
};

export default Navbar;
