"use client";
import React, { useState } from "react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What services does WebMinds offer?",
      answer:
        "WebMinds specializes in creating custom websites, redesigning existing websites, and providing maintenance services. We also offer SEO optimization and e-commerce solutions.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the project's complexity and requirements. On average, a basic website takes 2-4 weeks, while larger, more complex projects may take 6-8 weeks or longer.",
    },
    {
      question: "Do you provide ongoing support after the website is launched?",
      answer:
        "Yes, WebMinds offers ongoing support and maintenance packages to ensure your website remains up-to-date, secure, and optimized for performance.",
    },
    {
      question: "Can you optimize my existing website for better performance?",
      answer:
        "Absolutely! We provide website audits and optimization services to improve speed, user experience, and search engine rankings for your existing site.",
    },
    {
      question: "How much does a website cost?",
      answer:
        "The cost of a website varies based on its features and complexity. Refer to the footer section for detailed pricing.",
    },
  ];

  return (
    <div className="min-h-screen dark:bg-gray-900 py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-k2d">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        {faqs.map((faq, index) => (
          <div key={index}>
            <div className=" dark:bg-gray-800 rounded-lg mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 focus:outline-none cursor-pointer"
              >
                <h2 className="text-lg font-medium ">
                  {faq.question}
                </h2>
                <span
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  } `}
                >
                  ▼
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="p-4  dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            </div>
            {/* Line separator */}
            {index < faqs.length - 1 && (
              <hr className="border-t border-gray-300 dark:border-gray-700 my-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;
