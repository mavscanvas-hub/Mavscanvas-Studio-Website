import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full font-subito items-center py-30 max-md:justify-center justify-start h-screen min-h-screen bg-black px-30 max-md:px-5">
      <div className="absolute left-2/5 top-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:-translate-y-[80%] -rotate-60 blur-[200px] max-lg:blur-[100px]">
        <div className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] rounded-full bg-[#02DDEF]" />
        <div className="lg:w-[400px] w-[200px] h-[200px] lg:h-[400px] rounded-full bg-[#FA01F0]" />
      </div>
      <div className="w-full -pt-30 flex items-center justify-start flex-col">
        <div className="flex w-full relative">
          <div className="absolute not_glass_effect h-40 max-md:h-28 w-[460px] max-md:w-[280px] rounded-full top-0 left-1/2 transform -translate-x-1/2 z-50" />
          <h1 className="text-[200px]/[60%] max-md:text-[120px]/[100%] absolute z-40 max-md:bottom-1 left-1/2 transform -translate-x-1/2 text-center font-bold text-white font-subito">
            404
          </h1>
        </div>
        <p className="text-[60px]/[100%] max-md:text-[32px]/[100%] font-semibold text-white mb-25 max-md:mb-15 relative z-50">
          Page Not Found
        </p>
        <p className="text-[33px]/[100%] max-md:text-[20px]/[100%] font-normal max-md:font-light text-white mb-32 text-center asbolute z-50">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-[#02DDEF] z-40 max-md:bottom-10 text-black font-subito py-5 max-md:py-4 px-20 max-md:px-15 text-[33px]/[100%] max-md:text-[22px]/[100%] rounded-full max-md:rounded-4xl font-normal cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
