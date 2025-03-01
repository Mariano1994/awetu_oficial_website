"use client";
import Image from "next/image";
import Header from "./header";
import { Button } from "@/components/ui/button";
import astro from "../assets/Astro awetu.png";
import astro1 from "../assets/astro1.png";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FlipTitle } from "./flip-title";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

const HeroSection = () => {
  return (
    <>
      <div className="relative h-screen w-full bg-gradient-to-tr from-dark-blue-700/95 to-black/95 overflow-hidden ">
        <ShootingStars />
        <StarsBackground />
        <Image
          src={astro}
          alt="..."
          className="absolute -z-10 left-0 bottom-0 "
          width={500}
        />

        <Image
          src={astro1}
          alt="..."
          className="absolute -z-10 right-20 overflow-hidden"
          width={800}
        />

        <div className=" max-w-[1220px] mx-auto ">
          <Header />

          <div className="flex justify-center items-center mt-16">
            <div className="flex flex-col justify-center items-center mt-20 gap-6 ">
              <FlipTitle />

              <span className="text-white ">
                Com a solução que precisa para assegurar o seu negócio{" "}
              </span>

              <div className="flex items-center gap-3 mt-3">
                <Button
                  asChild
                  className="rounded-lg text-dark-blue-700 font-medium bg-white border-white border-[0.3px]"
                >
                  <Link href="#">Conheça-nos!</Link>
                </Button>

                <Button
                  asChild
                  className="rounded-lg bg-transparent font-medium border-white border-[0.3px]"
                >
                  <Link href="#">
                    Contactar
                    <ArrowRight
                      className="text-wihite animate-pulse"
                      size={20}
                    />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
