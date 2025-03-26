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
    <footer className="relative overflow-hidden w-full bg-gradient-to-b from-black/95 to-dark-blue-700/95 flex flex-col justify-between items-center mx-auto h-[600px]  md:h-[750px] md:overflow-hidden no-scrollbar">
      <StarsBackground />
      <ShootingStars />
      <Image
        src={astro}
        alt="..."
        className="absolute  left-0 -bottom-52 -z-10 hidden md:block"
        width={600}
      />
      <Image
        src={astro2}
        alt="..."
        className="absolute  right-64 bottom-62 -z-10 hidden md:block"
        width={600}
      />
      <div className="z-30 flex justify-center items-center py-24 md:py-8  ">
        <div className=" w-[1220px] flex flex-col justify-start items-center md:flex-row md:justify-between -mt-8 md:mt-16">
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start gap-1 max-w-[380px] px-8 md:px-0">
            <Image
              src={footerLogo}
              alt="awetu technologies logo on footer "
              className="w-[200px] md:w-[270px]"
            />
            <span className="text-white/80 text-xs md:text-sm font-light ">
              Com o propósito claro de desenvolver soluções tecnológicas de alta
              qualidade, buscamos atender as necessidades atuais e futuras dos
              nossos clientes.
            </span>

            <div className="flex gap-2 mt-4 mb-4 md:mb-0">
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
          <div className=" flex flex-col justify-center items-center md:items-start mt-5 md:mt-0">
            <span className="text-white text-base font-bold">
              Acesso rápido
            </span>
            <div className="flex flex-col items-center md:items-start gap-1 mt-4 text-white/80 ">
              <Link href="/#home" className="hover:text-light-yellow-100">
                <span>Inicio</span>
              </Link>
              <Link href="#about-us" className="hover:text-light-yellow-100">
                <span>Sobre</span>
              </Link>
              <Link href="/#portfolio" className="hover:text-light-yellow-100">
                <span>Portifolio</span>
              </Link>

              <Link href="/#services" className="hover:text-light-yellow-100">
                <span>Serviços</span>
              </Link>
              <Link href="/#contact" className="hover:text-light-yellow-100">
                <span>Contactar</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <span className="text-white pb-6 font-light text-center">
        Awetu Technologies {year} &copy; Todos os direitos reservados
      </span>
    </footer>
  );
};

export default Footer;
