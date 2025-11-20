import { Link, useLocation } from "react-router-dom";
import logo from "../assets/company_op/logo.webp";
import logoBlack from "../assets/company_op/logo_black.webp";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./custom/button";
import { useEffect, useState, useRef } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Pricing", href: "/pricing" },
];

export default function Navbar({
  setIsSidebarOpen,
  isSidebarOpen,
  setGetStartedModalOpen,
  getStartedModalOpen,
}: {
  setIsSidebarOpen: (open: boolean) => void;
  isSidebarOpen: boolean;
  setGetStartedModalOpen: (open: boolean) => void;
  getStartedModalOpen: boolean;
}) {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    let sentinel = document.getElementById(
      "nav-scroll-sentinel"
    ) as HTMLDivElement | null;
    if (!sentinel) {
      sentinel = document.createElement("div");
      sentinel.id = "nav-scroll-sentinel";
      sentinel.style.position = "absolute";
      sentinel.style.top = "0";
      sentinel.style.left = "0";
      sentinel.style.width = "1px";
      sentinel.style.height = "1px";
      document.body.prepend(sentinel);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setScrolled(!entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      const s = document.getElementById("nav-scroll-sentinel");
      if (s) s.remove();
    };
  }, []);

  // trigger animation frame so entering fixed nav can animate
  useEffect(() => {
    if (scrolled) {
      setNavVisible(false);
      requestAnimationFrame(() => {
        setNavVisible(true);
      });
    } else {
      setNavVisible(false);
    }
  }, [scrolled]);

  const handleGetStartedClick = () => {
    setGetStartedModalOpen(!getStartedModalOpen);
  };

  // Fixed nav height used for spacer to avoid layout shift when nav becomes fixed
  const NAV_HEIGHT_PX = 116;

  const isWhitePage = [
    activeLink.includes("services"),
    activeLink.includes("pricing"),
  ].some(Boolean);

  return (
    <>
      <div ref={wrapperRef} className="w-full">
        <nav
          ref={wrapperRef}
          className={`max-h-[116px] navbar_blur_border max-md:hidden transition-all duration-300 ease-out transform ${
            scrolled
              ? `fixed top-0 left-0 right-0 w-full z-50 bg-black rounded-none text-white navbar_shadow_black ${
                  navVisible
                    ? "translate-y-0 opacity-100 "
                    : "-translate-y-3 opacity-0 transition-opacity duration-3000"
                }`
              : "glass_effect translate-y-0 opacity-100"
          }`}
        >
          <ul
            className={`flex justify-between items-center py-2 pl-2.5 pr-8 ${
              scrolled && "px-20"
            }`}
          >
            <Link to="/" className={` px-5`}>
              <img
                src={isWhitePage && !scrolled ? logoBlack : logo}
                alt="logo"
                loading="lazy"
                decoding="async"
                className="h-auto w-18"
              />
            </Link>
            <div className="flex gap-12 items-center">
              <ul className="flex items-center gap-12">
                {links.map((link) => (
                  <li
                    key={link.name}
                    className={`${
                      scrolled
                        ? "text-white"
                        : activeLink.includes("services") ||
                          activeLink.includes("pricing")
                        ? "text-black"
                        : "text-white"
                    }`}
                  >
                    <Link
                      to={link.href}
                      className={`${
                        link.href === activeLink ? "font-medium" : "font-thin"
                      } ${
                        scrolled
                          ? ""
                          : link.href === activeLink
                          ? activeLink.includes("services") ||
                            activeLink.includes("pricing")
                            ? "navbar_shadow_white text-black"
                            : "navbar_shadow_black text-white"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Button
                className={`${
                  scrolled
                    ? "bg-white text-black"
                    : activeLink.includes("services") ||
                      activeLink.includes("pricing")
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } py-2.5 px-6 rounded-full font-medium text-2lg`}
                onClick={handleGetStartedClick}
              >
                Get Started
              </Button>
            </div>
          </ul>
        </nav>

        {/* Mobile Nav (keeps same scrolled -> fixed behavior) */}
        <div
          className={`md:hidden flex justify-between items-center transition-all duration-300 ease-out transform`}
        >
          <Link to={"/"}>
            <img
              src={logo}
              alt="logo"
              loading="lazy"
              decoding="async"
              className="h-11 w-11"
            />
          </Link>
          <Button
            className="glass_effect bg-transparent rounded-full p-2 flex items-center justify-center"
            onClick={() => {}}
          >
            <RxHamburgerMenu
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`text-2xl ${
                activeLink.includes("services") ||
                activeLink.includes("pricing")
                  ? "text-black"
                  : "text-white"
              }`}
            />
          </Button>
        </div>
      </div>

      {/* spacer to prevent layout jump when nav becomes fixed */}
      {scrolled && (
        <div aria-hidden="true" style={{ height: `${NAV_HEIGHT_PX}px` }} />
      )}
    </>
  );
}
