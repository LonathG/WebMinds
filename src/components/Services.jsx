"use client";
import React from "react";
import { cn } from "../../libs/utils";
import {
  FaTools,
  FaMobileAlt,
  FaShoppingCart,
  FaPencilRuler,
  FaSearch,
  FaWrench,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";

import { CgWebsite } from "react-icons/cg";


export function FeaturesSection() {
  const features = [
    {
      title: "Custom Website Design",
      description:
        "Because one-size-fits-all only works for socks, not websites.",
      icon: <CgWebsite />,
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
    <div className="py-[16rem]">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 font-k2d text-center group-hover:mix-blend-difference">
          Our Services
        </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 py-10 max-w-7xl mx-auto relative z-10">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (

    <div
      className={cn(
        "flex flex-col relative group/feature py-10 border-neutral-200 dark:border-neutral-800",
        "transition-all duration-200 hover:scale-[1.02] hover:shadow-lg rounded-lg",
        index < 4 && "lg:border-b",
        (index === 0 || index === 4) && "lg:border-l",
        "lg:border-r dark:border-neutral-800"
      )}
    >

      <div
        className={cn(
          "absolute inset-0 opacity-0 group-hover/feature:opacity-100 transition duration-200",
          index < 4
            ? "bg-gradient-to-t from-neutral-100 dark:from-neutral-900 to-transparent"
            : "bg-gradient-to-b from-neutral-100 dark:from-neutral-900 to-transparent"
        )}
      />

      <div className="relative z-10 mb-4 flex justify-center text-4xl">
        {icon}
      </div>

      <div className="relative z-10 text-lg font-bold mb-2 px-6">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="inline-block group-hover/feature:translate-x-2 transition duration-200">
          {title}
        </span>
      </div>

      <p className="relative z-10 px-6 text-sm ">
        {description}
      </p>
    </div>
  );
};

export default FeaturesSection;
