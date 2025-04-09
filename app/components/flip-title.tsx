import React from "react";
import { FlipWords } from "../../components/ui/flip-words";

const words = [
  "Construindo o Futuro",
  "Arquitetando o Futuro",
  "Formando o Futuro",
];
export function FlipTitle() {
  return (
    <h1
      className={` text-[1.95rem] md:text-7xl font-bold text-white flex flex-col justify-center items-center gap-4 `}
    >
      <span>
        <span>Awetu Technologies</span>
        <br />
      </span>
      <span>
        <FlipWords words={words} />
      </span>
    </h1>
  );
}
