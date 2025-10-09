import { Link } from "react-router-dom";
import cardBg from "../../assets/company_op/card-bg.webp";
import sectionBg from "../../assets/company_op/result-bg.webp";
import Button from "../custom/button";
import { FaArrowRight } from "react-icons/fa6";

const outcomes = [
  {
    value: "85%",
    label: "Brand Recall",
  },
  {
    value: "2.1x",
    label: "Conversions",
  },
  {
    value: "70%",
    label: "Web optimization",
  },
  {
    value: "120%",
    label: "Qualified Leads",
  },
  {
    value: "35%",
    label: "Customer Acquisition Cost",
  },
  {
    value: "3.5x",
    label: "Customer Retention",
  },
];

export default function OurResults() {
  return (
    <section
      className="bg-black pt-15 pl-15 pb-15 flex flex-col gap-15"
      style={{
        backgroundImage: `url(${sectionBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="flex flex-col gap-5">
        <h2 className="font-cormo text-[90px]/[120%] italic text-start text-white">
          Our <strong>Results</strong>
        </h2>
        <div className="flex flex-row items-center overflow-x-auto py-10">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className={`flex flex-col gap-10 items-start pt-5 pl-[30px] pr-10 pb-4 bg-white rounded-3xl shadow-[#000000CC] shadow-2xl ${
                idx !== 0 ? "-rotate-[7deg] z-5" : ""
              }`}
            >
              <div className="bg-black rounded-full flex items-center justify-center text-white font-medium text-lg px-6 py-2">
                WEBSITE DEVELOPMENT
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-black text-[50px]/[120%] italic font-light">
                  We Turned a <strong className="font-medium">Website</strong>{" "}
                  into a <strong className="font-medium">Revenue Engine</strong>
                </p>
                <div
                  style={{
                    backgroundImage: `url(${cardBg})`,
                  }}
                  className="bg-gray-100 h-[235px] w-[386px] rounded-xl"
                />
              </div>
              <Link
                to={"/"}
                className="mt-1 flex justify-center items-center w-full"
              >
                <span className="text-[#317AE8] text-xl ">see how</span>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <Button
            variant="secondary"
            onClick={() => {
              console.log("View All Case Studies");
            }}
            className=" text-white border-white py-3 px-11 flex items-center gap-5 rounded-full font-medium text-2lg"
          >
            <span className="text-[28px]/[120%] italic">Our Works</span>
            <FaArrowRight className="text-[30px] text-white" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="font-cormo text-[90px]/[120%] italic text-start text-white">
          The <strong>Outcomes</strong>
        </h2>
        <div className="grid grid-cols-3 items-center px-20 mt-25 relative">
          <div className="absolute inset-y-0 left-[36%] w-px bg-white"></div>
          <div className="absolute inset-y-0 left-[64%] w-px bg-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[1.2px] bg-white w-[80%]"></div>
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex flex-col items-center p-20 relative">
              <span className="text-[108px]/[120%] font-bold text-white">
                {outcome.value}
              </span>
              <span className="text-3xl text-white font-light text-center">
                {outcome.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
