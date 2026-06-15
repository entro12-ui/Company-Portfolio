"use client";

import { useTheme } from "@/context/ThemeContext";

const BusinessCard = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Theme-aware styles
  const printContainerBg = isDark
    ? "bg-gradient-to-b from-slate-900 to-gray-900"
    : "bg-gradient-to-b from-gray-100 to-slate-200";
  const cardBg = isDark
    ? "bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.18),transparent_35%),linear-gradient(135deg,#111827_0%,#1f2937_35%,#0f172a_100%)]"
    : "bg-[radial-gradient(circle_at_20%_30%,rgba(0,0,0,0.04),transparent_38%),radial-gradient(circle_at_80%_70%,rgba(6,182,212,0.1),transparent_35%),linear-gradient(135deg,#ffffff_0%,#f1f5f9_35%,#e2e8f0_100%)]";
  const dotGridClass = isDark
    ? "[background-image:radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)]"
    : "[background-image:radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)]";
  const cardTextClass = isDark ? "text-white" : "text-gray-900";
  const subTextClass = isDark ? "text-slate-200" : "text-gray-600";
  const accentTextClass = isDark ? "text-cyan-200" : "text-teal-700";
  const dividerClass = isDark ? "bg-white/40" : "bg-gray-400/60";
  const borderClass = isDark ? "border-cyan-300/70" : "border-teal-500/60";
  const circuitDotClass = isDark
    ? "bg-[rgba(120,250,255,0.9)] shadow-[0_0_10px_rgba(99,233,255,0.7)]"
    : "bg-[rgba(13,148,136,0.9)] shadow-[0_0_8px_rgba(20,184,166,0.6)]";
  const serviceCardClass = isDark
    ? "border-cyan-200/35 bg-slate-900/45 text-white"
    : "border-teal-500/30 bg-white/70 text-gray-800";
  const captionClass = isDark ? "text-slate-300" : "text-gray-500";

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          @page {
            size: A4 landscape;
            margin: 10mm;
          }
          body {
            margin: 0;
            padding: 0;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .print-container {
            display: flex;
            gap: 12mm;
            justify-content: center;
            align-items: center;
            padding: 0;
            page-break-inside: avoid;
          }
          .business-card {
            width: 3.5in;
            height: 2in;
            border: 1px solid #0f172a22;
            border-radius: 10px;
            overflow: hidden;
            box-sizing: border-box;
            page-break-inside: avoid;
            box-shadow: none;
            background: #0f172a;
          }
          .no-print {
            display: none !important;
          }
        }
        @media screen {
          .print-container {
            display: flex;
            gap: 28px;
            padding: 28px;
            flex-wrap: wrap;
            justify-content: center;
            min-height: 100vh;
          }
          .business-card {
            width: 3.9in;
            height: 2.25in;
            border: 1px solid #0f172a1f;
            border-radius: 14px;
            overflow: hidden;
            box-sizing: border-box;
            background: white;
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.22);
          }
          .card-caption {
            text-align: center;
            margin-top: 8px;
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .circuit-dot {
            position: absolute;
            border-radius: 999px;
          }
        }
      `,
        }}
      />
      <div
        className={`print-container transition-colors duration-300 ${printContainerBg}`}
      >
        {/* Front Side */}
        <div>
          <div className="business-card relative overflow-hidden text-white">
            <div className={`absolute inset-0 ${cardBg}`} />
            <div
              className={`absolute inset-0 opacity-35 ${dotGridClass} [background-size:18px_18px]`}
            />
            <div className="relative flex h-full flex-col justify-between p-3">
              <div className="flex items-center gap-2">
                <div className="grid h-11 w-11 place-items-center rounded bg-cyan-400/20 text-lg font-black text-cyan-300 ring-1 ring-cyan-300/40">
                  E
                </div>
                <div>
                  <p
                    className={`text-[9px] font-bold uppercase tracking-[0.14em] ${accentTextClass}`}
                  >
                    Entro Ethiopia
                  </p>
                  <p className={`text-[8px] ${subTextClass}`}>
                    Software & Hardware Development PLC
                  </p>
                </div>
              </div>
              <div>
                <p
                  className={`text-[11px] font-semibold leading-tight ${cardTextClass}`}
                >
                  Computer Software Solutions for Modern Businesses
                </p>
                <div className={`mt-1.5 h-px w-full ${dividerClass}`} />
                <p className={`mt-1 text-[8px] ${subTextClass}`}>
                  +251 979 113 638 · entro12@entroethiopia.com
                </p>
                <p className={`text-[8px] ${subTextClass}`}>
                  Megnagna, Hibret Bldg, Office H7-702, Addis Ababa
                </p>
              </div>
            </div>
          </div>
          <p className={`card-caption no-print ${captionClass}`}>Front Side</p>
        </div>

        {/* Back Side */}
        <div>
          <div className="business-card relative overflow-hidden">
            <div className={`absolute inset-0 ${cardBg}`} />
            <div className="absolute left-3 top-2 h-16 w-16 rounded-full border-[3px] border-cyan-300/70" />
            <div className="absolute left-[4.25rem] top-2 h-16 w-16 rounded-full border-[3px] border-cyan-400/50" />
            <div className="absolute right-3 top-2 h-16 w-16 rounded-full border-[3px] border-cyan-300/70" />
            <div className="absolute right-[4.25rem] top-2 h-16 w-16 rounded-full border-[3px] border-cyan-400/50" />
            <div
              className={`circuit-dot left-8 top-20 h-2 w-2 ${circuitDotClass}`}
            />
            <div
              className={`circuit-dot right-10 top-20 h-2 w-2 ${circuitDotClass}`}
            />
            <div
              className={`circuit-dot left-10 bottom-10 h-2 w-2 ${circuitDotClass}`}
            />
            <div
              className={`circuit-dot right-8 bottom-10 h-2 w-2 ${circuitDotClass}`}
            />
            <div className="absolute left-0 top-24 h-px w-24 bg-cyan-300/60" />
            <div className="absolute right-0 top-24 h-px w-24 bg-cyan-300/60" />
            <div className="absolute left-0 bottom-12 h-px w-24 bg-cyan-300/60" />
            <div className="absolute right-0 bottom-12 h-px w-24 bg-cyan-300/60" />
            <div className="relative flex h-full flex-col p-3">
              <p
                className={`text-center text-[10px] font-bold uppercase tracking-[0.18em] ${accentTextClass} drop-shadow-sm`}
              >
                Our Solutions
              </p>
              <div className="mt-2 grid flex-1 grid-cols-2 gap-1.5">
                {[
                  "MediCare AI",
                  "Car Service Management System",
                  "Custom Software Development",
                  "Access Control Solutions",
                  "Property Management",
                  "Inventory Management System",
                ].map((service) => (
                  <div
                    key={service}
                    className={`rounded border px-1.5 py-1 text-[8px] font-semibold leading-tight ${serviceCardClass}`}
                  >
                    {service}
                  </div>
                ))}
              </div>
              <p
                className={`mt-1 text-center text-[8px] font-medium ${subTextClass}`}
              >
                Locally Developed · 24/7 Support · Affordable Solutions
              </p>
            </div>
          </div>
          <p className={`card-caption no-print ${captionClass}`}>Back Side</p>
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
