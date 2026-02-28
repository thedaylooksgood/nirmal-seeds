import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { navItems, footerData } from "@/features/home-page/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nirmal Seeds - Innovation that empowers the future",
  description: "Research-driven seed company that shapes modern agriculture through farmer-centric, localized innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-green-200 selection:text-green-900`}
      >
        <Header navItems={navItems} />
        {children}
        <Footer sections={footerData.sections} copyrightText={footerData.copyrightText} />
      </body>
    </html>
  );
}
