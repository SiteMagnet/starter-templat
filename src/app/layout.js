import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SiteMagnet - Transform Your Website into a High-Converting Lead Magnet",
  description:
    "SiteMagnet helps businesses optimize their websites to generate more leads and conversions. Discover how our tailored website strategies can grow your business and boost sales.",
  keywords: "website optimization, lead generation, high-converting websites, website design, digital marketing, business growth, conversion strategies",
  author: "SiteMagnet Team",
  robots: "index, follow", // This ensures that search engines can index your page and follow links
  og: {
    title: "SiteMagnet - Transform Your Website into a High-Converting Lead Magnet", // Open Graph title for social media sharing
    description:
      "Optimize your website to convert visitors into clients. SiteMagnet specializes in building high-converting websites that help your business grow."}}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
