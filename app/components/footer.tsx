import Image from "next/image";
import footerLogo from "../assets/awetu-logo.svg";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import astro from "../assets/autronauts/7.svg";
import astro2 from "../assets/autronauts/10.svg";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative w-full bg-gradient-to-b from-black/95 to-dark-blue-700/95 flex flex-col justify-between items-center mx-auto  h-[750px] overflow-hidden">
      <StarsBackground />
      <ShootingStars />
      <Image
        src={astro}
        alt="..."
        className="absolute  left-0 -bottom-52 -z-10 "
        width={600}
      />
      <Image
        src={astro2}
        alt="..."
        className="absolute  right-64 bottom-62 -z-10"
        width={600}
      />
      <div className="flex justify-center  py-24  ">
        <div className=" w-[1220px] flex justify-between ">
          <div className="flex flex-col gap-1 max-w-[380px]">
            <Image
              src={footerLogo}
              width={270}
              alt="awetu technologies logo on footer"
            />
            <span className="text-white/80 text-sm font-light ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              atque impedit? Asperiores. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Facilis repellendus.
            </span>

            <div className="flex gap-2 mt-4">
              <Link href="#" target="_blank">
                <Instagram
                  size={28}
                  className="text-white/80 hover:text-white hover:scale-105 transition-all "
                />
              </Link>
              <Link href="#" target="_blank">
                <Linkedin
                  size={28}
                  className="text-white/80 hover:text-white hover:scale-105 transition-all "
                />
              </Link>
              <Link href="#" target="_blank">
                <Facebook
                  size={28}
                  className="text-white/80 hover:text-white hover:scale-105 transition-all "
                />
              </Link>
            </div>
          </div>
          <div>
            <span className="text-white text-base font-bold">
              Acesso rápido
            </span>
            <div className="flex flex-col gap-1 mt-4 text-white/80">
              <Link href="#">
                <span>Inicio</span>
              </Link>
              <Link href="#">
                <span>Sobre</span>
              </Link>
              <Link href="#">
                <span>Portifolio</span>
              </Link>

              <Link href="#">
                <span>Servico</span>
              </Link>
              <Link href="#">
                <span>Contactat</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <span className="text-white pb-6 font-light">
        Awetu Technologies {year} &copy; Todos os direitos reservados
      </span>
    </footer>
  );
};

export default Footer;
