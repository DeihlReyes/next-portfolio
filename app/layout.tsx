import type { Metadata } from "next";
import { Mulish, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const title = Mulish({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

const body = Space_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Deihl Reyes | Full Stack Developer Portfolio",
  description:
    "Explore the portfolio of Deihl Reyes, a full stack developer based in the Philippines. Discover projects, skills, and contact information.",
  keywords: [
    "Deihl Reyes",
    "Full Stack Developer",
    "Portfolio",
    "Web Development",
    "Philippines",
  ],
  authors: {
    name: "Deihl Reyes",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${title.variable} ${body.variable} scroll-smooth`}>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
