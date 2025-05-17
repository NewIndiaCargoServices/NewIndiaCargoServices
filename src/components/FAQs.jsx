import React, { useState } from "react";
// import { motion } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
// 

const faqData = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day money-back guarantee. If you're not satisfied, contact support and we’ll help you out.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you’ll receive an email with a tracking link to monitor delivery progress.",
  },
  {
    question: "Can I change my order?",
    answer:
      "Yes, as long as it hasn't been shipped. Contact customer service with your order number for assistance.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Absolutely. We ship to over 50 countries with secure and trackable shipping options.",
  },
];

// ✅ DrawCircleText Component (embedded)
const DrawCircleText = () => {
  return (
    <div className="grid place-content-center bg-emerald-950 px-4 py-24 text-yellow-50">
      <h1 className="max-w-2xl text-center text-5xl leading-snug">
      Streamline Your{" "}
        <span className="relative">
        Logistics
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        with Smart Solution
      </h1>
    </div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
    
    this is not working initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{always: true}}
        className="w-full overflow-hidden">
      {/* 🎯 Marketing Header Section */}
      <DrawCircleText />

      {/* 🔽 FAQ Section */}
      <div
        className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full"
        id="FAQs"
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
          FAQ{" "}
          <span className="underline underline-offset-4 decoration-1 font-light">
            's
          </span>
        </h1>
        <p className="text-lg text-gray-800 mb-6 text-center">Know us More!</p>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between p-4 bg-white text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium">{item.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-4 text-gray-700 text-sm bg-gray-50">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FAQs;
