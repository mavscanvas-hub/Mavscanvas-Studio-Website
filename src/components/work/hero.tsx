import Herobg from "../../assets/work/work_bg.png";
import work1 from "../../assets/work/work_1.png";
import work2 from "../../assets/work/work_2.png";
import Button from "../custom/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const categories = [
  "Website Development",
  "Digital Marketing",
  "Social Media Management",
  "Branding",
  "Digital Marketing Design",
  "ui/ux",
];

const works = [
  {
    id: 1,
    category: "Website Development",
    title: "Healthcare Brand Z Website Rebuild",
    timeline: "10 Weeks",
    problem:
      "The client's website was outdated, slow, and inaccessible on mobile. Search rankings suffered, bounce rates were high, and patients couldn't easily access information or book appointments.",
    solution:
      "The client's website was rebuilt with a focus on speed, accessibility, and user experience. The new design is mobile-friendly, loads quickly, and provides easy access to information and appointment booking.",
    project_image: [work1, work2, work1, work2],
  },
  {
    id: 2,
    category: "Website Development",
    title: "Healthcare Brand Z Website Rebuild",
    timeline: "10 Weeks",
    problem:
      "The client's website was outdated, slow, and inaccessible on mobile. Search rankings suffered, bounce rates were high, and patients couldn't easily access information or book appointments.",
    solution:
      "The client's website was rebuilt with a focus on speed, accessibility, and user experience. The new design is mobile-friendly, loads quickly, and provides easy access to information and appointment booking.",
    project_image: [work1, work2, work1],
  },
  {
    id: 3,
    category: "Branding",
    title: "Healthcare Brand Z Website Rebuild",
    timeline: "10 Weeks",
    problem:
      "The client's website was outdated, slow, and inaccessible on mobile. Search rankings suffered, bounce rates were high, and patients couldn't easily access information or book appointments.",
    solution:
      "The client's website was rebuilt with a focus on speed, accessibility, and user experience. The new design is mobile-friendly, loads quickly, and provides easy access to information and appointment booking.",
    project_image: [work1, work2, work1, work2],
  },
  {
    id: 4,
    category: "ui/ux",
    title: "Healthcare Brand Z design",
    timeline: "10 Weeks",
    problem:
      "The client's website was outdated, slow, and inaccessible on mobile. Search rankings suffered, bounce rates were high, and patients couldn't easily access information or book appointments.",
    solution:
      "The client's website was rebuilt with a focus on speed, accessibility, and user experience. The new design is mobile-friendly, loads quickly, and provides easy access to information and appointment booking.",
    project_image: [work1, work2, work1, work2],
  },
];

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const filteredWorks = works.filter(
    (work) => work.category === activeCategory
  );
  return (
    <section
      className="bg-black pt-[245px] max-md:pt-22  flex flex-col gap-20 max-md:gap-8 pb-40 max-md:pb-14 bg-top-left font-subito"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top left",
      }}
    >
      <div className="flex flex-col px-15 max-md:px-4">
        <h2 className="text-white text-[90px]/[120%] max-md:text-[36px]/[120%] font-cormo italic">
          Our Work,
        </h2>
        <h2 className="text-white text-[90px]/[120%] max-md:text-[36px]/[120%] font-extrabold">
          Your Proof
        </h2>
      </div>
      <div className="flex flex-wrap max-md:flex-row gap-x-8 max-md:gap-x-1 max-md:gap-y-2 gap-y-9 px-15 max-md:px-4 pr-[150px] max-md:pr-0">
        {categories.map((category) => (
          <button
            key={category}
            className={`${
              category === activeCategory
                ? "bg-[#02DDEF] text-black font-medium"
                : "bg-transparent border border-white text-white font-normal"
            } text-[22px]/[120%] max-md:text-[11px]/[120%] py-2.5 max-md:py-1.5 max-md:px-3.5 px-7.5 rounded-full cursor-pointer transition-all duration-300 ease-out uppercase`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="mt-20 max-md:mt-0 flex flex-col gap-30 max-md:gap-5 ">
        {filteredWorks.map((work, index) => (
          <div
            key={work.id}
            className={`flex flex-col gap-9 max-md:gap-6   ${
              index < filteredWorks.length - 1
                ? "border-b border-white pb-30 max-md:pb-10"
                : ""
            }`}
          >
            <h3 className="text-white text-5xl max-md:text-[24px]/[120%] px-15 max-md:px-6 font-extrabold">
              {work.title}
            </h3>
            <div className="text-[#FFFFFFAD] text-lg max-md:text-[10px] px-15 max-md:px-6 max-md:-mt-4 font-light flex items-center gap-3">
              <span className="font-light">Timeline</span>
              <span className="border-l border-[#FFFFFFAD] pl-3 font-light">
                {work.timeline}
              </span>
            </div>
            <div className="flex flex-col gap-9 max-md:gap-4 mb-5 px-15 max-md:px-6">
              <div className="flex flex-col gap-3 max-md:gap-0.5">
                <h4 className="text-white text-[32px]/[120%] max-md:text-sm/[120%] font-bold uppercase">
                  Problem
                </h4>
                <p className="text-white text-[28px] max-md:text-[10px]/[120%] font-light">
                  {work.problem}
                </p>
              </div>
              <div className="flex flex-col gap-3 max-md:gap-0.5">
                <h4 className="text-white text-[32px]/[120%] max-md:text-sm/[120%] font-bold uppercase">
                  Solution
                </h4>
                <p className="text-white text-[28px] max-md:text-[10px]/[120%] font-light">
                  {work.solution}
                </p>
              </div>
            </div>
            <div className="flex max-md:flex-col max-md:gap-5 mt-12.5 px-15 max-md:px-6 team-scroll max-md:mt-0 gap-8 w-full overflow-x-scroll scrollbar-hide">
              {work.project_image.map((image, index) => (
                <div
                  key={index}
                  className="border-white border p-5 max-md:p-2.5 rounded-3xl max-md:rounded-[10px] min-w-[605px] max-md:min-w-0 h-[400px] max-md:h-[225px] flex-shrink-0"
                  style={{
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                  }}
                >
                  <img
                    src={image}
                    loading="lazy"
                    decoding="async"
                    alt={`Project ${work.id} Image ${index + 1}`}
                    className="w-full h-full object-cover rounded-3xl max-md:rounded-[10px]"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-15 max-md:gap-4 items-center justify-center">
        <span className="text-[32px]/[120%] max-md:text-[10px]/[120%] text-white font-light text-center mt-38 max-md:mt-5 block max-w-[800px] max-md:w-[250px]">
          We are prepared to replicate these results for your brand. Are you
          ready to begin?
        </span>
        <div className="flex justify-center items-center">
          <Button
            className="bg-[#02DDEF] hover:scale-105 rounded-full py-5.5 max-md:py-3 max-md:px-10 px-24 flex gap-6 max-md:gap-2 items-center"
            onClick={() => {
              console.log("Logged");
            }}
          >
            <span className="font-medium text-[28px] text-[28px]/[120%] max-md:text-[14px]/[120%]">
              Start a Project
            </span>
            <FaArrowRightLong className="text-2xl max-md:text-[20px]" />
          </Button>
        </div>
      </div>
    </section>
  );
}
