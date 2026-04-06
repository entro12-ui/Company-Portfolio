import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AccessMethods from "@/components/Features";
import AboutUs from "@/components/EntroGuardian";
import PlatformFeatures from "@/components/HowItWorks";
import Industries from "@/components/Systems";
import SoftwareProducts from "@/components/SoftwareProducts";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { faqItems } from "@/content/faqItems";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Software Company Ethiopia | Custom Software, Web & AI Solutions | Entro Ethiopia",
  description:
    "Entro Ethiopia is a software company in Ethiopia building custom software, websites, AI solutions, and ERP systems for growing organizations.",
  alternates: {
    canonical: "https://www.entroethiopia.com/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Entro Ethiopia",
  url: "https://www.entroethiopia.com/",
  logo: "https://www.entroethiopia.com/logo.png",
  description:
    "Entro Ethiopia builds custom software, websites, AI solutions and ERP systems for SMEs, NGOs, clinics and government in Addis Ababa and Ethiopia.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+251 979 113 638",
    contactType: "sales",
  },
  sameAs: ["[FACEBOOK_URL]", "[LINKEDIN_URL]"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />
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
