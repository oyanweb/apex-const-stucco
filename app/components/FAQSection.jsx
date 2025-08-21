"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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


     <div className="max-w-6xl grid md:grid-cols-2 gap-10 mx-auto md:ml-8 md:-mt-125  relative z-10">
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
          className="hidden relative bg-gray-300 max-w-md shadow p-9 mt-20 -ml-10 self-center bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: "url('/faq_2.jpg')",
          }}
        >
          {/* Overlay if you want to dim the image */}
          <div className="absolute inset-0 bg-black/60 "></div>

          <div className="relative z-10 text-white"> 
          <div className="flex items-center justify-start mb-3">
            <img 
              src="/group_icon.png"   // <-- replace with your image file path
              alt="Happy Clients Icon" 
              className="w-12 h-12 object-contain" 
            />
          </div>
            <h3 className="text-2xl text-[#FF6600] font-bold mb-2">
              We have many happy clients all over worldwide
            </h3>
            <ul className="space-y-1">
              <li>✔ Highest Success Rates</li>
              <li>✔ Trusted by Leading Companies</li>
            </ul>
          </div>
        </div>
      </div>
</section>

  )
}
