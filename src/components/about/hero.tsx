import Herobg from "../../assets/about/about-hero.png";
import image from "../../assets/about/about-img1.png";
const data = [
  {
    url: image,
    content: (
      <p>
        At <strong className="font-bold">Mavscanvas</strong>, we don't just
        deliver projects; we build solutions that move businesses forward. From
        branding that sparks recognition to websites that convert and campaigns
        that scale, everything we do is rooted in strategy, creativity, and
        measurable impact
      </p>
    ),
  },
  {
    url: image,
    content: (
      <p>
        We exist to <strong className="font-bold">bridge the gap</strong>{" "}
        between ambitious ideas and sustainable digital growth. Our work blends
        design excellence, technological precision, and marketing science to
        ensure our clients don't just stand
      </p>
    ),
  },
];

export default function Hero() {
  return (
    <section
      className="bg-black pt-[245px] max-md:pt-[80px] px-15 max-md:px-5 flex flex-col gap-20 max-md:gap-8 pb-40 max-md:pb-8 font-subito"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col w-full">
        <h2 className="text-white text-[90px]/[120%] max-md:text-[36px]/[120%] font-cormo italic">
          More Than an Agency,
        </h2>
        <h2 className="text-white text-[90px]/[120%] max-md:text-[36px]/[120%] font-extrabold">
          Your Digital Solutions Partner
        </h2>
      </div>
      <div className="flex flex-col gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex gap-10 items-center max-md:flex-col ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="h-[510px] max-md:h-auto max-md:w-full p-3 bg-white rounded-[30px]">
              <img
                src={item.url}
                loading="lazy"
                decoding="async"
                alt={`Hero Image ${index + 1}`}
                className="h-auto rounded-[30px] min-w-[630px] max-md:w-full max-md:min-w-0"
              />
            </div>
            <span className="text-white text-4xl/[120%] max-md:text-[12px]/[120%] font-light">
              {item.content}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
