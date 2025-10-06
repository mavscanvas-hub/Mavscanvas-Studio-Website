import bg from "../../assets/company/whatwebg.png";
import mask from "../../assets/company/deliver_mask.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const data = [
  {
    title: "Web Design & Development",
    value: "website development",
    content:
      "Web design & development service covering discovery to launch: we plan, design, and build a fast, responsive, on-brand site in WordPress or Webflow, including UX/UI (sitemap, wireframes, Figma comps), front-end implementation, basic animations, on-page SEO, Core Web Vitals optimization, WCAG 2.1 AA accessibility, SSL/security hardening, backups, and integrations (GA4, Search Console, CRM/forms, email). Deliverables include the approved designs, a production-ready site with redirects (if redesign), analytics tags, training, documentation, and a 30-day post-launch warranty; typical build runs 3-6 weeks assuming content is ready. Client supplies brand assets, copy/images, timely feedback, and hosting/DNS access.",
    image: "",
  },
  {
    title: "Branding Design",
    value: "branding",
    content:
      "Web design & development service covering discovery to launch: we plan, design, and build a fast, responsive, on-brand site in WordPress or Webflow, including UX/UI (sitemap, wireframes, Figma comps), front-end implementation, basic animations, on-page SEO, Core Web Vitals optimization, WCAG 2.1 AA accessibility, SSL/security hardening, backups, and integrations (GA4, Search Console, CRM/forms, email). Deliverables include the approved designs, a production-ready site with redirects (if redesign), analytics tags, training, documentation, and a 30-day post-launch warranty; typical build runs 3-6 weeks assuming content is ready. Client supplies brand assets, copy/images, timely feedback, and hosting/DNS access.",
    image: "",
  },
  {
    title: "Product Design",
    value: "UI/UX",
    content:
      "Web design & development service covering discovery to launch: we plan, design, and build a fast, responsive, on-brand site in WordPress or Webflow, including UX/UI (sitemap, wireframes, Figma comps), front-end implementation, basic animations, on-page SEO, Core Web Vitals optimization, WCAG 2.1 AA accessibility, SSL/security hardening, backups, and integrations (GA4, Search Console, CRM/forms, email). Deliverables include the approved designs, a production-ready site with redirects (if redesign), analytics tags, training, documentation, and a 30-day post-launch warranty; typical build runs 3-6 weeks assuming content is ready. Client supplies brand assets, copy/images, timely feedback, and hosting/DNS access.",
    image: "",
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
      className="px-15 py-15 flex flex-col gap-13.5 bg-bottom-right bg-cover w-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <span className="font-cormo text-[90px]/[120%] italic text-start text-black">
          What We <strong className="font-bold">Deliver</strong>
        </span>
      </div>
      <div
        className="bg-black pl-15 pr-16 pt-10 pb-16 rounded-4xl bg-bottom-right bg-cover"
        style={{
          backgroundImage: `url(${mask})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        {currentValue && (
          <div className="flex items-start justify-start gap-15 h-[645px]">
            <div className="flex flex-col gap-10 min-w-[420px]">
              <h2 className="text-white text-[64px]/[120%] font-bold">
                {currentValue.title}
              </h2>
              <div className="border border-white rounded-3xl p-4">
                <div className="bg-gray-100 h-[420px] rounded-3xl"></div>
              </div>
            </div>
            <div className="flex flex-col justify-between h-full">
              <div className="flex gap-5 flex-wrap mt-10">
                {allValues.map((value) => (
                  <button
                    key={value}
                    onClick={() => handleSetActive(value)}
                    className={`border border-white font-normal cursor-pointer text-xl py-2.5 px-10 rounded-full ${
                      currentValue.value === value
                        ? "bg-[#02DDEF] text-black font-semibold border-none"
                        : "text-white"
                    }`}
                  >
                    {value.toLocaleUpperCase()}
                  </button>
                ))}
              </div>
              <div className="px-3">
                <p className=" text-white text-2lg font-light">
                  {currentValue.content}
                </p>
              </div>
              <div className="mt-10.5">
                <button className="border border-white text-white py-2.5 px-10 rounded-full flex gap-3.5 items-center font-medium text-2lg">
                  <span>View Services</span>
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
