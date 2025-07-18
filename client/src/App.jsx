import React from "react";
import HeroSection from "./Modules/Home";
import PricingSlider from "./Modules/Pricesection";
import WhyClientsTrust from "./Modules/Whychoose";
import Reviews from "./Modules/Reivews";
import { AccordionDemo } from "./Modules/Faq";
import Footer from "./Modules/Footer";
import WhatsappFloatButton from "./Modules/Whatsapp";
import { Toaster } from "./components/ui/sonner";


const App = () => {
  return (
    <div>
       <Toaster position="top-center" />
      <HeroSection/>
      <PricingSlider/>
      <WhyClientsTrust/>
      <Reviews/>
      <AccordionDemo/>
      <WhatsappFloatButton/>
      <Footer/>
    </div>
  );
};

export default App;
