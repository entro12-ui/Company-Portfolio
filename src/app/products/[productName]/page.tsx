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
  "car-service": {
    title: "Car Service Management System",
    tagline: "Digital workflow for modern auto service centers",
    description:
      "Complete digital solution for auto service centers to manage operations from booking to delivery.",
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
    cta: "Get Started",
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
    title: "Control Inventory Management System",
    tagline: "Accurate stock and sales control across branches",
    description:
      "End-to-end inventory, sales, and reporting platform for warehouses, branches, and retail teams.",
    highlights: [
      "Stock movement and location management",
      "Sales transaction workflows",
      "Business and profitability reporting",
      "Low-stock alerts and smart control tools",
    ],
    useCases: [
      "Retail chains tracking multi-branch stock levels",
      "Warehouses managing incoming and outgoing inventory",
      "Distribution businesses improving replenishment cycles",
    ],
    modules: [
      "Inventory",
      "Stock Transfer",
      "Sales POS",
      "Purchasing",
      "Supplier Management",
      "Branch Management",
      "Reorder Alerts",
      "Reporting Dashboard",
      "Notifications",
    ],
    cta: "Request Inventory Demo",
  },
  "property-management": {
    title: "Property Management System",
    tagline: "Simplified property and tenant operations management",
    description:
      "Digital property operations platform for units, tenants, billing, maintenance, and portfolio visibility.",
    highlights: [
      "Unit and tenant lifecycle management",
      "Rent, billing, and payment follow-up",
      "Maintenance and service request workflows",
      "Occupancy and performance dashboards",
    ],
    useCases: [
      "Property owners managing residential portfolios",
      "Commercial building operators handling tenant billing",
      "Real estate teams coordinating maintenance at scale",
    ],
    modules: [
      "Units",
      "Tenant Management",
      "Lease Tracking",
      "Billing & Rent Collection",
      "Maintenance Tickets",
      "Service Provider Management",
      "Occupancy Reports",
      "Dashboards",
    ],
    cta: "Book a Property Demo",
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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-20 sm:px-6">
      <div className="mx-auto mb-5 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
        >
          <span aria-hidden>←</span>
          <span>Back Home</span>
        </Link>
      </div>
      <section className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
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
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="text-xl font-semibold text-slate-900">Key Features</h2>
              <ul className="mt-4 space-y-3">
                {product.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-teal-200 bg-teal-50 p-5">
              <h2 className="text-xl font-semibold text-teal-900">Best For</h2>
              <ul className="mt-4 space-y-3">
                {product.useCases.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-teal-900">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-teal-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
            <h2 className="text-xl font-semibold text-cyan-900">Core Modules</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {product.modules.map((module) => (
                <span
                  key={module}
                  className="rounded-full border border-cyan-300 bg-white px-3 py-1 text-sm font-medium text-cyan-900"
                >
                  {module}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-gradient-to-r from-teal-700 to-cyan-700 px-6 py-3 font-semibold text-white transition hover:shadow-lg"
              >
                {product.cta}
              </Link>
              <Link
                href="/#products"
                className="inline-flex items-center rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-teal-500 hover:text-teal-700"
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
