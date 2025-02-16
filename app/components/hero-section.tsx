import Image from "next/image";
import logo from "../assets/awetu-logo.png";
import { Button } from "@/components/ui/button";
import Header from "./header";

const HeroSection = () => {
  return (
    <div className="h-screen bg-dark-blue-700 w-full">
      <div className=" max-w-[1220px]  h-screen mx-auto">
        <Header />
      </div>
    </div>
  );
};

export default HeroSection;
