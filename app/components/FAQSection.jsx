"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronsRight } from "lucide-react"

const faqs = [
  {
    question: "What services does your business provide?",
    answer: "We offer construction, renovation, consulting, and project management services tailored to client needs.",
  },
  {
    question: "How much do your services cost?",
    answer: "Pricing depends on project size and scope. We provide customized quotes after consultation.",
  },
  {
    question: "Do you offer guarantees or refunds?",
    answer: "Yes, we stand behind our work and offer warranties depending on the project type.",
  },
  {
    question: "How do I get started with your services?",
    answer: "Contact us through our website or give us a call, and we’ll schedule a free consultation.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full mb-7 relative">
  {/* Background Section */}
  <div
    className="relative h-[500px] bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/faq.jpg')",
    }}
  >
    {/* Overlay (optional) */}
    <div className="absolute inset-0 bg-black/30"></div>
  </div>


     <div className="max-w-9xl grid md:grid-cols-2 gap-10 mx-auto md:ml-8 md:-mt-125  relative z-10">
        {/* LEFT - FAQ */}
        <div className="shadow-[0_-10px_20px_rgba(0,0,0,0.25)]  md:ml-30 py-9 px-4 md:px-9 bg-white">
          <p className="text-sm text-black font-semibold mb-8">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl  text-black font-bold mb-4">Questions & Answers</h2>
          <p className=" text-black  mb-8">
            Providing legal advice, contract drafting, compliance assistance,
            and intellectual property protection. We create custom solutions for
            each client depending on their needs.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className=" text-black border border-gray-400/50 rounded-lg overflow-hidden bg-white/10 backdrop-blur">
                <button
                  className="w-full flex justify-between items-center p-4 font-medium text-left"
                  onClick={() => toggleFAQ(i)}
                >
                  {faq.question}
                  <span>{openIndex === i ? "−" : "+"}</span>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-4 pb-4  text-black "
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - Info Box */}
        <div 
          className="hidden md:block w-90 h-50 relative bg-gray-300 max-w-md shadow p-9 mt-55 -ml-10 self-center bg-cover bg-center   no-repeat" 
          style={{
            backgroundImage: "url('/faq_2.jpg')", 
          }}
        >
          {/* Overlay if you want to dim the image */}
          <div className="absolute inset-0 bg-black/50 "></div>

          <div className="relative z-10 text-white"> 
          <div className="flex items-center justify-start">
            {/* <img 
              src="/group_icon.png"   
              alt="Happy Clients Icon" 
              className="w-12 h-12 object-contain" 
            /> */}
          </div>
            <h3 className="text-xl text-white font-bold mb-2 text-shadow"
            style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}
            >
              We have many happy clients all over worldwide
            </h3>
             

            <ul
              className="space-y-2"
              style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.4)" }}
            >
              {[
                "Highest Success Rates",
                "Trusted by Leading Companies",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex items-center justify-center mt-1 w-5 h-5 bg-orange-500 rounded-full">
                    <ChevronsRight size={13} className="text-white" />
                  </span>
                  <span className="text-white">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
</section>

  )
}
