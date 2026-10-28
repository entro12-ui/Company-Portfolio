export type ClientReview = {
  quote: string;
  name: string;
  organization: string;
  logoSrc?: string;
};

export const clientReviews: ClientReview[] = [
  {
    quote:
      "Entro Ethiopia delivered our MediCare system for Danat Dental Clinic, with practical workflows, clear usability, and reliable support for day-to-day healthcare operations.",
    name: "Clinic Administration",
    organization: "Danat Dental Clinic",
    logoSrc: "/healthcare-client-logo.png",
  },
  {
    quote:
      "Entro Ethiopia developed practical tools for student use, including a humanizer workflow and an AI integration system tailored to our platform needs.",
    name: "Product Team",
    organization: "duey.ai",
    logoSrc: "/duey.ai.png",
  },
  {
    quote:
      "Entro Ethiopia built a booking system tailored to our operation flow. It made reservations easier to manage and improved day-to-day coordination.",
    name: "Operations Team",
    organization: "Operation Kilimanjaro",
    logoSrc: "/operation-kilimanjaro-logo.png",
  },
];
