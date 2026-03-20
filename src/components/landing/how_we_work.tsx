import displayBg from "../../assets/company_op/discover.webp";
import displayWide from "../../assets/company_op/discoverwide.webp";
import TeamBG from "../../assets/company_op/teambg.webp";
import Button from "../custom/button";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { TEAM_COLLECTION_ID } from "../../constant";
import { useTeamContext } from "../../hooks/useTeamContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export default function HowWeWork() {
  const [currentA, setCurrentA] = useState(-1);
  const [currentB, setCurrentB] = useState(-1);
  const [activeA, setActiveA] = useState(false);
  const [activeB, setActiveB] = useState(false);
  const [teamSlidesToShow, setTeamSlidesToShow] = useState(3);
  const [teamSlidesToScroll, setTeamSlidesToScroll] = useState(1);
  const { getAllTeamMembers, getCollectionDetails, team } = useTeamContext();

  useEffect(() => {
    const updateSliderByScreenSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 768) {
        setTeamSlidesToShow(2);
        setTeamSlidesToScroll(1);
        return;
      }

      if (screenWidth <= 1024) {
        setTeamSlidesToShow(2);
        setTeamSlidesToScroll(1);
        return;
      }

      setTeamSlidesToShow(3);
      setTeamSlidesToScroll(2);
    };

    updateSliderByScreenSize();
    window.addEventListener("resize", updateSliderByScreenSize);

    return () => {
      window.removeEventListener("resize", updateSliderByScreenSize);
    };
  }, []);

  const teamSliderSettings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: teamSlidesToShow,
    slidesToScroll: teamSlidesToScroll,
    draggable: true,
  };

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
    getCollectionDetails(TEAM_COLLECTION_ID);
    getAllTeamMembers(TEAM_COLLECTION_ID);
  }, []);

  return (
    <section className="bg-white w-full how-we-work-bg pt-15 max-md:pt-9 max-md:pb-2">
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
                    ? "h-[312px] max-md:h-[82px] absolute top-0 left-10 max-md:left-8 right-10 z-30 slide-in-from-right"
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
                className={`flex step-container lg:hover:scale-102 ${
                  activeB && idx === currentB
                    ? idx === 1
                      ? "flex-row-reverse items-center justify-between"
                      : "flex-row items-center justify-between"
                    : "flex-row items-center justify-center"
                } gap-4 rounded-3xl max-md:rounded-lg cursor-pointer transition-all duration-300 p-12 max-md:p-3 ${
                  idx === currentB
                    ? "h-[312px] max-md:h-[82px] absolute top-0 left-10 right-10 max-md:right-8 z-30 slide-in-from-right"
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
      <div className="mt-60 max-md:mt-22.5 mb-10 max-md:mb-4 flex flex-col gap-11 max-md:gap-9">
        <h2 className="font-cormo text-[90px]/[120%] max-md:text-[36px]/[120%] italic text-start text-black pl-15 max-md:pl-4.5">
          Meet Our{" "}
          <strong className="font-subito font-extrabold not-italic">
            Team
          </strong>
        </h2>
        <div className="overflow-visible w-full">
          <Slider
            key={`${team.length}-${teamSlidesToShow}-${teamSlidesToScroll}`}
            {...teamSliderSettings}
            className="team-slider"
          >
            {team.map((member, idx) => (
              <div key={idx} className="h-full">
                <div
                  className="flex flex-col select-none items-center justify-start w-full h-full gap-16.5 max-md:gap-10 px-8 max-md:px-2 pt-9 max-md:pt-5 pb-10 max-md:pb-10"
                  style={{
                    backgroundImage: `url(${TeamBG})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                  }}
                >
                  <div className="w-[340px] h-[340px] max-md:w-[140px] max-md:h-[140px] rounded-full overflow-hidden shrink-0">
                    <img
                      src={member.fieldData.image.url}
                      alt={member.fieldData.name}
                      loading="lazy"
                      decoding="async"
                      style={{ userSelect: "none" }}
                      className="block w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col items-center font-subito justify-start pb-8 max-md:pb-0 max-w-[262px] gap-3 max-md:gap-1 max-md:w-[96px]">
                    <span className="text-5xl/[120%] max-md:text-[18px]/[120%] text-white font-medium text-center">
                      {member.fieldData["full-name"]}
                    </span>
                    <span className="text-xl/[120%] max-md:text-[8px]/[120%] text-white font-light">
                      {member.fieldData.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            {/* <div key="spacer" aria-hidden="true" /> */}
          </Slider>
        </div>
        <div className="flex justify-center my-20 max-md:mt-5 max-md:mb-5">
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
