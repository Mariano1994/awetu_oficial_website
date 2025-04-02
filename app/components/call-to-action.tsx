import figureLeft4 from "../assets/figureLeft4.svg";
import figureLeft5 from "../assets/figureLeft5.svg";
import Image from "next/image";
import ContactForm from "./contact-form";

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

      <ContactForm />
    </div>
  );
};

export default CallToAction;
