import Image from "next/image";
import logo from "../assets/awetu-logo.svg";
import { Button } from "@/components/ui/button";
import Navigation from "./navi-menu";
import { Menu, X } from "lucide-react";
import { useMenuToggle } from "../contexts/menuToggle";
const Header = () => {
  return (
    <header className="flex justify-between items-center md:px-3 px-8">
      <Image src={logo} alt="logo" className="-ml-5" />

      <Navigation />

      <Button className=" hidden md:flex rounded-lg bg-transparent border-white border-[0.3px]">
        Contacta-nos!
      </Button>
    </header>
  );
};

export default Header;
