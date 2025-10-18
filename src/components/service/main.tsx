import Herobg from "../../assets/service/main_bg.webp";
import project from "../../assets/service/project_image.png";
import projectbg from "../../assets/service/project_bg.png";
import Button from "../custom/button";
import { FaArrowRightLong, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";

const clients = [
  {
    id: 1,
    category: "Website Development",
    clients: "3+",
    description:
      "Web design & development service covering discovery to launch: we plan, design, and build a fast, responsive, on-brand site in WordPress or Webflow, including UX/UI (sitemap, wireframes, Figma comps), front-end implementation, basic animations, on-page SEO, Core Web Vitals optimization, WCAG 2.1 AA accessibility, SSL/security hardening, backups, and integrations (GA4, Search Console, CRM/forms, email). Deliverables include the approved designs, a production-ready site with redirects (if redesign), analytics tags, training, documentation, and a 30-day post-launch warranty; typical build runs 3-6 weeks assuming content is ready. Client supplies brand assets, copy/images, timely feedback, and hosting/DNS access.",
    projects: [
      {
        id: 1,
        image: project,
        link: "https://clientone.com",
      },
      {
        id: 2,
        image: project,
        link: "https://clienttwo.com",
      },
      {
        id: 3,
        image: project,
        link: "https://clientthree.com",
      },
    ],
  },
  {
    id: 2,
    category: "Brand Identity Development",
    clients: "11+",
    description:
      "Web design & development service covering discovery to launch: we plan, design, and build a fast, responsive, on-brand site in WordPress or Webflow, including UX/UI (sitemap, wireframes, Figma comps), front-end implementation, basic animations, on-page SEO, Core Web Vitals optimization, WCAG 2.1 AA accessibility, SSL/security hardening, backups, and integrations (GA4, Search Console, CRM/forms, email). Deliverables include the approved designs, a production-ready site with redirects (if redesign), analytics tags, training, documentation, and a 30-day post-launch warranty; typical build runs 3-6 weeks assuming content is ready. Client supplies brand assets, copy/images, timely feedback, and hosting/DNS access.",
    projects: [
      {
        id: 1,
        image: project,
        link: "https://clientone.com",
      },
      {
        id: 2,
        image: project,
        link: "https://clienttwo.com",
      },
      {
        id: 3,
        image: project,
        link: "https://clientthree.com",
      },
      {
        id: 4,
        image: project,
        link: "https://clientthree.com",
      },
      {
        id: 5,
        image: project,
        link: "https://clientthree.com",
      },
      {
        id: 6,
        image: project,
        link: "https://clientthree.com",
      },
    ],
  },
  {
    id: 3,
    category: "Social Media Management",
    clients: "23+",
    description:
      "Web design & development service covering discovery to launch: we plan, design, and build a fast, responsive, on-brand site in WordPress or Webflow, including UX/UI (sitemap, wireframes, Figma comps), front-end implementation, basic animations, on-page SEO, Core Web Vitals optimization, WCAG 2.1 AA accessibility, SSL/security hardening, backups, and integrations (GA4, Search Console, CRM/forms, email). Deliverables include the approved designs, a production-ready site with redirects (if redesign), analytics tags, training, documentation, and a 30-day post-launch warranty; typical build runs 3-6 weeks assuming content is ready. Client supplies brand assets, copy/images, timely feedback, and hosting/DNS access.",
    projects: [
      {
        id: 1,
        image: project,
        link: "https://clientone.com",
      },
      {
        id: 2,
        image: project,
        link: "https://clienttwo.com",
      },
      {
        id: 3,
        image: project,
        link: "https://clientthree.com",
      },
      {
        id: 4,
        image: project,
        link: "https://clientthree.com",
      },
      {
        id: 5,
        image: project,
        link: "https://clientthree.com",
      },
      {
        id: 6,
        image: project,
        link: "https://clientthree.com",
      },
      {
        id: 7,
        image: project,
        link: "https://clientthree.com",
      },
      {
        id: 8,
        image: project,
        link: "https://clientthree.com",
      },
    ],
  },
];

export default function Main() {
  const [currentImageIndices, setCurrentImageIndices] = useState(
    clients.reduce((acc, client) => {
      acc[client.id] = 0;
      return acc;
    }, {} as Record<number, number>)
  );

  const handleNext = (serviceId: number, projectsLength: number) => {
    if (projectsLength === 0) return;
    setCurrentImageIndices((prev) => ({
      ...prev,
      [serviceId]:
        prev[serviceId] === projectsLength - 1 ? 0 : prev[serviceId] + 1,
    }));
  };

  const handlePrev = (serviceId: number, projectsLength: number) => {
    if (projectsLength === 0) return;
    setCurrentImageIndices((prev) => ({
      ...prev,
      [serviceId]:
        prev[serviceId] === 0 ? projectsLength - 1 : prev[serviceId] - 1,
    }));
  };

  return (
    <section
      className="bg-white pt-[245px] px-15 max-md:px-4 max-md:pt-[88px] flex flex-col gap-20 max-md:gap-5.5 pb-40 max-md:pb-12 bg-top-left font-subito"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col max-md:hidden">
        <h2 className="text-black text-[90px]/[120%] max-md:text-[36px]/[120%] font-cormo italic ">
          Digital Solutions That Build,
        </h2>
        <h2 className="text-black text-[90px]/[120%] max-md:text-[36px]/[120%] font-extrabold">
          Launch, and Grow Brands
        </h2>
      </div>
      <div className="flex md:hidden text-black text-[90px]/[120%] max-md:text-[36px]/[120%]">
        <h2 className="font-cormo max-md:pr-10">
          <span className="italic ">
            Digital Solutions <br /> That Build,
          </span>{" "}
          <span className="text-black font-subito font-extrabold">
            {" "}
            Launch, <br /> and Grow Brands
          </span>{" "}
        </h2>
      </div>
      <div className="flex flex-col gap-10 w-full">
        {clients.map((service) => {
          const currentIndex = currentImageIndices[service.id];
          return (
            <div
              key={service.id}
              className="flex flex-col gap-10 max-md:gap-5 py-15 max-md:px-5 max-md:py-4 px-19.5 bg-black rounded-[20px] max-md:rounded-[5px] text-white"
              style={{
                backgroundImage: `url(${projectbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex justify-between items-center font-subito">
                <h3 className="text-[96px]/[120%] max-md:text-[24px]/[120%] max-md:w-[175px] font-bold w-[676px]">
                  {service.category}
                </h3>
                <div className="w-[271px] h-[228px] max-md:w-[80px] max-md:h-[60px] glass_effect flex flex-col justify-center items-center">
                  <span className="text-[32px]/[120%] max-md:text-[9px]/[120%] font-light font-subito uppercase">
                    Clients
                  </span>
                  <span className="text-[128px]/[120%] max-md:text-[33px]/[120%] font-bold font-subito">
                    {service.clients}
                  </span>
                </div>
              </div>
              <p className="text-[28px]/[120%] max-md:text-[10px]/[120%] font-normal font-subito">
                {service.description}
              </p>
              <div className="mt-10 max-md:mt-3 flex flex-col gap-12 max-md:gap-5">
                <div className="border w-full border-white p-4 max-md:p-1 rounded-[20px] max-md:rounded-[5px] relative">
                  <img
                    src={service.projects[currentIndex].image}
                    loading="lazy"
                    decoding="async"
                    alt={`Project ${service.projects[currentIndex].id}`}
                    className="w-full h-auto max-md:h-[190px] rounded-[20px] max-md:rounded-[5px]"
                  />
                  <div className="absolute inset-0 flex justify-between items-center z-10">
                    <button
                      className="absolute top-1/2 right-5 max-md:right-1 transform -translate-y-1/2 cursor-pointer text-white p-10 max-md:p-2.5 rounded-full flex justify-center items-center"
                      onClick={() =>
                        handleNext(service.id, service.projects.length)
                      }
                    >
                      <div className="absolute inset-4 bg-black/40 blur-lg rounded-full" />
                      <FaChevronRight className="text-5xl max-md:text-2xl relative z-10 cursor-pointer text-white drop-shadow-lg" />
                    </button>
                    <button
                      className="absolute top-1/2 left-5 max-md:left-1 transform -translate-y-1/2 cursor-pointer text-white p-10 max-md:p-2.5 rounded-full flex justify-center items-center"
                      onClick={() =>
                        handlePrev(service.id, service.projects.length)
                      }
                    >
                      <div className="absolute inset-4 bg-black/40 blur-lg rounded-full" />
                      <FaChevronRight className="rotate-180 text-5xl max-md:text-2xl cursor-pointer text-white relative z-10 drop-shadow-lg" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  {service.projects.length > 1 && (
                    <div className="flex gap-3 max-md:gap-1.5">
                      {service.projects.map((_, index) => (
                        <span
                          key={index}
                          className={`block transform h-2.5 max-md:h-1 rounded-full ${
                            index === currentIndex
                              ? "bg-[#02DDEF] w-19 max-md:w-5 transform-width duration-300"
                              : "bg-[#D9D9D9] w-6 max-md:w-1.5"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-15 max-md:gap-5 items-center justify-center">
        <span className="text-[32px]/[120%] max-md:text-[12px]/[120%] font-light text-center mt-38 max-md:mt-5.5 block max-w-[800px] max-md:w-[280px]">
          We are prepared to replicate these results for your brand. Are you
          ready to begin?
        </span>
        <div className="flex justify-center items-center">
          <Button
            className="bg-[#02DDEF] rounded-full py-5.5 max-md:py-3 max-md:px-10 px-24 flex gap-6 max-md:gap-2 items-center"
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
