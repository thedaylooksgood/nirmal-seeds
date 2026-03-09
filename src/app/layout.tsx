import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { navItems, footerData } from "@/features/home-page/data";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
        className={`${raleway.variable} font-sans antialiased selection:bg-green-200 selection:text-green-900`}
      >
        <Header navItems={navItems} />
        {children}
        <Footer sections={footerData.sections} copyrightText={footerData.copyrightText} />
      </body>
    </html>
  );
}
