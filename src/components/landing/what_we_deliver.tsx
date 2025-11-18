import bg from "../../assets/company_op/whatwebg.webp";
import mask from "../../assets/company_op/deliver_mask.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import project from "../../assets/service/project_image.png";
import brand from "../../assets/company_op/branding.png";
import { useNavigate } from "react-router-dom";

const data = [
  {
    title: "Web Design & Development",
    value: "website development",
    content:
      "Web design & development service covering discovery to launch: we plan, design, and build a fast, responsive, on-brand site in WordPress or Webflow, including UX/UI (sitemap, wireframes, Figma comps), front-end implementation, basic animations, on-page SEO, Core Web Vitals optimization, WCAG 2.1 AA accessibility, SSL/security hardening, backups, and integrations (GA4, Search Console, CRM/forms, email). Deliverables include the approved designs, a production-ready site with redirects (if redesign), analytics tags, training, documentation, and a 30-day post-launch warranty; typical build runs 3-6 weeks assuming content is ready. Client supplies brand assets, copy/images, timely feedback, and hosting/DNS access.",
    image: project,
  },
  {
    title: "Branding Design",
    value: "branding",
    content:
      "Web design & development service covering discovery to launch: we plan, design, and build a fast, responsive, on-brand site in WordPress or Webflow, including UX/UI (sitemap, wireframes, Figma comps), front-end implementation, basic animations, on-page SEO, Core Web Vitals optimization, WCAG 2.1 AA accessibility, SSL/security hardening, backups, and integrations (GA4, Search Console, CRM/forms, email). Deliverables include the approved designs, a production-ready site with redirects (if redesign), analytics tags, training, documentation, and a 30-day post-launch warranty; typical build runs 3-6 weeks assuming content is ready. Client supplies brand assets, copy/images, timely feedback, and hosting/DNS access.",
    image: brand,
  },
  {
    title: "Product Design",
    value: "UI/UX",
    content:
      "Web design & development service covering discovery to launch: we plan, design, and build a fast, responsive, on-brand site in WordPress or Webflow, including UX/UI (sitemap, wireframes, Figma comps), front-end implementation, basic animations, on-page SEO, Core Web Vitals optimization, WCAG 2.1 AA accessibility, SSL/security hardening, backups, and integrations (GA4, Search Console, CRM/forms, email). Deliverables include the approved designs, a production-ready site with redirects (if redesign), analytics tags, training, documentation, and a 30-day post-launch warranty; typical build runs 3-6 weeks assuming content is ready. Client supplies brand assets, copy/images, timely feedback, and hosting/DNS access.",
    image: project,
  },
  {
    title: "Digital Marketing",
    value: "digital marketing",
    content:
      "Web design & development service covering discovery to launch: we plan, design, and build a fast, responsive, on-brand site in WordPress or Webflow, including UX/UI (sitemap, wireframes, Figma comps), front-end implementation, basic animations, on-page SEO, Core Web Vitals optimization, WCAG 2.1 AA accessibility, SSL/security hardening, backups, and integrations (GA4, Search Console, CRM/forms, email). Deliverables include the approved designs, a production-ready site with redirects (if redesign), analytics tags, training, documentation, and a 30-day post-launch warranty; typical build runs 3-6 weeks assuming content is ready. Client supplies brand assets, copy/images, timely feedback, and hosting/DNS access.",
    image: "",
  },
  {
    title: "Social Media Management",
    value: "social media management",
    content:
      "Web design & development service covering discovery to launch: we plan, design, and build a fast, responsive, on-brand site in WordPress or Webflow, including UX/UI (sitemap, wireframes, Figma comps), front-end implementation, basic animations, on-page SEO, Core Web Vitals optimization, WCAG 2.1 AA accessibility, SSL/security hardening, backups, and integrations (GA4, Search Console, CRM/forms, email). Deliverables include the approved designs, a production-ready site with redirects (if redesign), analytics tags, training, documentation, and a 30-day post-launch warranty; typical build runs 3-6 weeks assuming content is ready. Client supplies brand assets, copy/images, timely feedback, and hosting/DNS access.",
    image: "",
  },
];

