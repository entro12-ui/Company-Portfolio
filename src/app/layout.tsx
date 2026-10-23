import type { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import SupportBot from "@/components/SupportBot";
import { themeInitScript } from "@/lib/theme";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.entroethiopia.com"),
  alternates: {
    canonical: "./",
  },
  title: {
    default:
      "Entro Ethiopia | Software Development PLC in Addis Ababa",
    template: "%s | Entro Ethiopia",
  },
  description:
    "Entro Ethiopia Software Development PLC builds custom software, AI, ERP systems, and installs CCTV, access control, GPS tracking, and attendance hardware in Addis Ababa, Ethiopia.",
  keywords: [
    "software company Ethiopia",
    "hardware systems Ethiopia",
    "custom software Addis Ababa",
    "CCTV installation Ethiopia",
    "access control system Addis Ababa",
    "GPS vehicle tracking Ethiopia",
    "attendance machine integration",
    "AI solutions Ethiopia",
    "ERP systems Ethiopia",
    "Entro Ethiopia",
  ],
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "453x488" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "Entro Ethiopia",
    title: "Entro Ethiopia — Software & Hardware Systems in Ethiopia",
    description:
      "Custom software, web, AI, ERP, plus CCTV, access control, GPS tracking and attendance hardware — engineered and supported in Addis Ababa.",
    url: "https://www.entroethiopia.com/",
    images: [
      {
        url: "/logo.png",
        width: 453,
        height: 488,
        alt: "Entro Ethiopia Software Development PLC",
      },
    ],
    locale: "en_ET",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entro Ethiopia — Software & Hardware Systems in Ethiopia",
    description:
      "Software, AI, ERP, CCTV, access control, GPS and attendance systems — built and supported in Addis Ababa.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GWRYL6ZV0F"
          strategy="beforeInteractive"
        />
        <Script id="google-tag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GWRYL6ZV0F');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-554N8BGQ');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1852170588803437');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} ${ubuntu.variable} font-sans`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-554N8BGQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1852170588803437&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* 👇 Wrap your page content with ThemeProvider */}
        <ThemeProvider>
          {children}
          <SupportBot />
        </ThemeProvider>
      </body>
    </html>
  );
}
