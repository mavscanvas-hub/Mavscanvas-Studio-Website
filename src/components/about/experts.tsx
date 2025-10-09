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
      className="bg-black pt-22.5 pb-27 flex flex-col gap-48 w-full"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top-left",
        backgroundSize: "contain",
      }}
    >
      <div className="flex flex-col w-full px-15">
        <div className="text-white flex flex-col">
          <h3 className="text-[90px]/[120%] font-cormo italic">
            Meet the Experts
          </h3>
          <h2 className="text-[90px]/[120%] font-bold">Behind the Work</h2>
        </div>
        <div className="grid grid-cols-3 gap-18 pt-17">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-full items-center gap-16.5 px-9 pt-9 pb-24 min-w-[300px]"
              style={{
                backgroundImage: `url(${TeamBG})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
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
      </div>
      <div
        className="flex flex-col gap-17 px-15 pb-50 w-full"
        style={{
          backgroundImage: `url(${Zbg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "fit",
        }}
      >
        <div className="text-white flex flex-col">
          <h3 className="text-[90px]/[120%] font-cormo italic">This is our</h3>
          <h2 className="text-[90px]/[120%] font-bold">Success Process</h2>
        </div>
        <div className="flex flex-col gap-15 w-full">
          {process.map((step, idx) => (
            <div
              key={idx}
              className={`flex items-center w-full gap-17 ${
                idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <h3 className={`text-[90px]/[120%] font- text-white`}>
                {step.label}
              </h3>
              <span
                className="py-18 pl-18 pr-55 rounded-[30px]"
                style={{
                  backgroundImage: `url(${ProcessBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                }}
              >
                <p className="text-[35px]/[120%] max-w-[634px] font-light text-white">
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
