import Services from "./services";

const StepHeadSection = () => {
  return (
    <div className="w-full mx-auto bg-gradient-to-tr from-gray-100 to-gray-100/5 py-24 ">
      <div className="max-w-[1200px] 2xl:max-w-[1080px] mx-auto flex flex-col justify-center items-center ">
        <div className="flex flex-col justify-center items-center gap-6 -mt-4 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold text-light-blue-200 text-center">
            {" "}
            Prever o futuro é estar um passo à frente!
          </h1>
          <span className="text-lg md:text-xl font-medium text-dark-blue-700">
            Como estar um passo à frente?{" "}
          </span>
        </div>
        <Services />
      </div>
    </div>
  );
};

export default StepHeadSection;
