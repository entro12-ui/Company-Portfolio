"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTheme } from "@/context/ThemeContext";

export default function PageShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const mainBg = isDark ? "bg-gray-900" : "bg-white";

  return (
    <>
      <Navbar />
      <main
        className={`min-h-screen pt-24 sm:pt-28 transition-colors duration-300 ${mainBg}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
