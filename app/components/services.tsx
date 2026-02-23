"use client";
import { Grip, Layers, PieChart, TrendingUp, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { WhatsappLogo } from "phosphor-react";
import { Button } from "@/components/ui/button";
import services from "../data/services.json";
import { truncateString } from "../utils/helpersFunctions";
import { useState, type MouseEvent } from "react";
import AnimatedCircle from "./animated-circle";

type Service = (typeof services)[number];

const WHATSAPP_PHONE = "+244945781642";

const getServiceVisuals = (service: Service) => {
  if (service.id === services[0].id) {
    return {
      icon: <Layers className="text-white" size={26} />,
      background: "bg-gradient-to-tr from-light-blue-200 to-dark-blue-700",
    };
  }
  if (service.id === services[1].id) {
    return {
      icon: <Grip className="text-white" size={26} />,
      background: "bg-light-blue-200",
    };
  }
  if (service.id === services[2].id) {
    return {
      icon: <PieChart className="text-white" size={26} />,
      background: "bg-light-yellow-100",
    };
  }
  if (service.id === services[3].id) {
    return {
      icon: <TrendingUp className="text-white" size={26} />,
      background: "bg-light-green-100",
    };
  }
  return {
    icon: null,
    background: "bg-dark-blue-700",
  };
};

const buildWhatsappLink = (service?: Service) => {
  const message = service
    ? `Olá, gostaria de contratar o serviço "${service.service}" da Awetu.`
    : "Olá, gostaria de falar com o suporte da Awetu.";

  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
};

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeServiceModal();
    }
  };
  return (
    <>
      {/* Services Section */}
      <div className="flex flex-col md:flex-row items-center justify-center relative mt-16 md:mt-24 gap-12 md:gap-20 lg:gap-28">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid-subtle" />
        <div className="flex flex-col gap-16 max-w-[300px] md:max-w-[320px]">
          {/* Data Analis services */}
          <div className="flex flex-col items-center md:items-start  gap-4 ">
            <div className="bg-gradient-to-tr from-light-blue-200 to-dark-blue-700 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
              <Layers className="text-white" size={28} />
            </div>

            <strong className="text-2xl font-semibold text-dark-blue-700">
              {" "}
              {services[0].service}
            </strong>

            <div className="flex flex-col gap-1 w-full max-w-[300px]">
              <p className="text-base font-light text-dark-blue-700/60">
                {truncateString(services[0].description, 210)}
              </p>
              <button
                type="button"
                onClick={() => openServiceModal(services[0])}
                className="self-start cursor-pointer text-sm text-dark-blue-700/50 font-semibold hover:text-dark-blue-700 transition-colors"
              >
                ...mais
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center md:items-start ">
            <div className="bg-light-yellow-100 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
              <PieChart className="text-white" size={28} />
            </div>

            <strong className="text-2xl font-semibold text-light-yellow-100">
              {" "}
              {services[2].service}
            </strong>

            <div className="flex flex-col gap-1 w-full max-w-[300px]">
              <p className="text-base font-light text-dark-blue-700/60">
                {truncateString(services[2].description, 210)}
              </p>
              <button
                type="button"
                onClick={() => openServiceModal(services[2])}
                className="self-start cursor-pointer text-sm text-dark-blue-700/50 font-semibold hover:text-dark-blue-700 transition-colors"
              >
                ...mais
              </button>
            </div>
          </div>
        </div>
        <AnimatedCircle className="hidden md:flex items-center justify-center" size={250} />
        <div className="flex flex-col gap-16 max-w-[300px] md:max-w-[320px] mt-16 md:mt-0">
          {/* Software Development */}
          <div className="flex flex-col items-center  gap-4 md:items-end ">
            <div className="bg-light-blue-200 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
              <Grip className="text-white" size={28} />
            </div>

            <strong className="text-2xl font-semibold text-light-blue-200 md:text-end text-center">
              {" "}
              {services[1].service}
            </strong>

            <div className="flex flex-col gap-1 w-full max-w-[300px]">
              <p className="text-base font-light text-dark-blue-700/60">
                {truncateString(services[1].description, 210)}
              </p>
              <button
                type="button"
                onClick={() => openServiceModal(services[1])}
                className="self-end cursor-pointer text-sm text-dark-blue-700/50 font-semibold hover:text-dark-blue-700 transition-colors"
              >
                ...mais
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end ">
            <div className="bg-light-green-100 p-4 flex justify-center items-center rounded-lg w-16 h-16 ">
              <TrendingUp className="text-white" size={28} />
            </div>

            <strong className="text-2xl font-semibold text-light-green-100 text-end">
              {" "}
              {services[3].service}
            </strong>

            <div className="flex flex-col gap-1 w-full max-w-[300px]">
              <p className="text-base font-light text-dark-blue-700/60">
                {truncateString(services[3].description, 210)}
              </p>
              <button
                type="button"
                onClick={() => openServiceModal(services[3])}
                className="self-end cursor-pointer text-sm text-dark-blue-700/50 font-semibold hover:text-dark-blue-700 transition-colors"
              >
                ...mais
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={handleOverlayClick}
          >
            <motion.div
              className="relative mx-4 w-full max-w-md rounded-2xl bg-white px-6 py-8 md:px-8 md:py-9 shadow-xl md:mx-0 border border-dark-blue-700/10"
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 24 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                type="button"
                onClick={closeServiceModal}
                className="absolute right-4 top-4 rounded-full p-1 text-dark-blue-700/70 hover:bg-dark-blue-700/5 hover:text-dark-blue-700 transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>

              {selectedService && (
                <div className="mb-6 flex items-center gap-4">
                  {(() => {
                    const visuals = getServiceVisuals(selectedService);
                    return (
                      <>
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ${visuals.background}`}
                        >
                          {visuals.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[11px] font-medium uppercase tracking-wide text-dark-blue-700/60">
                            Serviço
                          </span>
                          <h2 className="text-lg md:text-xl font-semibold text-dark-blue-700">
                            {selectedService.service}
                          </h2>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}

              <p className="max-h-[60vh] overflow-y-auto text-sm md:text-base font-light text-dark-blue-700/80 no-scrollbar leading-relaxed">
                {selectedService?.description}
              </p>

              {selectedService && (
                <div className="mt-8 flex justify-end">
                  <Button
                    asChild
                    className="rounded-full bg-light-green-100 text-dark-blue-700 hover:bg-light-green-100/90"
                  >
                    <Link
                      href={buildWhatsappLink(selectedService)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <WhatsappLogo size={18} weight="bold" />
                      <span>Contratar serviço</span>
                    </Link>
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Services;
