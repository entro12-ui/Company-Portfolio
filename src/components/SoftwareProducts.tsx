"use client";

import Link from "next/link";

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
    id: "smart-access",
    icon: "🔒",
    title: "SMART Access Control System",
    description: "Complete hardware and software solution for secure access control. Supports NFC, keypad, web-based, and IoT integration for doors, equipment, and facilities.",
    highlights: [
      "NFC & Keypad Access",
      "Web-Based Remote Control",
      "Real-Time Monitoring",
      "IoT Integration",
      "Offline Operation",
      "Multi-Location Support"
    ],
    cta: {
      primary: "Get a Demo",
      contact: "entro12@entroethiopia.com"
    },
    colorScheme: {
      headerBg: "bg-gradient-to-r from-slate-700 to-teal-700",
      textColor: "text-teal-700",
      borderColor: "border-teal-600",
      hoverBorder: "hover:border-teal-300",
      accentColor: "text-teal-600",
      buttonBg: "bg-gradient-to-r from-slate-700 to-teal-700",
      buttonBorder: "border-teal-600"
    }
  },
  {
    id: "medicare-ai",
    icon: "🏥",
    title: "MediCare AI",
    description: "Intelligent healthcare management platform with AI-powered features. Complete hospital operations management from patient registration to AI-assisted diagnostics.",
    highlights: [
      "Hospital Management System",
      "AI Clinical Decision Support",
      "AI Patient Chatbot (24/7)",
      "Multi-LLM AI Assistant",
      "Laboratory & Pharmacy Modules",
      "Bed Management & Accounting"
    ],
    cta: {
      primary: "Request a Demo",
      contact: "support@medicare-ai.com"
    },
    colorScheme: {
      headerBg: "bg-gradient-to-r from-blue-700 to-cyan-700",
      textColor: "text-blue-700",
      borderColor: "border-blue-600",
      hoverBorder: "hover:border-blue-300",
      accentColor: "text-blue-600",
      buttonBg: "bg-gradient-to-r from-blue-700 to-cyan-700",
      buttonBorder: "border-blue-600"
    }
  },
  {
    id: "car-service",
    icon: "🚗",
    title: "Car Service Management System",
    description: "Complete digital solution for auto service centers. Manage customers, vehicles, appointments, inventory, and automated service notifications via SMS and email.",
    highlights: [
      "Customer & Vehicle Management",
      "Appointment Scheduling",
      "Service History Tracking",
      "Parts Inventory Management",
      "Mileage-Based Service Alerts (SMS & Email)",
      "Loyalty Programs & Reports"
    ],
    cta: {
      primary: "Get Started",
      contact: "entro12@entroethiopia.com"
    },
    colorScheme: {
      headerBg: "bg-gradient-to-r from-orange-700 to-red-700",
      textColor: "text-orange-700",
      borderColor: "border-orange-600",
      hoverBorder: "hover:border-orange-300",
      accentColor: "text-orange-600",
      buttonBg: "bg-gradient-to-r from-orange-700 to-red-700",
      buttonBorder: "border-orange-600"
    }
  }
];

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const colors = product.colorScheme;

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent ${colors.hoverBorder} overflow-hidden`}
      style={{
        animation: `fadeSlideUp 0.6s ease-out forwards ${index * 0.1}s`,
        opacity: 0,
        transform: "translateY(20px)",
      }}
    >
      {/* Header */}
      <div className={`${colors.headerBg} text-white p-6 sm:p-8`}>
        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">{product.icon}</div>
          <h3 className="text-2xl sm:text-3xl font-bold">{product.title}</h3>
        </div>
        <p className="text-base text-white/90 leading-relaxed">{product.description}</p>
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
                <span className="text-sm sm:text-base text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <Link
              href="#contact"
              className={`inline-flex items-center justify-center gap-2 ${colors.buttonBg} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center w-full sm:w-auto`}
            >
              {product.cta.primary}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            {product.cta.contact && (
              <p className="text-sm text-gray-600 text-center sm:text-right">
                Contact: <a href={`mailto:${product.cta.contact}`} className={`${colors.accentColor} hover:underline font-medium`}>{product.cta.contact}</a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const SoftwareProducts = () => {
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
      <section id="products" className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
              Our Software Products & Solutions
            </h2>
            <h3 className="text-2xl sm:text-3xl font-semibold text-teal-700 mb-6">
              Complete Digital Solutions for Your Business
            </h3>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              We provide comprehensive software solutions to transform your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 mb-16">
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
