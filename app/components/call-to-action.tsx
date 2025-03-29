import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import figureLeft4 from "../assets/figureLeft4.svg";
import figureLeft5 from "../assets/figureLeft5.svg";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div
      id="contact"
      className="relative w-full bg-light-blue-200/5 mx-auto flex flex-col pt-16 pb-28 md:pt-24  items-center md:pb-32 no-scrollbar"
    >
      <Image
        src={figureLeft4}
        alt="figure one"
        className="absolute top-80 h-36 left-0 hidden md:block"
      />
      <Image
        src={figureLeft5}
        alt="figure one"
        className="absolute top-96 h-24 left-0 hidden md:block"
      />

      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-3xl md:text-4xl font-bold text-dark-blue-700 text-center">
          {" "}
          Solicite uma viagem ao futuro
        </h1>

        <p className="text-sm text-gray-600 text-center px-3  ">
          O seu bilhete para assegurar um lugar no futuro está à um click!
        </p>
      </div>

      <form className=" w-[400px] mt-12 flex flex-col gap-3 px-8 md:px-0 md:h-[450px]">
        <Input placeholder=" Digite seu nome" type="text" />
        <Input placeholder=" E-mail" type="email" />
        <Input placeholder="Seu contacto" type="number" />
        <Textarea placeholder="Deixe uma mensagem" />

        <Button className="mt-5 rounded-lg py-6 bg-gradient-to-br from-dark-blue-700 to-light-blue-200 font-medium hover:brightness-90">
          {" "}
          Quero garantir o meu lugar!
        </Button>
      </form>
    </div>
  );
};

export default CallToAction;
