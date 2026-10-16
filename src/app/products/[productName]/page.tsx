import Link from "next/link";
import { notFound } from "next/navigation";

const products = {
  "medicare-ai": {
    title: "MediCare AI",
    tagline: "Smart hospital and clinic operations platform",
    description:
      "Intelligent healthcare management platform with AI-powered features for modern hospitals and clinics.",
    highlights: [
      "Patient registration and records management",
      "AI-assisted diagnostics and care support",
      "Billing, operations, and staff workflow tracking",
      "Reporting and performance monitoring",
    ],
    useCases: [
      "Hospitals managing high daily patient volume",
      "Specialty clinics improving service turnaround time",
      "Healthcare groups that need centralized reporting",
    ],
    modules: [
      "EMR",
      "Appointments",
      "Pharmacy",
      "Laboratory",
      "Radiology",
      "Billing",
      "Insurance",
      "Doctor Scheduling",
      "Inpatient Management",
      "Analytics Dashboard",
    ],
    cta: "Request a Demo",
  },
  "edustack-schoolhub": {
    title: "EduStack SchoolHub",
    tagline: "End-to-end school administration and learning hub",
    description:
      "Modern school management platform for KG-12 schools and academies with AI-supported learning workflows.",
    highlights: [
      "Administration, academics, finance, and HR workflows",
      "Multi-branch support with centralized visibility",
      "Parent-teacher-student communication tools",
      "AI-powered academic insights",
    ],
    useCases: [
      "Private and public schools with multiple departments",
      "Academies requiring tighter student performance tracking",
      "Multi-campus institutions that need one system",
    ],
    modules: [
      "Admissions",
      "Student Information System",
      "Attendance",
      "Exams & Grading",
      "Fee Management",
      "HR System",
      "Teacher Portal",
      "Student Portal",
      "Parent Portal",
      "Library",
      "Timetable",
      "School Analytics",
    ],
    cta: "Book a SchoolHub Demo",
  },
  guzo: {
    title: "ጉዞ · Guzo",
    tagline: "Automotive service and garage management system",
    description:
      "ጉዞ (Guzo) is Entro Ethiopia’s automotive service and garage management platform — from booking to delivery, with customers, vehicles, jobs, parts, and reminders.",
    highlights: [
      "Customer and vehicle management",
      "Service booking and job tracking",
      "Parts and inventory workflow management",
      "SMS and email service notifications",
    ],
    useCases: [
      "Garages handling multiple vehicles per day",
      "Service centers with recurring maintenance plans",
      "Workshops tracking mechanic productivity and parts usage",
    ],
    modules: [
      "Job Cards",
      "Appointments",
      "Vehicle Service History",
      "Spare Parts Inventory",
      "Technician Assignment",
      "Invoices",
      "Customer Notifications",
      "Workshop Performance Dashboard",
    ],
    cta: "Request Guzo Demo",
  },
  "car-service": {
    title: "ጉዞ · Guzo",
    tagline: "Automotive service and garage management system",
    description:
      "ጉዞ (Guzo) is Entro Ethiopia’s automotive service and garage management platform — from booking to delivery, with customers, vehicles, jobs, parts, and reminders.",
    highlights: [
      "Customer and vehicle management",
      "Service booking and job tracking",
      "Parts and inventory workflow management",
      "SMS and email service notifications",
    ],
    useCases: [
      "Garages handling multiple vehicles per day",
      "Service centers with recurring maintenance plans",
      "Workshops tracking mechanic productivity and parts usage",
    ],
    modules: [
      "Job Cards",
      "Appointments",
      "Vehicle Service History",
      "Spare Parts Inventory",
      "Technician Assignment",
      "Invoices",
      "Customer Notifications",
      "Workshop Performance Dashboard",
    ],
    cta: "Request Guzo Demo",
  },
  "fitmind-ai": {
    title: "FitMind AI",
    tagline: "Personalized fitness and nutrition coaching assistant",
    description:
      "Personal fitness and nutrition app that uses AI to generate and track personalized plans.",
    highlights: [
      "AI-generated weekly workout plans",
      "Personalized nutrition guidance",
      "Progress tracking and saved plans",
      "Audio and downloadable plan support",
    ],
    useCases: [
      "Individuals building home or gym routines",
      "Users balancing fitness with busy work schedules",
      "People tracking nutrition and workout consistency",
    ],
    modules: [
      "Workout Planner",
      "Meal Planner",
      "AI Coach",
      "Progress Tracker",
      "Habit Tracking",
      "Reminders",
      "Audio Guidance",
      "Plan Downloads",
    ],
    cta: "Explore FitMind AI",
  },
  "control-inventory": {
    title: "ኢዚስቶክ · EasyStock",
    tagline: "Inventory and sales system — easy stock control across branches",
    description:
      "ኢዚስቶክ (EasyStock) is Entro Ethiopia’s inventory and sales platform for shops, warehouses, and multi-branch businesses. Track stock, run sales/POS, manage purchases, and see profit clearly.",
    highlights: [
      "Stock movement and multi-location control",
      "Sales / POS transaction workflows",
      "Purchasing and supplier management",
      "Profit reports and low-stock alerts",
    ],
    useCases: [
      "Retail shops and chains tracking multi-branch stock",
      "Warehouses managing incoming and outgoing inventory",
      "Distribution businesses improving replenishment cycles",
    ],
    modules: [
      "Inventory / ክምችት",
      "Stock Transfer",
      "Sales POS / ሽያጭ",
      "Purchasing",
      "Supplier Management",
      "Branch Management",
      "Reorder Alerts",
      "Reporting Dashboard",
      "Notifications",
    ],
    cta: "Request EasyStock Demo",
  },
  nibret: {
    title: "ንብረት · Nibret",
    tagline: "Property and real estate management system",
    description:
      "ንብረት (Nibret) is Entro Ethiopia’s property and real estate management platform for units, tenants, rent billing, maintenance, and portfolio visibility — built for how Ethiopian owners and managers actually work.",
    highlights: [
      "Unit and tenant lifecycle management",
      "Rent billing and payment follow-up",
      "Maintenance and service request workflows",
      "Occupancy and performance dashboards",
    ],
    useCases: [
      "Property owners managing residential portfolios",
      "Commercial building operators handling tenant billing",
      "Real estate teams coordinating maintenance at scale",
    ],
    modules: [
      "Units / ክፍሎች",
      "Tenant Management",
      "Lease Tracking",
      "Billing & Rent Collection",
      "Maintenance Tickets",
      "Service Provider Management",
      "Occupancy Reports",
      "Dashboards",
    ],
    cta: "Book a Nibret Demo",
  },
  "property-management": {
    title: "ንብረት · Nibret",
    tagline: "Property and real estate management system",
    description:
      "ንብረት (Nibret) is Entro Ethiopia’s property and real estate management platform for units, tenants, rent billing, maintenance, and portfolio visibility — built for how Ethiopian owners and managers actually work.",
    highlights: [
      "Unit and tenant lifecycle management",
      "Rent billing and payment follow-up",
      "Maintenance and service request workflows",
      "Occupancy and performance dashboards",
    ],
    useCases: [
      "Property owners managing residential portfolios",
      "Commercial building operators handling tenant billing",
      "Real estate teams coordinating maintenance at scale",
    ],
    modules: [
      "Units / ክፍሎች",
      "Tenant Management",
      "Lease Tracking",
      "Billing & Rent Collection",
      "Maintenance Tickets",
      "Service Provider Management",
      "Occupancy Reports",
      "Dashboards",
    ],
    cta: "Book a Nibret Demo",
  },
  wubet: {
    title: "ውበት · Wubet",
    tagline: "Salon, barbershop and spa management system",
    description:
      "ውበት (Wubet) is Entro Ethiopia’s salon, barbershop and spa management platform — appointments, staff schedules, services, packages, client history, and payments in one place.",
    highlights: [
      "Online and walk-in appointment booking",
      "Staff, services, packages and memberships",
      "Client history, reminders and loyalty",
      "Payments, expenses and daily sales reports",
    ],
    useCases: [
      "Hair salons and barbershops managing busy calendars",
      "Spas coordinating therapists, rooms and packages",
      "Beauty chains needing multi-branch booking and sales",
    ],
    modules: [
      "Appointments / ቀጠሮ",
      "Staff Scheduling",
      "Services & Packages",
      "Client Profiles",
      "Memberships",
      "Payments & Invoices",
      "SMS Reminders",
      "Sales Dashboard",
    ],
    cta: "Request Wubet Demo",
  },
  brabear: {
    title: "ውበት · Wubet",
    tagline: "Salon, barbershop and spa management system",
    description:
      "ውበት (Wubet) is Entro Ethiopia’s salon, barbershop and spa management platform — appointments, staff schedules, services, packages, client history, and payments in one place.",
    highlights: [
      "Online and walk-in appointment booking",
      "Staff, services, packages and memberships",
      "Client history, reminders and loyalty",
      "Payments, expenses and daily sales reports",
    ],
    useCases: [
      "Hair salons and barbershops managing busy calendars",
      "Spas coordinating therapists, rooms and packages",
      "Beauty chains needing multi-branch booking and sales",
    ],
    modules: [
      "Appointments / ቀጠሮ",
      "Staff Scheduling",
      "Services & Packages",
      "Client Profiles",
      "Memberships",
      "Payments & Invoices",
      "SMS Reminders",
      "Sales Dashboard",
    ],
    cta: "Request Wubet Demo",
  },
  enku: {
    title: "እንቁ · Enku",
    tagline: "Every celebration deserves something special",
    description:
      "እንቁ (Enku) helps people and teams plan memorable celebrations — weddings, birthdays, graduations, anniversaries, engagements, and corporate events — with guests, vendors, budgets, and timelines in one place.",
    highlights: [
      "Plan weddings, birthdays, graduations and anniversaries",
      "Engagement parties and corporate event workflows",
      "Guest lists, vendors, budgets and timelines",
      "Reminders, packages and celebration-ready checklists",
    ],
    useCases: [
      "Couples and families organizing weddings and engagements",
      "Hosts planning birthdays, graduations and anniversaries",
      "Companies running corporate celebrations and staff events",
      "Event planners coordinating multiple celebrations at once",
    ],
    modules: [
      "Event Types",
      "Guest Lists",
      "Vendor Management",
      "Budget Tracker",
      "Timelines & Checklists",
      "Invitations & Reminders",
      "Packages & Pricing",
      "Celebration Dashboard",
    ],
    cta: "Request Enku Demo",
  },
} as const;

