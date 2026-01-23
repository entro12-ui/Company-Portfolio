"use client";

import Image from "next/image";

const BusinessCard = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page {
            size: letter;
            margin: 0.5in;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .print-container {
            display: flex;
            gap: 20px;
            padding: 20px;
            page-break-after: always;
          }
          .business-card {
            width: 4.75in;
            height: 3.25in;
            border: 1px solid #ddd;
            padding: 0.25in;
            box-sizing: border-box;
            page-break-inside: avoid;
          }
          .no-print {
            display: none !important;
          }
        }
        @media screen {
          .print-container {
            display: flex;
            gap: 20px;
            padding: 20px;
            flex-wrap: wrap;
            justify-content: center;
            background: #f5f5f5;
            min-height: 100vh;
          }
          .business-card {
            width: 4.05in;
            height: 2.75in;
            border: 1px solid #ddd;
            padding: 0.25in;
            box-sizing: border-box;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
        }
      `}} />
      <div className="print-container">
        {/* Front Side */}
        <div className="business-card bg-gradient-to-br from-white via-gray-50 to-teal-50 border-2 border-teal-200">
          <div className="flex flex-col h-full justify-between">
            {/* Logo/Company Name Section */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-14 h-14 flex items-center justify-center bg-white rounded-lg shadow-md p-1">
                  <Image
                    src="/logo.png"
                    alt="Entro Logo"
                    width={52}
                    height={52}
                    className="object-contain"
                    priority
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold leading-tight text-gray-900">ENTRO ETHIOPIA</h1>
                  <p className="text-xs text-gray-600 font-medium">Software & Hardware Development PLC</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-2 py-2 rounded-md mt-1.5">
                <p className="text-[10px] font-semibold leading-tight">
                  Complete Software Solutions for Modern Businesses
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200">
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-gray-900">
                  <span className="text-teal-600 font-bold">📞</span>
                  <span className="font-semibold">+251 979 113 638</span>
                </div>
                <div className="flex items-center gap-2 text-gray-900">
                  <span className="text-teal-600 font-bold">📧</span>
                  <span className="font-semibold text-xs">entro12@entroethiopia.com</span>
                </div>
                <div className="flex items-start gap-2 text-gray-900">
                  <span className="text-teal-600 font-bold mt-0.5">📍</span>
                  <span className="font-semibold text-xs leading-tight">
                    Megnagna, Hibret Bldg, Office H7-702<br />
                    Addis Ababa, Ethiopia
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-gray-200">
                  <span className="text-gray-600 text-xs font-medium">TIN: 0095875999</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div className="business-card bg-white text-gray-900">
          <div className="flex flex-col h-full">
            <div className="mb-2">
              <h2 className="text-sm font-bold text-slate-800 mb-1 border-b-2 border-teal-600 pb-1">
                OUR SERVICES
              </h2>
            </div>
            
            <div className="flex-1 grid grid-cols-2 gap-1.5 text-xs">
              {/* Service 1 */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-1.5 rounded border border-blue-100">
                <div className="font-bold text-blue-700 text-xs mb-0.5">🏥 MediCare AI</div>
                <div className="text-[10px] text-gray-600 leading-tight">
                  Healthcare Management with AI Features
                </div>
              </div>

              {/* Service 2 */}
              <div className="bg-gradient-to-br from-slate-50 to-teal-50 p-1.5 rounded border border-teal-100">
                <div className="font-bold text-teal-700 text-xs mb-0.5">🔒 Access Control</div>
                <div className="text-[10px] text-gray-600 leading-tight">
                  NFC, Keypad, Web-based, IoT Integration
                </div>
              </div>

              {/* Service 3 */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-1.5 rounded border border-orange-100">
                <div className="font-bold text-orange-700 text-xs mb-0.5">🚗 Car Service</div>
                <div className="text-[10px] text-gray-600 leading-tight">
                  Auto Service Center Management System
                </div>
              </div>

              {/* Service 4 */}
              <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-1.5 rounded border border-gray-200">
                <div className="font-bold text-gray-700 text-xs mb-0.5">⚙️ Custom Software</div>
                <div className="text-[10px] text-gray-600 leading-tight">
                  Tailored Solutions Development
                </div>
              </div>
            </div>

            <div className="mt-1.5 pt-1.5 border-t border-gray-200">
              <p className="text-[9px] text-gray-500 text-center">
                Locally Developed • 24/7 Support • Affordable Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
