import cardbg from "../../assets/about/missionbg.png";
import MissionBg from "../../assets/about/mission-bg.png";
import line from "../../assets/about/curvedline.png";
import Core from "../../assets/about/corebg.png";

const data = [
  {
    label: "Mission",
    content:
      "To empower brands with digital solutions that inspire trust, drive engagement, and fuel growth.",
  },
  {
    label: "Vision",
    content:
      "To empower brands with digital solutions that inspire trust, drive engagement, and fuel growth.",
  },
];
export default function Mission() {
  return (
    <section
      className="bg-white pt-22.5 px-15 pb-27 flex gap-15 flex-col items-center"
      style={{
        backgroundImage: `url(${MissionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full flex flex-col gap-15">
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-full bg-black flex items-center py-6 rounded-[400px] gap-36 ${
              index % 2 === 0
                ? "flex-row pr-32 pl-6"
                : "flex-row-reverse pl-32 pr-6"
            } `}
            style={{
              backgroundImage: `url(${cardbg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="bg-white rounded-[150px] min-w-[465px] h-[310px] flex items-center justify-center">
              <h3
                className={`text-[80px]/[120%] font-bold ${
                  index % 2 === 0 ? "text-[#123C53]" : "text-[#410441]"
                }`}
              >
                {item.label}
              </h3>
            </div>
            <p className="text-[35px]/[120%] max-w-[638px] text-white">
              {item.content}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-start relative mt-20">
        <div
          className="absolute p-4.5 -top-22 rounded-[120px] bg-black "
          style={{
            backgroundImage: `url(${Core})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-[120px] px-25 py-11">
            <h2 className="text-[80px]/[120%] font-bold text-[#123C53]">
              Core Values
            </h2>
          </div>
        </div>
        <div className="flex-1">
          <img src={line} alt="curved line" className="w-full" />
          <span className="absolute -top-11 left-[70%] bg-black -translate-x-1/2 px-22.5 rounded-full py-7 ">
            <h4 className="bg-[linear-gradient(90deg,#02DDEF_0%,#FA01F0_100%)] text-transparent bg-clip-text text-[40px]/[120%] font-bold">
              Creativity
            </h4>
          </span>
          <span className="absolute -bottom-10 left-[12%] bg-black -translate-x-1/2 px-22.5 rounded-full py-7 ">
            <h4 className="bg-[linear-gradient(90deg,#02DDEF_0%,#FA01F0_100%)] text-transparent bg-clip-text text-[40px]/[120%] font-bold">
              Impact
            </h4>
          </span>
          <span className="absolute -bottom-10 left-[44%] bg-black -translate-x-1/2 px-22.5 rounded-full py-7 ">
            <h4 className="bg-[linear-gradient(90deg,#02DDEF_0%,#FA01F0_100%)] text-transparent bg-clip-text text-[40px]/[120%] font-bold">
              Innovation
            </h4>
          </span>
          <span className="absolute -bottom-10 -right-8 bg-black -translate-x-1/2 px-22.5 rounded-full py-7 ">
            <h4 className="bg-[linear-gradient(90deg,#02DDEF_0%,#FA01F0_100%)] text-transparent bg-clip-text text-[40px]/[120%] font-bold">
              Integrity
            </h4>
          </span>
        </div>
      </div>
    </section>
  );
}
