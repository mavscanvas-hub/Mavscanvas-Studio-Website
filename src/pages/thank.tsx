import Herobg from "../assets/pricing/bg.png";

export default function Thanks() {
  return (
    <section
      className="bg-white font-subito pt-[200px] max-md:pt-27 px-15 max-md:px-4 flex flex-col gap-10 max-md:gap-8 pb-30 max-md:pb-11 bg-top-left items-center"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center max-md:items-start w-full">
        <h2 className="text-black text-[90px]/[110%] max-md:text-[36px]/[120%] font-cormo italic">
          Thank You for
        </h2>
        <h2 className="text-black text-[90px]/[110%] max-md:text-[36px]/[120%] font-extrabold">
          Booking Us
        </h2>
      </div>
      <div className="max-md:px-3.5 max-w-[900px] max-md:min-w-full max-md:py-5 bg-black rounded-[42px] max-md:rounded-[20px] flex max-md:flex-col max-md:gap-4.5 items-center justify-between relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:-translate-y-[60%] -rotate-60 max-md:-rotate-30 blur-[225px] max-lg:blur-[170px]">
          <div className="lg:w-[400px] lg:h-[300px] w-[300px] h-[400px] rounded-full bg-[#02DDEF]" />
          <div className="lg:w-[400px] w-[300px] h-[300px] lg:h-[400px] rounded-full bg-[#FA01F0]" />
        </div>
        <div className="relative z-10 text-white text-[36px]/[120%] max-md:text-[20px]/[120%] p-14 max-md:p-2">
          Thank you for booking with us! We have received your request and our
          team will reach out shortly to discuss the next steps for your
          project.
        </div>
      </div>
    </section>
  );
}
