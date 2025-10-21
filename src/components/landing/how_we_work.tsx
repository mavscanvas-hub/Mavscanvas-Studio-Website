import displayBg from "../../assets/company_op/discover.webp";
import displayWide from "../../assets/company_op/discoverwide.webp";
import Team from "../../assets/company_op/team.webp";
import TeamBG from "../../assets/company_op/teambg.webp";
import Button from "../custom/button";
import { FaArrowRight } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";

const data1 = [
  {
    label: "Discover",
    content:
      "We dive deep to understand your goals, audience, and opportunities.",
  },
  {
    label: "Design",
    content:
      "We create prototypes, visual systems, and experiences that connect.",
  },
];
const data2 = [
  {
    label: "Build",
    content:
      "We dive deep to understand your goals, audience, and opportunities.",
  },
  {
    label: "Grow",
    content:
      "We create prototypes, visual systems, and experiences that connect.",
  },
];

const team = [
  {
    name: "Daniel Kingsley",
    role: "Social Media Manager",
    image: Team,
  },
  {
    name: "Stephanie Okolie",
    role: "Brand specialist",
    image: Team,
  },
  {
    name: "Ruth Diamond",
    role: "Virtual assistant",
    image: Team,
  },
  {
    name: "John Doe",
    role: "CEO",
    image: Team,
  },
  {
    name: "John Doe",
    role: "CEO",
    image: Team,
  },
  {
    name: "John Doe",
    role: "CEO",
    image: Team,
  },
];

