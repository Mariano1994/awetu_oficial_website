import Image from "next/image";
import footerLogo from "../assets/awetu-logo.svg";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="w-full bg-dark-blue-700 flex flex-col justify-between items-center mx-auto  md:-mt-56 2xl:-mt-96   h-screen"
      style={{ clipPath: "polygon(0 23%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="flex justify-center items-center p-16  md:mt-56 2xl:mt-72">
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
