import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../assets/Image/BM_TECHX.png";
import LeadFormModal from "./LeadFormModal";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // modal state

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="relative flex flex-col min-h-[100vh] bg-gradient-to-br from-black via-slate-900 to-black text-white text-sm pb-16">
      <nav className="flex items-center justify-between p-4 border-b border-white/25 md:px-16 lg:px-24 xl:px-32 w-full">
        <a href="#" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="ABM GROUPS"
            className="h-14 w-auto object-contain drop-shadow-lg"
          />
        </a>

        <ul
          id="menu"
          className={`max-md:absolute max-md:h-full max-md:w-full max-md:top-0 transition-all duration-300 max-md:backdrop-blur max-md:bg-black/40 max-md:text-base flex flex-col md:flex-row items-center justify-center gap-8 font-medium ${
            isMenuOpen ? "max-md:left-0" : "max-md:-left-full"
          }`}
        >
          {["Home", "About", "Plan", "Reviews"].map((item) => (
            <li key={item} onClick={toggleMenu} className="hover:text-slate-300">
              <a
                href={`#${item.toLowerCase()}`}
                className="transition-all hover:underline hover:underline-offset-4"
              >
                {item}
              </a>
            </li>
          ))}

          <button
            onClick={toggleMenu}
            className="md:hidden bg-gray-800 hover:bg-black text-white p-2 rounded-md aspect-square font-medium transition"
          >
            <X size={24} />
          </button>
        </ul>

        <button id="open-menu" className="md:hidden" onClick={toggleMenu}>
          <Menu size={28} />
        </button>

        <button
          onClick={() => setIsModalOpen(true)}
          className="max-md:hidden px-6 py-2.5 bg-yellow-600 hover:bg-yellow-700 transition rounded-full"
        >
          Contact
        </button>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-1 flex-col items-center justify-center w-full">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl md:text-6xl text-center font-semibold max-w-4xl bg-gradient-to-r from-white to-[#facc15] text-transparent bg-clip-text"
        >
          Build Your Brand for 365 Days – Digital Marketing Starting @ Just ₹2,999!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-slate-300 md:text-base text-center max-w-2xl mt-3 px-4"
        >
          12 Reels a Month | Website in 3 Days | Free Ad Campaigns | eCommerce Site
          <br />
          Now Live: Digital Plans @ ₹7,999 | Website @ ₹2,999 | Full 365 Days @ ₹11,999
          <br />
          Limited Seats • Fast Turnaround • 100% Satisfaction Guarantee
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap justify-center items-center gap-4 mt-8 text-sm"
        >
          <button
          onClick={() => setIsModalOpen(true)}
            
            className="flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-700 transition rounded-full"
          >
            <ArrowRight size={18} />
            <span>Get My Offer Now</span>
          </button>

          <a
            href="tel:9952787198"
            className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/15 hover:bg-white/20 transition rounded-full"
          >
            <span>Schedule Free Call</span>
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default HeroSection;
