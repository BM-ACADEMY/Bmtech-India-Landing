import React from "react";
import { Rocket, Star, BookOpen, Laptop, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

import { BrainCog, Wrench, MessageSquare, Clock, Headset } from "lucide-react";

const features = [
  {
    icon: <BrainCog className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />,
    title: "7+ Years of Expertise in Branding & Tech",
  },
  {
    icon: <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />,
    title: "Affordable, All-In-One Digital Setup",
  },
  {
    icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
    title: "Real Reviews from Business Owners Like You",
  },
  {
    icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500" />,
    title: "Fastest Delivery Guarantee",
  },
  {
    icon: <Headset className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
    title: "Dedicated Support Team Available via WhatsApp 24/7",
  },
];

export default function WhyChooseABM() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      y: 30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const rows = [features.slice(0, 3), features.slice(3)];

  return (
    <section id="about" className="relative bg-gradient-to-br from-black via-slate-900 to-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center mb-12 px-4 md:px-8"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Why 100+ Clients {" "}
          <span className="text-[#facc15] not-italic">Trust BMTechX</span>
        </h1>
      </motion.div>

      <motion.div
        className="space-y-6 sm:space-y-8 max-w-6xl mx-auto relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex flex-wrap justify-center gap-6 sm:gap-8"
          >
            {row.map(({ icon, title }, idx) => (
              <motion.article
                key={idx}
                className="flex items-center space-x-4 sm:space-x-5 p-5 rounded-xl bg-gray-800 shadow-lg hover:shadow-xl group cursor-pointer hover:scale-105 transition-all duration-300 border border-gray-700"
                variants={item}
              >
<div className="flex-shrink-0 rounded-full bg-gray-900 p-3 sm:p-4 flex items-center justify-center ring-2 ring-gray-700 group-hover:ring-yellow-400 group-hover:shadow-[0_0_20px_5px_rgba(250,204,21,0.6)] transition-all duration-500 ease-in-out transform group-hover:scale-110 group-hover:animate-[blinkGlow_1s_ease-in-out_infinite]">
                      <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="transition-all duration-300"
                  >
                    {icon}
                  </motion.div>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-white transition-colors duration-300">
                  {title}
                </h3>
              </motion.article>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
