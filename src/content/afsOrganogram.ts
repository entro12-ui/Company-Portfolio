export type OrgChartBranch = {
  title: string;
  roles: string[];
};

export type OrgChartDepartment = {
  name: string;
  summary: string;
  accent: string;
  branches: OrgChartBranch[];
  sideNote?: string;
};

export type OrgChartData = {
  organization: string;
  heading: string;
  updatedLabel: string;
  tagline: string;
  leadership: {
    managingDirector: string;
    internalAuditor: string;
    generalManager: string;
    supportRoles: string[];
  };
  departments: OrgChartDepartment[];
};

export const afsOrganogram: OrgChartData = {
  organization: "AFS Automotive Fleet Services International PLC",
  heading: "Organogram",
  updatedLabel: "February, 2026",
  tagline: "Driven by Excellence — Committed to Service",
  leadership: {
    managingDirector: "Managing Director",
    internalAuditor: "Internal Auditor",
    generalManager: "General Manager",
    supportRoles: ["IT Head", "Executive Secretary"],
  },
  departments: [
    {
      name: "Technical Manager",
      summary:
        "Oversees workshop operations, service quality, diagnostics, bodywork, and vehicle finishing.",
      accent: "#0f3f95",
      sideNote: "Tools Room",
      branches: [
        {
          title: "Customer Service Supervisor",
          roles: ["Service Advisors", "Warranty & Billing Officer", "Time Keeper"],
        },
        {
          title: "Service Section Head (FO)",
          roles: ["Foreman", "Senior Mechanics", "Junior Mechanics"],
        },
        {
          title: "Electrical & Diagnostic Section Head",
          roles: ["Diagnostic Technician", "Senior Electrician", "Junior Electricians"],
        },
        {
          title: "Body & Painting Section Head",
          roles: ["Senior Body Painter", "Junior Body Painter", "Junior Panel Beaters"],
        },
        {
          title: "Car Cleaning / Polishing Section Head",
          roles: ["Denter", "Sanding & Polishing", "Car Wash"],
        },
      ],
    },
    {
      name: "Spare Parts & Logistics Manager",
      summary:
        "Leads stock movement, parts handling, and tire and battery sales operations.",
      accent: "#1257c5",
      branches: [
        {
          title: "Spare Parts Supervisor",
          roles: ["Tire & Battery Sales Officer", "Store Keeper", "Part Picker"],
        },
      ],
    },
    {
      name: "Marketing Manager",
      summary:
        "Coordinates tender sales, outreach, and digital media visibility for the business.",
      accent: "#1b6bd6",
      branches: [
        {
          title: "Tender Sales & Marketing Officer",
          roles: ["Senior Sales Officer"],
        },
        {
          title: "Digital Marketing & Media Officer",
          roles: [],
        },
      ],
    },
    {
      name: "Finance & Administration Manager",
      summary:
        "Handles accounting control, procurement liaison, and property administration.",
      accent: "#104f9f",
      branches: [
        {
          title: "Senior Accountant",
          roles: ["A/R Officer", "Junior Accountants"],
        },
        {
          title: "Procurement Liaison Officer",
          roles: [],
        },
        {
          title: "Property Administration",
          roles: ["Cashier"],
        },
      ],
    },
    {
      name: "HR & General Service Manager",
      summary:
        "Owns people operations, workplace services, and support staff coordination.",
      accent: "#0d3a88",
      branches: [
        {
          title: "HR Officer",
          roles: [],
        },
        {
          title: "General Service Officer",
          roles: ["Drivers", "Janitors", "Guards"],
        },
      ],
    },
  ],
};
