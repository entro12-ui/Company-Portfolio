import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AccessMethods from "@/components/Features";
import AboutUs from "@/components/EntroGuardian";
import PlatformFeatures from "@/components/HowItWorks";
import Industries from "@/components/Systems";
import SoftwareProducts from "@/components/SoftwareProducts";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <SoftwareProducts />
      <AccessMethods />
      <PlatformFeatures />
      <Industries />
      <Faq />
      <Footer />
    </main>
  );
}
