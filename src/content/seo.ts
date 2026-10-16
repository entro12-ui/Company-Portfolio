import { company } from "@/content/company";

export const siteUrl = "https://www.entroethiopia.com";

export const companyDescription =
  "Entro Ethiopia Software Development PLC is based in Megnagna, Addis Ababa. We provide custom software, web platforms, AI and ERP systems, and hardware integration including CCTV camera installation, door access control, GPS vehicle tracking, and attendance machines for organizations across Ethiopia.";

export const organizationSameAs = [
  company.socials.facebook,
  company.socials.instagram,
  company.socials.tiktok,
  company.socials.linkedin,
  company.googleBusinessUrl,
].filter(Boolean);

const aggregateRating =
  company.googleRating.ratingValue != null &&
  company.googleRating.reviewCount != null &&
  company.googleRating.reviewCount > 0
    ? {
        "@type": "AggregateRating" as const,
        ratingValue: company.googleRating.ratingValue,
        reviewCount: company.googleRating.reviewCount,
        bestRating: 5,
        worstRating: 1,
      }
    : undefined;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: company.name,
  legalName: company.legalName,
  url: `${siteUrl}/`,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
    width: 512,
    height: 512,
  },
  description: companyDescription,
  taxID: company.tin,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: company.phone,
      contactType: "sales",
      areaServed: "ET",
      availableLanguage: ["English", "Amharic"],
    },
  ],
  sameAs: organizationSameAs,
  knowsAbout: [
    "Custom software development",
    "Web development",
    "AI solutions",
    "ERP systems",
    "CCTV camera installation",
    "Door access control systems",
    "GPS vehicle tracking",
    "Attendance machine integration",
    "Event and celebration management",
    "Wedding and corporate event planning",
  ],
  ...(aggregateRating ? { aggregateRating } : {}),
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#localbusiness`,
  name: company.legalName,
  alternateName: company.name,
  url: `${siteUrl}/`,
  image: `${siteUrl}/logo.png`,
  description: companyDescription,
  telephone: company.phone,
  email: company.email,
  taxID: company.tin,
  priceRange: "$$",
  hasMap: company.googleBusinessUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address,
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.0222,
    longitude: 38.7795,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Addis Ababa",
    },
    {
      "@type": "Country",
      name: "Ethiopia",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  sameAs: organizationSameAs,
  parentOrganization: {
    "@id": `${siteUrl}/#organization`,
  },
  ...(aggregateRating ? { aggregateRating } : {}),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: company.name,
  url: `${siteUrl}/`,
  description: companyDescription,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: "en",
};

/** Client testimonials already shown on the homepage — helps AI engines cite social proof. */
export function buildTestimonialReviewSchema(
  reviews: Array<{
    quote: string;
    name: string;
    organization: string;
  }>,
) {
  const list = Array.isArray(reviews) ? reviews : [];
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Entro Ethiopia client feedback",
    itemListElement: list.map((review, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        reviewBody: review.quote,
        author: {
          "@type": "Person",
          name: review.name,
        },
        itemReviewed: {
          "@id": `${siteUrl}/#organization`,
        },
        publisher: {
          "@type": "Organization",
          name: review.organization,
        },
      },
    })),
  };
}
