// components/header/ConfigDrawer.tsx
import { FaTimes } from "react-icons/fa";
import MenuLinks from "./MenuLinks";

interface MenuMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuMobile = ({ isOpen, onClose }: MenuMobileProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 sm:hidden"
        onClick={onClose}
      />

      <div
        className={`fixed right-0 top-0 h-full w-80 bg-foreground dark:bg-background z-50
        shadow-2xl border-l border-gray-200 dark:border-white/10
        transition-transform duration-300 sm:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-end p-3 border-b border-gray-200 dark:border-white/10">
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer"
          >
            <FaTimes className="text-gray-500 dark:text-gray-400 text-lg" />
          </button>
        </div>

        <aside className="flex items-center justify-center h-96">
          <MenuLinks
            onClick={onClose}
            className="flex flex-col items-center gap-12"
            itemClassName="
              text-sm font-semibold tracking-wide
              hover:underline underline-offset-4
              transition-colors
            "
          />
        </aside>
      </div>
    </>
  );
};

export default MenuMobile;
