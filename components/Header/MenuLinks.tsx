// components/header/MenuLinks.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <ul className={className}>
      {menuItems.map((item) => {
        const Icon = item.icon;

        const isActive =
          item.path === "/" ? pathname === "/" : pathname.startsWith(item.path);

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
