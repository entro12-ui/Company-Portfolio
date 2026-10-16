export const company = {
  name: "Entro Ethiopia",
  legalName: "Entro Ethiopia Software Development PLC",
  tagline: "Software, hardware, web and AI engineering",
  phone: "+251 979 113 638",
  phoneHref: "tel:+251979113638",
  email: "entro12@entroethiopia.com",
  emailHref: "mailto:entro12@entroethiopia.com",
  address: "Megnagna, Hibret Bldg, Office No. H7-702",
  city: "Addis Ababa, Ethiopia",
  tin: "0095875999",
  /** Paste your Google Business Profile share link here (maps.app.goo.gl or google.com/maps). */
  googleBusinessUrl:
    "https://www.google.com/maps/search/?api=1&query=Entro+Ethiopia+Megnagna+Hibret+Bldg+Addis+Ababa",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Megnagna%2C%20Hibret%20Bldg%2C%20Office%20No.%20H7-702%2C%20Addis%20Ababa%2C%20Ethiopia&z=16&output=embed",
  /**
   * Fill these from your live Google Business Profile (visible stars + review count).
   * Leave null until you confirm the real numbers — do not invent ratings.
   */
  googleRating: {
    ratingValue: null as number | null,
    reviewCount: null as number | null,
  },
  socials: {
    facebook: "https://web.facebook.com/profile.php?id=61574279425487",
    instagram: "https://www.instagram.com/entroethiopia/",
    tiktok: "https://www.tiktok.com/@entroethiopia?_r=1&_t=ZS-95Ofst4pNzh",
    linkedin: "https://www.linkedin.com/company/entro-ethiopia",
  },
} as const;

export const serviceLinks = [
  {
    href: "/custom-software-development",
    label: "Custom Software Development",
    description: "Systems engineered around how your organization actually runs.",
  },
  {
    href: "/web-development",
    label: "Web Development",
    description: "Fast, accessible, SEO-ready websites and web applications.",
  },
  {
    href: "/ai-solutions",
    label: "AI Solutions",
    description: "Assistants, automation and decision support that earn their keep.",
  },
  {
    href: "/erp-systems",
    label: "ERP Systems",
    description: "Finance, inventory, HR and operations unified in one platform.",
  },
  {
    href: "/hardware-systems",
    label: "Hardware Systems",
    description:
      "CCTV, access control, GPS tracking, attendance devices, and unified platforms.",
  },
] as const;

export const productLinks = [
  {
    href: "/products/edustack-schoolhub",
    label: "EduStack SchoolHub",
    description: "School management for KG–12 and multi-branch academies.",
  },
  {
    href: "/products/medicare-ai",
    label: "MediCare AI",
    description: "Hospital and clinic operations with AI clinical support.",
  },
  {
    href: "/products/control-inventory",
    label: "ኢዚስቶክ · EasyStock",
    description: "Inventory and sales system for stock, POS and branch reporting.",
  },
  {
    href: "/products/wubet",
    label: "ውበት · Wubet",
    description: "Salon, barbershop and spa management system.",
  },
  {
    href: "/products/guzo",
    label: "ጉዞ · Guzo",
    description: "Automotive service and garage management system.",
  },
  {
    href: "/products/nibret",
    label: "ንብረት · Nibret",
    description: "Property and real estate management system.",
  },
  {
    href: "/products/enku",
    label: "እንቁ · Enku",
    description:
      "Every celebration deserves something special — weddings, birthdays, events.",
  },
] as const;

export const industryLinks = [
  {
    href: "/solutions-for-smes",
    label: "SMEs & Growing Businesses",
    description: "Replace spreadsheets with systems that scale.",
  },
  {
    href: "/solutions-for-ngos",
    label: "NGOs & Development",
    description: "Program tracking, beneficiary data and donor reporting.",
  },
  {
    href: "/solutions-for-clinics",
    label: "Clinics & Healthcare",
    description: "Patient records, billing and clinical workflows.",
  },
  {
    href: "/solutions-for-government",
    label: "Government & Public Sector",
    description: "Document workflows, registries and secure reporting.",
  },
] as const;

export const companyLinks = [
  { href: "/about", label: "About Us", description: "Who we are and how we work." },
  {
    href: "/vision-mission",
    label: "Vision & Mission",
    description: "The standard we hold ourselves to.",
  },
  {
    href: "/our-team",
    label: "Our Team",
    description: "The engineers and designers behind the work.",
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    description: "Selected projects and measurable outcomes.",
  },
  {
    href: "/blog",
    label: "Insights",
    description: "Practical guides on software, AI and ERP.",
  },
] as const;
