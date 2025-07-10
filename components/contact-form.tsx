"use client";

import Image from "next/image";
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
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { SendHorizonal, Mail, MapPin, Phone } from "lucide-react";
import Loading from "@/assets/loading.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Please enter a subject." }),
  content: z.string().min(3, { message: "Please enter a message." }),
});

export default function ContactForm() {
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      content: "",
    },
  });
  const [isSending, setIsSending] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const templateParams = {
      subject: values.subject,
      email: values.email,
      content: values.content,
    };
    setIsSending(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );
      form.reset();
      toast({
        title: "Message Sent!",
        description:
          "Your message has been sent successfully! I will get back to you as soon as possible.",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Message Failed!",
        description:
          "There was an error sending your message. Please try again later.",
        duration: 3000,
      });
    } finally {
      setIsSending(false);
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="max-w-6xl mx-auto"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start py-12 md:py-16">
        {/* Contact Form */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Send me a message
            </h3>
            <p className="text-body-small text-gray-600 mb-8">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="your.email@example.com"
                        {...field}
                        className="border-gray-300 focus:border-black focus:ring-black rounded-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Subject
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="What's this about?"
                        {...field}
                        className="border-gray-300 focus:border-black focus:ring-black rounded-lg"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me about your project..."
                        {...field}
                        className="border-gray-300 focus:border-black focus:ring-black rounded-lg min-h-[120px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSending}>
                {isSending ? (
                  <div className="flex items-center gap-2">
                    <Image src={Loading} alt="Loading" width={20} height={20} />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Send Message</span>
                    <SendHorizonal size={20} />
                  </div>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>

        {/* Contact Info & Image */}
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Other ways to connect
            </h3>

            <div className="space-y-4">
              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">reyes.deihlarron@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    <Phone className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Phone Number</p>
                    <p className="text-gray-600">+63 917 115 8829</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Quezon City, Philippines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
