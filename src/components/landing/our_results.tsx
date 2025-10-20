import { Link, useNavigate } from "react-router-dom";
import cardBg from "../../assets/company_op/card-bg.webp";
import sectionBg from "../../assets/company_op/result-bg.webp";
import Button from "../custom/button";
import { FaArrowRight } from "react-icons/fa6";
import { useRef, useEffect } from "react";

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
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;

      cardRefs.current.forEach((card) => {
        if (!card) return;
        const r = card.getBoundingClientRect();
        const cardCenter = r.left + r.width / 2;
        let norm = (cardCenter - centerX) / (rect.width / 2); // -1..1
        norm = Math.max(-1, Math.min(1, norm));

        const rotate = norm * 6; // degrees
        const translateY = -Math.abs(norm) * 8; // px
        const translateX = norm * -6; // px

        card.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`;
      });
    };

    const onScroll = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };

    // initial layout
    update();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="bg-black pt-15 max-md:pt-8 max-md:pb-[75px] pb-64 flex flex-col gap-15 max-md:gap-9"
      style={{
        backgroundImage: `url(${sectionBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="flex flex-col gap-5">
        <h2 className="font-cormo text-[90px]/[120%] max-md:text-[36px]/[120%] italic text-start text-white px-15 max-md:px-5">
          <span className="whitespace-nowrap">
            Our&nbsp;
            <strong className="font-extrabold font-subito not-italic">
              Results
            </strong>
          </span>
        </h2>

        {/* outer clip prevents page overflow, inner container is scrollable */}
        <div className="w-full overflow-x-hidden">
          <div
            ref={containerRef}
            className="flex flex-row pl-15 max-md:px-5 pr-15 items-center overflow-x-auto results-scroll py-10 max-md:py-5 flex-nowrap"
          >
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  if (el) cardRefs.current[idx] = el;
                }}
                className={`flex flex-col gap-10 max-md:gap-3.5 items-start pt-5 max-md:pt-[7px] max-md:pl-[9px] pl-[30px] pr-10 max-md:pr-[9px] pb-4 bg-white rounded-3xl max-md:rounded-lg shadow-[#000000CC] shadow-2xl transition-transform duration-200 will-change-transform ${
                  idx !== 0 ? "-rotate-[7deg] z-5" : ""
                }`}
                style={{ transform: "translate(0px,0px) rotate(0deg)" }}
              >
                <div className="bg-black rounded-full flex items-center justify-center text-white font-medium text-lg max-md:text-[8px]/[120%] px-6 max-md:px-2 py-2 max-md:py-[2.5px]">
                  WEBSITE DEVELOPMENT
                </div>
                <div className="flex flex-col gap-4">
                  <p className="text-black text-[50px]/[120%] max-md:text-[16px]/[120%] italic font-light">
                    We Turned a <strong className="font-medium">Website</strong>{" "}
                    into a{" "}
                    <strong className="font-medium">Revenue Engine</strong>
                  </p>
                  <div
                    style={{
                      backgroundImage: `url(${cardBg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "contain",
                    }}
                    className="bg-gray-100 max-md:h-[75px] h-[235px] max-md:w-[123px] w-[386px] rounded-xl"
                  />
                </div>
                <Link
                  to={"/"}
                  className="mt-1 flex justify-center items-center w-full"
                >
                  <span className="text-[#317AE8] text-xl max-md:text-[6px]/[120%]">
                    see how
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-20 max-md:mt-9">
          <Button
            variant="secondary"
            onClick={() => {
              navigate("/work");
            }}
            className="border hover:bg-white hover:text-black transition-colors duration-500 ease-in max-md:border-[0.26px] border-white text-white py-2.5 max-md:py-1 max-md:px-4 px-10 rounded-full flex gap-3.5 items-center font-medium  max-md:italic"
          >
            <span className="text-[28px]/[120%] max-md:text-[10px]/[120%] italic">
              Our Works
            </span>
            <FaArrowRight className="text-[30px] max-md:text-lg" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-5 px-15 max-md:px-5">
        <h2 className="font-cormo text-[90px]/[120%] max-md:text-[36px]/[120%] italic text-start text-white ">
          <span>The&nbsp;</span>
          <strong className="font-subito font-extrabold not-italic">
            Outcomes
          </strong>
        </h2>
        <div className="grid grid-cols-3 items-center px-15 max-md:px-1 mt-25 max-md:mt-7 relative">
          <div className="absolute inset-y-0 left-[36%] max-md:left-[34%] w-px bg-white" />
          <div className="absolute inset-y-0 left-[64%] max-md:left-[66%] w-px bg-white" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[1.1px] bg-white w-[80%] max-md:w-[90%]"></div>
          {outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-18 max-md:p-8 relative"
            >
              <span className="text-[108px]/[120%] max-md:text-[34px]/[120%] font-black text-white font-subito">
                {outcome.value}
              </span>
              <span className="text-4xl/[120%] max-md:text-[12px]/[120%] text-white font-light text-center font-subito">
                {outcome.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
