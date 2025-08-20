"use client";

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlayCircle, CheckCircle } from "lucide-react";

export default function FAQSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 lg:px-12 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      
      {/* Left: FAQ */}
      <div>
        <h4 className="text-orange-500 font-semibold uppercase mb-2">
          Frequently Asked Questions
        </h4>
        <h2 className="text-3xl font-bold mb-4">Questions & Answers</h2>
        <p className="text-gray-600 mb-6">
          Providing legal advice, contract drafting, compliance assistance, 
          intellectual property protection, and other legal support for businesses. 
          Creating visual content, such as logos, brochures, infographics.
        </p>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What services does your business provide?</AccordionTrigger>
            <AccordionContent>
              We offer customized solutions for each client’s unique needs and budget. Please contact us for a quote.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How much do your services cost?</AccordionTrigger>
            <AccordionContent>
              Our pricing varies depending on the scope of your project and specific requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Do you offer any guarantees or refunds?</AccordionTrigger>
            <AccordionContent>
              Yes, we ensure client satisfaction and provide guarantees based on project type.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How do I get started with your services?</AccordionTrigger>
            <AccordionContent>
              Simply reach out to us via our contact form or email, and we’ll schedule a free consultation.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Right: Video + Stats */}
      <div className="relative">
        {/* Image */}
        <Image
          src="/faq-video.jpg"
          alt="FAQ Video"
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
        {/* Play Button Overlay */}
        <button className="absolute inset-0 flex items-center justify-center">
          <PlayCircle className="w-16 h-16 text-orange-500 drop-shadow-lg" />
        </button>

        {/* Bottom Box */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-sm">
          <h3 className="font-bold text-lg text-gray-900">
            We Have Many Happy Clients All Over World Wide
          </h3>
          <div className="mt-3 space-y-2 text-gray-700 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-orange-500 w-4 h-4" />
              <span>Award Winning Agency</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-orange-500 w-4 h-4" />
              <span>Highest Success Rates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
