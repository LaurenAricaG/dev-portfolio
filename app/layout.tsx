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
          "antialiased bg-foreground text-background dark:text-foreground dark:bg-background",
          dmSans.className,
        )}
      >
        <Header />
        <main className="py-10">
          <Container>{children}</Container>
        </main>
        <Footer />
      </body>
    </html>
  );
}
