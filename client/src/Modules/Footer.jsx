import React, { useEffect, useState } from "react";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import Logo from "../assets/Image/BM_TECHX.png";
import LeadFormModal from "./LeadFormModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.getElementById("year").textContent = new Date().getFullYear();
  }, []);

  return (
    <footer
      className="px-6 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-bl from-black via-slate-900 to-black"
      id="contact"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        {/* Left Column: Logo, Description, Social */}
        <div className="flex-1 min-w-[200px] md:min-w-[250px]">
          <a href="#" className="flex items-center gap-2">
            <img
              src={Logo}
              alt="ABM GROUPS"
              className="h-14 w-auto object-contain drop-shadow-lg"
            />
          </a>
          <p className="max-w-sm mt-6 text-gray-300 text-sm md:text-base">
            Build your brand all year with expert marketing — 12 reels monthly,
            website in 3 days, ads & eCommerce included. Limited seats, fast
            delivery, and 100% satisfaction guaranteed — grow your business now.
          </p>

          {/* Social Icons */}
          <div className="mt-6">
            <h3 className="font-semibold text-base text-gray-300 mb-3">
              Follow Us
            </h3>
            <ul className="flex gap-4 text-lg text-gray-400">
              <li>
                <a
                  href="https://www.instagram.com/bmacademypondy/"
                  target="_blank"
                  className="hover:text-yellow-400 transition"
                >
                  <Instagram size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/BMACADEMYPONDY"
                  target="_blank"
                  className="hover:text-yellow-400 transition"
                >
                  <Twitter size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/BM-Academy/61566753898165/"
                  target="_blank"
                  className="hover:text-yellow-400 transition"
                >
                  <Facebook size={20} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@bmacademypondy"
                  target="_blank"
                  className="hover:text-yellow-400 transition"
                >
                  <Youtube size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Quick Links + Map */}
        <div className="flex flex-col md:flex-row justify-between w-full md:w-[65%] gap-8 md:gap-16">
          {/* Quick Links */}
          <div className="flex-1 min-w-[120px] md:min-w-[150px]">
            <h3 className="font-semibold text-base text-gray-300 mb-3 md:mb-5">
              Quick Links
            </h3>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <a href="#home" className="hover:underline transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline transition">
                  About
                </a>
              </li>
              <li>
                <a href="#plan" className="hover:underline transition">
                  Plan
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:underline transition">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:underline transition">
                  Achievements
                </a>
              </li>
              <li>
                <a
                  style={{cursor:'pointer'}}
                  onClick={() => setIsModalOpen(true)}
                  className="hover:underline transition"
                >
                  Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="flex-1 min-w-[200px] md:min-w-[250px]">
            <div className="relative w-full h-48 md:h-48 lg:h-64 aspect-square">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9605.494660602379!2d79.83609451294072!3d11.961680735595172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53636a1752dc05%3A0xaa5795ccc1815bf7!2sBM%20Academy%20-%20Digital%20Marketing%2C%20Full%20Stack%20Development%2C%20IT%20%26%20Skill%20Training%20Institute!5e1!3m2!1sen!2sin!4v1749880774336!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="py-4 text-center text-sm md:text-base text-gray-100/80">
        © <span id="year"></span>{" "}
        <a
          href="https://thebmacademy.com/"
          target="_blank"
          className="hover:underline text-yellow-400"
        >
          BM Academy
        </a>
        . All Rights Reserved.
      </p>

      {/* Lead Form Modal */}
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
};

export default Footer;
