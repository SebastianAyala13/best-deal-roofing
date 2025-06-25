import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext"; // IMPORTANTE

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Corregido con el tipo explícito para evitar error de ESLint
export const metadata: Metadata = {
  title: 'Best Deal Roofing | America’s Top Roofing Service',
  description: 'Protect your home with expert roofing. Get a free quote today with licensed and insured professionals.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider> {/* ACTIVA IDIOMA GLOBAL */}
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
