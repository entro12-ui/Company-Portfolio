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
      <main className="min-h-screen bg-white pt-24 sm:pt-28">{children}</main>
      <Footer />
    </>
  );
}
