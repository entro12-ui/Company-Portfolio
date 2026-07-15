"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { AfsPhoto } from "@/content/afsPhotos";

type AfsFacilityGalleryBoardProps = {
  photos: AfsPhoto[];
};

function LogoCard() {
  return (
    <div className="afs-logo-card w-[168px] overflow-hidden rounded-xl border border-white/20 bg-white/95 p-2 shadow-lg shadow-black/20 ring-1 ring-white/10 backdrop-blur">
      <Image
        src="/afs-logo.png"
        alt="AFS Automotive Fleet Services International PLC logo"
        width={207}
        height={96}
        priority
        className="block h-auto w-full"
      />
    </div>
  );
}

export default function AfsFacilityGalleryBoard({ photos }: AfsFacilityGalleryBoardProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  const closeLightbox = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, closeLightbox, showPrev, showNext]);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media print {
          @page {
            size: A4 landscape;
            margin: 4mm;
          }

          html,
          body,
          article {
            margin: 0 !important;
            padding: 0 !important;
            background: #fff !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .no-print {
            display: none !important;
          }

          .afs-print-hide,
          .afs-print-title-hide {
            display: none !important;
          }

          .afs-gallery-board {
            overflow: visible !important;
            border: none !important;
            border-radius: 0 !important;
            background: #fff !important;
            padding: 3mm !important;
            box-shadow: none !important;
            height: 100vh !important;
            max-height: 202mm !important;
            display: flex !important;
            flex-direction: column !important;
          }

          .afs-gallery-header {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            margin-bottom: 2mm !important;
            flex-shrink: 0 !important;
            background: transparent !important;
            padding: 0 !important;
            box-shadow: none !important;
          }

          .afs-logo-card {
            width: 40mm !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            background: transparent !important;
          }

          .afs-gallery-badge {
            background: #0f3f95 !important;
            color: #fff !important;
            font-size: 8pt !important;
            padding: 1.5mm 3mm !important;
          }

          .afs-gallery-intro {
            margin: 0 0 2mm 0 !important;
            padding: 1.5mm 2mm !important;
            border: 1px solid rgba(15, 63, 149, 0.15) !important;
            background: #fff !important;
            font-size: 7pt !important;
            line-height: 1.25 !important;
            flex-shrink: 0 !important;
          }

          .afs-gallery-intro p {
            font-size: 7pt !important;
            line-height: 1.25 !important;
            color: #1a2c56 !important;
          }

          .afs-gallery-grid {
            flex: 1 1 auto !important;
            display: grid !important;
            grid-template-columns: repeat(5, 1fr) !important;
            grid-template-rows: repeat(4, 1fr) !important;
            gap: 1.5mm !important;
            margin-top: 0 !important;
            min-height: 0 !important;
          }

          .afs-photo-tile {
            break-inside: avoid;
            page-break-inside: avoid;
            border: 1px solid #0f3f95 !important;
            border-radius: 2px !important;
            box-shadow: none !important;
            transform: none !important;
            height: 100% !important;
            display: block !important;
            padding: 0 !important;
            background: #fff !important;
          }

          .afs-photo-frame {
            position: relative !important;
            height: 100% !important;
            width: 100% !important;
            aspect-ratio: auto !important;
            overflow: hidden !important;
            border-radius: 0 !important;
          }

          .afs-photo-frame img {
            position: absolute !important;
            inset: 0 !important;
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }

          .afs-photo-overlay {
            display: none !important;
          }

          .afs-gallery-footer {
            margin-top: 2mm !important;
            flex-shrink: 0 !important;
          }

          .afs-gallery-footer p {
            font-size: 7pt !important;
            color: #0f3f95 !important;
          }

          .afs-gallery-since {
            font-size: 6pt !important;
            margin-top: 0 !important;
            flex-shrink: 0 !important;
          }
        }
      `,
        }}
      />

      <div className="no-print mb-4 flex justify-end px-1 sm:px-2">
        <button
          type="button"
          onClick={() => window.print()}
          className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0f3f95] to-[#1b4ea3] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#0f3f95]/25 transition hover:shadow-xl hover:shadow-[#0f3f95]/35 hover:brightness-110"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2m-12 0v4h12v-4m-12 0h12" />
          </svg>
          Print Gallery
        </button>
      </div>

      <section className="afs-gallery-board relative overflow-hidden rounded-[1.75rem] border border-[#0f3f95]/10 bg-white shadow-2xl shadow-slate-300/40">
        {/* Premium hero header */}
        <div className="afs-gallery-header relative overflow-hidden rounded-b-none bg-gradient-to-br from-[#0a2a66] via-[#0f3f95] to-[#123a86] px-5 py-7 sm:px-8 sm:py-9">
          <div className="afs-print-hide pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
          <div className="afs-print-hide pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-[#c9a24b]/20 blur-3xl" />
          <div
            className="afs-print-hide pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1.1px, transparent 1.1px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="afs-print-hide pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]">
            <Image
              src="/afs-logo.png"
              alt=""
              width={620}
              height={288}
              aria-hidden="true"
              className="h-auto w-[55%] max-w-[560px] brightness-0 invert"
            />
          </div>

          <div className="relative grid gap-4 lg:grid-cols-[190px_minmax(0,1fr)_190px] lg:items-center">
            <div className="justify-self-start">
              <LogoCard />
            </div>

            <div className="afs-print-title-hide text-center">
              <h1 className="bg-gradient-to-b from-white to-slate-200 bg-clip-text text-2xl font-black uppercase leading-[1.05] tracking-tight text-transparent sm:text-4xl md:text-[2.7rem]">
                AFS Automotive Fleet Services
                <br />
                International PLC
              </h1>

              <div className="mt-3 flex items-center justify-center gap-3 text-[#e7c983]">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#c9a24b]/70 sm:w-16" />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] sm:text-sm">
                  Facility Gallery
                </p>
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#c9a24b]/70 sm:w-16" />
              </div>
            </div>

            <div className="justify-self-start lg:justify-self-end">
              <span className="afs-gallery-badge inline-flex items-center gap-2 rounded-full border border-[#c9a24b]/40 bg-[#c9a24b]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#f0d69a] backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e7c983]" />
                Office &amp; Workshop
              </span>
            </div>
          </div>
        </div>

        <div className="relative px-3 pb-6 pt-5 sm:px-6">
          <div className="afs-gallery-intro mx-auto mb-6 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-center">
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              All AFS facility photos in one view — office, reception, service bays, workshop
              floors, and fleet maintenance operations.
            </p>
          </div>

          <div className="afs-gallery-grid grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 print:mt-0">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                className="afs-photo-tile group relative overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm ring-1 ring-transparent transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0f3f95]/20 hover:ring-[#c9a24b]/50"
              >
                <div className="afs-photo-frame relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="afs-photo-overlay pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08204e]/85 via-[#08204e]/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="afs-photo-overlay pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="line-clamp-2 text-xs font-medium leading-5 text-white">
                      {photo.alt}
                    </p>
                  </div>
                  <div className="afs-photo-overlay pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0f3f95] opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 8v6m-3-3h6M18 11a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="afs-gallery-footer mt-8 flex items-center justify-center gap-4 text-[#0f3f95]">
            <span className="afs-print-hide h-px w-12 bg-gradient-to-r from-transparent to-[#c9a24b]/60 sm:w-20" />
            <p className="text-sm font-semibold italic tracking-[0.04em] sm:text-base">
              Driven by Excellence – Committed to Service
            </p>
            <span className="afs-print-hide h-px w-12 bg-gradient-to-l from-transparent to-[#c9a24b]/60 sm:w-20" />
          </div>
        </div>
      </section>

      {activePhoto && (
        <div
          className="no-print fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative max-h-[86vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full bg-slate-900 sm:aspect-[16/10]">
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                fill
                sizes="(min-width: 1024px) 80vw, 100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-slate-200 bg-white px-5 py-4">
              <p className="text-sm leading-6 text-slate-700">{activePhoto.alt}</p>
              <span className="shrink-0 rounded-full bg-[#0f3f95]/10 px-3 py-1 text-xs font-semibold text-[#0f3f95]">
                {(activeIndex ?? 0) + 1} / {photos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
