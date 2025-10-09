import displayBg from "../../assets/company_op/discover.webp";
import Discoverbg from "../../assets/company_op/discoverbg.webp";
import displayWide from "../../assets/company_op/discoverwide.webp";
import Team from "../../assets/company_op/team.webp";
import TeamBG from "../../assets/company_op/teambg.webp";
import Button from "../custom/button";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

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
  const [active, setActive] = useState(false);

  const handleSectionClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    const isStepContainer = target.closest(".step-container");

    if (!isStepContainer) {
      setCurrentA(-1);
      setCurrentB(-1);
      setActive(false);
    }
  };
  return (
    <section
      className="bg-white pt-15 pl-15"
      style={{
        backgroundImage: `url(${Discoverbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "center",
      }}
    >
      <div className="flex flex-col gap-11" onClick={handleSectionClick}>
        <h2 className="font-cormo text-[90px]/[120%] italic text-start text-black pl-10">
          How We <strong>Work</strong>
        </h2>
        <div className="flex flex-col gap-10">
          <div className="flex gap-10 justify-start px-10 relative">
            {data1.map((item, idx) => (
              <div
                key={idx}
                className={`flex step-container ${
                  active && idx === currentA
                    ? idx === 1
                      ? "flex-row-reverse items-center justify-between"
                      : "flex-row items-center justify-between"
                    : "flex-row items-center justify-center"
                } gap-4 rounded-3xl cursor-pointer transition-all duration-300 p-12 ${
                  idx === currentA
                    ? "h-[312px] absolute top-0 left-10 right-10 z-30"
                    : "w-[482px] h-[312px] relative z-10"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentA(idx);
                  setActive(true);
                }}
                style={{
                  backgroundImage: `url(${
                    active && idx === currentA ? displayWide : displayBg
                  })`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "contain",
                  width: idx === currentA ? "calc(100% - 120px)" : "482px",
                }}
              >
                <h3 className="font-cormo text-[90px]/[120%] italic text-white">
                  {item.label}
                </h3>
                {active && idx === currentA && (
                  <p className="text-white text-4xl font-light max-w-[500px]">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-10 justify-end pr-20 relative">
            {data2.map((item, idx) => (
              <div
                key={idx}
                className={`step-container flex ${
                  active && idx === currentB
                    ? idx === 1
                      ? "flex-row-reverse items-center justify-between"
                      : "flex-row items-center justify-between"
                    : "flex-row items-center justify-center"
                } gap-4 rounded-3xl cursor-pointer transition-all duration-300 p-12 ${
                  idx === currentB
                    ? "h-[312px] absolute top-0 left-10 right-10 z-30"
                    : "w-[482px] h-[312px] relative z-10"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentB(idx);
                  setActive(true);
                }}
                style={{
                  backgroundImage: `url(${
                    active && idx === currentB ? displayWide : displayBg
                  })`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "contain",
                  width: idx === currentB ? "calc(100% - 120px)" : "482px",
                }}
              >
                <h3 className="font-cormo text-[90px]/[120%] italic text-white">
                  {item.label}
                </h3>
                {active && idx === currentB && (
                  <p className="text-white text-4xl font-light max-w-[500px]">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-60 mb-10 flex flex-col gap-11">
        <h2 className="font-cormo text-[90px]/[120%] italic text-start text-black pl-10">
          Meet Our <strong>Team</strong>
        </h2>
        <div className="flex flex-row gap-8 overflow-x-scroll">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-16.5 px-9 pt-9 pb-24 flex-shrink-0 min-w-[300px]"
              style={{
                backgroundImage: `url(${TeamBG})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-70 h-70 rounded-full object-cover"
              />
              <div className="flex flex-col items-center justify-center pb-8 max-w-[262px] gap-3">
                <span className="text-5xl text-white font-medium text-center">
                  {member.name}
                </span>
                <span className="text-xl text-white font-light">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center my-20">
          <Button
            variant="secondary"
            onClick={() => {
              console.log("View All Case Studies");
            }}
            className=" text-black border-black py-3 px-11 flex items-center gap-5 rounded-full font-medium text-2lg"
          >
            <span className="text-[28px]/[120%] italic">View Teams</span>
            <FaArrowRight className="text-[30px] text-black" />
          </Button>
        </div>
      </div>
    </section>
  );
}
