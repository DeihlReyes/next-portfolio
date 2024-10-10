import type { Metadata } from "next";
import { Mulish, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import FloatingChatbot from "@/components/chatbot";

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
  title: "Deihl Reyes | Full Stack Developer",
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
  openGraph: {
    type: "website",
    url: "https://www.deihlreyes.me",
    title: "Deihl Reyes | Full Stack Developer",
    description:
      "Discover the innovative web solutions crafted by Deihl Reyes, a passionate full stack developer from the Philippines.",
    images: [
      {
        url: "/public/assets/deihl_logo.png",
        width: 1200,
        height: 630,
        alt: "Deihl Reyes - Full Stack Developer Portfolio",
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
    <html className="scroll-smooth" lang="en">
      <body
        className={`${title.variable} ${body.variable} scroll-smooth bg-[#D6D6D6]`}
      >
        <Navbar />
        {children}
        <FloatingChatbot />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
