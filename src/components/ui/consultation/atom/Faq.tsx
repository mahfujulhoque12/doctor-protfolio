"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type FaqItem = {
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    question: "What is an online consultation?",
    answer:
      "An online consultation allows you to connect with professionals remotely for advice, diagnosis, or treatment.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Simply choose your desired specialist, select a suitable time slot, and confirm your booking.",
  },
  {
    question: "What tools do I need for an online consultation?",
    answer:
      "You'll need a stable internet connection, a device with a camera, and a quiet space for your session.",
  },
  {
    question: "What is an online consultation?",
    answer:
      "An online consultation allows you to connect with professionals remotely for advice, diagnosis, or treatment.",
  },
  {
    question: "How do I book a consultation?",
    answer:
      "Simply choose your desired specialist, select a suitable time slot, and confirm your booking.",
  },
  {
    question: "What tools do I need for an online consultation?",
    answer:
      "You'll need a stable internet connection, a device with a camera, and a quiet space for your session.",
  },
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full md:max-w-2xl mx-auto px-0 md:p-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002345] mb-6">
        Online Consultation
      </h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left p-4 bg-[#01578C] text-white font-medium flex justify-between items-center"
            >
              {item.question}
              <span>{openIndex === index ? <FaMinus /> : <FaPlus />}</span>
            </button>
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              {openIndex === index && (
                <div className="p-4 bg-white text-gray-700">{item.answer}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
