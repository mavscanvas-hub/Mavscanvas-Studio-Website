import Button from "../custom/button";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "../../index.css";

interface StepTwoProps {
  setSteps: (step: number) => void;
}

const services = [
  "Brand Identity Design",
  "Graphic Design",
  "Website Development",
  "Package & Label Design",
  "Social Media Management",
  "Digital Marketing",
  "Virtual Assistance",
  "Product Design",
];

export default function StepTwo({ setSteps }: StepTwoProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prevSelected: string[]) =>
      prevSelected.includes(service)
        ? prevSelected.filter((s) => s !== service)
        : [...prevSelected, service],
    );
  };

  const handleSendmail = () => {
    setSteps(2);
  };

  return (
    <div className="flex flex-col gap-11 max-md:gap-8">
      <div className="max-md:px-3.5 min-w-[900px] max-md:min-w-full max-md:py-2 bg-black rounded-[40px] max-md:rounded-[30px] flex max-md:flex-col max-md:gap-4.5 items-center justify-between relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:-translate-y-[60%] -rotate-60 max-md:-rotate-30 blur-[225px] max-lg:blur-[170px]">
          <div className="lg:w-[400px] lg:h-[300px] w-[300px] h-[400px] rounded-full bg-[#02DDEF]" />
          <div className="lg:w-[400px] w-[300px] h-[300px] lg:h-[400px] rounded-full bg-[#FA01F0]" />
        </div>
        <div className="flex flex-col relative z-10 gap-15 max-md:gap-8 pt-10 max-md:pt-4 pb-25 max-md:pb-10 max-md:px-2 px-10 justify-center items-center max-md:items-start w-full">
          <div className="text-center max-md:text-start text-white">
            <h3 className="text-[40px]/[120%] max-md:text-[28px]/[120%] font-bold">
              Select Services
            </h3>
            <h5 className="text-[24px]/[120%] max-md:text-[14px]/[120%] font-normal">
              You can select more than one service to go with your order.
            </h5>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 w-full">
            {services.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-white">
                <input
                  type="checkbox"
                  id={item}
                  checked={selectedServices.includes(item)}
                  onChange={() => {
                    handleServiceToggle(item);
                  }}
                />
                <label
                  htmlFor={item}
                  className="text-[26px]/[120%] max-md:text-[20px]/[120%] font-normal"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-[900px] flex flex-col gap-8">
        {selectedServices.length > 0 && (
          <div className="text-black ">
            <ul className="mt-4 flex flex-wrap gap-3 items-center">
              {selectedServices.map((service) => (
                <li
                  key={service}
                  className="text-[20px]/[120%] bg-white max-md:bg-black px-3 py-2 rounded-lg flex items-center gap-2 leading-none min-h-10 transition-none transform-none"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedServices((prevSelected) =>
                        prevSelected.filter((s) => s !== service),
                      );
                    }}
                    className="inline-flex items-center justify-center cursor-pointer size-5 shrink-0"
                    aria-label={`Remove ${service}`}
                  >
                    <IoMdClose className="text-lg leading-none text-black max-md:text-white" />
                  </button>
                  <span className="leading-none text-black max-md:text-white max-md:text-[18px]/[120%] text-[20px]/[120%] font-normal">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* <div className="flex flex-col gap-4 w-full">
          <label htmlFor="email" className="text-[36px]/[120%] font-medium">
            Email Address
          </label>
          <div className="p-[1px] bg-gradient-to-r from-[#FA01F0] to-[#02DDEF] rounded-xl max-md:py-4 max-md:px-15 text-[20px]/[120%] font-normal w-full flex items-center justify-center">
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="bg-white w-full py-5 rounded-xl px-4 outline-none"
            />
          </div>
        </div> */}
        <Button
          onClick={handleSendmail}
          className={`bg-black hover:transform  text-white hover:scale-102 rounded-xl py-6 text-[24px]/[120%] max-md:text-[18px]/[120%] font-normal flex justify-center gap-6 items-center w-full text-center`}
        >
          Book Mail
        </Button>
      </div>
    </div>
  );
}
