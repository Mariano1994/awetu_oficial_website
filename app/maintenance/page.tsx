import Image from "next/image";
import maintenanceImage from "../assets/maintenance-image.svg";
import awetuImage from "../assets/logo.png";

export default function ManutencaoPage() {
  return (
    <>
      <header>
        <div className=" flex justify-center items-center md:px-3 px-8 mt-10">
          <Image width={180} src={awetuImage} alt="logo" className="-ml-5" />
        </div>
      </header>
      <div className=" flex flex-col items-center justify-center gap-8 ">
        <Image
          src={maintenanceImage}
          alt="Imagem de manutencao"
          className="w-[550px]"
        />

        <p className="text-xl font-light">
          Estamos em manutenção no momento, por favor volte mais tarde
        </p>
      </div>
    </>
  );
}
