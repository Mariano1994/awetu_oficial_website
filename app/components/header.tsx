import Image from "next/image";
import logo from "../assets/awetu-logo.svg";
import { Button } from "@/components/ui/button";
import NavigationMenuDemo from "./navi-menu";
const Header = () => {
  return (
    <header className="flex justify-between items-center px-3">
      <Image src={logo} alt="logo" />
      <NavigationMenuDemo />
      <Button className="rounded-lg bg-transparent border-white border-[0.3px]">
        Contacta-nos!
      </Button>
    </header>
  );
};

export default Header;
