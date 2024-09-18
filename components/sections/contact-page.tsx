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
import { Button } from "../ui/button";
import contactImage from "@/assets/contact.svg";
import emailjs from "@emailjs/browser";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import { SendHorizonal } from "lucide-react";
import Loading from "@/assets/loading.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Please enter a subject." }),
  content: z.string().min(3, { message: "Please enter a message." }),
});

const ContactPage = () => {
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
        title: "Email Sent!",
        description:
          "Your email has been sent successfully! I will get back to you as soon as possible.",
        duration: 3000,
      });
    } catch (error) {
      toast({
        title: "Email Failed!",
        description:
          "There was an error sending your email. Please try again later.",
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
    <motion.section
      id="contact"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative flex flex-col md:flex-row h-full px-8 md:px-16 pt-32 pb-16 max-w-7xl justify-center items-center mx-auto gap-12 md:gap-24"
    >
      <motion.div variants={itemVariants}>
        <Image src={contactImage} alt="Contact Image" />
      </motion.div>
      <motion.div variants={itemVariants} className="w-full md:w-2/3">
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-3xl font-bold mb-6"
        >
          Let&apos;s Talk!
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-sm md:text-lg text-left mb-6 md:pr-4"
        >
          If you have any questions, project ideas, or just want to chat, please
          don&apos;t hesitate to reach out.
        </motion.p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@mail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a Subject" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button
                className="px-8 md:py-6 md:px-10 font-bold text-sm md:text-lg mt-10 md:mt-14 md:w-40 max-w-40"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <Image src={Loading} alt="Loading" width={20} height={20} />
                  </>
                ) : (
                  <>
                    Send <SendHorizonal size={20} className="ml-3 text-white" />
                  </>
                )}
              </Button>
            </motion.div>
          </form>
        </Form>
      </motion.div>
    </motion.section>
  );
};

export default ContactPage;
