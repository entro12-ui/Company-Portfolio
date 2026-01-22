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
      "MediCare AI for complete hospital management, plus access control for sensitive areas like pharmacies, labs, and records rooms.",
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

const Industries = () => {
  return (
    <section id="industries" className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Our comprehensive software solutions - including Access Control Systems, Healthcare Management (MediCare AI), Car Service Management, and Custom Software Development - serve diverse industries:
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
          <p className="text-lg sm:text-xl text-center max-w-4xl mx-auto leading-relaxed mb-6">
            Our comprehensive software solutions adapt to the unique needs of your industry. Whether you need Access Control Systems for security, Healthcare Management (MediCare AI) for hospitals, Car Service Management for auto centers, or Custom Software Development, we provide scalable solutions that grow with your business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-teal-500/20">
              <h4 className="text-xl font-bold mb-3 text-teal-400">Access Control</h4>
              <p className="text-gray-300 text-sm">Secure facilities with NFC, keypad, web-based, and IoT access control solutions</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
              <h4 className="text-xl font-bold mb-3 text-blue-400">Healthcare Management</h4>
              <p className="text-gray-300 text-sm">AI-powered hospital management with patient care, lab, pharmacy, and AI assistance</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <h4 className="text-xl font-bold mb-3 text-orange-400">Car Service Management</h4>
              <p className="text-gray-300 text-sm">Complete digital solutions for auto service centers with automated notifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
