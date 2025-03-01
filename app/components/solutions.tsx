import TimelineSolutions from "./timeline-solutions";

const Solutions = () => {
  return (
    <div className="max-w-[1000px] xl:max-w-[1220px] mx-auto mt-28">
      <div className="flex flex-col justify-center items-center -mb-8">
        <h1 className="text-3xl md:text-4xl text-center font-bold text-dark-blue-700">
          {" "}
          Awetu oferece soluções pensando em si
        </h1>
      </div>

      <TimelineSolutions />
    </div>
  );
};

export default Solutions;
