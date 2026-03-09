/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../custom/button";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";
import { useWorkContext } from "../../hooks/useWorkContext";
import { COLLECTION_ID } from "../../constant";

export default function Hero() {
  const {
    getCollectionDetails,
    categories,
    isCategoryLoading,
    getAllWorks,
    works,
  } = useWorkContext();
  const [activeCategory, setActiveCategory] = useState(
    categories && categories.length > 0 ? categories[0].name : undefined,
  );

  useEffect(() => {
    if (categories && categories.length > 0) {
      setActiveCategory(categories[0].name);
    }
  }, [categories]);

  const categoryId = categories?.find(
    (category) => category.name === activeCategory,
  )?.id;

  const filteredWorks = works.filter(
    (work) => work.fieldData.category === categoryId,
  );

  const pointerState = useRef(
    new WeakMap<
      HTMLElement,
      {
        isDown: boolean;
        startX: number;
        scrollLeft: number;
        activeId: number | null;
      }
    >(),
  );

  const handlePointerDown = (e: React.PointerEvent) => {
    const el = e.currentTarget as HTMLElement;
    pointerState.current.set(el, {
      isDown: true,
      startX: e.clientX,
      scrollLeft: (el as HTMLDivElement).scrollLeft,
      activeId: e.pointerId,
    });
    try {
      (el as any).setPointerCapture?.(e.pointerId);
    } catch {
      console.warn("Pointer capture release failed");
    }
    el.classList.add("dragging");
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const el = e.currentTarget as HTMLElement;
    const state = pointerState.current.get(el);
    if (!state || !state.isDown || state.activeId !== e.pointerId) return;
    const walk = state.startX - e.clientX;
    (el as HTMLDivElement).scrollLeft = state.scrollLeft + walk;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    const el = e.currentTarget as HTMLElement;
    const state = pointerState.current.get(el);
    if (state) {
      state.isDown = false;
      try {
        (el as any).releasePointerCapture?.(e.pointerId);
      } catch {
        console.error("Pointer capture release failed", e);
      }
      pointerState.current.delete(el);
    }
    el.classList.remove("dragging");
  };

  useEffect(() => {
    getCollectionDetails(COLLECTION_ID);
    getAllWorks(COLLECTION_ID);
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <section className="bg-black pt-[245px] max-md:pt-22 pb-40 max-md:pb-14 font-subito relative overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full"
          style={{ top: `${isMobile ? i * 40 : i * 36}%` }}
        >
          <div
            className="absolute w-[535px] max-lg:w-[200px] max-lg:h-[200px] h-[535px] rounded-full bg-[#02DDEF] opacity-40 max-lg:blur-[70px] blur-[120px]"
            style={{
              left:
                i % 2 === 0
                  ? isMobile
                    ? "5%"
                    : "20%"
                  : isMobile
                    ? "50%"
                    : "40%",
            }}
          />
          <div
            className="absolute w-[535px] h-[535px] max-lg:w-[200px] max-lg:h-[200px] rounded-full bg-[#FA01F0] opacity-40 max-lg:blur-[70px] blur-[120px]"
            style={{
              left:
                i % 2 === 0
                  ? isMobile
                    ? "50%"
                    : "40%"
                  : isMobile
                    ? "20%"
                    : "5%",
            }}
          />
        </div>
      ))}
      <div className="flex flex-col gap-12 max-md:gap-8 relative z-10">
        <div className="flex flex-col px-15 max-md:px-4">
          <h2 className="text-white text-[90px]/[120%] max-md:text-[36px]/[120%] font-cormo italic">
            Our Work,
          </h2>
          <h2 className="text-white text-[90px]/[120%] max-md:text-[36px]/[120%] font-extrabold">
            Your Proof
          </h2>
        </div>
        <div className="flex flex-wrap max-md:flex-row gap-x-8 max-md:gap-x-1 max-md:gap-y-2 gap-y-9 px-15 max-md:px-4 pr-[150px] max-md:pr-0">
          {isCategoryLoading &&
            Array.from({ length: 5 }).map((_, index: number) => (
              <div
                key={index}
                className="bg-white animate-pulse h-10 max-md:h-6 rounded-full w-72 max-md:w-44"
              ></div>
            ))}

          {!isCategoryLoading &&
            categories
              ?.filter((category) =>
                works.some((work) => work.fieldData.category === category.id),
              )
              .map((category) => (
                <button
                  key={category.id}
                  className={`${
                    category.name === activeCategory
                      ? "bg-[#02DDEF] text-black font-medium"
                      : "bg-transparent border border-white text-white font-normal"
                  } text-[22px]/[120%] max-md:text-[11px]/[120%] py-2 max-md:py-1.5 max-md:px-3.5 px-7.5 rounded-full cursor-pointer transition-all duration-300 ease-out uppercase text-center `}
                  onClick={() => setActiveCategory(category.name)}
                >
                  {category.name}
                </button>
              ))}
        </div>
        <div className="mt-8 max-md:mt-0 flex flex-col gap-20 max-md:gap-5 ">
          {filteredWorks.map((work, index) => (
            <div
              key={work.id}
              className={`flex flex-col gap-5 max-md:gap-6   ${
                index < filteredWorks.length - 1
                  ? "border-b border-white pb-20 max-md:pb-10"
                  : ""
              }`}
            >
              <h3 className="text-white text-5xl max-md:text-[24px]/[120%] px-15 max-md:px-6 font-extrabold">
                {work.fieldData.name}
              </h3>
              <div className="text-[#FFFFFFAD] text-lg max-md:text-[10px] px-15 max-md:px-6 max-md:-mt-4 font-light flex items-center gap-3">
                <span className="font-light">Timeline</span>
                <span className="border-l border-[#FFFFFFAD] pl-3 font-light">
                  {work.fieldData.timeline}
                </span>
              </div>
              <div className="flex flex-col gap-9 max-md:gap-4 mb-5 px-15 max-md:px-6">
                <div className="flex flex-col gap-3 max-md:gap-0.5">
                  <h4 className="text-white text-[32px]/[120%] max-md:text-sm/[120%] font-bold uppercase">
                    Problem
                  </h4>
                  <div
                    className="text-white text-[22px] max-md:text-[10px]/[120%] font-light [&>h1]:hidden [&>p]:mb-4 [&>p:last-child]:mb-0"
                    dangerouslySetInnerHTML={{ __html: work.fieldData.problem }}
                  />
                </div>
                <div className="flex flex-col gap-3 max-md:gap-0.5">
                  <h4 className="text-white text-[32px]/[120%] max-md:text-sm/[120%] font-bold uppercase">
                    Solution
                  </h4>
                  <div
                    className="text-white text-[22px] max-md:text-[10px]/[120%] font-light [&>h1]:hidden [&>p]:mb-4 [&>p:last-child]:mb-0"
                    dangerouslySetInnerHTML={{
                      __html: work.fieldData.solution,
                    }}
                  />
                </div>
              </div>
              <div
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                onPointerLeave={handlePointerUp}
                className="flex team-scroll max-md:flex-col max-md:gap-5 mt-12.5 px-15 max-md:px-6 team-scroll max-md:mt-0 gap-8 w-full overflow-x-scroll scrollbar-hide"
                style={{ touchAction: "pan-y" }}
              >
                {work.fieldData["project-images"].map((image, index) => (
                  <div
                    key={index}
                    className="border-white border p-5 max-md:p-2.5 rounded-3xl max-md:rounded-[10px] min-w-[605px] max-md:min-w-0 h-[400px] max-md:h-[225px] flex-shrink-0"
                    style={{
                      msOverflowStyle: "none",
                      scrollbarWidth: "none",
                    }}
                  >
                    <img
                      src={image.url}
                      loading="lazy"
                      decoding="async"
                      alt={`Project ${work.id} Image ${index + 1}`}
                      draggable={false}
                      style={{ userSelect: "none" }}
                      className="w-full h-full object-cover select-none rounded-3xl max-md:rounded-[10px]"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-15 max-md:gap-4 items-center justify-center">
          <span className="text-[32px]/[120%] max-md:text-[10px]/[120%] text-white font-light text-center mt-20 max-md:mt-5 block max-w-[800px] max-md:w-[250px]">
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
      </div>
    </section>
  );
}
