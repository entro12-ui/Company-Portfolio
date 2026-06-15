"use client";

import { useTheme } from "@/context/ThemeContext";

const AboutUs = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware classes
  const sectionBg = isDark ? "bg-gray-900" : "bg-white";
  const headingColor = isDark ? "text-white" : "text-gray-900";
  const subheadingColor = isDark ? "text-teal-400" : "text-teal-700";
  const paragraphColor = isDark ? "text-gray-300" : "text-gray-700";
  const cardBg = isDark
    ? "bg-gradient-to-br from-gray-800 to-slate-800 border-gray-700"
    : "bg-gradient-to-br from-slate-50 to-cyan-50 border-slate-200";
  const cardTitleColor = isDark ? "text-white" : "text-gray-900";
  const cardDescColor = isDark ? "text-gray-300" : "text-gray-700";
  const missionVisionBg = isDark
    ? "bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900"
    : "bg-gradient-to-br from-slate-800 via-gray-800 to-slate-900"; // keep dark for both? Actually the original section is dark always, but we can keep it dark for both themes or adjust. I'll keep it dark but make text adapt.
  const bottomCardText = isDark ? "text-white" : "text-white"; // bottom card already uses white text, we can keep it.
  const bottomCardSubtext = isDark ? "text-gray-300" : "text-gray-200";
  const featureCardBg = isDark
    ? "bg-gray-800/50 border-gray-700 hover:bg-gray-700/50"
    : "bg-teal-500/10 border-teal-500/20 hover:bg-teal-500/20";
  const featureIconBg = isDark ? "bg-gray-700/50" : "bg-teal-500/20";
  const featureTitle = isDark ? "text-white" : "text-white";
  const featureDesc = isDark ? "text-gray-400" : "text-gray-300";

  const highlights = [
    {
      icon: "✅",
      title: "Locally Powered Innovation",
      description: "Designed and built in Ethiopia for African businesses",
    },
    {
      icon: "✅",
      title: "Reliable End-to-End Software Delivery",
      description: "Complete digital solutions that work seamlessly",
    },
    {
      icon: "✅",
      title: "Affordable Enterprise Solutions",
      description: "Professional-grade technology at accessible prices",
    },
    {
      icon: "✅",
      title: "Professional Support",
      description: "24/7 technical support and maintenance",
    },
  ];

  return (
    <section
      className={`py-16 sm:py-24 transition-colors duration-300 ${sectionBg}`}
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 ${headingColor}`}
          >
            Why Choose Our Software Company in Ethiopia
          </h2>
          <h3
            className={`text-2xl sm:text-3xl font-semibold mb-6 ${subheadingColor}`}
          >
            Who We Are
          </h3>
          <p
            className={`text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed ${paragraphColor}`}
          >
            <span className={`font-semibold ${headingColor}`}>
              Entro Ethiopia Software Development PLC
            </span>{" "}
            is a local tech company providing comprehensive software solutions.
            We develop custom software including Healthcare Management Platforms
            (MediCare AI), Car Service Management Systems, Inventory and
            Property platforms, and other business automation solutions. We
            design and build complete systems that help businesses transform
            their operations through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${cardBg}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl flex-shrink-0">{highlight.icon}</span>
                <div>
                  <h4 className={`text-xl font-bold mb-2 ${cardTitleColor}`}>
                    {highlight.title}
                  </h4>
                  <p className={cardDescColor}>{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className={`text-3xl font-bold mb-6 ${headingColor}`}>
              Our Mission
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${paragraphColor}`}>
              To deliver smart, secure, and affordable technology solutions that
              empower Ethiopian and African businesses. We provide comprehensive
              software solutions including Healthcare Management Platforms
              (MediCare AI), Car Service Management Systems, and custom software
              development. Our mission is to transform businesses through
              automation, AI-powered systems, innovation, and intelligent
              management platforms that drive efficiency and growth.
            </p>
            <h3 className={`text-3xl font-bold mb-6 ${headingColor}`}>
              Our Vision
            </h3>
            <p className={`text-lg leading-relaxed ${paragraphColor}`}>
              To become a leading African technology provider, delivering
              innovative software solutions across multiple industries. We
              envision a future where Ethiopian and African businesses leverage
              cutting-edge technology including AI-powered healthcare
              management, automated service management, and custom software
              solutions to achieve operational excellence and competitive
              advantage.
            </p>
          </div>
        </div>

        <div
          className={`rounded-2xl p-8 sm:p-12 text-white text-center shadow-2xl ${missionVisionBg}`}
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Entro Ethiopia?
          </h3>
          <p className={`text-lg mb-8 max-w-3xl mx-auto ${bottomCardSubtext}`}>
            We provide comprehensive software solutions including Healthcare
            Management (MediCare AI), Car Service Management, and Custom
            Software Development. Here&apos;s why businesses trust us:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div
              className={`backdrop-blur-sm rounded-xl p-6 transition-all border ${featureCardBg}`}
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${featureIconBg}`}
              >
                <svg
                  className="w-6 h-6 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <p className={`font-semibold text-lg ${featureTitle}`}>
                Locally Developed & Supported
              </p>
              <p className={`text-sm mt-2 ${featureDesc}`}>
                All our solutions are built in Ethiopia for African businesses
              </p>
            </div>
            <div
              className={`backdrop-blur-sm rounded-xl p-6 transition-all border ${featureCardBg}`}
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${featureIconBg}`}
              >
                <svg
                  className="w-6 h-6 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p className={`font-semibold text-lg ${featureTitle}`}>
                Affordable & Scalable Solutions
              </p>
              <p className={`text-sm mt-2 ${featureDesc}`}>
                Professional-grade technology at accessible prices for all
                business sizes
              </p>
            </div>
            <div
              className={`backdrop-blur-sm rounded-xl p-6 transition-all border ${featureCardBg}`}
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${featureIconBg}`}
              >
                <svg
                  className="w-6 h-6 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <p className={`font-semibold text-lg ${featureTitle}`}>
                Secure & Reliable Systems
              </p>
              <p className={`text-sm mt-2 ${featureDesc}`}>
                Enterprise-grade security with cloud and offline support
              </p>
            </div>
            <div
              className={`backdrop-blur-sm rounded-xl p-6 transition-all border ${featureCardBg}`}
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${featureIconBg}`}
              >
                <svg
                  className="w-6 h-6 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className={`font-semibold text-lg ${featureTitle}`}>
                Complete Solutions
              </p>
              <p className={`text-sm mt-2 ${featureDesc}`}>
                Integrated software platforms across multiple industries
              </p>
            </div>
            <div
              className={`backdrop-blur-sm rounded-xl p-6 transition-all border ${featureCardBg}`}
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${featureIconBg}`}
              >
                <svg
                  className="w-6 h-6 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <p className={`font-semibold text-lg ${featureTitle}`}>
                24/7 Technical Support
              </p>
              <p className={`text-sm mt-2 ${featureDesc}`}>
                Round-the-clock assistance for all our solutions
              </p>
            </div>
            <div
              className={`backdrop-blur-sm rounded-xl p-6 transition-all border ${featureCardBg}`}
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${featureIconBg}`}
              >
                <svg
                  className="w-6 h-6 text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p className={`font-semibold text-lg ${featureTitle}`}>
                AI-Powered Solutions
              </p>
              <p className={`text-sm mt-2 ${featureDesc}`}>
                Modern software with AI integration for healthcare and business
                automation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
