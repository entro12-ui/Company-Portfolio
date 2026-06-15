"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

type Product = {
  id: string;
  icon: string;
  title: string;
  description: string;
  highlights: string[];
  cta: {
    primary: string;
    contact?: string;
  };
  colorScheme: {
    headerBg: string;
    textColor: string;
    borderColor: string;
    hoverBorder: string;
    accentColor: string;
    buttonBg: string;
    buttonBorder: string;
  };
};

const products: Product[] = [
  {
    id: "edustack-schoolhub",
    icon: "🏫",
    title: "EduStack SchoolHub",
    description:
      "Modern school management platform for KG-12 schools and academies. Manage administration, academics, finance, communication, and AI-supported learning from one system.",
    highlights: [
      "Centralizes student, registrar, finance, and HR workflows",
      "Supports multi-branch schools with shared reporting",
      "Connects parents, teachers, students, and administrators",
      "Adds AI-powered academic insights and teaching support",
    ],
    cta: {
      primary: "Book a SchoolHub Demo",
      contact: "entro12@entroethiopia.com",
    },
    colorScheme: {
      headerBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      textColor: "text-teal-700",
      borderColor: "border-teal-600",
      hoverBorder: "hover:border-teal-300",
      accentColor: "text-cyan-600",
      buttonBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      buttonBorder: "border-teal-600",
    },
  },
  {
    id: "medicare-ai",
    icon: "🏥",
    title: "MediCare AI",
    description:
      "Intelligent healthcare management platform with AI-powered features. Complete hospital operations management from patient registration to AI-assisted diagnostics.",
    highlights: [
      "Centralizes core hospital and clinic operations",
      "Supports care teams with AI-powered assistance",
      "Improves patient flow, records, and service coordination",
      "Helps management monitor healthcare performance",
    ],
    cta: {
      primary: "Request a Demo",
      contact: "entro12@entroethiopia.com",
    },
    colorScheme: {
      headerBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      textColor: "text-teal-700",
      borderColor: "border-teal-600",
      hoverBorder: "hover:border-teal-300",
      accentColor: "text-cyan-600",
      buttonBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      buttonBorder: "border-teal-600",
    },
  },
  {
    id: "car-service",
    icon: "🚗",
    title: "Car Service Management System",
    description:
      "Complete digital solution for auto service centers. Manage customers, vehicles, appointments, inventory, and automated service notifications via SMS and email.",
    highlights: [
      "Manages customers, vehicles, and service workflows",
      "Streamlines appointments and service history tracking",
      "Improves parts and workshop operation control",
      "Supports service reminders and performance reporting",
    ],
    cta: {
      primary: "Get Started",
      contact: "entro12@entroethiopia.com",
    },
    colorScheme: {
      headerBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      textColor: "text-teal-700",
      borderColor: "border-teal-600",
      hoverBorder: "hover:border-teal-300",
      accentColor: "text-cyan-600",
      buttonBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      buttonBorder: "border-teal-600",
    },
  },
  {
    id: "fitmind-ai",
    icon: "💪",
    title: "FitMind AI",
    description:
      "Personal fitness and nutrition app that uses AI to generate custom weekly plans, then helps users save and track progress over time.",
    highlights: [
      "Creates personalized weekly workout and nutrition plans",
      "Provides motivation and practical AI fitness guidance",
      "Lets users save plans and track progress over time",
      "Supports media-rich usage with audio and downloadable plans",
    ],
    cta: {
      primary: "Explore FitMind AI",
      contact: "entro12@entroethiopia.com",
    },
    colorScheme: {
      headerBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      textColor: "text-teal-700",
      borderColor: "border-teal-600",
      hoverBorder: "hover:border-teal-300",
      accentColor: "text-cyan-600",
      buttonBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      buttonBorder: "border-teal-600",
    },
  },
  {
    id: "control-inventory",
    icon: "📦",
    title: "Control Inventory Management System",
    description:
      "End-to-end inventory, sales, and reporting platform for branches, warehouses, and retail operations.",
    highlights: [
      "Manages inventory and stock movement across locations",
      "Handles sales workflows and transaction recording",
      "Provides business reports and profitability visibility",
      "Improves stock control with smart alerts and tracking",
    ],
    cta: {
      primary: "Request Inventory Demo",
      contact: "entro12@entroethiopia.com",
    },
    colorScheme: {
      headerBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      textColor: "text-teal-700",
      borderColor: "border-teal-600",
      hoverBorder: "hover:border-teal-300",
      accentColor: "text-cyan-600",
      buttonBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      buttonBorder: "border-teal-600",
    },
  },
  {
    id: "property-management",
    icon: "🏢",
    title: "Property Management System",
    description:
      "Digital property operations platform for managing units, tenants, billing, maintenance, and portfolio reporting.",
    highlights: [
      "Organizes property, unit, and tenant operations",
      "Supports billing, rent follow-up, and maintenance workflows",
      "Provides occupancy and performance visibility",
      "Automates reminders and routine management tasks",
    ],
    cta: {
      primary: "Book a Property Demo",
      contact: "entro12@entroethiopia.com",
    },
    colorScheme: {
      headerBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      textColor: "text-teal-700",
      borderColor: "border-teal-600",
      hoverBorder: "hover:border-teal-300",
      accentColor: "text-cyan-600",
      buttonBg: "bg-gradient-to-r from-teal-700 to-cyan-700",
      buttonBorder: "border-teal-600",
    },
  },
];

