import Image from "next/image";
import logo from "../assets/awetu-logo.svg";
import { Button } from "@/components/ui/button";
import Navigation from "./navi-menu";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" flex justify-between items-center md:px-3 px-8">
      <Image src={logo} alt="logo" className="-ml-5" />

      <Navigation />

      <Button
        asChild
        className=" hidden md:flex rounded-lg bg-transparent border-white border-[0.3px] z-20"
      >
        <Link href="#contact" className=" hover:cursor-pointer">
          Contacta-nos!
        </Link>
      </Button>
    </header>
  );
};

export default Header;
