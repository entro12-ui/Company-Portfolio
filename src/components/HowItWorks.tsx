"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";

const platformFeatures = [
  {
    number: "01",
    title: "Real-Time Monitoring & Automated Alerts",
    subtitle: "Stay Informed, Always",
    description:
      "Monitor all system activities in real-time across Healthcare Management, Car Service Management, Inventory, and Property platforms. Get instant SMS or email alerts for critical events, service reminders, and system notifications.",
    icon: "📊",
  },
  {
    number: "02",
    title: "Advanced User & Role Management",
    subtitle: "Granular Control Across All Systems",
    description:
      "Comprehensive role-based permissions across all our solutions. Define roles like System Admin, Doctors, Lab Techs, Service Managers, and Standard Users. Control permissions, access levels, and data visibility across each platform.",
    icon: "👥",
  },
  {
    number: "03",
    title: "AI-Powered Intelligence & Automation",
    subtitle: "Smart Solutions for Modern Businesses",
    description:
      "Leverage AI capabilities across our platforms: AI Clinical Decision Support in MediCare AI, automated service scheduling in Car Service Management, and predictive analytics. Automated booking integration and appointment scheduling help streamline operations.",
    icon: "🤖",
  },
  {
    number: "04",
    title: "Comprehensive Data Management & Reporting",
    subtitle: "Insights That Drive Decisions",
    description:
      "Complete data management with detailed reporting and analytics across all solutions. Track patient records, service history, inventory, and financial data. Generate comprehensive reports for business intelligence, compliance, and operational insights. Secure, HIPAA-compliant data handling where required.",
    icon: "📈",
  },
];

const PlatformFeatureCard = ({
  feature,
}: {
  feature: (typeof platformFeatures)[0];
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Card background & border
  const cardBgClass = isDark
    ? "bg-gradient-to-br from-gray-800 to-slate-900 border-gray-700 hover:border-teal-600"
    : "bg-gradient-to-br from-white to-teal-50 border-teal-100 hover:border-teal-300";
  const numberBgClass = isDark
    ? "bg-gradient-to-br from-slate-600 to-teal-700"
    : "bg-gradient-to-br from-slate-700 to-teal-700";
  const titleColor = isDark ? "text-white" : "text-gray-900";
  const subtitleColor = isDark ? "text-teal-400" : "text-teal-700";
  const descriptionColor = isDark ? "text-gray-300" : "text-gray-700";
  const buttonColor = isDark
    ? "text-teal-400 hover:text-teal-300"
    : "text-teal-700 hover:text-cyan-700";

  const truncatedDescription = feature.description.slice(0, 100) + "...";
  const shouldTruncate = feature.description.length > 100;

  return (
    <div
      className={`group p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 transform hover:-translate-y-2 ${cardBgClass}`}
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div
            className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg ${numberBgClass}`}
          >
            {feature.number}
          </div>
        </div>
        <div className="flex-1">
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${titleColor}`}>
            {feature.title}
          </h3>
          <h4
            className={`text-lg sm:text-xl font-semibold mb-4 ${subtitleColor}`}
          >
            {feature.subtitle}
          </h4>

          {/* Description - always full on large screens, expandable on mobile */}
          <div
            className={`leading-relaxed text-base sm:text-lg ${descriptionColor}`}
          >
            {/* Desktop - always show full description */}
            <p className="hidden sm:block">{feature.description}</p>

            {/* Mobile - show truncated with expand/collapse */}
            <div className="sm:hidden">
              <p
                className={`transition-all duration-300 ${isExpanded ? "mb-2" : ""}`}
              >
                {isExpanded || !shouldTruncate
                  ? feature.description
                  : truncatedDescription}
              </p>
              {shouldTruncate && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className={`font-semibold text-sm flex items-center gap-1 transition-colors duration-200 mt-2 ${buttonColor}`}
                >
                  <span>{isExpanded ? "Show less" : "Show more"}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PlatformFeatures = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const sectionBg = isDark ? "bg-gray-900" : "bg-white";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const subheadingColor = isDark ? "text-teal-400" : "text-teal-700";
  const paragraphColor = isDark ? "text-gray-300" : "text-gray-700";

  return (
    <section
      id="features"
      className={`py-16 sm:py-24 transition-colors duration-300 ${sectionBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${headingColor}`}
          >
            Powerful Platform Features
          </h2>
          <h3
            className={`text-2xl sm:text-3xl font-semibold mb-6 ${subheadingColor}`}
          >
            Advanced Capabilities Across All Our Solutions
          </h3>
          <p
            className={`text-lg sm:text-xl max-w-3xl mx-auto ${paragraphColor}`}
          >
            Our software platforms provide powerful features including real-time
            monitoring, AI-powered insights, automated notifications, and
            comprehensive management tools across all our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {platformFeatures.map((feature, index) => (
            <PlatformFeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