const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index: number;
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const colors = product.colorScheme;

  // Theme-aware overrides for product colors (preserve brand identity but adapt to dark mode)
  const cardBg = isDark ? "bg-gray-800" : "bg-white";
  const textColor = isDark ? "text-gray-200" : "text-gray-700";
  const highlightTextClass = isDark ? "text-gray-300" : "text-gray-700";
  const borderTopClass = isDark ? "border-gray-700" : "border-gray-200";
  const contactTextClass = isDark ? "text-gray-400" : "text-gray-600";

  return (
    <div
      className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent ${colors.hoverBorder} overflow-hidden ${cardBg}`}
      style={{
        animation: `fadeSlideUp 0.6s ease-out forwards ${index * 0.1}s`,
        opacity: 0,
        transform: "translateY(20px)",
      }}
    >
      {/* Header - uses product's original color scheme */}
      <div className={`${colors.headerBg} text-white p-6 sm:p-8`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">{product.icon}</div>
          <h3 className="text-2xl sm:text-3xl font-bold">{product.title}</h3>
        </div>
        <p className="text-base text-white/90 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        {/* Highlights */}
        <div className="mb-6">
          <h4 className={`text-lg font-bold ${colors.textColor} mb-4`}>
            Key Features
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className={`${colors.accentColor} mt-1`}>✓</span>
                <span className={`text-sm sm:text-base ${highlightTextClass}`}>
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`pt-6 border-t ${borderTopClass}`}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <Link
              href={`/products/${product.id}`}
              className={`inline-flex items-center justify-center gap-2 ${colors.buttonBg} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center w-full sm:w-auto`}
            >
              {product.cta.primary}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            {product.cta.contact && (
              <p
                className={`text-sm ${contactTextClass} text-center sm:text-right`}
              >
                Contact:{" "}
                <a
                  href={`mailto:${product.cta.contact}`}
                  className={`${colors.accentColor} hover:underline font-medium`}
                >
                  {product.cta.contact}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SoftwareProducts = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware classes
  const sectionBg = isDark
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    : "bg-gradient-to-br from-gray-50 via-white to-gray-50";
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const subheadingClass = isDark ? "text-teal-400" : "text-teal-700";
  const descriptionClass = isDark ? "text-gray-300" : "text-gray-700";

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <section
        id="products"
        className={`py-8 transition-colors duration-300 ${sectionBg}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}
            >
              Our Software Products & Solutions
            </h2>
            <h3
              className={`text-2xl sm:text-3xl font-semibold mb-6 ${subheadingClass}`}
            >
              Flagship Platforms Built for Real Operations
            </h3>
            <p
              className={`text-lg sm:text-xl max-w-3xl mx-auto ${descriptionClass}`}
            >
              We build sector-ready software for healthcare, education,
              mobility, inventory, property, and custom business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-10 sm:mb-12">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareProducts;
