"use client";
import React from "react";
import { cn } from "../../libs/utils";
import {
  FaTools, // Custom Website Design (unchanged)
  FaMobileAlt, // Mobile App Development
  FaShoppingCart, // E-commerce Solutions
  FaPencilRuler, // UI/UX Design
  FaSearch, // SEO Optimization
  FaWrench, // Maintenance & Support
  FaLightbulb, // Tech Consultation
  FaHeart, // And everything else (unchanged)
} from "react-icons/fa";

export function FeaturesSection() {
  const features = [
    {
      title: "Custom Website Design",
      description:
        "Because one-size-fits-all only works for socks, not websites.",
      icon: <FaTools />,
    },
    {
      title: "Mobile App Development",
      description:
        "Turning your 'million-dollar idea' into an app your mom will proudly download.",
      icon: <FaMobileAlt />,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Helping you sell anything online—except maybe your bad ideas.",
      icon: <FaShoppingCart />,
    },
    {
      title: "UI/UX Design",
      description:
        "Making your users feel so comfortable they forget they’re using your product.",
      icon: <FaPencilRuler />,
    },
    {
      title: "SEO Optimization",
      description:
        "Because what's the point of being online if Google thinks you don’t exist?",
      icon: <FaSearch />,
    },
    {
      title: "Maintenance & Support",
      description:
        "Fixing what you broke—or claimed never worked in the first place.",
      icon: <FaWrench />,
    },
    {
      title: "Tech Consultation",
      description:
        "Let us tell you what you already know, but with buzzwords and a slide deck.",
      icon: <FaLightbulb />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept our sincere apologies.",
      icon: <FaHeart />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-200 dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {/* Hover Overlay */}
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-900 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-900 to-transparent pointer-events-none" />
      )}

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10">
        {icon}
      </div>

      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSection;
