"use client";

const industries = [
  {
    icon: "🏢",
    title: "Corporate Offices & Co-working Spaces",
    description:
      "Secure floors, manage meeting rooms, and provide seamless access for employees and guests.",
  },
  {
    icon: "🏨",
    title: "Hotels & Apartments",
    description:
      "Offer keyless check-in, secure common areas, and manage tenant access remotely.",
  },
  {
    icon: "🏫",
    title: "Schools & Universities",
    description:
      "Protect classrooms, labs, and dormitories with scheduled access and detailed logs.",
  },
  {
    icon: "🏥",
    title: "Hospitals & Clinics",
    description:
      "Control entry to sensitive areas like pharmacies, labs, and records rooms.",
  },
  {
    icon: "🏭",
    title: "Warehouses & Factories",
    description:
      "Secure gates, equipment cages, and restricted production zones.",
  },
  {
    icon: "🏠",
    title: "Residential & Housing Compounds",
    description:
      "Manage main gates, communal facilities, and individual unit access.",
  },
  {
    icon: "💪",
    title: "Fitness Centers & Gyms",
    description:
      "Enable 24/7 member access with automated entry and usage tracking.",
  },
  {
    icon: "🏛️",
    title: "Government & NGO Facilities",
    description:
      "High-security access control with comprehensive audit trails and monitoring.",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Our Smart Access and Booking Solutions are ideal for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
          <p className="text-lg sm:text-xl text-center max-w-4xl mx-auto leading-relaxed">
            Our flexible system adapts to the unique security and operational needs of your industry. 
            Whether you need simple door control or complex multi-site management, we provide 
            scalable solutions that grow with your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Industries;
