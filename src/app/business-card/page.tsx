import type { Metadata } from "next";
import BusinessCard from "@/components/BusinessCard";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Business Card | Entro Ethiopia",
  description:
    "Printable business card view for Entro Ethiopia with company contact details and service summary.",
  alternates: {
    canonical: "https://www.entroethiopia.com/business-card",
  },
};

export default function BusinessCardPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <BusinessCard />
    </main>
  );
}
