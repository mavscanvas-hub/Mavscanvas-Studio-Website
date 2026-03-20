import { FaArrowRightLong } from "react-icons/fa6";
import { useMemo, useState } from "react";
import project from "../../assets/service/project_image.png";
import brand from "../../assets/company_op/branding.png";
import { useNavigate } from "react-router-dom";
import { useWorkContext } from "../../hooks/useWorkContext";
import { COLLECTION_ID } from "../../constant";
import { useEffect } from "react";

interface ServiceItem {
  title: string;
  value: string;
  content: string;
  image: string;
}

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const isServiceMatchCategory = (service: ServiceItem, categoryName: string) => {
  const categoryKey = normalizeText(categoryName);
  const serviceValueKey = normalizeText(service.value);
  const serviceTitleKey = normalizeText(service.title);

  return (
    categoryKey === serviceValueKey ||
    categoryKey === serviceTitleKey ||
    categoryKey.includes(serviceValueKey) ||
    serviceValueKey.includes(categoryKey) ||
    categoryKey.includes(serviceTitleKey) ||
    serviceTitleKey.includes(categoryKey)
  );
};

// const htmlToPlainText = (value: string) =>
//   value
//     .replace(/<[^>]*>/g, " ")
//     .replace(/\s+/g, " ")
//     .trim();

const data: ServiceItem[] = [
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
      "Comprehensive branding design service that crafts a unique and compelling brand identity for your business. We work closely with you to understand your vision, values, and target audience, creating a cohesive visual language that resonates with your customers. Our service includes logo design, color palette development, typography selection, and brand guidelines to ensure consistency across all touchpoints. Whether you're launching a new brand or refreshing an existing one, we deliver a distinctive and memorable brand identity that sets you apart in the market.",
    image: brand,
  },
  {
    title: "Product Design",
    value: "UI/UX",
    content:
      "End-to-end product design service that transforms your ideas into intuitive and engaging digital experiences. We specialize in user interface (UI) and user experience (UX) design, creating products that are not only visually appealing but also highly functional and user-friendly. Our process includes user research, wireframing, prototyping, and high-fidelity design, ensuring that every aspect of the product is tailored to meet the needs of your users. From mobile apps to web platforms, we deliver designs that drive user engagement and business success.",
    image: project,
  },
  {
    title: "Digital Marketing",
    value: "digital marketing",
    content:
      "Comprehensive digital marketing service that helps your business reach and engage your target audience across multiple channels. We develop and execute data-driven marketing strategies that drive traffic, generate leads, and increase sales. Our service includes search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and content marketing. We work closely with you to understand your goals and create a customized approach that delivers measurable results.",
    image: project,
  },
];

