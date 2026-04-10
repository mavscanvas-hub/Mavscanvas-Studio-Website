import { plans } from "../../utils/data";
import { HiMiniCheckBadge } from "react-icons/hi2";
import Button from "../custom/button";
import { useState } from "react";
import { toast } from "sonner";

interface StepOneProps {
  planId: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function StepOne({ planId }: StepOneProps) {
  const plan = plans.find((plan) => plan.id === parseInt(planId || "1"));
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleStepsIncrement = async () => {
    if (!email || !EMAIL_REGEX.test(email)) {
      setEmailError("Please enter a valid email address");
      toast.error("Please enter a valid email address");
      return;
    }

    setEmailError("");

    try {
      setIsSending(true);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          source: "checkout-step-1",
          planName: plan?.name || null,
          planPrice: plan?.amount || null,
          services: plan ? [`${plan.name} Plan`] : [],
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.error || "Failed to send email. Please try again.");
        return;
      }

      toast.success("Request sent successfully. Continue with your order.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="flex flex-col gap-11">
      <div className="max-md:px-3.5 min-w-[900px] max-md:min-w-full max-md:py-5 bg-black rounded-[42px] max-md:rounded-[20px] flex max-md:flex-col max-md:gap-4.5 items-center justify-between relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:-translate-y-[60%] -rotate-60 max-md:-rotate-30 blur-[225px] max-lg:blur-[170px]">
          <div className="lg:w-[400px] lg:h-[300px] w-[300px] h-[400px] rounded-full bg-[#02DDEF]" />
          <div className="lg:w-[400px] w-[300px] h-[300px] lg:h-[400px] rounded-full bg-[#FA01F0]" />
        </div>
        <div
          key={plan?.id}
          className={`relative z-10
          } rounded-[30px] max-md:rounded-[30px] pt-10 max-md:pt-2 max-md:px-2 px-10 pb-11 max-md:pb-1 flex flex-col justify-between w-full`}
        >
          <div className="flex flex-row justify-between max-md:flex-col w-full">
            <div className="max-w-[300px]">
              <span
                className={`
                  bg-[#02DDEF] text-black inline-block px-4.5 py-2.5 max-md:py-2 max-md:px-3.5 rounded-full`}
              >
                <h3 className="text-base max-md:text-sm font-medium font-subito">
                  {plan?.name} Plan
                </h3>
              </span>
              <p
                className={`text-[60px]/[120%] font-subito max-md:text-[44px]/[120%] font-bold mt-6 max-md:mt-5 max-md:mb-6 mb-8 ${
                  plan?.id ? "text-white" : "text-black"
                }`}
              >
                {plan?.amount}
              </p>
              <div
                className={`${
                  plan?.id ? "border-t-white" : "border-t-black"
                } border-t-1 py-4.5 max-md:pt-3 max-md:pb-2`}
              >
                <p
                  className={`${
                    plan?.id ? "text-white" : "text-black"
                  } text-[23px]/[120%] max-md:text-sm font-normal`}
                >
                  {plan?.short_desc}
                </p>
              </div>
            </div>
            <ul className="mt-7 mb-[80px] max-md:mb-5 pr-8 space-y-2">
              {plan?.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <HiMiniCheckBadge
                    className={`${
                      plan?.id ? "text-white" : "text-black"
                    } text-2xl`}
                  />
                  <span
                    className={`${
                      plan?.id ? "text-white" : "text-black"
                    } max-md:text-sm/[120%] `}
                  >
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[900px] max-md:w-full flex flex-col gap-8 max-md:gap-4.5">
        <div className="flex flex-col gap-4 max-md:gap-2 w-full">
          <label
            htmlFor="email"
            className="text-[36px]/[120%] max-md:text-[24px]/[120%] font-medium"
          >
            Email Address
          </label>
          <div className="p-[1px] bg-gradient-to-r from-[#FA01F0] to-[#02DDEF] rounded-xl  text-[20px]/[120%] max-md:text-[16px]/[120%] font-normal w-full flex items-center justify-center">
            <input
              type="text"
              id="email"
              required={true}
              placeholder="Enter your email"
              onChange={(e) => {
                const value = e.target.value;
                setEmail(value);
                if (emailError && EMAIL_REGEX.test(value)) {
                  setEmailError("");
                }
              }}
              className="bg-white w-full py-5 rounded-xl px-4 outline-none"
            />
          </div>
        </div>
        <Button
          onClick={handleStepsIncrement}
          className={`bg-black hover:transform text-white hover:scale-102 rounded-xl py-6 text-[24px]/[120%] max-md:text-[18px]/[120%] font-normal flex justify-center gap-6 items-center w-full text-center ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
          disabled={isSending}
        >
          {isSending ? (
            <span className="inline-flex items-center gap-3">
              <span className="size-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
              Sending...
            </span>
          ) : (
            "Book Now"
          )}
        </Button>
      </div>
    </div>
  );
}
