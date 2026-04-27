export type OrganogramIconKey =
  | "director"
  | "auditor"
  | "manager"
  | "it"
  | "secretary"
  | "technical"
  | "customer-service"
  | "service"
  | "diagnostic"
  | "painting"
  | "cleaning"
  | "tools"
  | "parts"
  | "marketing"
  | "finance"
  | "hr"
  | "sales"
  | "digital"
  | "accounting"
  | "procurement"
  | "property"
  | "general-service";

export type OrganogramRole = {
  title: string;
  icon?: OrganogramIconKey;
};

export type OrganogramNode = OrganogramRole & {
  children?: OrganogramNode[];
  layout?: "stack" | "branch" | "side-stack";
};

export type OrganogramDepartment = {
  name: string;
  icon: OrganogramIconKey;
  accent: string;
  branches: OrganogramNode[];
  layout?: "grid" | "stack";
  sideNote?: OrganogramRole;
};

export type OrganogramData = {
  organization: string;
  heading: string;
  updatedLabel: string;
  tagline: string;
  leadership: {
    managingDirector: OrganogramRole;
    internalAuditor: OrganogramRole;
    generalManager: OrganogramRole;
    supportRoles: OrganogramRole[];
  };
  departments: OrganogramDepartment[];
};

export const afcOrganogram: OrganogramData = {
  organization: "AFS Automotive Fleet Services International PLC",
  heading: "Organogram",
  updatedLabel: "2026",
  tagline: "Driven by Excellence — Committed to Service",
  leadership: {
    managingDirector: {
      title: "Managing Director",
      icon: "director",
    },
    internalAuditor: {
      title: "Internal Auditor",
      icon: "auditor",
    },
    generalManager: {
      title: "General Manager",
      icon: "manager",
    },
    supportRoles: [
      {
        title: "IT Head",
        icon: "it",
      },
      {
        title: "Executive Secretary",
        icon: "secretary",
      },
    ],
  },
  departments: [
    {
      name: "Technical Manager",
      icon: "technical",
      accent: "#0f3f95",
      layout: "grid",
      sideNote: {
        title: "Tools Room",
        icon: "tools",
      },
      branches: [
        {
          title: "Customer Service Supervisor",
          icon: "customer-service",
          children: [
            {
              title: "Service Advisors",
              children: [
                {
                  title: "Warranty & Billing Officer",
                  children: [{ title: "Time Keeper" }],
                },
              ],
            },
          ],
        },
        {
          title: "Service Section Head (FO)",
          icon: "service",
          children: [
            {
              title: "Foreman",
              children: [
                {
                  title: "Senior Mechanics",
                  children: [{ title: "Junior Mechanics" }],
                },
              ],
            },
          ],
        },
        {
          title: "Electrical & Diagnostic Section Head",
          icon: "diagnostic",
          children: [
            {
              title: "Diagnostic Technician",
              children: [
                {
                  title: "Senior Electrician",
                  children: [{ title: "Junior Electricians" }],
                },
              ],
            },
          ],
        },
        {
          title: "Body & Painting Section Head",
          icon: "painting",
          children: [
            {
              title: "Senior Body Painter",
              children: [
                {
                  title: "Junior Body Painter",
                  children: [{ title: "Junior Panel Beaters" }],
                },
              ],
            },
          ],
        },
        {
          title: "Car Cleaning / Polishing Section Head",
          icon: "cleaning",
          children: [
            {
              title: "Denter",
              children: [
                {
                  title: "Sanding & Polishing",
                  children: [{ title: "Car Wash" }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Spare Parts & Logistics Manager",
      icon: "parts",
      accent: "#0f3f95",
      layout: "stack",
      branches: [
        {
          title: "Spare Parts Supervisor",
          icon: "parts",
          children: [
            {
              title: "Tire & Battery Sales Officer",
              children: [
                {
                  title: "Store Keeper",
                  children: [{ title: "Part Picker" }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Marketing Manager",
      icon: "marketing",
      accent: "#0f3f95",
      layout: "grid",
      branches: [
        {
          title: "Tender Sales & Marketing Officer",
          icon: "sales",
          children: [{ title: "Senior Sales Officer" }],
        },
        {
          title: "Digital Marketing & Media Officer",
          icon: "digital",
        },
      ],
    },
    {
      name: "Finance & Administration Manager",
      icon: "finance",
      accent: "#0f3f95",
      layout: "grid",
      branches: [
        {
          title: "Senior Accountant",
          icon: "accounting",
          children: [
            {
              title: "A/R Officer",
              children: [{ title: "Junior Accountants" }],
            },
          ],
        },
        {
          title: "Procurement Liaison Officer",
          icon: "procurement",
        },
        {
          title: "Property Administration",
          icon: "property",
          children: [{ title: "Cashier" }],
        },
      ],
    },
    {
      name: "HR & General Service Manager",
      icon: "hr",
      accent: "#0f3f95",
      layout: "grid",
      branches: [
        {
          title: "HR Officer",
          icon: "hr",
        },
        {
          title: "General Service Officer",
          icon: "general-service",
          layout: "side-stack",
          children: [
            { title: "Drivers" },
            { title: "Janitors" },
            { title: "Guards" },
          ],
        },
      ],
    },
  ],
};
