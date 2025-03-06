"use client";
import { Grip, Layers, PieChart, TrendingUp } from "lucide-react";
import Image from "next/image";
import circle from "../assets/circle.svg";
import dataLine from "../assets/dataLine.svg";
import processLine from "../assets/processLine.svg";
import forwardLine from "../assets/fowardLine.svg";

import services from "../data/services.json";

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <div className="flex flex-col md:flex-row justify-between items-center relative mt-16 md:mt-24 md:gap-32">
        <Image
          src={dataLine}
          alt="line to incate data"
          className="absolute top-16 left-72 hidden md:block"
        />
        <Image
          src={processLine}
          alt="line to incate data"
          className="absolute top-[430px] left-72 hidden md:block"
        />
        <Image
          src={forwardLine}
          alt="line to incate data"
          className="absolute top-32 right-80 hidden md:block"
        />
        <Image
          src={forwardLine}
          alt="line to incate data"
          className="absolute top-96 right-64 hidden md:block"
        />
        <div className="flex flex-col gap-16 max-w-[300px]">
          {/* Data Analis services */}
          <div className="flex flex-col gap-4 ">
            <div className="bg-gradient-to-tr from-light-blue-200 to-dark-blue-700 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
              <Layers className="text-white" size={28} />
            </div>

            <strong className="text-2xl font-semibold text-dark-blue-700">
              {" "}
              {services[0].service}
            </strong>

            <p className="text-base font-light text-dark-blue-700/60">
              {services[0].description}
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="bg-light-yellow-100 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
              <PieChart className="text-white" size={28} />
            </div>

            <strong className="text-2xl font-semibold text-light-yellow-100">
              {" "}
              {services[2].service}
            </strong>

            <p className="text-base font-light text-dark-blue-700/60">
              {services[2].description}
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <Image src={circle} alt="..." width={300} />
        </div>
        <div className="flex flex-col  gap-16 max-w-[300px]">
          {/* Data Analis services */}
          <div className="flex flex-col gap-4 items-end ">
            <div className="bg-light-blue-200 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
              <Grip className="text-white" size={28} />
            </div>

            <strong className="text-2xl font-semibold text-light-blue-200 text-end">
              {" "}
              {services[1].service}
            </strong>

            <p className="text-base font-light text-dark-blue-700/60">
              {services[1].description}
            </p>
          </div>
          <div className="flex flex-col gap-4 items-end ">
            <div className="bg-light-green-100 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
              <TrendingUp className="text-white" size={28} />
            </div>

            <strong className="text-2xl font-semibold text-light-green-100 text-end">
              {" "}
              {services[3].service}
            </strong>

            <p className="text-base font-light text-dark-blue-700/60">
              {services[3].description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
