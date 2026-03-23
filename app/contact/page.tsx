import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Deihl Reyes — available for freelance projects and opportunities.",
  alternates: { canonical: "https://www.deihlreyes.me/contact" },
};

export default function ContactPage() {
  return (
    <div className="py-24 md:py-32">
      {/* Subtle radial glow at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[40rem] pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% -5%, rgba(59,130,246,0.1), transparent)",
        }}
      />
      <div className="section-container relative z-10">
        <ContactForm />
      </div>
    </div>
  );
}
