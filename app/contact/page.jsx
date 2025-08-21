"use client";

import dynamic from "next/dynamic";

const Contact = dynamic(() => import("../components/Contact"), {
  loading: () => <div style={{ height: 300 }} />,
  ssr: false,
});

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Image from "next/image";

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  // State for submission status and progress
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);
  const [progress, setProgress] = useState(0);

  // Initialize the form with React Hook Form and Zod resolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
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

  // Handle form submission
  const onSubmit = async (values) => {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      let result = {};
      
      try {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          result = await response.json();
        }
      } catch (e) {
        console.error("Failed to parse JSON:", e);
      }

      if (!response.ok) {
        throw new Error(result?.error || "Failed to submit the form");
      }


      setProgress(100); // Set progress to 100% on success
      setSubmitMessage({ type: "success", text: "Message sent successfully!" });
      form.reset();
    } catch (error) {
      setProgress(100); // Set progress to 100% even on error
      setSubmitMessage({
        type: "error",
        text: error.message || "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto ">
       
      <Contact /> 
    </section>
  );
} 



// return (
//   <div className="select-none min-h-screen  bg-gradient-to-b from-gray-50 to-gray-100  dark:from-[#111111] dark:to-[#000000] text-gray-900 dark:text-[var(--secondary)] py-12 px-4 font-sans">
//     {/* Contact Us Header */}
//     <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 bg-gradient-to-r text-primary dark:text-[var(--secondary)] bg-clip-text">
//       Contact Us
//     </h1>

//     {/* Two-Column Layout */}
//     <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//       {/* Left Column: Get in Touch */}
//       <div className="p-6">
//         <h2 className="text-3xl font-bold mb-4 text-[var(--primary)] dark:text-[var(--secondary)]">
//           Get in Touch
//         </h2>
//         <p className="text-gray-600 dark:text-gray-300 mb-4">
//           We are located in the vibrant city of Brampton, Ontario, Canada.
//         </p>
//         <p className="text-gray-600 dark:text-gray-300 mb-4">
//           If you want to learn more about web design, web development, SEO, or
//           our managed WordPress services, feel free to reach out.
//         </p>
//         <p className="text-gray-600 dark:text-gray-300">
//           We are never too busy to answer your questions or talk to you about
//           your business goals.
//         </p>
        
//       </div>

//       {/* Right Column: Let's Talk! */}
//       <div className="p-6 bg-white dark:bg-[var(--primary)] rounded-2xl shadow-lg">
//         <h2 className="text-3xl font-bold mb-4 text-primary dark:text-[var(--secondary)]">
//           Let’s Talk!
//         </h2>
//         {/* Submission Feedback */}
//         {submitMessage && (
//           <div
//             className={`mb-4 p-2 rounded ${
//               submitMessage.type === "success"
//                 ? "bg-green-100 text-green-800"
//                 : "bg-red-100 text-red-800"
//             }`}
//           >
//             {submitMessage.text}
//           </div>
//         )}
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             {/* Name Field */}
//             <FormField
//               control={form.control}
//               name="name"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-900 dark:text-[var(--secondary)]">
//                     Your name*
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Your name"
//                       className="bg-white dark:bg-[var(--primary)] border-gray-300 dark:border-gray-500 text-gray-900 dark:text-[var(--secondary)] placeholder-gray-400 dark:placeholder-gray-400 rounded-2xl"
//                       disabled={isSubmitting}
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage className="text-red-400" />
//                 </FormItem>
//               )}
//             />

//             {/* Email Field */}
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-900 dark:text-[var(--secondary)]">
//                     Your email*
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       type="email"
//                       placeholder="Your email"
//                       className="bg-white dark:bg-[var(--primary)] border-gray-300 dark:border-gray-500 text-gray-900 dark:text-[var(--secondary)] placeholder-gray-400 dark:placeholder-gray-400 focus:ring-[var(--primary)] focus:border-[var(--secondary)] rounded-2xl"
//                       disabled={isSubmitting}
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage className="text-red-400" />
//                 </FormItem>
//               )}
//             />

//             {/* Subject Field */}
//             <FormField
//               control={form.control}
//               name="subject"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-900 dark:text-[var(--secondary)]">
//                     Subject
//                   </FormLabel>
//                   <FormControl>
//                     <Input
//                       placeholder="Subject of your message"
//                       className="bg-white dark:bg-[var(--primary)] border-gray-300 dark:border-gray-500 text-gray-900 dark:text-[var(--secondary)] placeholder-gray-400 dark:placeholder-gray-400 focus:ring-[var(--primary)] focus:border-[var(--secondary)] rounded-2xl"
//                       disabled={isSubmitting}
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage className="text-red-400" />
//                 </FormItem>
//               )}
//             />

//             {/* Message Field */}
//             <FormField
//               control={form.control}
//               name="message"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel className="text-gray-900 dark:text-[var(--secondary)]">
//                     Let us know how we can help
//                   </FormLabel>
//                   <FormControl>
//                     <Textarea
//                       placeholder="Your message"
//                       className="bg-white dark:bg-[var(--primary)] border-gray-300 dark:border-gray-500 text-gray-900 dark:text-[var(--secondary)] placeholder-gray-400 dark:placeholder-gray-400 focus:ring-[var(--primary)] focus:border-[var(--primary)] h-32 rounded-2xl"
//                       disabled={isSubmitting}
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormMessage className="text-red-400" />
//                 </FormItem>
//               )}
//             />

//             {/* Loader or Submit Button */}
//             {isSubmitting ? (
//               <Loader progress={progress} />
//             ) : (
//               <Button
//                 type="submit"
//                 className="cursor-pointer w-full bg-[var(--primary)] dark:bg-[var(--secondary)] text-white dark:text-[var(--primary)] font-semibold py-3 rounded-2xl transition-all duration-300"
//               >
//                 Send Message
//               </Button>
//             )}
//           </form>
//         </Form>
//       </div>
//     </div>
//   </div>
// );