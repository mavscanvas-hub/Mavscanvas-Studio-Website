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
      className="bg-black pt-[245px] px-15 flex flex-col gap-20 pb-40"
      style={{
        backgroundImage: `url(${Herobg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col">
        <h2 className="text-white text-[90px]/[120%] font-cormo italic">
          More Than an Agency,
        </h2>
        <h2 className="text-white text-[90px]/[120%] font-extrabold">
          Your Digital Solutions Partner
        </h2>
      </div>
      <div className="flex flex-col gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex gap-10 items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="h-[510px] p-5 bg-white rounded-[30px]">
              <img
                src={item.url}
                alt={`Hero Image ${index + 1}`}
                className="h-auto rounded-[30px] min-w-[630px]"
              />
            </div>
            <span className="text-white text-4xl/[120%] font-light">
              {item.content}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
