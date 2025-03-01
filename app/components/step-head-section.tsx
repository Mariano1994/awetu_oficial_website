import Services from "./services";

const StepHeadSection = () => {
  return (
    <div className="relative w-full mx-auto bg-gradient-to-tr from-gray-100 to-gray-100/5 py-24">
      <div className="max-w-[1000px] xl:max-w-[1080px] mx-auto ">
        <div className="flex flex-col justify-center items-center gap-6 ">
          <h1 className="text-4xl font-bold text-light-blue-200">
            {" "}
            Prever o futuro é estar um passo à frente!
          </h1>
          <span className="text-xl font-medium text-dark-blue-700">
            Como estar um passo à frente?{" "}
          </span>
        </div>
        <Services />
      </div>
    </div>
  );
};

export default StepHeadSection;