export default function WhatWeDeliver() {
  const navigate = useNavigate();
  const [allValues] = useState(data.map((item) => item.value));
  const [currentValue, setCurrentValue] = useState(data[0]);
  const handleSetActive = (value: string) => {
    const selected = data.find((item) => item.value === value);
    if (selected) {
      setCurrentValue(selected);
    }
  };
  return (
    <div
      className="px-15 py-15 max-md:pt-5 max-md:pb-6 flex flex-col gap-13.5 max-md:gap-3 max-md:px-3.5 bg-bottom-right bg-cover w-full bg-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div>
        <h1 className="text-[90px]/[120%] max-md:text-[36px]/[120%] text-start text-black leading-[1]">
          <span className="font-cormo italic">What We&nbsp;</span>
          <strong className="font-root font-extrabold not-italic">
            Deliver
          </strong>
        </h1>
      </div>
      <div
        className="bg-black pl-15 max-md:px-4 pr-16 pt-10 max-md:pt-5 pb-16 max-md:pb-5 rounded-4xl max-md:rounded-lg"
        style={{
          backgroundImage: `url(${mask})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {currentValue && (
          <>
            <div className="flex items-start justify-start gap-15 max-md:gap-5 h-[645px] max-md:h-auto max-md:flex-col-reverse">
              <div className="flex flex-col gap-10 max-md:gap-0 min-w-[420px] max-md:min-w-full">
                <h2 className="text-white text-[62px]/[120%] font-bold max-md:hidden">
                  {currentValue.title}
                </h2>
                <div className="border max-md:bord max-md:rounded-[5px] border-white rounded-3xl p-4 max-md:p-2">
                  <div
                    className="bg-gray-100 h-[420px] max-md:h-[220px] rounded-3xl max-md:rounded-[4px]"
                    style={{
                      backgroundImage: `url(${currentValue.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </div>
                <div className="mt-10.5 max-md:mt-5 md:hidden flex justify-center items-center">
                  <button className="border max-md:bord border-white text-white py-2.5 max-md:py-1 max-md:px-4 px-10 rounded-full flex gap-3.5 items-center font-medium text-[28px]/[120%] max-md:text-[10px]/[120%] max-md:italic">
                    <span>View Services</span>
                    <FaArrowRightLong />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-5 max-md:gap-3 h-full">
                <div className="flex flex-col items-start gap-5 max-md:gap-3.5 max-md:gap-y-3 mt-10 max-md:mt-0">
                  <div className="flex gap-3 flex-wrap">
                    {allValues.map((value) => (
                      <button
                        key={value}
                        onClick={() => handleSetActive(value)}
                        className={`flex-shrink-0 border border-white cursor-pointer text-xl font-medium max-md:text-[8px]/[120%] py-2.5 max-md:py-1 max-md:px-2.5 px-10 rounded-full ${
                          currentValue.value === value
                            ? "bg-[#02DDEF] text-black font-semibold border-none"
                            : "text-white"
                        }`}
                      >
                        {value.toLocaleUpperCase()}
                      </button>
                    ))}
                  </div>
                  <h2 className="text-white max-md:text-[18px]/[120%] max-md:my-3 font-bold md:hidden">
                    {currentValue.title}
                  </h2>
                </div>
                <div className="px-3 max-md:px-0">
                  <p className=" text-white text-[22px]/[120%] font-normal max-md:text-[10px]/[120%]">
                    {currentValue.content}
                  </p>
                </div>
                <div className="mt-10.5 max-md:hidden">
                  <button
                    className="border border-white hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer text-white py-2.5 px-10 rounded-full flex gap-3.5 items-center font-medium"
                    onClick={() => {
                      navigate("/services");
                    }}
                  >
                    <span className="font-bold italic text-[28px]/[120%] font-subito">
                      View Services
                    </span>
                    <FaArrowRightLong className="text-[28px]/[120%]" />
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