type ProductRouteProps = {
  params: Promise<{
    productName: string;
  }>;
};

export default async function ProductRoutePage({ params }: ProductRouteProps) {
  const { productName } = await params;
  const product = products[productName as keyof typeof products];

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-20 transition-colors duration-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 sm:px-6">
      <div className="mx-auto mb-5 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-teal-600 dark:hover:text-teal-400"
        >
          <span aria-hidden>←</span>
          <span>Back Home</span>
        </Link>
      </div>
      <section className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-colors duration-300 dark:border-gray-700 dark:bg-gray-800">
        {/* Header */}
        <div className="bg-gradient-to-r from-teal-700 to-cyan-700 p-8 text-white sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
            Product
          </p>
          <h1 className="text-3xl font-bold sm:text-4xl">{product.title}</h1>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.14em] text-cyan-100">
            {product.tagline}
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
            {product.description}
          </p>
        </div>

        <div className="p-8 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Key Features */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-700/50">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                Key Features
              </h2>
              <ul className="mt-4 space-y-3">
                {product.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-700 dark:text-gray-300"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-600 dark:bg-teal-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Best For */}
            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5 transition-colors duration-300 dark:border-teal-900/50 dark:bg-teal-950/30">
              <h2 className="text-xl font-semibold text-teal-900 dark:text-teal-400">
                Best For
              </h2>
              <ul className="mt-4 space-y-3">
                {product.useCases.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-teal-900 dark:text-teal-300"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-700 dark:bg-teal-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Modules */}
          <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 p-5 transition-colors duration-300 dark:border-cyan-900/50 dark:bg-cyan-950/30">
            <h2 className="text-xl font-semibold text-cyan-900 dark:text-cyan-400">
              Core Modules
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.modules.map((module) => (
                <span
                  key={module}
                  className="rounded-full border border-cyan-300 bg-white px-3 py-1 text-sm font-medium text-cyan-900 transition-colors duration-300 dark:border-cyan-700 dark:bg-gray-800 dark:text-cyan-400"
                >
                  {module}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 border-t border-slate-200 pt-6 dark:border-gray-700">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-teal-700 to-cyan-700 px-6 py-3 font-semibold text-white transition hover:shadow-lg dark:from-teal-800 dark:to-cyan-800 dark:hover:from-teal-900 dark:hover:to-cyan-900"
              >
                {product.cta}
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-teal-600 dark:hover:text-teal-400"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
