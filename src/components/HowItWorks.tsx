"use client";

import { useState } from "react";
import Image from "next/image";

const platformFeatures = [
  {
    number: "01",
    title: "Real-Time Monitoring & Alerts",
    subtitle: "See Everything, As It Happens",
    description:
      "Monitor the status of every door, lock, and device in real-time. Get instant SMS or email alerts for forced doors, offline devices, or unauthorized access attempts.",
    icon: "📊",
  },
  {
    number: "02",
    title: "Advanced User & Role Management",
    subtitle: "Granular Control Over Permissions",
    description:
      "Define roles like System Admin, Manager, and Standard User. Easily control who has access to what, and when, protecting your most sensitive areas effortlessly.",
    icon: "👥",
  },
  {
    number: "03",
    title: "Automated Booking System Integration",
    subtitle: "Access That Syncs with Your Schedule",
    description:
      "Automatically grant and revoke access based on reservations. Perfect for meeting rooms, hotel check-ins, co-working spaces, and equipment rentals. Booking confirmed = access granted.",
    icon: "📅",
  },
  {
    number: "04",
    title: "Unbreakable Reliability & Security",
    subtitle: "Engineered for 24/7 Uptime",
    description:
      "Heartbeat Monitoring: Continuous device health checks with instant failure alerts. Comprehensive Audit Trail: A tamper-proof log of every access attempt and system change. Industrial-Grade Hardware: Built to withstand power surges, dust, and harsh conditions.",
    icon: "🛡️",
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
            The Brains Behind the Operation
          </h3>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Our powerful software platform gives you unparalleled control and insight
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {platformFeatures.map((feature, index) => (
            <PlatformFeatureCard key={index} feature={feature} />
          ))}
        </div>

        {/* Product Image Section */}
        <div className="mt-16 relative">
          <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/product.jpg"
              alt="SMART Access Control Hardware"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 sm:p-12 text-white">
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                  Professional Hardware Solutions
                </h3>
                <p className="text-lg sm:text-xl max-w-2xl">
                  Our custom-built hardware integrates seamlessly with the software platform, providing reliable and secure access control in any environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFeatures;