export default function WhatWeDeliver() {
  const navigate = useNavigate();
  const { works, getAllWorks, categories, getCollectionDetails } =
    useWorkContext();
  const allValues = categories?.map((item) => item.name) || [];
  const [currentValue, setCurrentValue] = useState(data[0]);
  const [currentImage, setCurrentImage] = useState(data[0].image);
  const [activeCategoryName, setActiveCategoryName] = useState<string>("");

  useEffect(() => {
    if (!categories?.length) {
      return;
    }

    if (!activeCategoryName) {
      const firstCategoryName = categories[0].name;
      setActiveCategoryName(firstCategoryName);

      const matchedService = data.find((item) =>
        isServiceMatchCategory(item, firstCategoryName),
      );
      if (matchedService) {
        setCurrentValue(matchedService);
      }
    }
  }, [categories, activeCategoryName]);

  const selectedCategoryId = useMemo(() => {
    if (!categories?.length) {
      return undefined;
    }

    if (activeCategoryName) {
      return categories.find((category) => category.name === activeCategoryName)
        ?.id;
    }

    return categories.find((category) =>
      isServiceMatchCategory(currentValue, category.name),
    )?.id;
  }, [categories, activeCategoryName, currentValue]);

  const selectedCategoryImageUrls = useMemo(() => {
    if (!selectedCategoryId) {
      return [];
    }

    return works
      .filter((work) => work.fieldData.category === selectedCategoryId)
      .flatMap((work) =>
        work.fieldData["project-images"].map((image) => image.url),
      );
  }, [works, selectedCategoryId]);

  const getCategoryImage = (categoryName: string) => {
    const categoryId = categories?.find(
      (category) => category.name === categoryName,
    )?.id;

    if (!categoryId) {
      return undefined;
    }

    const imageUrls = works
      .filter((work) => work.fieldData.category === categoryId)
      .flatMap((work) =>
        work.fieldData["project-images"].map((image) => image.url),
      );

    if (!imageUrls.length) {
      return undefined;
    }

    return imageUrls[0];
  };

  // const selectedCategoryWorks = useMemo(
  //   () =>
  //     selectedCategoryId
  //       ? works.filter((work) => work.fieldData.category === selectedCategoryId)
  //       : [],
  //   [works, selectedCategoryId],
  // );

  // const displayContent = useMemo(() => {
  //   const firstWork = selectedCategoryWorks[0];
  //   if (!firstWork) {
  //     return currentValue.content;
  //   }

  //   const preferredText =
  //     htmlToPlainText(firstWork.fieldData.solution) &&
  //     htmlToPlainText(firstWork.fieldData.problem);

  //   return preferredText || currentValue.content;
  // }, [selectedCategoryWorks, currentValue.content]);

  const handleSetActive = (categoryName: string) => {
    setActiveCategoryName(categoryName);

    const selected = data.find((item) =>
      isServiceMatchCategory(item, categoryName),
    );

    const fallbackImage = selected?.image ?? currentValue.image;
    setCurrentImage(fallbackImage);

    if (selected) {
      setCurrentValue(selected);
    }

    const nextImage = getCategoryImage(categoryName);
    if (!nextImage) {
      return;
    }

    const imagePreload = new Image();
    imagePreload.onload = () => {
      setCurrentImage(nextImage);
    };
    imagePreload.src = nextImage;
  };

  useEffect(() => {
    void getAllWorks(COLLECTION_ID);
    void getCollectionDetails(COLLECTION_ID);
  }, [getAllWorks, getCollectionDetails]);

  useEffect(() => {
    if (!selectedCategoryImageUrls.length) {
      setCurrentImage(currentValue.image);
      return;
    }
    setCurrentImage(selectedCategoryImageUrls[0]);
  }, [selectedCategoryImageUrls, currentValue.image]);

  return (
    <div className="px-15 py-15 max-md:pt-5 max-md:pb-6 max-md:px-3.5  bg-white relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-lg:-translate-y-[70%] -rotate-45 blur-[250px] max-lg:blur-[80px]">
        <div className="lg:w-[500px] lg:h-[500px] w-[200px] h-[200px] rounded-full bg-[#02DDEF]" />
        <div className="lg:w-[500px] w-[200px] h-[200px] lg:h-[500px] rounded-full bg-[#FA01F0]" />
      </div>

      <div className="relative flex flex-col gap-13.5 max-md:gap-3 z-10">
        <h1 className="text-[90px]/[120%] max-md:text-[36px]/[120%] text-start text-black leading-[1]">
          <span className="font-cormo italic">What We&nbsp;</span>
          <strong className="font-root font-extrabold not-italic">
            Deliver
          </strong>
        </h1>
        <div className="bg-black pl-15 max-md:px-4 pr-16 pt-10 max-md:pt-5 pb-16 max-md:pb-5 rounded-4xl max-md:rounded-lg relative overflow-hidden">
          <div className="absolute -bottom-120 max-lg:-translate-y-[70%] -rotate-50 blur-[200px] max-lg:blur-[80px]">
            <div className="lg:w-[500px] lg:h-[500px] w-[200px] h-[200px] rounded-full bg-[#02DDEF]" />
            <div className="lg:w-[500px] w-[200px] h-[200px] lg:h-[500px] rounded-full bg-[#FA01F0]" />
          </div>
          <div className="relative z-10">
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
                          backgroundImage: `url(${currentImage})`,
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
                    <div className="flex flex-col items-start justify-between h-full gap-5 max-md:gap-3.5 max-md:gap-y-3 mt-10 max-md:mt-0">
                      <div className="flex gap-3 flex-wrap">
                        {allValues.map((value) => (
                          <button
                            key={value}
                            onClick={() => handleSetActive(value)}
                            className={`flex-shrink-0 border ${activeCategoryName !== value && "hover:text-black hover:bg-white"} cursor-pointer text-xl font-medium max-md:text-[8px]/[120%] py-2.5 max-md:py-1 max-md:px-2.5 px-10 rounded-full ${
                              activeCategoryName === value
                                ? "bg-[#02DDEF] text-black  font-semibold border-none"
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
      </div>
    </div>
  );
}
