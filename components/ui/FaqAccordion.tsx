"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion() {
  const [items, setItems] = useState<FaqItem[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/faqitems.json")
      .then((res) => res.json())
      .then((data) => setItems(data.items || []));
  }, []);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div key={index} className="bg-gray-900 rounded-xl border border-gray-800">
          <button
            className="w-full text-left p-6 text-white font-semibold focus:outline-none"
            onClick={() => toggle(index)}
          >
            {item.question}
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="px-6 pb-4 text-gray-400 text-sm"
              >
                {item.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}