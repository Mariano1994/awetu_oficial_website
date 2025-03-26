import React from "react";
import { FlipWords } from "../../components/ui/flip-words";

const words = ["Construindo", "Arquitetando", "Formando"];
export function FlipTitle() {
  return (
    <h1
      className={` text-4xl md:text-7xl font-bold text-white flex flex-col justify-center items-center gap-4 `}
    >
      <span>
        <span>Awetu Technologies</span>
        <br />
      </span>
      <span>
        <FlipWords words={words} />o Futuro
      </span>
    </h1>
  );
}
