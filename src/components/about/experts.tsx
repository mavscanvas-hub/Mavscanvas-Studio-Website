import Herobg from "../../assets/about/expertbg.png";
import Team from "../../assets/company_op/team.webp";
import ProcessBg from "../../assets/about/processbg.png";
import Zbg from "../../assets/about/zillowbg.png";
import TeamBG from "../../assets/company_op/teambg.webp";

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
        <div className="grid grid-cols-3 max-md:flex max-md:items-center team-scroll max-md:overflow-scroll gap-18 max-md:gap-3 pt-17 max-md:pt-8 px-15 max-md:px-5">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-16.5 max-md:gap-6 px-9 max-md:px-3.5 pt-9 max-md:pt-3.5 pb-24 max-md:pb-9 flex-shrink-0 min-w-[300px] max-md:min-w-[150px]"
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
                className="w-70 h-70 max-md:w-[124px] max-md:h-[124px] rounded-full object-cover"
              />
              <div className="flex flex-col items-center justify-center pb-8 max-md:pb-0 max-w-[262px] gap-3 max-md:gap-1 max-md:w-[96px]">
                <span className="text-5xl max-md:text-[18px]/[120%] text-white font-medium text-center">
                  {member.name}
                </span>
                <span className="text-xl max-md:text-[8px]/[120%] text-white font-light">
                  {member.role}
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
