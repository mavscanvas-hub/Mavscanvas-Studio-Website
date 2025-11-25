import { HiMiniCheckBadge } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi";
import Herobg from "../../assets/pricing/bg.png";

const plans = [
  {
    id: 1,
    name: "Popular",
    amount: "₦700,000",
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

export default function PricingModal({
  setGetStartedModalOpen,
}: {
  setGetStartedModalOpen: (open: boolean) => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[9999]  px-10 bg-white/10 backdrop-blur-sm flex items-center justify-center"
      onClick={() => {
        setGetStartedModalOpen(false);
      }}
    >
      {/* modal window — semi-transparent so page underneath is visible */}
      <div
        className="relative z-10 w-full max-h-[92vh] overflow-auto rounded-[18px]"
        onClick={(e) => e.stopPropagation()}
      >
        <section
          className="bg-white font-subito px-15 max-md:px-4 pt-5 flex flex-col gap-9.5 max-md:gap-8 pb-9.5 max-md:pb-8"
          style={{
            backgroundImage: `url(${Herobg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backdropFilter: "blur(6px)",
          }}
        >
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-black text-[70px]/[120%] max-md:text-[36px]/[120%] font-cormo italic">
              We Have The
            </h2>
            <h2 className="text-black text-[70px]/[120%] max-md:text-[36px]/[120%] font-extrabold">
              Right Plan for You
            </h2>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`${
                    plan.id === 1
                      ? " bg-[url(src/assets/pricing/card_bg.png)] bg-cover bg-black"
                      : "bg-transparent border border-black"
                  } rounded-[42px] max-md:rounded-[30px] pt-[50px] max-md:pt-9 max-md:px-7 px-8 pb-9.5 flex flex-col font-subito justify-between`}
                >
                  <div>
                    <span
                      className={`${
                        plan.id === 1
                          ? "bg-[#02DDEF] text-black"
                          : "bg-black text-white"
                      } inline-block px-4 py-2 max-md:py-2 max-md:px-3.5 rounded-full`}
                    >
                      <h3 className="text-sm max-md:text-xs font-medium font-subito">
                        {plan.name} Plan
                      </h3>
                    </span>
                    <p
                      className={`text-[54px]/[120%] max-md:text-[44px]/[120%] font-subito font-bold mt-6 max-md:mt-5 max-md:mb-6 mb-7.5 ${
                        plan.id === 1 ? "text-white" : "text-black"
                      }`}
                    >
                      {plan.amount}
                    </p>
                    <div
                      className={`${
                        plan.id === 1 ? "border-y-white" : "border-y-black"
                      } border-y-1 pt-4 pb-2 max-md:pt-3 max-md:pb-2`}
                    >
                      <p
                        className={`${
                          plan.id === 1 ? "text-white" : "text-black"
                        } text-sm max-md:text-sm font-normal`}
                      >
                        {plan.short_desc}
                      </p>
                    </div>
                    <ul className="mt-6 mb-[50px] max-md:mb-10 space-y-2">
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
                    Buy a package
                    <HiArrowRight className="text-3xl " />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="py-10 px-12.5 max-md:px-3.5 max-md:py-5 border-[#222222] border rounded-[42px] max-md:rounded-[10px] flex max-md:flex-col max-md:gap-4.5 items-center justify-between">
            <div className="w-[831px] flex flex-col gap-4.5 max-md:gap-3 max-md:w-full">
              <span className="text-[36px]/[120%] max-md:text-[20px]/[120%] font-bold">
                Are you interested in a quote project?
              </span>
              <span className="text-[25px]/[120%] max-md:text-[12px]/[120%] font-normal">
                If the above plan isn't the right fit, don't hesitate to reach
                out, we'll be glad to discuss a tailored solution for your
                needs.
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
        </section>
      </div>
    </div>
  );
}
