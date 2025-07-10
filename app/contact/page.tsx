import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact - Deihl Reyes | Full Stack Developer",
  description:
    "Get in touch with Deihl Reyes for your next web development project. Contact me for collaborations, inquiries, or just to say hello.",
  keywords: [
    "contact",
    "web developer",
    "full stack developer",
    "hire developer",
    "Philippines",
  ],
  openGraph: {
    title: "Contact - Deihl Reyes | Full Stack Developer",
    description:
      "Get in touch with Deihl Reyes for your next web development project. Contact me for collaborations, inquiries, or just to say hello.",
    url: "https://deihlreyes.me/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Deihl Reyes | Full Stack Developer",
    description:
      "Get in touch with Deihl Reyes for your next web development project.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 border-b py-8 sm:py-12">
        <div className="container py-6 sm:py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <h1 className="text-section-title text-gray-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-body text-gray-600 leading-relaxed max-w-3xl">
              Ready to start your next project? I&apos;d love to hear about your
              ideas and help bring them to life.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container">
        <ContactForm />
      </div>
    </div>
  );
}
