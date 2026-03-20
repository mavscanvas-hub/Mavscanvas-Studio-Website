import Herobg from "../../assets/about/expertbg.png";
import ProcessBg from "../../assets/about/processbg.png";
import Zbg from "../../assets/about/zillowbg.png";
import TeamBG from "../../assets/company_op/teambg.webp";
import { useTeamContext } from "../../hooks/useTeamContext";
import { TEAM_COLLECTION_ID } from "../../constant";
import { useEffect } from "react";

const process = [
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
  {
    label: "Build",
    content: "We transform ideas into functional, high-performance solutions.",
  },
  {
    label: "Grow",
    content:
      "We launch, optimize, and scale with marketing, analytics, and iteration.",
  },
];

export default function Experts() {
  const { team, getAllTeamMembers } = useTeamContext();

  useEffect(() => {
    if (!TEAM_COLLECTION_ID) return;
    getAllTeamMembers(TEAM_COLLECTION_ID);
  }, []);

  return (
    <section
      className="bg-black pt-22.5 max-md:pt-6 pb-27 max-md:pb-12.5 flex flex-col gap-48 max-md:gap-12 w-full font-subito"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top-left",
        backgroundSize: "contain",
      }}
    >
      <div className="flex flex-col w-full ">
        <div className="text-white flex flex-col px-15 max-md:px-5">
          <h3 className="text-[90px]/[120%] max-md:text-[36px]/[120%] font-cormo italic">
            Meet the Experts
          </h3>
          <h2 className="text-[90px]/[120%] max-md:text-[36px]/[120%] font-bold">
            Behind the Work
          </h2>
        </div>
        <div
          className="grid grid-cols-3 justify-items-center items-stretch max-md:flex max-md:items-stretch max-md:overflow-x-auto max-md:overflow-y-hidden max-md:scrollbar-hide gap-16 max-md:gap-3 pt-17 max-md:pt-8 px-15 max-md:px-5"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex  flex-col items-center justify-between h-full min-h-[600px] max-md:min-h-[280px] w-full max-md:w-[170px] max-md:min-w-[170px] px-5 max-md:px-3 pt-6 max-md:pt-5 pb-16 max-md:pb-12"
              style={{
                backgroundImage: `url(${TeamBG})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
              }}
            >
              {/* Image */}
              <div className="w-[280px] h-[280px] max-md:w-[120px] max-md:h-[120px] rounded-full overflow-hidden shrink-0">
                <img
                  src={member.fieldData.image.url}
                  alt={member.fieldData.name}
                  loading="lazy"
                  decoding="async"
                  style={{ userSelect: "none" }}
                  className="block w-full h-full object-cover object-top"
                />
              </div>

              {/* Text — justify-between pushes this to the bottom */}
              <div className="flex flex-col items-center text-center gap-3 max-md:gap-1">
                <span className="text-5xl max-md:text-[18px] leading-[120%] text-white font-medium">
                  {member.fieldData["full-name"]}
                </span>
                <span className="text-xl max-md:text-[8px] leading-[120%] text-white font-light">
                  {member.fieldData.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex flex-col gap-17 px-15 max-md:px-4 pb-50 max-md:pb-12.5 w-full"
        style={{
          backgroundImage: `url(${Zbg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="text-white flex flex-col">
          <h3 className="text-[90px]/[120%] max-md:text-[36px]/[120%] font-cormo italic">
            This is our
          </h3>
          <h2 className="text-[90px]/[120%] max-md:text-[36px]/[120%] font-bold font-subito">
            Success Process
          </h2>
        </div>
        <div className="flex flex-col gap-15 max-md:gap-7 w-full">
          {process.map((step, idx) => (
            <div
              key={idx}
              className={`flex items-center max-md:flex-col ${
                idx % 2 === 0 ? "max-md:items-start" : "max-md:items-end"
              } max-md:gap-3 w-full gap-17 ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <h3
                className={`text-[90px]/[120%] max-md:text-[31px]/[120%] text-white`}
              >
                {step.label}
              </h3>
              <span
                className="py-18 max-md:py-6 pl-18 pr-55 max-md:pr-24 max-md:pl-6 rounded-[30px]"
                style={{
                  backgroundImage: `url(${ProcessBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              >
                <p className="text-[35px]/[120%] max-md:text-[12px]/[120%] max-md:w-full max-w-[634px] font-light text-white font-subito">
                  {step.content}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
