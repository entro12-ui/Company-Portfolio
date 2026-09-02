import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {/* Offsets the fixed header: 72px bar on mobile, 36px utility bar + 80px bar from lg. */}
      <main className="min-h-screen bg-white pt-[72px] transition-colors duration-300 dark:bg-ink-950 lg:pt-[116px]">
        {children}
      </main>
      <Footer />
    </>
  );
}
