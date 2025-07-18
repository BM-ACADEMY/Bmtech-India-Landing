import React from "react";
import { motion } from "framer-motion";

const PricingSlider = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const handleWhatsAppClick = (planName) => {
    const phoneNumber = "9944288271";
    const message = `Hi, I'm interested in the "${planName}" package. Please share more details.`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const packages = [
      {
        title: "Static One-Page Website",
        subtitle: "₹2,999 + GST",
        tag: "Build My Website",
        features: [
          "Clean, Responsive Design",
          "WhatsApp Chat Button",
          "Google Map & Contact Form",
          "Hosting FREE for 1 Year",
          "💼 Best for: Freelancers | Local Shops | Service Providers",
        ],
        cta: "Build My Website",
        popular: false,
      },
      {
        title: "E-Commerce Website",
        subtitle: "₹13,999 + GST",
        tag: "Online Store",
        features: [
          "Product Uploads (Upto 30)",
          "Payment Gateway (Razorpay/Stripe)",
          "Order Management Panel",
          "WhatsApp + Email Alerts",
          "🛍️ Launch Your Own Store in 5–7 Days – Sell 24x7, Anytime",
        ],
        cta: "Start My Online Store",
        popular: true,
      },
      {
        title: "365 Days • 365 Posts Plan",
        subtitle: "₹11,999 / Year",
        tag: "Daily Marketing",
        features: [
          "One Poster/Day – Fully Branded",
          "Business Event Posts + Custom Calendar",
          "Festival & Promo Posters Covered",
          "Scheduling + Canva Access (optional)",
          "🔥 Perfect for Businesses Who Want Daily Buzz Without Daily Work.",
        ],
        cta: "I Want Daily Marketing",
        popular: false,
      },
    {
      title: "Social Media Marketing Plan",
      subtitle: "₹7,999 / Year",
      tag: "Boost Visibility",
      features: [
        "12 Engaging Reels/Month",
        "Social Media Page Handling",
        "1 Free Meta Ads Campaign",
        "Story Highlights & Monthly Reports",
        "📈 Boost Visibility on Instagram & Facebook – No Ongoing Monthly Costs",
      ],
      cta: "Choose This Plan",
      popular: false,
    },
  ];

  return (
    <div className="bg-gradient-to-bl from-black via-slate-900 to-black min-h-screen" id="plan">
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Our Most Popular Packages – <span className="text-[#facc15] not-italic">Made for Growth</span>
          </h1>
          <p className="text-center text-gray-300 text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Handpicked solutions for Social Media, Marketing, Websites, and Online Stores.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={item}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <Card {...pkg} onClick={() => handleWhatsAppClick(pkg.title)} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, tag, features, cta, popular, onClick }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className={`relative rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 flex flex-col justify-between h-full shadow-xl ${
      popular ? "border-2 border-yellow-300" : "border border-gray-700"
    }`}
  >
    {popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
        MOST POPULAR
      </div>
    )}

    <div className="flex flex-col items-center border-b border-gray-700 pb-6">
      <span className="mb-2 text-xl font-bold text-white text-center">{title}</span>
      <span className="text-2xl font-bold text-yellow-400">{subtitle}</span>
    </div>

    <div className="space-y-3 py-6">
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-start gap-3">
          <span className="text-green-400 text-lg">✓</span>
          <span className="text-gray-300">{feature}</span>
        </div>
      ))}
    </div>

    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`mt-4 w-full px-6 py-3 font-medium rounded-lg transition ${
        popular
          ? "bg-yellow-500 hover:bg-yellow-600 text-white"
          : "bg-gray-600 hover:bg-gray-700 text-white"
      }`}
    >
      {cta}
    </motion.button>
  </motion.div>
);

export default PricingSlider;
