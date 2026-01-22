"use client";

import { useState } from "react";

const platformFeatures = [
  {
    number: "01",
    title: "Real-Time Monitoring & Automated Alerts",
    subtitle: "Stay Informed, Always",
    description:
      "Monitor all system activities in real-time across Access Control, Healthcare Management, and Car Service Management. Get instant SMS or email alerts for critical events, service reminders, and system notifications. Track everything from door access to patient appointments to vehicle service schedules.",
    icon: "📊",
  },
  {
    number: "02",
    title: "Advanced User & Role Management",
    subtitle: "Granular Control Across All Systems",
    description:
      "Comprehensive role-based access control across all our solutions. Define roles like System Admin, Doctors, Lab Techs, Service Managers, and Standard Users. Control permissions, access levels, and data visibility for Access Control, Healthcare Management, and Car Service Management platforms.",
    icon: "👥",
  },
  {
    number: "03",
    title: "AI-Powered Intelligence & Automation",
    subtitle: "Smart Solutions for Modern Businesses",
    description:
      "Leverage AI capabilities across our platforms: AI Clinical Decision Support in MediCare AI, automated service scheduling in Car Service Management, and intelligent access control. Automated booking integration, appointment scheduling, and predictive analytics help streamline operations.",
    icon: "🤖",
  },
  {
    number: "04",
    title: "Comprehensive Data Management & Reporting",
    subtitle: "Insights That Drive Decisions",
    description:
      "Complete data management with detailed reporting and analytics across all solutions. Track access logs, patient records, service history, inventory, and financial data. Generate comprehensive reports for business intelligence, compliance, and operational insights. Secure, HIPAA-compliant data handling where required.",
    icon: "📈",
  },
];

const PlatformFeatureCard = ({ feature }: { feature: typeof platformFeatures[0] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Truncate description to approximately 100 characters for mobile
  const truncatedDescription = feature.description.slice(0, 100) + "...";
  const shouldTruncate = feature.description.length > 100;

  return (
    <div className="group bg-gradient-to-br from-white to-teal-50 p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-teal-100 hover:border-teal-300 transform hover:-translate-y-2">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-700 to-teal-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.number}
                  </div>
        </div>
        <div className="flex-1">
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {feature.title}
          </h3>
                  <h4 className="text-lg sm:text-xl font-semibold text-teal-700 mb-4">
                    {feature.subtitle}
                  </h4>
          
          {/* Description - always full on large screens, expandable on mobile */}
          <div className="text-gray-700 leading-relaxed text-base sm:text-lg">
            {/* Desktop - always show full description */}
            <p className="hidden sm:block">
              {feature.description}
            </p>
            
            {/* Mobile - show truncated with expand/collapse */}
            <div className="sm:hidden">
              <p className={`transition-all duration-300 ${isExpanded ? 'mb-2' : ''}`}>
                {isExpanded || !shouldTruncate ? feature.description : truncatedDescription}
              </p>
              
              {/* Show More / Show Less button - only on mobile */}
              {shouldTruncate && (
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-teal-700 hover:text-cyan-700 font-semibold text-sm flex items-center gap-1 transition-colors duration-200 mt-2"
                >
                  <span>{isExpanded ? 'Show less' : 'Show more'}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
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
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Powerful Platform Features
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-teal-700 mb-6">
            Advanced Capabilities Across All Our Solutions
          </h3>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Our software platforms provide powerful features including real-time monitoring, AI-powered insights, automated notifications, and comprehensive management tools across all our solutions
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
