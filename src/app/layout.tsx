import type { Metadata } from "next"; 
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Deal Roofing | Roofing Contractors in the US",
  description: "Trusted roofing company in the US offering free estimates, expert repair, and full roof replacements. Get the best deal now!",
  keywords: [
    "roofing company USA",
    "roof repair",
    "licensed roofing contractor",
    "roof replacement",
    "roofing services",
    "roofing experts",
    "roof inspection"
  ],
  robots: "index, follow",
  openGraph: {
    title: "Best Deal Roofing | Expert Roofing Contractors in the US",
    description: "Protect your home with the best roofing service. Free estimates, fast response, licensed and insured.",
    url: "https://bestdealroofing.xyz",
    siteName: "Best Deal Roofing",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Deal Roofing | Top Roofing Company",
    description: "America’s most trusted roofing service. Get your free quote now!",
    site: "@bestdealroofing",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="relative bg-white text-gray-900">
        {/* Background Video Global */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover opacity-20 z-[-10]"
          src="/roofing.mp4"
        />

        {/* Overlay para oscurecer ligeramente si se desea */}
        <div className="fixed top-0 left-0 w-full h-full bg-black/10 z-[-5]" />

        <LanguageProvider>
          <main className="relative z-10">
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
