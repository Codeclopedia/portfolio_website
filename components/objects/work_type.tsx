"use client";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Experience",
      answer: "We offer app development, web development, video editing, and graphic design services.",
    },
    {
      question: "Tech Stacks",
      answer: "Our tech stacks include React, Node.js, Flutter, AWS, and more cutting-edge tools.",
    },
    {
      question: "What are your rates?",
      answer: "Our rates depend on the project scope. Please reach out for a customized quote.",
    },
    {
      question: "Education",
      answer: "Our team consists of highly skilled professionals with diverse educational backgrounds in technology and design.",
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`border-b border-gray-700 py-4 transition-all duration-300 ${
            activeIndex === index ? "bg-gray-800 rounded-lg" : ""
          }`}
          onClick={() => toggleAnswer(index)}
          role="button"
          tabIndex={0}
          aria-expanded={activeIndex === index}
        >
          {/* Question */}
          <div
            className={`text-lg font-semibold transition-colors duration-300 ${
              activeIndex === index ? "text-white" : "text-gray-400"
            }`}
          >
            {faq.question}
          </div>

          {/* Answer */}
          {activeIndex === index && (
            <div className="text-gray-300 text-md mt-2">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
