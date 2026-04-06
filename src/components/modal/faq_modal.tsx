import bg from "../../assets/pricing/faq_bg.png";
import Cardbg from "../../assets/pricing/bg-answer.png";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What makes Mavscanvas different from other digital agencies?",
    answer:
      "We're not just service providers — we're partners. Unlike agencies that focus on just one piece of the puzzle, Mavscanvas delivers end-to-end digital solutions: branding, UX, websites, marketing, social, and creative production. Everything we do is designed to connect strategy, creativity, and measurable results.",
  },
  {
    id: 2,
    question: "How can I get started with MavsCanvas?",
    answer:
      "You can get started by contacting us through our website or email. We'll schedule a consultation to discuss your needs and goals.",
  },
  {
    id: 3,
    question: "What is the typical project timeline?",
    answer:
      "Project timelines vary based on the scope and complexity of the work. We provide estimated timelines during the proposal stage.",
  },
  {
    id: 4,
    question: "Do you offer customized solutions?",
    answer:
      "Yes, we tailor our services to meet the unique needs of each client, ensuring that our solutions align with their business objectives.",
  },
  {
    id: 5,
    question: "What is the typical project timeline?",
    answer:
      "Project timelines vary based on the scope and complexity of the work. We provide estimated timelines during the proposal stage.",
  },
  {
    id: 6,
    question: "Do you offer customized solutions?",
    answer:
      "Yes, we tailor our services to meet the unique needs of each client, ensuring that our solutions align with their business objectives.",
  },
];

export default function FAQModal({
  setFaqModal,
}: {
  setFaqModal: (open: boolean) => void;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <div
      className="px-10 max-md:px-3 max-md:py-5 z-[9999] bg-white/30 backdrop-blur-sm w-full h-screen fixed inset-0 flex items-center justify-center max-md:overflow-y-auto"
      onClick={() => setFaqModal(false)}
    >
      <div
        className=" bg-white py-10 px-10 max-md:px-5 flex-col gap-10 max-md:gap-5 flex items-center justify-start max-md:items-start rounded-lg max-md:w-full"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center max-md:items-start justify-center max-w-[584px] max-md:max-w-full">
          <span className="font-cormo text-[64px]/[120%] max-md:text-[32px]/[120%] italic">
            Frequently
          </span>
          <span className="font-subito font-bold text-[64px]/[120%] max-md:text-[32px]/[120%]">
            Asked Questions
          </span>
        </div>
        <div className="flex max-lg:flex-col gap-10 max-md:gap-3 items-center w-full">
          <div className="flex flex-col gap-6 max-w-[588px] max-md:max-w-full max-h-[450px] overflow-scroll">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="w-full flex items-center max-md:items-start max-md:flex-col gap-25 max-md:gap-3 rounded-[10px] max-md:rounded-lg cursor-pointer justify-between transition-transform duration-400"
              >
                <div
                  className={`p-4.5 max-md:p-1.5 w-full flex items-center max-md:items-start max-md:flex-col gap-25 max-md:gap-3 rounded-[10px] max-md:rounded-lg cursor-pointer justify-between ${
                    activeIndex === faq.id
                      ? "bg-[#02DDEF] text-black"
                      : "bg-transparent text-black border-black border"
                  }`}
                  onClick={() => setActiveIndex(faq.id)}
                >
                  <div className="w-full flex items-center justify-between max-md:justify-between gap-3">
                    <h3 className="text-[20px]/[120%] max-md:text-[14px]/[120%] font-subito font-medium w-[392px] max-md:w-full">
                      {faq.question}
                    </h3>
                    <span className="flex items-center justify-center p-2">
                      <IoIosArrowForward
                        className={`text-2xl max-md:text-xl ${activeIndex === faq.id && "rotate-90 transform transition-transform duration-300"}`}
                      />
                    </span>
                  </div>
                </div>
                {activeIndex === faq.id && (
                  <div
                    className="lg:hidden  w-full max-md:h-auto max-w-[584px] max-md:max-w-full bg-black py-3 px-10 max-md:px-2 rounded-lg"
                    style={{
                      backgroundImage: `url(${Cardbg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <p className=" text-white text-[30px]/[140%] max-md:text-[12px]/[140%] font-light font-subito">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div
            className="h-[550px] max-md:h-[300px] max-md:hidden max-w-[584px] max-md:max-w-full bg-black py-12.5 px-10 max-md:px-2 rounded-[28px]"
            style={{
              backgroundImage: `url(${Cardbg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {(() => {
              const selectedFaq = faqData.find((f) => f.id === activeIndex);
              return (
                selectedFaq && (
                  <p className=" text-white text-[30px]/[140%] max-md:text-[24px]/[140%] font-light font-subito">
                    {selectedFaq.answer}
                  </p>
                )
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
}
