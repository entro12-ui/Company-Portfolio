import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import AfcOrganogramBoard from "@/components/AfcOrganogramBoard";
import { afcOrganogram } from "@/content/afcOrganogram";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "AFS Organogram | AFS Automotive Fleet Services International PLC",
  description:
    "Dedicated organogram page for AFS Automotive Fleet Services International PLC, showing the full organizational structure in a responsive, web-friendly layout.",
  alternates: {
    canonical: "https://www.entroethiopia.com/afc",
  },
};

const organogramSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "AFS Automotive Fleet Services International PLC Organogram",
  url: "https://www.entroethiopia.com/afc",
  description:
    "Full organizational chart for AFS Automotive Fleet Services International PLC.",
};

export default function AfcPage() {
  return (
    <>
      <JsonLd data={organogramSchema} />
      <article className="bg-gradient-to-b from-slate-100 via-white to-slate-100 px-1 pb-4 pt-1 sm:px-2 sm:pb-6 sm:pt-2 print:bg-white print:p-0">
        <div className="mx-auto max-w-[1600px]">
          <AfcOrganogramBoard chart={afcOrganogram} />
        </div>
      </article>
    </>
  );
}
