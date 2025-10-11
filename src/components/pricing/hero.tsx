import { HiMiniCheckBadge } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi";
import Herobg from "../../assets/pricing/bg.png";

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
      className="bg-white pt-[235px] px-15 flex flex-col gap-20 pb-40 bg-top-left"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col">
        <h2 className="text-black text-[90px]/[120%] font-cormo italic">
          Clear Packages,
        </h2>
        <h2 className="text-black text-[90px]/[120%] font-extrabold">
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
              } rounded-[42px] pt-[50px] px-10 pb-11 flex flex-col justify-between`}
            >
              <div>
                <span
                  className={`${
                    plan.id === 1
                      ? "bg-[#02DDEF] text-black"
                      : "bg-black text-white"
                  } inline-block px-4.5 py-2.5 rounded-full`}
                >
                  <h3 className="text-base font-medium">{plan.name} Plan</h3>
                </span>
                <p
                  className={`text-[60px]/[120%] font-bold mt-6 mb-8 ${
                    plan.id === 1 ? "text-white" : "text-black"
                  }`}
                >
                  {plan.amount}
                </p>
                <div
                  className={`${
                    plan.id === 1 ? "border-y-white" : "border-y-black"
                  } border-y-1 py-4.5`}
                >
                  <p
                    className={`${
                      plan.id === 1 ? "text-white" : "text-black"
                    } text-[15px] font-normal`}
                  >
                    {plan.short_desc}
                  </p>
                </div>
                <ul className="mt-7 mb-[285px] space-y-2">
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
                        }`}
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
                } rounded-full py-5 px-15 text-[20px]/[120%] flex gap-6 items-center`}
                onClick={() => {
                  console.log("Logged");
                }}
              >
                Start a Project
                <HiArrowRight className="text-3xl" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="py-10 px-12.5 border-[#222222] border rounded-[42px] flex items-center justify-between">
        <div className="w-[831px] flex flex-col gap-4.5">
          <span className="text-[40px]/[120%] font-bold">
            Are you interested in a quote project?
          </span>
          <span className="text-[28px] font-normal">
            If the above plan isn't the right fit, don't hesitate to reach out,
            we'll be glad to discuss a tailored solution for your needs.
          </span>
        </div>
        <button
          className={` bg-black text-white rounded-full py-5 px-15 text-[25px]/[120%] flex gap-6 items-center`}
          onClick={() => {
            console.log("Logged");
          }}
        >
          Reach Out
          <HiArrowRight className="text-3xl" />
        </button>
      </div>
    </section>
  );
}
