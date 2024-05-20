import "./css/style.css";

import { Inter, Architects_Daughter } from "next/font/google";

import Header from "@/components/ui/header";
import Banner from "@/components/banner";
import Footer from "@/components/ui/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "PT Satyadhika Bakti Finance",
  description:
    "PT Satyadhika Bakti Finance (SB Finance) adalah perusahaan pembiayaan terpercaya di Surabaya yang menyediakan beragam solusi layanan keuangan terbaik dan komprehensif untuk perusahaan anda.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/sbf-icon.png",
        href: "/images/sbf-icon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden bg-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
