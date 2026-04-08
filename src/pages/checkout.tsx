import Herobg from "../assets/pricing/bg.png";
import { plans } from "../utils/data";
import { useSearchParams } from "react-router-dom";
import StepOne from "../components/checkout/stepone";
import StepTwo from "../components/checkout/steptwo";
import { useState } from "react";

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const planId = searchParams.get("plan");
  const [steps, setSteps] = useState(1);

  const plan = plans.find((plan) => plan.id === parseInt(planId || "1"));
  console.log("Selected Plan:", plan);

  return (
    <section
      className="bg-white font-subito pt-[140px] max-md:pt-27 px-15 max-md:px-4 flex flex-col gap-10 max-md:gap-8 pb-30 max-md:pb-11 bg-top-left items-center"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center max-md:items-start w-full">
        <h2 className="text-black text-[90px]/[110%] max-md:text-[36px]/[120%] font-cormo italic">
          Checkout,
        </h2>
        <h2 className="text-black text-[90px]/[110%] max-md:text-[36px]/[120%] font-extrabold">
          Your Order
        </h2>
      </div>
      {steps === 1 && <StepOne planId={planId || "1"} setSteps={setSteps} />}
      {steps === 2 && <StepTwo setSteps={setSteps} />}
    </section>
  );
}
