import React from "react";
import { FlipWords } from "../../components/ui/flip-words";
import { neopixelFont } from "../utils/fonts";

const words = ["Construindo", "Arquitetando", "Formando"];
export function FlipTitle() {
  return (
    <h1
      className={`text-7xl font-bold text-white flex flex-col justify-center items-center gap-4 `}
    >
      <span>
        <span className={`${neopixelFont.className} text-7xl`}>Awetu</span>{" "}
        Techonologies
        <br />
      </span>
      <span>
        <FlipWords words={words} />o Futuro
      </span>
    </h1>
  );
}
