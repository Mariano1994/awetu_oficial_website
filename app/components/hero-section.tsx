"use client";
import Image from "next/image";
import Header from "./header";
import figure1 from "../assets/figure1Left.svg";
import figure2 from "../assets/figure2Left.svg";
import figure3 from "../assets/figure1Right.svg";
import figure4 from "../assets/figure2Right.svg";
import figure5 from "../assets/figureLeft3.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dashboardIllustratioin from "../assets/dashboard-illustration.svg";

const HeroSection = () => {
  return (
    <>
      <div
        className="h-screen w-full bg-gradient-to-tr from-dark-blue-700 to-light-blue-200 "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)" }}
      >
        <Image
          src={figure1}
          alt="figure one"
          className="absolute top-48 h-36"
        />
        <Image
          src={figure2}
          alt="figure one"
          className="absolute top-64 h-24"
        />
        <Image
          src={figure3}
          alt="figure one"
          className="absolute top-20 h-24 right-0"
        />
        <Image
          src={figure4}
          alt="figure one"
          className="absolute top-38 h-24 right-24"
        />{" "}
        <Image
          src={figure5}
          alt="figure 4"
          className="absolute top-[43.7rem] h-24 -left-8"
        />
        <div className=" max-w-[1220px]  h-screen mx-auto">
          <Header />

          <div className="flex flex-col justify-center items-center mt-20 gap-6">
            <h1 className="text-6xl font-semibold text-white ">
              Construindo o Futuro
            </h1>

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
                  <ArrowRight className="text-wihite animate-pulse" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Illustration Image */}
      <div className=" mx-auto max-w-[1220px] flex justify-center items-center -mt-12 2xl:-mt-44">
        <Image
          src={dashboardIllustratioin}
          alt="dashboard illustration"
          className="absolute z-20"
          priority
        />
      </div>
    </>
  );
};

export default HeroSection;
