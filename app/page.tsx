"use client";
import AboutUs from "./components/about-us";
import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import Portifolio from "./components/portifolio";

import Solutions from "./components/solutions";
import StepHeadSection from "./components/step-head-section";
import WhatsAppButton from "./components/whatsapp-button";
import { MenuToggleProvider } from "./contexts/menuToggle";

export default function Home() {
  return (
    <div className=" w-full no-scrollbar">
      <WhatsAppButton phoneNumber="+244945781642" />
      <MenuToggleProvider>
        <HeroSection />
        {/* <PartnerSection /> */}
        <StepHeadSection />
        <Solutions />
        <Portifolio />
        <AboutUs />
        <CallToAction />
        <Footer />
      </MenuToggleProvider>
    </div>
  );
}
