// app/components/Contact.jsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Loader from "@/components/Loader";
import { useState } from "react";
import { useEffect } from "react";

// Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  address: z.string().optional(), 
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  // State for submission status and progress
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [progress, setProgress] = useState(0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "", 
      message: "",
    },
  });
  // Simulate progress while submitting
  useEffect(() => {
    let interval;
    if (isSubmitting) {
      setProgress(0); // Reset progress
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            return prev; // Stop at 90% until the request completes
          }
          return prev + 10; // Increment by 10% every 300ms
        });
      }, 300);
    }
    return () => clearInterval(interval); // Cleanup on unmount or when isSubmitting changes
  }, [isSubmitting]);

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);
  
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        setSubmitMessage({ type: "error", text: data.error || "Something went wrong." });
      } else {
        setSubmitMessage({ type: "success", text: data.message || "Message sent successfully!" });
        form.reset(); // clear form
      }
    } catch (err) {
      console.error("Submit error:", err);
      setSubmitMessage({ type: "error", text: "Failed to send. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
  <section className="w-full relative pb-9 bg-[#ffffff] ">
    {/* Gray background section */}
    
    <div 
      className="relative py-40 px-6"
      style={{ backgroundImage: "url('/pexels-a-darmel-7642088.jpg')", 
        backgroundSize: "1280px auto",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content on top */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-xs font-semibold uppercase mb-2 text-[#FFAA17] ">Join us</p>
          <h2 className="text-white text-4xl font-bold mb-4">
            Transforming exteriors, <br />
            one wall at a time.
          </h2>
          <p className="text-white max-w-md">
          Our team combines craftsmanship and modern systems to protect and enhance your building — residential or commercial. 
          Tell us your project and we’ll provide a clear plan and quote.
          </p>
        </div>
      </div>
    </div>

    
    {/* Form card, placed separately so it's taller */}
    <div className="max-w-6xl md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start md:-mt-105 px-2 md:px-6">
      <div></div> {/* empty div to keep spacing/alignment */}
      <div className="bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.25)] p-8 relative z-10">
      <p className="text-xs font-semibold uppercase  text-[#FFAA17]  mb-2">Join us now</p>
    <h3 className="text-xl font-semibold mb-6">
      Let us build your comfort
    </h3>
    {/* Submission Feedback */}
          {submitMessage && (
            <div
              className={`mb-4 p-2 rounded ${
                submitMessage.type === "success"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitMessage.text}
            </div>
          )}

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Name"
                    className="bg-gray-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    className="bg-gray-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Phone + Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Phone"
                    className="bg-gray-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Address"
                    className="bg-gray-200"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Subject"
                  className="bg-gray-200"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        
        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className="bg-gray-200 h-28"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

              {/* Loader or Submit Button */}
              {isSubmitting ? (
                <Loader progress={progress} />
              ) : (
                <Button
                  type="submit"
                  className="cursor-pointer rounded-none w-full bg-[#FFAA17] hover-[#FF6600]  text-black font-semibold py-3 transition-all duration-300"
                >
                  Build Comfort
                </Button>
              )}
      </form>
    </Form>
      </div>
    </div>
  </section>
  
  );
};

export default Contact;

 