import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import FloatingChatbot from "@/components/chatbot";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
});

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Deihl Reyes",
  url: "https://www.deihlreyes.me/",
  image: "https://www.deihlreyes.me/assets/deihl_logo.png",
  sameAs: [
    "https://www.linkedin.com/in/deihlreyes/",
    "https://github.com/DeihlReyes",
    "https://www.facebook.com/deihl.reyes08/",
  ],
  jobTitle: "Full Stack Developer",
  worksFor: { "@type": "Organization", name: "AP Creative Corporation" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quezon City",
    addressCountry: "PH",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.deihlreyes.me"),
  title: {
    default: "Deihl Reyes | Full Stack Developer",
    template: "%s | Deihl Reyes",
  },
  description:
    "Portfolio of Deihl Reyes — full stack developer from the Philippines building scalable web applications with Next.js, PostgreSQL, and Tailwind CSS.",
  keywords: [
    "Deihl Reyes",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "Philippines",
  ],
  authors: { name: "Deihl Reyes" },
  creator: "Deihl Reyes",
  alternates: { canonical: "https://www.deihlreyes.me" },
  openGraph: {
    type: "website",
    url: "https://www.deihlreyes.me",
    title: "Deihl Reyes | Full Stack Developer",
    description: "Full stack developer building scalable web applications.",
    siteName: "Deihl Reyes Portfolio",
    images: [{ url: "/assets/deihl_logo.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deihl Reyes | Full Stack Developer",
    description: "Full stack developer from the Philippines.",
    images: ["/assets/deihl_logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');var s=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.setAttribute('data-theme',t||s||'dark');})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${syne.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <FloatingChatbot />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
