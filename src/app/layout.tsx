import type { Metadata } from "next";
import { Poppins, Ubuntu, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

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

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
});

export const metadata: Metadata = {
  title: "Entro Ethiopia - SMART Access Control Solutions",
  description: "Secure, automate, and manage access with NFC, keypad, web, and IoT-based technology. Locally developed smart access control systems for modern businesses in Ethiopia and Africa.",
  keywords: "access control, smart security, NFC access, keypad entry, IoT automation, door control, Ethiopia, Addis Ababa",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${ubuntu.variable} ${hankenGrotesk.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
