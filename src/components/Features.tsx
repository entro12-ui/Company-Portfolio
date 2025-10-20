"use client";

import { useState } from "react";

const styles = `
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
`;

const accessMethods = [
  {
    iconSvg: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9a2 2 0 10-4 0v5a2 2 0 01-2 2h6m-6-4h4m8 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "NFC-Based Access Control",
    subtitle: "Secure Contactless Entry with NFC Cards",
    description:
      "Enable safe and convenient access using NFC cards or tags. Ideal for offices, apartments, hotels, and controlled areas with fast and secure authentication. Every access is logged for accountability.",
  },
  {
    iconSvg: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Keypad Access Control",
    subtitle: "PIN-Based Entry with Custom Codes",
    description:
      "Assign unique PIN codes to users for secure door access. Supports scheduled access, temporary codes, and emergency overrides. Works even when offline.",
  },
  {
    iconSvg: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: "Webpage-Based Remote Control",
    subtitle: "Control Access Anytime from the Web",
    description:
      "Unlock doors, manage users, view logs, and monitor hardware remotely from your secure web dashboard. Full control from any device — phone, tablet, or laptop.",
  },
  {
    iconSvg: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Shelly Button Smart Access",
    subtitle: "Instant IoT Button Access",
    description:
      "Trigger access with a single smart button using Shelly IoT integration. Perfect for reception desks, security access points, or shared workspaces. Simple, fast, and reliable.",
  },
  {
    iconSvg: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Online Booking Integration",
    subtitle: "Automated Access via Booking System",
    description:
      "Grant access automatically based on schedules or reservations. Ideal for meeting rooms, hotels, co-working spaces, or labs. Booking = Automatic Access.",
  },
  {
    iconSvg: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Real-Time Monitoring System",
    subtitle: "Live Status Monitoring & Access Logs",
    description:
      "Track every door, access attempt, device status, and system heartbeat in real time. Get instant notifications for unauthorized access or connection failures.",
  },
  {
    iconSvg: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "User & Role Management",
    subtitle: "Secure Role-Based Access Control",
    description:
      "Assign roles like System Admin, Company Admin, and Company User. Manage permissions, restrict access levels, and protect sensitive areas with ease.",
  },
  {
    iconSvg: (
      <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "Cloud or Local Deployment",
    subtitle: "Flexible Deployment Options",
    description:
      "Choose cloud-connected access control or local server installation based on your business needs. Works online and offline seamlessly.",
  },
];

const AccessMethodCard = ({ method, index }: { method: typeof accessMethods[0]; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Truncate description to approximately 80 characters
  const truncatedDescription = method.description.slice(0, 80) + "...";
  const shouldTruncate = method.description.length > 80;

  return (
      <div
        className="bg-white p-6 sm:p-8 rounded-2xl relative border border-gray-200 group hover:shadow-2xl hover:border-teal-500 transition-all duration-500 transform hover:-translate-y-2"
      style={{
        animation: `fadeSlideUp 0.6s ease-out forwards ${index * 0.1}s`,
        opacity: 0,
        transform: "translateY(20px)",
      }}
    >
      {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-cyan-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="text-teal-700 mb-4 group-hover:text-cyan-700 transition-colors">
                    {method.iconSvg}
                  </div>
                  <h3 className="text-xl sm:text-2xl text-gray-900 font-bold mb-2 font-poppins">
                    {method.title}
                  </h3>
                  <h4 className="text-base sm:text-lg text-teal-700 font-semibold mb-4">
                    {method.subtitle}
                  </h4>
        
        {/* Description with expand/collapse */}
        <div className="text-gray-600 leading-relaxed text-sm sm:text-base mb-3">
          <p className={`transition-all duration-300 ${isExpanded ? 'mb-2' : ''}`}>
            {isExpanded || !shouldTruncate ? method.description : truncatedDescription}
          </p>
        </div>

        {/* Show More / Show Less button */}
        {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-teal-700 hover:text-cyan-700 font-semibold text-sm flex items-center gap-1 transition-colors duration-200 group/btn"
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

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-teal-500/5 rounded-bl-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
    </div>
  );
};

const AccessMethods = () => {
  return (
    <>
      <style>{styles}</style>
      <section id="access-methods" className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-gray-900 font-bold mb-4">
              Key Access Methods
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to secure and control access to your facilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {accessMethods.map((method, index) => (
              <AccessMethodCard key={index} method={method} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessMethods;
