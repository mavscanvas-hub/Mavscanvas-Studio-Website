import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../custom/button";
import Review from "../../assets/company_op/reviewbg.webp";
import user1 from "../../assets/company_op/revies/1.webp";
import user2 from "../../assets/company_op/revies/2.png";
import user3 from "../../assets/company_op/revies/3.webp";
import user4 from "../../assets/company_op/revies/4.webp";
import { useEffect, useRef, useState } from "react";

const reviewsData = [
  {
    avatar: user1,
    role: "Kunle, Founder of Glow Foods",
    quote: "From idea to execution, they nailed it every step.",
  },
  {
    avatar: user3,
    role: "Mrs Jumoke, Head of Growth",
    quote: "Mavscanvas turned our product vision into a growth engine.",
  },
  {
    avatar: user2,
    role: "Richard, Head of Digital Marketing",
    quote: "Mavscanvas doesn't just design, they transform businesses.",
  },
  {
    avatar: user4,
    role: " Bisi, Head of Strategy",
    quote: "Our team finally feels aligned thanks to their direction.",
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];
        // trigger only when ~50% of the section is visible (section near center)
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: [0.5] } // fire when 50% visible
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black px-15 pt-15 max-md:pt-5 max-md:px-5 pb-25 flex flex-col gap-20 max-md:gap-8"
      style={{
        backgroundImage: `url(${Review})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="font-cormo text-[90px]/[120%] max-md:text-[36px]/[120%] italic text-start text-white">
        Clients{" "}
        <strong className="font-extrabold font-subito not-italic">
          Reviews
        </strong>
      </h2>

      <div className="flex flex-col items-center gap-4">
        <div className="h-[816px] max-md:h-[250px] w-full mb-16 max-md:mb-10">
          <div className="relative">
            <article
              className={`rounded-[30px] max-md:rounded-lg bg-white p-8 max-md:p-2 flex flex-col gap-6 max-md:gap-2 h-full shadow-[0_79px_71px_rgba(0,0,0,0.8)] max-md:shadow-[0_21px_19px_rgba(0,0,0,0.8)] w-[730px] max-md:w-[189px] drop-in ${
                inView ? "drop-in--active" : ""
              }`}
              style={{ animationDelay: "0ms" }}
              aria-labelledby={`review-0-author`}
            >
              <figure className="flex gap-8 max-md:gap-2 items-start">
                <img
                  src={reviewsData[0].avatar}
                  alt={reviewsData[0].role}
                  loading="lazy"
                  decoding="async"
                  className="w-[156px] max-md:w-10 max-md:h-10 max-md:rounded-[4px] h-[156px] rounded-xl object-cover flex-shrink-0"
                />
                <figcaption className="flex flex-col gap-4 max-md:gap-1">
                  <span
                    aria-hidden
                    className="text-[#FFD700] max-md:text-[8px]"
                  >
                    ★ ★ ★ ★ ★
                  </span>
                  <span className="flex flex-col gap-1 max-md:gap-0.5 ">
                    <blockquote className="text-black text-2xl/[120%] max-md:text-[7px]/[120%] font-subito font-normal flex-1">
                      {reviewsData[0].quote}
                    </blockquote>
                    <p className="text-2xl/[120%] text-black max-md:text-[7px]/[120%] font-subito font-medium">
                      {reviewsData[0].role}
                    </p>
                  </span>
                </figcaption>
              </figure>
            </article>

            <article
              className={`rounded-[30px] max-md:rounded-lg  bg-white p-8 max-md:p-2 flex flex-col gap-6 absolute right-0 rotate-[9deg] z-10 shadow-[0_79px_71px_rgba(0,0,0,0.8)] max-md:shadow-[0_21px_19px_rgba(0,0,0,0.8)] w-[730px] max-md:w-[189px] drop-in ${
                inView ? "drop-in--active" : ""
              }`}
              style={{ animationDelay: "80ms" }}
              aria-labelledby={`review-1-author`}
            >
              <figure className="flex gap-8 max-md:gap-2 items-start">
                <img
                  src={reviewsData[1].avatar}
                  alt={reviewsData[1].role}
                  loading="lazy"
                  decoding="async"
                  className="w-[156px] h-[156px] max-md:w-10 max-md:h-10 max-md:rounded-[4px] rounded-xl object-cover flex-shrink-0"
                />
                <figcaption className="flex flex-col gap-4 max-md:gap-1">
                  <span
                    aria-hidden
                    className="text-[#FFD700] max-md:text-[8px]"
                  >
                    ★ ★ ★ ★ ★
                  </span>
                  <span className="flex flex-col gap-1 max-md:gap-0 font-subito">
                    <blockquote className="text-black text-2xl/[120%] max-md:text-[7px]/[120%] flex-1">
                      {reviewsData[1].quote}
                    </blockquote>
                    <p className="text-2xl/[120%] text-black max-md:text-[7px]/[120%] font-medium">
                      {reviewsData[1].role}
                    </p>
                  </span>
                </figcaption>
              </figure>
            </article>

            <article
              className={`rounded-[30px] max-md:rounded-lg bg-white p-8 max-md:p-2 flex flex-col gap-6 shadow-[0_79px_71px_rgba(0,0,0,0.8)] max-md:shadow-[0_21px_19px_rgba(0,0,0,0.8)] absolute top-[400px] max-md:top-[100px] w-[730px] max-md:w-[189px] drop-in ${
                inView ? "drop-in--active" : ""
              }`}
              style={{ animationDelay: "160ms" }}
              aria-labelledby={`review-2-author`}
            >
              <figure className="flex gap-8 max-md:gap-2 items-start">
                <img
                  src={reviewsData[2].avatar}
                  alt={reviewsData[2].role}
                  loading="lazy"
                  decoding="async"
                  className="w-[156px] h-[156px] max-md:w-10 max-md:h-10 max-md:rounded-[4px] rounded-xl object-cover flex-shrink-0"
                />
                <figcaption className="flex flex-col gap-4 max-md:gap-1">
                  <span
                    aria-hidden
                    className="text-[#FFD700] max-md:text-[8px]"
                  >
                    ★ ★ ★ ★ ★
                  </span>
                  <span className="flex flex-col gap-1 max-md:gap-0 font-subito">
                    <blockquote className="text-black text-2xl/[120%] max-md:text-[7px]/[120%] flex-1">
                      {reviewsData[2].quote}
                    </blockquote>
                    <p className="text-2xl/[120%] text-black max-md:text-[7px]/[120%] font-medium">
                      {reviewsData[2].role}
                    </p>
                  </span>
                </figcaption>
              </figure>
            </article>

            <article
              className={`rounded-[30px] max-md:rounded-lg bg-white p-8 max-md:p-2 flex flex-col gap-6 shadow-[0_79px_71px_rgba(0,0,0,0.8)] max-md:shadow-[0_21px_19px_rgba(0,0,0,0.8)] absolute top-[570px] max-md:top-[150px] right-0 w-[730px] max-md:w-[189px] drop-in ${
                inView ? "drop-in--active" : ""
              }`}
              style={{ animationDelay: "240ms" }}
              aria-labelledby={`review-3-author`}
            >
              <figure className="flex gap-8 max-md:gap-2 items-start">
                <img
                  src={reviewsData[3].avatar}
                  alt={reviewsData[3].role}
                  loading="lazy"
                  decoding="async"
                  className="w-[156px] h-[156px] max-md:w-10 max-md:h-10 max-md:rounded-[4px] rounded-xl object-cover flex-shrink-0"
                />
                <figcaption className="flex flex-col gap-4 max-md:gap-1">
                  <span
                    aria-hidden
                    className="text-[#FFD700] max-md:text-[8px]"
                  >
                    ★ ★ ★ ★ ★
                  </span>
                  <span className="flex flex-col gap-1 max-md:gap-0 font-subito">
                    <blockquote className="text-black text-2xl/[120%] max-md:text-[7px]/[120%] font-subito flex-1">
                      {reviewsData[3].quote}
                    </blockquote>
                    <p className="text-2xl/[120%] text-black max-md:text-[7px]/[120%] font-subito font-medium">
                      {reviewsData[3].role}
                    </p>
                  </span>
                </figcaption>
              </figure>
            </article>
          </div>
        </div>
        <div className="flex flex-col gap-26 max-md:gap-4.5 items-center">
          <span className="text-white text-[28px]/[120%] max-md:text-[10px]/[120%] italic font-light max-w-[872px] max-md:w-[280px] text-center">
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
              <span className="font-medium text-[28px]/[120%] max-md:text-[14px]/[120%]">
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
