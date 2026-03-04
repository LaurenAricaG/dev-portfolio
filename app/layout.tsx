import { DM_Sans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/utils/cn.utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/layout/Container";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen flex flex-col antialiased bg-foreground text-background dark:bg-background dark:text-foreground",
          dmSans.className,
        )}
      >
        <Header />

        {/* MAIN ocupa el espacio restante */}
        <main className="flex-1 flex flex-col">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
