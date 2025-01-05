"use client";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  const faqs: FAQ[] = [
    {
      question: "Short Intro",
      answer: (
        <p className="text-gray-300 text-md">
          I specialize in application development with Flutter, bringing over four years of experience across various roles and projects. In addition, I have expanded my skill set to include technologies such as React, Node.js, AWS, and more, continuously enhancing my expertise to contribute to impactful development.
        </p>
      ),
    },
    {
      question: "Experience",
      answer: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <strong>Freelance</strong>
            <p className="text-sm text-gray-300">Independent projects since 2020.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <strong>Bharat Arpanet</strong>
            <p className="text-sm text-gray-300">Developer, multiple projects.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <strong>ACI</strong>
            <p className="text-sm text-gray-300">Critical project experience.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <strong>ClosetRove</strong>
            <p className="text-sm text-gray-300">Contractual work, ongoing.</p>
          </div>
        </div>
      ),
    },
    {
      question: "Tech Stacks",
      answer: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <p className="font-semibold text-yellow-400 mb-2">Frontend</p>
            <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
              <span className="bg-gray-600 px-2 py-1 rounded">Flutter</span>
              <span className="bg-gray-600 px-2 py-1 rounded">React Native</span>
              <span className="bg-gray-600 px-2 py-1 rounded">React</span>
              <span className="bg-gray-600 px-2 py-1 rounded">Next.js</span>
              <span className="bg-gray-600 px-2 py-1 rounded">HTML5</span>
              <span className="bg-gray-600 px-2 py-1 rounded">TypeScript</span>
              <span className="bg-gray-600 px-2 py-1 rounded">TailwindCSS</span>
              <span className="bg-gray-600 px-2 py-1 rounded">Dart</span>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <p className="font-semibold text-yellow-400 mb-2">Backend</p>
            <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
              <span className="bg-gray-600 px-2 py-1 rounded">Node.js</span>
              <span className="bg-gray-600 px-2 py-1 rounded">Express.js</span>
              <span className="bg-gray-600 px-2 py-1 rounded">Appwrite</span>
              <span className="bg-gray-600 px-2 py-1 rounded">Supabase</span>
              <span className="bg-gray-600 px-2 py-1 rounded">Firebase</span>
              <span className="bg-gray-600 px-2 py-1 rounded">AWS</span>
            </div>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <p className="font-semibold text-yellow-400 mb-2">Databases</p>
            <div className="flex flex-wrap gap-2 text-gray-300 text-sm">
              <span className="bg-gray-600 px-2 py-1 rounded">SQL</span>
              <span className="bg-gray-600 px-2 py-1 rounded">MongoDB</span>
              <span className="bg-gray-600 px-2 py-1 rounded">Postgres</span>
              <span className="bg-gray-600 px-2 py-1 rounded">Prisma</span>
              <span className="bg-gray-600 px-2 py-1 rounded">AWS Databases</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      question: "Education",
      answer: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <strong>10th Grade</strong>
            <p className="text-sm text-gray-300">CBSE, Angel Public School, 2016</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <strong>12th Grade</strong>
            <p className="text-sm text-gray-300">Science Stream, CBSE, Angel Public School, 2018</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <strong>BCA</strong>
            <p className="text-sm text-gray-300">GGSIPU, 2021</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <strong>Flutter Course</strong>
            <p className="text-sm text-gray-300">BoostMySites, 2022</p>
          </div>
        </div>
      ),
    },
  ];

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full mx-auto py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold text-center mb-8">FAQs</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`border-b border-gray-700 py-6 px-4 mb-4 transition-transform transform hover:scale-105 duration-300 rounded-lg cursor-pointer ${
            activeIndex === index ? "bg-gray-700 shadow-lg" : "bg-gray-800"
          }`}
          onClick={() => toggleAnswer(index)}
          role="button"
          tabIndex={0}
          aria-expanded={activeIndex === index }
        >
          {/* Question */}
          <div
            className={`text-2xl font-semibold transition-colors duration-300 ${
              activeIndex === index  ? "text-yellow-400" : "text-gray-300"
            }`}
          >
            {faq.question}
          </div>

          {/* Answer */}
          {(activeIndex === index ) && (
            <div className="text-gray-200 text-md mt-4 leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
