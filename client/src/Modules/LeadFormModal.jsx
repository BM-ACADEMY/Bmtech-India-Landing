"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Phone, MapPin, Mail } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const plans = [
  { label: "Reels Plan @ ₹7,999", value: "reels" },
  { label: "365 Poster Plan @ ₹11,999", value: "poster" },
  { label: "Website @ ₹2,999", value: "website" },
];

const LeadFormModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    selectedPlans: [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        selectedPlans: checked
          ? [...prevData.selectedPlans, value]
          : prevData.selectedPlans.filter((plan) => plan !== value),
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, number, city, selectedPlans } = formData;

    if (!name || !email || !number || !city) {
      toast.error("All fields are required.");
      return;
    }

    if (!/^\d{10}$/.test(number)) {
      toast.error("Please enter a valid 10-digit WhatsApp number.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (selectedPlans.length === 0) {
      toast.error("Please select at least one plan.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("https://bmtech-india-landing.onrender.com/send-email", {
        name,
        email,
        number, // Changed from phone to number to match sendMail
        city,   // Changed from location to city to match sendMail
        selectedPlans, // Changed from courseType to selectedPlans to match sendMail
      });

      toast.success("Your request has been submitted successfully!");

      setFormData({
        name: "",
        email: "",
        number: "",
        city: "",
        selectedPlans: [],
      });

      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 bg-opacity-70 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-white w-full max-w-lg sm:mx-4 mx-auto p-6 sm:p-8 rounded-2xl shadow-xl relative"
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-semibold mb-2 text-center text-gray-900">
              Let's Get Started
            </h3>
            <p className="text-sm text-center mb-6 text-gray-500">
              Fill out your details and our team will reach out to you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <User class cpf className="w-4 h-4" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="mt-1 w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Mail className="w-4 h-4" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="mt-1 w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                />
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Phone className="w-4 h-4" /> WhatsApp Number
                </label>
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                  placeholder="10-digit WhatsApp number"
                  className="mt-1 w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                />
              </div>

              {/* City */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <MapPin className="w-4 h-4" /> City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="Your city"
                  className="mt-1 w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-black placeholder:text-gray-400"
                />
              </div>

              {/* Plans */}
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Select Plan(s):
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {plans.map((plan) => (
                    <label
                      key={plan.value}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <input
                        type="checkbox"
                        name="selectedPlans"
                        value={plan.value}
                        checked={formData.selectedPlans.includes(plan.value)}
                        onChange={handleChange}
                        className="accent-black"
                      />
                      <span className="text-sm text-gray-700">{plan.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-6 bg-black text-white font-semibold py-2 rounded-lg hover:bg-gray-800 transition duration-300"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadFormModal;