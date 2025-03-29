"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Target, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/link";

// Define our brand colors
const colors = {
  darkBlue: "#133676",
  brightBlue: "#158eff",
  gold: "#ffcc5e",
  teal: "#05cd99",
};

const values = [
  {
    title: "Inovação",
    description:
      "Valorizamos novas ideias e soluções criativas para impulsionar o contexto tecnológico",
    color: colors.darkBlue,
    textColor: "text-white",
  },
  {
    title: "Excelência",
    description:
      " Comprometemo-nos a entregar produtos e serviços de alta qualidade, superando as expectativas dos nossos clientes.",
    color: colors.brightBlue,
    textColor: "text-white",
  },
  {
    title: "Aprendizado Contínuo",
    description:
      "Investimos constantemente no desenvolvimento pessoal e profissional de nossa equipe, aprimorando habilidades e conhecimentos.",
    color: colors.teal,
    textColor: "text-white",
  },
  {
    title: "Trabalho em Equipe",
    description:
      "Promovemos um ambiente de trabalho colaborativo, onde as ideias e habilidades de todos são valorizadass.",
    color: colors.gold,
    textColor: "text-gray-800",
  },
  {
    title: "Diversidade e Inclusão",
    description:
      "Respeitamos e valorizamos a diversidade de pensamentos, experiências e perspectivas, promovendo a igualdade de oportunidades.",
    color: colors.darkBlue,
    textColor: "text-white",
  },
  {
    title: "Impacto Social",
    description:
      "Nos empenhamos em fazer a diferença na sociedade e contribuir para causas sociais relevantes.",
    color: colors.teal,
    textColor: "text-white",
  },
];

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<
    "mission" | "vision" | "values" | "services"
  >("mission");

  return (
    <section
      className="md:-mt-10 mt-8 w-full md:py-16 lg:py-32 flex flex-col justify-center items-center"
      id="about-us"
    >
      <div className="container px-4 md:px-6 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg px-3 py-1 text-sm text-white">
              <h1 className="text-3xl md:text-4xl font-bold text-light-blue-200 text-center">
                {" "}
                Sobre nós
              </h1>
            </div>

            <p className="max-w-[700px] text-muted-foreground">
              Somos uma startup inovadora dedicada a revolucionar o setor
              tecnológico. Com o propósito claro de desenvolver soluções
              tecnológicas de alta qualidade, buscamos atender as necessidades
              atuais e futuras dos nossos clientes.
            </p>
          </div>
        </div>

        <div className="mt-16 w-full flex flex-col justify-center items-center ">
          <div className=" container w-full flex justify-center items-center gap-4  mb-8">
            <Button
              variant="outline"
              className={cn(
                "flex items-center gap-2 h-auto py-3 w-[150px]",
                activeTab === "mission" && "text-white border-0"
              )}
              onClick={() => setActiveTab("mission")}
              style={
                activeTab === "mission"
                  ? { backgroundColor: colors.darkBlue }
                  : {}
              }
            >
              <Target className="h-4 w-4" />
              <span>Missão</span>
            </Button>

            <Button
              variant="outline"
              className={cn(
                "flex items-center gap-2 h-auto py-3 w-[150px]",
                activeTab === "values" && "text-white border-0"
              )}
              onClick={() => setActiveTab("values")}
              style={
                activeTab === "values"
                  ? {
                      backgroundColor: colors.gold,
                      color: activeTab === "values" ? "#333" : "",
                    }
                  : {}
              }
            >
              <Heart className="h-4 w-4" />
              <span>Valores</span>
            </Button>
          </div>

          <div className="w-full max-w-4xl">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {activeTab === "mission" && (
                <div className="flex flex-col justify-center items-center mt-4 text-muted-foreground ">
                  <div className="flex flex-col justify-center items-center space-y-5 ">
                    <div className="space-y-2">
                      <h3
                        className="text-2xl font-bold tracking-tighter md:text-3xl text-center"
                        style={{ color: colors.darkBlue }}
                      >
                        Nossa Missão
                      </h3>
                      <p className=" text-center">
                        Impulsionar a cultura digital através do desenvolvimento
                        de soluções inovadoras e de alta qualidade, melhorando o
                        contexto tecnológico e, consequentemente, a vida das
                        pessoas.
                      </p>
                    </div>
                    {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Button
                        className="inline-flex h-10 items-center justify-center text-white"
                        style={{ backgroundColor: colors.darkBlue }}
                      >
                        Ler mais
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </div> */}
                  </div>
                </div>
              )}

              {activeTab === "values" && (
                <div className="space-y-8">
                  <h3
                    className="text-2xl font-bold tracking-tighter text-center md:text-3xl"
                    style={{ color: colors.gold }}
                  >
                    Nosso valores
                  </h3>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {values.map((value) => (
                      <CardSpotlight
                        key={value.title}
                        style={{ background: value.color }}
                      >
                        <h4
                          className={cn(
                            "text-xl font-bold mb-2",
                            value.textColor
                          )}
                        >
                          {value.title}
                        </h4>
                        <p
                          className={
                            value.textColor === "text-white"
                              ? "text-white/80"
                              : "text-gray-700"
                          }
                        >
                          {value.description}
                        </p>
                      </CardSpotlight>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-center space-y-4 text-center mb-12 md:-mb-12">
          <div className="space-y-2">
            <h3
              className="text-base font-semibold"
              style={{ color: colors.darkBlue }}
            >
              Jonta-se a nós nesta jornada
            </h3>
            <p className="max-w-[600px] text-muted-foreground text-sm">
              Juntos, podemos criar mudanças significativas e construir um
              futuro melhor.
            </p>
          </div>
          <Link
            href="#contact"
            className="rounded-full text-white px-6 py-2 hover:brightness-90"
            style={{ backgroundColor: colors.brightBlue }}
          >
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}
