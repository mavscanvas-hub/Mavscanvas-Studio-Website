import { HiMiniCheckBadge } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi";
import Herobg from "../../assets/pricing/bg.png";
import Button from "../custom/button";
import { FaArrowRightLong } from "react-icons/fa6";

const plans = [
  {
    id: 1,
    name: "Popular",
    amount: "₦500,000",
    short_desc: "Best for Startups, small businesses, early-stage projects",
    benefits: [
      "Brand identity",
      "3-page responsive website",
      "Basic SEO setup",
      "Social media starter kit",
    ],
  },
  {
    id: 2,
    name: "Growth",
    amount: "₦1,500,000",
    short_desc: "Best for Startups, small businesses, early-stage projects",
    benefits: [
      "Complete brand guidelines",
      "Full website ",
      "UI/UX product design",
      "SEO + content strategy",
      "Social media management",
    ],
  },
  {
    id: 3,
    name: "Pro",
    amount: "₦5,050,000",
    short_desc: "Best for Startups, small businesses, early-stage projects",
    benefits: [
      "Advanced brand ID",
      "Full-scale website",
      "Complete UX/UI design",
      "Multi-channel digital marketing",
      "(SEO, PPC, email, CRO)",
      "Social media management",
      "Creative production support ",
    ],
  },
];

export default function Hero() {
  return (
    <section
      className="bg-white pt-[235px] max-md:pt-25.5 px-15 max-md:px-4 flex flex-col gap-20 max-md:gap-8 pb-40 max-md:pb-11 bg-top-left"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col">
        <h2 className="text-black text-[90px]/[120%] max-md:text-[36px]/[120%] font-cormo italic">
          Clear Packages,
        </h2>
        <h2 className="text-black text-[90px]/[120%] max-md:text-[36px]/[120%] font-extrabold">
          Flexible Solutions
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`${
                plan.id === 1
                  ? " bg-[url(src/assets/pricing/card_bg.png)] bg-black"
                  : "bg-transparent border border-black"
              } rounded-[42px] max-md:rounded-[30px] pt-[50px] max-md:pt-9 max-md:px-7 px-10 pb-11 flex flex-col justify-between`}
            >
              <div>
                <span
                  className={`${
                    plan.id === 1
                      ? "bg-[#02DDEF] text-black"
                      : "bg-black text-white"
                  } inline-block px-4.5 py-2.5 max-md:py-2 max-md:px-3.5 rounded-full`}
                >
                  <h3 className="text-base max-md:text-sm font-medium">
                    {plan.name} Plan
                  </h3>
                </span>
                <p
                  className={`text-[60px]/[120%] max-md:text-[44px]/[120%] font-bold mt-6 max-md:mt-5 max-md:mb-6 mb-8 ${
                    plan.id === 1 ? "text-white" : "text-black"
                  }`}
                >
                  {plan.amount}
                </p>
                <div
                  className={`${
                    plan.id === 1 ? "border-y-white" : "border-y-black"
                  } border-y-1 py-4.5 max-md:pt-3 max-md:pb-2`}
                >
                  <p
                    className={`${
                      plan.id === 1 ? "text-white" : "text-black"
                    } text-[15px] max-md:text-sm font-normal`}
                  >
                    {plan.short_desc}
                  </p>
                </div>
                <ul className="mt-7 mb-[285px] max-md:mb-16.5 space-y-2">
                  {plan.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <HiMiniCheckBadge
                        className={`${
                          plan.id === 1 ? "text-white" : "text-black"
                        } text-2xl`}
                      />
                      <span
                        className={`${
                          plan.id === 1 ? "text-white" : "text-black"
                        } max-md:text-sm/[120%] `}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                className={`${
                  plan.id === 1 ? "bg-white" : "bg-[#02DDEF]"
                } rounded-full py-5 max-md:py-4 px-15 max-md:px-15 text-[20px]/[120%] font-medium flex gap-6 max-md:gap-0 max-md:justify-between items-center`}
                onClick={() => {
                  console.log("Logged");
                }}
              >
                Start a Project
                <HiArrowRight className="text-3xl " />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 px-12.5 max-md:px-3.5 max-md:py-5 border-[#222222] border rounded-[42px] max-md:rounded-[10px] flex max-md:flex-col max-md:gap-4.5 items-center justify-between">
        <div className="w-[831px] flex flex-col gap-4.5 max-md:gap-3 max-md:w-full">
          <span className="text-[40px]/[120%] max-md:text-[20px]/[120%] font-bold">
            Are you interested in a quote project?
          </span>
          <span className="text-[28px]/[120%] max-md:text-[12px]/[120%] font-normal">
            If the above plan isn't the right fit, don't hesitate to reach out,
            we'll be glad to discuss a tailored solution for your needs.
          </span>
        </div>
        <button
          className={` bg-black text-white rounded-full py-5 max-md:py-2.5 px-15 max-md:px-20 text-[25px]/[120%] max-md:text-[16px]/[120%] flex gap-6 items-center`}
          onClick={() => {
            console.log("Logged");
          }}
        >
          Reach Out
          <HiArrowRight className="text-3xl max-md:text-xl" />
        </button>
      </div>
      <div className="flex flex-col gap-15 max-md:gap-4 items-center justify-center">
        <span className="text-[32px]/[120%] max-md:text-[10px]/[120%] font-light text-center mt-38 max-md:mt-5 block max-w-[800px] max-md:w-[250px] text-black">
          We are prepared to replicate these results for your brand. Are you
          ready to begin?
        </span>
        <div className="flex justify-center items-center">
          <Button
            className="bg-[#02DDEF] rounded-full py-5.5 max-md:py-3 max-md:px-10 px-24 flex gap-6 max-md:gap-5 max-md:justify-between items-center "
            onClick={() => {
              console.log("Logged");
            }}
          >
            <span className="font-medium text-[28px] text-[28px]/[120%] max-md:text-[14px]/[120%]">
              Start a Project
            </span>
            <FaArrowRightLong className="text-2xl max-md:text-[20px]" />
          </Button>
        </div>
      </div>
    </section>
  );
}
