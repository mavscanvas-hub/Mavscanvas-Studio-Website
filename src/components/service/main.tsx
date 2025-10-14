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
    clients: "3",
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
      className="bg-white pt-[245px] px-15 flex flex-col gap-20 pb-40 bg-top-left"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col">
        <h2 className="text-black text-[90px]/[120%] font-cormo italic">
          Digital Solutions That Build,
        </h2>
        <h2 className="text-black text-[90px]/[120%] font-extrabold">
          Launch, and Grow Brands
        </h2>
      </div>
      <div className="flex flex-col gap-10 w-full">
        {clients.map((service) => {
          const currentIndex = currentImageIndices[service.id];
          return (
            <div
              key={service.id}
              className="flex flex-col gap-10 py-15 px-19.5 bg-black rounded-[20px] text-white"
              style={{
                backgroundImage: `url(${projectbg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[96px]/[120%] font-bold w-[676px]">
                  {service.category}
                </h3>
                <div className="w-[271px] h-[228px] glass_effect flex flex-col justify-center items-center">
                  <span className="text-[32px]/[120%] font-light uppercase">
                    Clients
                  </span>
                  <span className="text-[128px]/[120%] font-bold">
                    {service.clients}
                  </span>
                </div>
              </div>
              <p className="text-[28px]/[120%] font-normal">
                {service.description}
              </p>
              <div className="mt-10 flex flex-col gap-12">
                <div className="border w-full border-white p-4 rounded-[20px] relative">
                  <img
                    src={service.projects[currentIndex].image}
                    loading="lazy"
                    decoding="async"
                    alt={`Project ${service.projects[currentIndex].id}`}
                    className="w-full h-auto rounded-[20px]"
                  />
                  <div className="absolute inset-0 flex justify-between items-center z-10">
                    <button
                      className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer text-white p-10 rounded-full flex justify-center items-center"
                      onClick={() =>
                        handleNext(service.id, service.projects.length)
                      }
                    >
                      <div className="absolute inset-4 bg-black/40 blur-lg rounded-full" />
                      <FaChevronRight className="text-5xl relative z-10 cursor-pointer text-white drop-shadow-lg" />
                    </button>
                    <button
                      className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer text-white p-10 rounded-full flex justify-center items-center"
                      onClick={() =>
                        handlePrev(service.id, service.projects.length)
                      }
                    >
                      <div className="absolute inset-4 bg-black/40 blur-lg rounded-full" />
                      <FaChevronRight className="rotate-180 text-5xl cursor-pointer text-white relative z-10 drop-shadow-lg" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  {service.projects.length > 1 && (
                    <div className="flex gap-3">
                      {service.projects.map((_, index) => (
                        <span
                          key={index}
                          className={`block transform h-2.5 rounded-full ${
                            index === currentIndex
                              ? "bg-[#02DDEF] w-19 transform-width duration-300"
                              : "bg-[#D9D9D9] w-6"
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
      <div className="flex flex-col gap-15 items-center justify-center">
        <span className="text-[32px]/[120%] font-light text-center mt-38 block max-w-[800px]">
          We are prepared to replicate these results for your brand. Are you
          ready to begin?
        </span>
        <div className="flex justify-center items-center">
          <Button
            className="bg-[#02DDEF] rounded-full py-5 px-20 flex gap-6 items-center"
            onClick={() => {
              console.log("Logged");
            }}
          >
            <span className="font-medium text-[28px]">Start a Project</span>
            <FaArrowRightLong className="text-3xl" />
          </Button>
        </div>
      </div>
    </section>
  );
}
