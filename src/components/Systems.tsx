"use client";

import { useState } from "react";

const industries = [
  {
    icon: "🏢",
    title: "Corporate Offices & Co-working Spaces",
    description:
      "Streamline internal operations, meeting management, and team workflows with integrated business software.",
  },
  {
    icon: "🏨",
    title: "Hotels & Apartments",
    description:
      "Manage bookings, tenant records, billing, and service workflows from one platform.",
  },
  {
    icon: "🏫",
    title: "Schools & Universities",
    description:
      "Digitize student records, communication workflows, and institutional reporting.",
  },
  {
    icon: "🏥",
    title: "Hospitals & Clinics",
    description:
      "MediCare AI for complete hospital management, including patient records, appointments, labs, pharmacy, and billing.",
  },
  {
    icon: "🏭",
    title: "Warehouses & Factories",
    description:
      "Improve production planning, inventory visibility, and operational reporting.",
  },
  {
    icon: "🏠",
    title: "Residential & Housing Compounds",
    description:
      "Manage tenants, billing cycles, maintenance requests, and property operations.",
  },
  {
    icon: "💪",
    title: "Fitness Centers & Gyms",
    description:
      "Run memberships, class schedules, trainer programs, and member progress tracking.",
  },
  {
    icon: "🏛️",
    title: "Government & NGO Organizations",
    description:
      "Deliver program tracking, document workflows, reporting, and beneficiary data management.",
  },
  {
    icon: "🔧",
    title: "Auto Service Centers & Garages",
    description:
      "Car Service Management System for complete garage operations. Manage customers, vehicles, appointments, service history, inventory, and automated mileage-based service alerts.",
  },
  {
    icon: "🚗",
    title: "Car Service & Maintenance Shops",
    description:
      "Streamline operations with our Car Service Management System. Track service records, manage appointments, handle billing, and send automated SMS/email notifications for next service mileage.",
  },
  {
    icon: "⚙️",
    title: "Auto Repair & Maintenance Facilities",
    description:
      "Complete digital management for repair shops. Manage customer vehicles, service history, parts inventory, loyalty programs, and generate comprehensive business reports.",
  },
];

const sectorSolutions = [
  {
    title: "Healthcare Management",
    description:
      "AI-powered hospital management with patient care, lab, pharmacy, and AI assistance.",
    cardClass:
      "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20",
    titleClass: "text-blue-400",
  },
  {
    title: "Car Service Management",
    description:
      "Complete digital solutions for auto service centers with automated notifications.",
    cardClass:
      "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20",
    titleClass: "text-cyan-400",
  },
  {
    title: "FitMind AI",
    description:
      "Personal AI fitness and nutrition planning with progress tracking and PDF export.",
    cardClass:
      "bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20",
    titleClass: "text-teal-400",
  },
  {
    title: "Inventory Management",
    description:
      "Control stock, transfers, sales, and advanced branch-level reporting in one system.",
    cardClass:
      "bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20",
    titleClass: "text-blue-400",
  },
  {
    title: "Property Management",
    description:
      "Manage properties, tenants, billing, maintenance, and portfolio dashboards efficiently.",
    cardClass:
      "bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20",
    titleClass: "text-orange-400",
  },
];

const Industries = () => {
  const cardsPerPage = 3;
  const totalPages = Math.ceil(sectorSolutions.length / cardsPerPage);
  const [activePage, setActivePage] = useState(0);
  const start = activePage * cardsPerPage;
  const visibleSolutions = sectorSolutions.slice(start, start + cardsPerPage);

  return (
    <section id="industries" className="py-8 bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Our comprehensive software solutions - including Healthcare
            Management (MediCare AI), Car Service Management, and Custom
            Software Development - serve diverse industries:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 sm:mb-12">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-teal-300"
            >
              <div className="text-5xl mb-4 text-center">{industry.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base text-center leading-relaxed">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Tailored Solutions for Your Sector
          </h3>
          <p className="text-lg sm:text-xl text-center max-w-4xl mx-auto leading-relaxed mb-6">
            Our comprehensive software solutions adapt to the unique needs of
            your industry. Whether you need Healthcare Management (MediCare AI)
            for hospitals, Car Service Management for auto centers, Inventory
            and Property tools, or Custom Software Development, we provide
            scalable solutions that grow with your business.
          </p>
          <div className="mt-8">
            <div className="mb-4 text-center">
              <p className="text-sm text-white/70">
                {activePage + 1} / {totalPages}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleSolutions.map((solution) => (
                <div
                  key={solution.title}
                  className={`${solution.cardClass} backdrop-blur-sm rounded-xl p-6`}
                >
                  <h4 className={`text-xl font-bold mb-3 ${solution.titleClass}`}>
                    {solution.title}
                  </h4>
                  <p className="text-gray-300 text-sm">{solution.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={`sector-dot-${index}`}
                  onClick={() => setActivePage(index)}
                  aria-label={`Go to sector solutions page ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    index === activePage ? "bg-white" : "bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