export default function HowWeWork() {
  const [currentA, setCurrentA] = useState(-1);
  const [currentB, setCurrentB] = useState(-1);
  const [activeA, setActiveA] = useState(false);
  const [activeB, setActiveB] = useState(false);
  const teamRef = useRef<HTMLDivElement | null>(null);

  const handleSectionClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isStepContainer = target.closest(".step-container");

    if (!isStepContainer) {
      setCurrentA(-1);
      setCurrentB(-1);
      setActiveA(false);
      setActiveB(false);
    }
  };

  useEffect(() => {
    const container = teamRef.current;
    if (!container) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDown = true;
      startX = e.clientX;
      scrollLeft = container.scrollLeft;
      try {
        // optional pointer capture for smoother dragging
        (container as any).setPointerCapture?.((e as any).pointerId);
      } catch {}
      container.classList.add("dragging");
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDown) return;
      const x = e.clientX;
      const walk = startX - x;
      container.scrollLeft = scrollLeft + walk;
    };

    const endDrag = () => {
      isDown = false;
      try {
        (container as any).releasePointerCapture?.();
      } catch {}
      container.classList.remove("dragging");
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", endDrag);
    container.addEventListener("pointercancel", endDrag);
    container.addEventListener("pointerleave", endDrag);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", endDrag);
      container.removeEventListener("pointercancel", endDrag);
      container.removeEventListener("pointerleave", endDrag);
    };
  }, []);

  return (
    <section className="bg-white how-we-work-bg pt-15 max-md:pt-9  max-md:pb-13 ">
      <div
        className="flex flex-col gap-15 pl-15 max-md:pl-4.5"
        onClick={handleSectionClick}
      >
        <h2 className="font-cormo text-[90px]/[120%] max-md:text-[36px]/[120%] italic text-start text-black">
          How We{" "}
          <strong className="font-subito font-extrabold not-italic">
            Work
          </strong>
        </h2>
        <div className="flex flex-col gap-10 max-md:gap-2.5 justify-center max-md:mb-12.5">
          <div className="flex gap-10 max-md:gap-4 justify-start px-10 max-md:px-8 relative">
            {data1.map((item, idx) => (
              <div
                key={idx}
                className={`flex step-container hover:scale-105 ${
                  activeA && idx === currentA
                    ? idx === 1
                      ? "flex-row-reverse items-center justify-between"
                      : "flex-row items-center justify-between"
                    : "flex-row items-center justify-center"
                } gap-4 rounded-3xl max-md:rounded-lg cursor-pointer transition-all duration-300 p-12 max-md:p-3 ${
                  idx === currentA
                    ? "h-[312px] max-md:h-[82px] absolute top-0 left-10 right-10 z-30 slide-in-from-right"
                    : "w-[482px] max-md:w-[126px] h-[312px] max-md:h-[82px] relative z-10 "
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (idx === currentA && activeA) {
                    setCurrentA(-1);
                    setActiveA(false);
                  } else {
                    setCurrentA(idx);
                    setActiveA(true);
                  }
                }}
                style={{
                  backgroundImage: `url(${
                    activeA && idx === currentA ? displayWide : displayBg
                  })`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width:
                    idx === currentA
                      ? "calc(100% - 120px) max-md:calc(100% - 30px)"
                      : "482px max-md:126px",
                }}
              >
                <h3 className="font-subito text-[90px]/[120%] max-md:text-[24px]/[120%] text-white">
                  {item.label}
                </h3>
                {activeA && idx === currentA && (
                  <p className="text-white font-subito text-4xl max-md:text-[12px]/[120%] font-light max-w-[500px] max-md:w-full">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-10 max-md:gap-2.5 justify-end pr-20 max-md:pr-8.5 relative">
            {data2.map((item, idx) => (
              <div
                key={idx}
                className={`flex step-container  hover:scale-105 ${
                  activeB && idx === currentB
                    ? idx === 1
                      ? "flex-row-reverse items-center justify-between"
                      : "flex-row items-center justify-between"
                    : "flex-row items-center justify-center"
                } gap-4 rounded-3xl max-md:rounded-lg cursor-pointer transition-all duration-300 p-12 max-md:p-3 ${
                  idx === currentB
                    ? "h-[312px] max-md:h-[82px] absolute top-0 left-10 right-10 z-30 slide-in-from-right"
                    : "w-[482px] max-md:w-[126px] h-[312px] max-md:h-[82px] relative z-10 "
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (idx === currentB && activeB) {
                    setCurrentB(-1);
                    setActiveB(false);
                  } else {
                    setCurrentB(idx);
                    setActiveB(true);
                  }
                }}
                style={{
                  backgroundImage: `url(${
                    activeB && idx === currentB ? displayWide : displayBg
                  })`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  width:
                    idx === currentB
                      ? "calc(100% - 120px) max-md:calc(100% - 30px)"
                      : "482px max-md:126px",
                }}
              >
                <h3 className="font-subito text-[90px]/[120%] max-md:text-[24px]/[120%] text-white">
                  {item.label}
                </h3>
                {activeB && idx === currentB && (
                  <p className="text-white text-4xl max-md:text-[12px]/[120%] font-light font-subito max-w-[500px] max-md:w-full">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-60 max-md:mt-22.5 mb-10 flex flex-col gap-11 max-md:gap-9">
        <h2 className="font-cormo text-[90px]/[120%] max-md:text-[36px]/[120%] italic text-start text-black pl-15 max-md:pl-4.5">
          Meet Our{" "}
          <strong className="font-subito font-extrabold not-italic">
            Team
          </strong>
        </h2>
        <div
          ref={teamRef}
          className="flex results-scroll flex-row gap-8 max-md:gap-3 overflow-x-scroll team-scroll pl-15 max-md:pl-4.5 pr-15 max-md:pr-5"
        >
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col select-none items-center gap-16.5 max-md:gap-6 px-9 max-md:px-3.5 pt-9 max-md:pt-3.5 pb-24 max-md:pb-9 flex-shrink-0 min-w-[300px] max-md:min-w-[150px]"
              style={{
                backgroundImage: `url(${TeamBG})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                loading="lazy"
                decoding="async"
                draggable={false}
                style={{ userSelect: "none" }}
                className="w-70 h-70 max-md:w-[124px] max-md:h-[124px] rounded-full object-cover"
              />
              <div className="flex flex-col items-center font-subito justify-center pb-8 max-md:pb-0 max-w-[262px] gap-3 max-md:gap-1 max-md:w-[96px]">
                <span className="text-5xl/[120%] max-md:text-[18px]/[120%] text-white font-medium text-center">
                  {member.name}
                </span>
                <span className="text-xl/[120%] max-md:text-[8px]/[120%] text-white font-light">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-20 max-md:mt-12 max-md:mb-10">
          <Button
            variant="secondary"
            onClick={() => {
              console.log("View All Case Studies");
            }}
            className="border hover:bg-black hover:text-white transition-colors duration-100 max-md:border-[0.26px] border-black text-black py-2.5 max-md:py-1 max-md:px-4 px-10 rounded-full flex gap-3.5 items-center font-bold  max-md:italic"
          >
            <span className="text-[28px]/[120%] max-md:text-[10px]/[120%] italic font-subito">
              View Teams
            </span>
            <FaArrowRight className="text-[30px] max-md:text-lg" />
          </Button>
        </div>
      </div>
    </section>
  );
}
