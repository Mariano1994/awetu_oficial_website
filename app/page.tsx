import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";
import HeroSection from "./components/hero-section";
import PartnerSection from "./components/partner-section";
import Portifolio from "./components/portifolio";

import Solutions from "./components/solutions";
import StepHeadSection from "./components/step-head-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <StepHeadSection />
      <Solutions />
      <Portifolio />
      <CallToAction />
      <Footer />
    </>
  );
}
