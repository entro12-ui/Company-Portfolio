"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-br from-slate-50 via-white to-cyan-50 min-h-[600px] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-700 to-teal-700 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-in-up shadow-lg">
            <span className="text-lg">🔒</span>
            <span>Trusted, Scalable, Locally Engineered Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-poppins leading-tight animate-fade-in-up animation-delay-200">
            SMART Access Control Solutions
            <span className="block bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mt-2">for Modern Businesses</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-4 max-w-4xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
            Secure, automate, and manage access with <span className="font-semibold text-teal-700">NFC, keypad, web, and IoT-based technology</span>.
          </p>
          
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-600">
            Our SMART Access Control System is a fully integrated hardware and software solution that allows businesses to secure and manage doors, equipment, facilities, and digital services using automated control methods.
          </p>

          {/* Key tagline */}
          <div className="flex items-center justify-center gap-2 mb-8 text-gray-700 font-medium animate-fade-in-up animation-delay-800">
            <span className="text-teal-600 text-2xl">→</span>
            <span className="text-lg sm:text-xl">Smart Security. Smart Control. Smart Future.</span>
          </div>

          <div className="flex justify-center gap-4 flex-col sm:flex-row animate-fade-in-up animation-delay-1000">
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-slate-700 to-teal-700 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold hover:from-slate-800 hover:to-teal-800 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
            >
              Get a Demo
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-semibold border-2 border-teal-600 hover:bg-teal-50 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
            >
              Contact Us
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
