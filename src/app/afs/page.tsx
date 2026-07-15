import type { Metadata } from "next";
import AfsFacilityGalleryBoard from "@/components/AfsFacilityGalleryBoard";
import JsonLd from "@/components/JsonLd";
import { afsPhotos } from "@/content/afsPhotos";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "AFS Facility Gallery | Office & Working Area",
  description:
    "Explore AFS Automotive Fleet Services International PLC through office, reception, and workshop photos in one combined facility gallery.",
  alternates: {
    canonical: "https://www.entroethiopia.com/afs",
  },
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "AFS Automotive Fleet Services Facility Gallery",
  description:
    "Photos of the AFS office, reception, and automotive service working areas.",
  url: "https://www.entroethiopia.com/afs",
};

export default function AfsGalleryPage() {
  return (
    <>
      <JsonLd data={gallerySchema} />
      <article className="bg-gradient-to-b from-slate-100 via-white to-slate-100 px-1 pb-4 pt-1 sm:px-2 sm:pb-6 sm:pt-2">
        <div className="mx-auto max-w-[1600px]">
          <AfsFacilityGalleryBoard photos={afsPhotos} />
        </div>
      </article>
    </>
  );
}
