import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export function AccordionDemo() {
  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-black py-16">
      {/* Animated Heading */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-4 md:px-8"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          What Most
          <span className="text-[#facc15] not-italic"> Clients Ask</span>
        </h1>
      </motion.div>

      {/* Accordion Section with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center px-4"
      >
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-xl"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-md md:text-lg">
              Can I customize any plan later?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-md text-gray-700">
              Absolutely! All plans are flexible – you can upgrade anytime.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-md md:text-lg">
              Is support available post-delivery?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-md text-gray-700">
              Yes, we offer 30-day free support and optional annual AMC plans.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-md md:text-lg">
              Will my reels be voiceover or graphic-based?
            </AccordionTrigger>
            <AccordionContent className="text-base md:text-md text-gray-700">
              You can choose – we offer both animated + talking head style
              content.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
