"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { memo, useState } from "react";
import {
  SendHorizonal,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Loader2,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import DecryptedText from "@/components/bits/DecryptedText";
import BlurText from "@/components/bits/BlurText";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const ContactHeader = memo(function ContactHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease }}
    >
      <p className="text-label mb-3" style={{ color: "var(--accent)" }}>
        <DecryptedText
          text="Contact"
          animateOn="view"
          sequential
          speed={40}
          className="text-label"
          encryptedClassName="text-label opacity-30"
        />
      </p>
      <BlurText
        text="Let's work together"
        as="h1"
        className="text-display font-display"
        animateBy="words"
        delay={80}
        direction="top"
        stepDuration={0.35}
      />
      <p
        className="mt-3 text-sm max-w-md"
        style={{ color: "var(--text-secondary)" }}
      >
        Have a project in mind or just want to say hello? Fill out the form or
        reach out directly.
      </p>
    </motion.div>
  );
});

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Please enter a subject." }),
  content: z.string().min(3, { message: "Please enter a message." }),
});

const rv = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: d, ease },
  }),
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "reyes.deihlarron@gmail.com",
    href: "mailto:reyes.deihlarron@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/DeihlReyes",
    href: "https://github.com/DeihlReyes",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/deihl-arron-reyes",
    href: "https://www.linkedin.com/in/deihlreyes/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Quezon City, Philippines",
    href: null,
  },
];

export default function ContactForm() {
  const { toast } = useToast();
  const [isSending, setIsSending] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", subject: "", content: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSending(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          subject: values.subject,
          email: values.email,
          content: values.content,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY!,
      );
      form.reset();
      toast({
        title: "Message sent!",
        description: "I'll get back to you soon.",
        duration: 3000,
      });
    } catch {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        duration: 3000,
      });
    } finally {
      setIsSending(false);
    }
  }

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "var(--text-primary)",
    borderRadius: "0.5rem",
    transition: "border-color 0.2s",
  };

  const inputClass =
    "h-9 text-sm placeholder:text-[var(--text-tertiary)] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-[rgba(59,130,246,0.45)]";

  const labelStyle = {
    color: "var(--text-tertiary)",
    fontSize: "0.75rem",
    fontWeight: 500,
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
  };

  return (
    <div className="max-w-5xl space-y-14">
      <ContactHeader />

      <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
        {/* Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={rv}
        >
          <div
            className="p-6 rounded-2xl space-y-5"
            style={{
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="space-y-1">
              <h2
                className="text-base font-semibold font-display"
                style={{ color: "var(--text-primary)" }}
              >
                Send a message
              </h2>
              <p className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                I typically respond within 24 hours.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={labelStyle}>Email address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your@email.com"
                          {...field}
                          style={inputStyle}
                          className={inputClass}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={labelStyle}>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What's this about?"
                          {...field}
                          style={inputStyle}
                          className={inputClass}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel style={labelStyle}>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          {...field}
                          style={{ ...inputStyle, minHeight: "120px" }}
                          className="text-sm placeholder:text-[var(--text-tertiary)] resize-none focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                      </FormControl>
                      <FormMessage className="text-red-400 text-xs" />
                    </FormItem>
                  )}
                />
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={!isSending ? { scale: 1.02 } : {}}
                  whileTap={!isSending ? { scale: 0.98 } : {}}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 disabled:opacity-50"
                  style={{ background: "var(--accent)", color: "#fff" }}
                  onMouseEnter={(e) => {
                    if (!isSending)
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "#2563eb";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "var(--accent)";
                  }}
                >
                  {isSending ? (
                    <>
                      <Loader2 size={15} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <SendHorizonal size={15} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </Form>
          </div>
        </motion.div>

        {/* Info sidebar */}
        <motion.div
          custom={0.15}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={rv}
          className="space-y-6"
        >
          {/* Availability badge */}
          <div
            className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
            style={{
              background: "var(--available-bg)",
              border: "1px solid var(--available-border)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <div>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--available-text)" }}
              >
                Available for work
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--available-text-sub)" }}
              >
                Open to freelance &amp; full-time roles
              </p>
            </div>
          </div>

          {/* Contact links */}
          <div className="space-y-2">
            {contactLinks.map(({ icon: Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease }}
              >
                {href ? (
                  <Link
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="flex items-center gap-3.5 p-3.5 rounded-xl group transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "rgba(59,130,246,0.3)";
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "rgba(59,130,246,0.05)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor =
                        "rgba(255,255,255,0.06)";
                      (e.currentTarget as HTMLAnchorElement).style.background =
                        "rgba(255,255,255,0.02)";
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "var(--accent-dim)",
                        border: "1px solid var(--accent-border)",
                      }}
                    >
                      <Icon size={14} style={{ color: "var(--accent)" }} />
                    </div>
                    <div className="min-w-0">
                      <p
                        className="text-xs mb-0.5"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-sm truncate transition-colors duration-200"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {value}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div
                    className="flex items-center gap-3.5 p-3.5 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "var(--accent-dim)",
                        border: "1px solid var(--accent-border)",
                      }}
                    >
                      <Icon size={14} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <p
                        className="text-xs mb-0.5"
                        style={{ color: "var(--text-tertiary)" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Response time note */}
          <p className="text-xs px-1" style={{ color: "var(--text-tertiary)" }}>
            Prefer email for project inquiries. I&apos;ll respond as soon as I
            can.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
