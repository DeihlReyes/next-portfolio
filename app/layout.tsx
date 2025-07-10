import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import FloatingChatbot from "@/components/chatbot";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
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
      <Head>
        <link rel="canonical" href="https://www.deihlreyes.me/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Deihl Reyes",
              url: "https://www.deihlreyes.me/",
              image: "https://www.deihlreyes.me/assets/deihl_logo.png",
              sameAs: [
                "https://www.linkedin.com/in/deihl-arron-reyes/",
                "https://github.com/DeihlReyes",
                "https://www.facebook.com/deihl.reyes08/",
              ],
              jobTitle: "Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "AP Creative Corporation",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Quezon City",
                addressCountry: "PH",
              },
            }),
          }}
        />
      </Head>
      <body className={`${inter.variable} scroll-smooth bg-white`}>
        <Navbar />
        <main className="min-h-screen scroll-smooth">{children}</main>
        <FloatingChatbot />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
