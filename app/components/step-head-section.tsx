import Services from "./services";

const StepHeadSection = () => {
  return (
    <div className="max-w-[1000px] xl:max-w-[1220px] mx-auto mt-24">
      <div className="flex flex-col justify-center items-center gap-6">
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
  );
};

export default StepHeadSection;
