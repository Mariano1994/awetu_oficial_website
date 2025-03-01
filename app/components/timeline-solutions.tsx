import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Grip, Layers, PieChart, TrendingUp } from "lucide-react";
import dataAnalysis from "../assets/data-analysis.svg";
import softwareSolution from "../assets/softwareSolutions.svg";
import proccessSolution from "../assets/proccess.svg";
import IASoluction from "../assets/IA.svg";
import figure from "../assets/figureRight5.svg";

const TimelineSolutions = () => {
  const data = [
    {
      title: "Transforme seu negócio através de dados",
      content: (
        <div className="flex flex-col gap-4">
          <div className="bg-gradient-to-tr from-light-blue-200 to-dark-blue-700 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
            <Layers className="text-white" size={28} />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8 leading-7">
            Descubra o poder da inteligência por trás das opiniões dos seus
            clientes. Nosso serviço permite que você colete feedbacks valiosos
            de seus consumidores, parceiros e colaboradores em tempo real,
            ajudando a identificar pontos fortes e oportunidades de melhoria no
            seu negócio.
            <div className="flex items-start gap-2">
              <p className=" hidden md:block">
                Além disso, nossa tecnologia de inteligência artificial gera
                perguntas automaticamente, interpreta os dados coletados e
                fornece recomendações práticas para otimizar a experiência dos
                seus clientes e aumentar seus resultados. Tome decisões baseadas
                em insights reais e leve seu negócio ao próximo nível com dados
                que fazem a diferença!
              </p>
              <Image
                src={dataAnalysis}
                alt="..."
                width={350}
                className="hidden md:block"
              />
            </div>
          </p>
        </div>
      ),
    },
    {
      title: "Impulsione com soluções de software personalizadas!",
      content: (
        <div className="flex flex-col gap-4">
          <div className="bg-light-blue-200 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
            <Grip className="text-white" size={28} />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8 leading-7">
            Descubra o poder da inteligência por trás das opiniões dos seus
            clientes. Nosso serviço permite que você colete feedbacks valiosos
            de seus consumidores, parceiros e colaboradores em tempo real,
            ajudando a identificar pontos fortes e oportunidades de melhoria no
            seu negócio.
            <div className="flex items-start gap-2">
              <Image
                src={softwareSolution}
                alt="..."
                width={350}
                className="hidden md:block"
              />
              <p className="hidden md:block">
                Além disso, nossa tecnologia de inteligência artificial gera
                perguntas automaticamente, interpreta os dados coletados e
                fornece recomendações práticas para otimizar a experiência dos
                seus clientes e aumentar seus resultados. Tome decisões baseadas
                em insights reais e leve seu negócio ao próximo nível com dados
                que fazem a diferença!
              </p>
            </div>
          </p>
        </div>
      ),
    },
    {
      title: "Automatize processos para estar um passo à frente!",
      content: (
        <div className="flex flex-col gap-4">
          <div className="bg-light-yellow-100 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
            <PieChart className="text-white" size={28} />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 font-normal mb-8 leading-7">
            Descubra o poder da inteligência por trás das opiniões dos seus
            clientes. Nosso serviço permite que você colete feedbacks valiosos
            de seus consumidores, parceiros e colaboradores em tempo real,
            ajudando a identificar pontos fortes e oportunidades de melhoria no
            seu negócio.
            <div className="flex items-start gap-2">
              <p className="hidden md:block">
                Além disso, nossa tecnologia de inteligência artificial gera
                perguntas automaticamente, interpreta os dados coletados e
                fornece recomendações práticas para otimizar a experiência dos
                seus clientes e aumentar seus resultados. Tome decisões baseadas
                em insights reais e leve seu negócio ao próximo nível com dados
                que fazem a diferença!
              </p>
              <Image
                src={proccessSolution}
                alt="..."
                width={350}
                className="hidden md:block"
              />
            </div>
          </p>
        </div>
      ),
    },

    {
      title:
        "Com o poder da Inteligência Artificial construa o negócio do futuro!",
      content: (
        <div className="flex flex-col gap-4">
          <div className="bg-light-green-100 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
            <TrendingUp className="text-white" size={28} />
          </div>
          <p className="text-neutral-800  dark:text-neutral-200 font-normal mb-8 leading-7">
            Descubra o poder da inteligência por trás das opiniões dos seus
            clientes. Nosso serviço permite que você colete feedbacks valiosos
            de seus consumidores, parceiros e colaboradores em tempo real,
            ajudando a identificar pontos fortes e oportunidades de melhoria no
            seu negócio.
            <div className="flex items-start gap-2">
              <Image
                src={IASoluction}
                alt="..."
                width={350}
                className="hidden md:block"
              />
              <p className="hidden md:block">
                Além disso, nossa tecnologia de inteligência artificial gera
                perguntas automaticamente, interpreta os dados coletados e
                fornece recomendações práticas para otimizar a experiência dos
                seus clientes e aumentar seus resultados. Tome decisões baseadas
                em insights reais e leve seu negócio ao próximo nível com dados
                que fazem a diferença!
              </p>
            </div>
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Image src={figure} alt="..." className="absolute right-0" />
      <Timeline data={data} />
    </div>
  );
};

export default TimelineSolutions;
