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

export default function FAQModal() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <div
      className="fixed inset-0 bg-white z-50 pt-15 flex-col gap-15 flex items-center justify-start"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center max-w-[584px]">
        <span className="font-cormo text-[70px]/[120%] italic">Frequently</span>
        <span className="font-subito font-bold text-[70px]/[120%]">
          Asked Questions
        </span>
      </div>
      <div className="flex gap-15 items-center">
        <div className="flex flex-col gap-6 max-w-[588px] max-h-[450px] overflow-scroll">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`p-4.5  flex items-center gap-25 rounded-[10px] cursor-pointer justify-between ${
                activeIndex === faq.id
                  ? "bg-[#02DDEF] text-black"
                  : "bg-transparent text-black border-black border"
              }`}
              onClick={() =>
                setActiveIndex(activeIndex === faq.id ? null : faq.id)
              }
            >
              <h3 className="text-[20px]/[120%] font-subito font-medium w-[392px]">
                {faq.question}
              </h3>
              <span className="flex items-center justify-center p-2">
                <IoIosArrowForward className="text-2xl" />
              </span>
            </div>
          ))}
        </div>
        <div
          className="h-[550px] max-w-[584px] bg-black py-12.5 px-10 rounded-[28px]"
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
                <p className=" text-white text-[30px]/[140%] font-light font-subito">
                  {selectedFaq.answer}
                </p>
              )
            );
          })()}
        </div>
      </div>
    </div>
  );
}
