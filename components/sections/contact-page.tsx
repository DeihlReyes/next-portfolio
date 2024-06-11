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
import { SendHorizonal } from 'lucide-react';
import { Loading } from "../loading";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Please enter a subject." }),
  content: z.string().min(3, { message: "Please enter a message." }),
});

const ContactPage = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      subject: "",
      content: "",
    }
  });
  const [ isSending, setIsSending ] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const templateParams = {
      subject: values.subject,
      email: values.email,
      content: values.content,
    };
    setIsSending(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      )
      .then(
        () => {
          form.reset();
          toast({
            title: "Email Sent!",
            description: "Your email has been sent successfully! I will get back to you as soon as possible.",
            duration: 3000,
          })
        },
        (error) => {
          toast({
            title: "Email Failed!",
            description: "There was an error sending your email. Please try again later.",
            duration: 3000,
          })
        }
      ).finally(() => {
        setIsSending(false);
      });
  }

  return (
    <section
      id="contact"
      className="relative flex flex-col md:flex-row h-full md:h-screen px-8 md:px-16 pt-32 pb-16 max-w-7xl justify-center items-center mx-auto gap-12 md:gap-24">
      <Image src={contactImage} alt="Contact Image" />
      <div className="w-full md:w-2/3">
        <h2 className="text-xl md:text-3xl font-bold mb-6">Let&apos;s Talk!</h2>
        <p className="text-sm md:text-lg text-left mb-6 md:pr-4">
          If you have any questions, project ideas, or just want to chat, please
          don&apos;t hesitate to reach out.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a Subject" {...field} />
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
            <Button className="px-8 md:py-6 md:px-10 font-bold text-sm md:text-lg mt-10 md:mt-14 md:w-40 max-w-40" disabled={isSending}>
              {isSending ? (
                <>
                  <Loading />
                </>
              ) : (
                <>
                  Send <SendHorizonal size={20} className="ml-3 text-white" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactPage;
