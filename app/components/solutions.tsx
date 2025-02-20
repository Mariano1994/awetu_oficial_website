import { Layers } from "lucide-react";

import dataAnlysisSolution from "../assets/data-analysis.svg";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-animation";
import { Button } from "@/components/ui/button";
import TimelineSolutions from "./timeline-solutions";

const Solutions = () => {
  return (
    <div className="max-w-[1000px] xl:max-w-[1220px] mx-auto mt-28">
      <div className="flex flex-col justify-center items-center -mb-8">
        <h1 className="text-4xl font-bold text-dark-blue-700">
          {" "}
          Awetu oferece soluções pensando em si
        </h1>
      </div>

      {/* <div className="flex flex-col gap-16 ">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-4 max-w-[450px] ">
            <div className="bg-gradient-to-tr from-light-blue-200 to-dark-blue-700 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
              <Layers className="text-white" size={28} />
            </div>

            <strong className="text-2xl font-semibold text-dark-blue-700">
              {" "}
              Transforme seu negócio <br /> através de dados!
            </strong>

            <p className="text-base font-light text-dark-blue-700/60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              quisquam modi velit quae blanditiis fuga cupiditate, voluptatibus
              esse, iusto eos odit hic natus distinctio quasi nulla aspernatur,
              quis sunt tempora? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. <br />
            </p>

            <Button className="mt-4 py-4 px-8 w-[152px] h-[54px] rounded-lg bg-gradient-to-tr from-light-blue-200 to-dark-blue-700 hover:cursor-pointer hover:brightness-110">
              Ler mais
            </Button>
          </div>

          <div className="-mr-32">
            <Image
              src={dataAnlysisSolution}
              alt="data anlysis services"
              className="flex-1"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div> */}
      <TimelineSolutions />
    </div>
  );
};

export default Solutions;
