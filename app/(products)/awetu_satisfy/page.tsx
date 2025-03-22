import { Button } from "@/components/ui/button";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-tr from-dark-blue-700 to-black">
      <StarsBackground />
      <ShootingStars />
      <div className="z-30 flex flex-col justify-center items-center max-w-[600px] gap-4 px-4 md:px-0 ">
        <h1 className="text-4xl md:text-5xl font-bold text-light-yellow-100">
          Awetu Satisfy
        </h1>

        <p className="text-white text-center text-base  md:text-lg font-light leading-8">
          Uma plataforma SaaS de ponta projetada para capacitar empresas de
          todos os tamanhos a capturar, analisar e agir sobre o feedback do
          cliente em tempo real. Obtenha insights inestimáveis, impulsione a
          satisfação de seus cliente e o crescimento do negócio com{" "}
          <span className="text-light-yellow-100 font-bold">Awetu Satisfy</span>
        </p>

        <span className="mt-3 md:mt-0inline-block text-light-yellow-100 text-center text-2xl font-bold bg-black/50 px-4 py-2 rounded-lg animate-pulse">
          Disponível em breve
        </span>

        <Button asChild className="mt-12 md:mt-16 bg-transparent rounded-md">
          <Link href="/">
            <ArrowBigLeft />
            Voltar para home
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Page;
