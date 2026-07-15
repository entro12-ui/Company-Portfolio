export type AfsPhotoCategory = "office" | "working-area" | "overview";

export type AfsPhoto = {
  src: string;
  alt: string;
  category: AfsPhotoCategory;
};

const photoBase = "/AFS photos";

export const afsPhotos: AfsPhoto[] = [
  {
    src: `${photoBase}/photo_5798416715774365247_y.jpg`,
    alt: "AFS International PLC reception desk and branded office interior",
    category: "office",
  },
  {
    src: `${photoBase}/photo_5915986660908797524_y.jpg`,
    alt: "AFS office entrance with branded glass door and reception area",
    category: "office",
  },
  {
    src: `${photoBase}/photo_5915986660908797514_y.jpg`,
    alt: "AFS facility showing the welcome office entrance and service yard",
    category: "overview",
  },
  {
    src: `${photoBase}/photo_5915986660908797515_y.jpg`,
    alt: "AFS service center with office building, fleet parking, and inspection pit",
    category: "overview",
  },
  {
    src: `${photoBase}/photo_5915986660908797520_y.jpg`,
    alt: "AFS campus overview with office, service bays, and vehicle fleet",
    category: "overview",
  },
  {
    src: `${photoBase}/photo_5798416715774365239_y.jpg`,
    alt: "AFS multi-brand service bays with Toyota, BYD, Suzuki, Hyundai, Nissan, and Volkswagen",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797503_y.jpg`,
    alt: "AFS fleet of Toyota Land Cruisers ready for service",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797504_y.jpg`,
    alt: "AFS quality service bays with vehicles under maintenance",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797505_y.jpg`,
    alt: "Indoor workshop with Toyota Land Cruisers on jack stands",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797506_y.jpg`,
    alt: "Vehicle inspection pit inside the AFS workshop",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797507_y.jpg`,
    alt: "Vehicle lifted on hydraulic equipment in the repair bay",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797508_y.jpg`,
    alt: "Repair service bay with vehicle on lift",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797509_y.jpg`,
    alt: "Outdoor quality service area with tools room and fleet vehicles",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797510_y.jpg`,
    alt: "Tools room, spare parts area, and express service workshop",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797511_y.jpg`,
    alt: "Workshop waste management and equipment storage area",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797512_y.jpg`,
    alt: "Used oil filter disposal station in the service workshop",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797513_y.jpg`,
    alt: "Used grease and lubricant collection area",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797518_y.jpg`,
    alt: "Body work and painting service area with fleet vehicles",
    category: "working-area",
  },
  {
    src: `${photoBase}/photo_5915986660908797519_y.jpg`,
    alt: "Automotive paint booth and body repair workshop",
    category: "working-area",
  },
];

export const afsPhotoSections = [
  {
    id: "overview",
    title: "Office & Workshop Together",
    description:
      "A single view of how AFS combines customer-facing office operations with active vehicle service and repair work.",
  },
  {
    id: "office",
    title: "Office & Reception",
    description:
      "The front office, welcome area, and branded reception space where clients are received and supported.",
  },
  {
    id: "working-area",
    title: "Working Area & Service Bays",
    description:
      "Workshop floors, repair bays, lifts, tools rooms, and fleet service operations across the facility.",
  },
] as const;
