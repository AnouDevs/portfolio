import type { Metadata } from "next";
import { Patrick_Hand, Caveat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
});

const caveat = Caveat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "AnouDev — Fullstack Developer",
  description:
    "Portfolio of AnouDev, fullstack developer specialized in Next.js and TypeScript.",
  openGraph: {
    title: "AnouDev — Fullstack Developer",
    description:
      "Portfolio of AnouDev, fullstack developer specialized in Next.js and TypeScript.",
    url: "https://anoudevs-portfolio.vercel.app",
    siteName: "AnouDev Portfolio",
    images: [
      {
        url: "/portfolio-og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnouDev — Fullstack Developer",
    description:
      "Portfolio of AnouDev, fullstack developer specialized in Next.js and TypeScript.",
    images: ["/portfolio-og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${patrickHand.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
