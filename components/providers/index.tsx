"use client";

import { Toaster } from "sileo";
import useThemeStore from "@/store/useTheme";

export default function Providers() {
  const theme = useThemeStore((state) => state.theme);
  const isDark = theme === "dark";

  return (
    <Toaster
      position="top-center"
      theme={isDark ? "dark" : "light"}
      options={{
        fill: isDark ? "#0f0f0f" : "#ffffff",
        roundness: 15,
        styles: {
          title: "font-semibold! text-sm!",
        },
      }}
    />
  );
}
