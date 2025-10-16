import { Link, useLocation } from "react-router-dom";
import logo from "../assets/company_op/logo.webp";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./custom/button";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Work",
    href: "/work",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
];

export default function Navbar({
  setIsSidebarOpen,
  isSidebarOpen,
}: {
  setIsSidebarOpen: (open: boolean) => void;
  isSidebarOpen: boolean;
}) {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // create a top sentinel that will be intersecting when page is at top
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
      // ensure it's at the very top of the document
      document.body.prepend(sentinel);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // when sentinel is not intersecting, user has scrolled
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

  return (
    <>
      <nav
        className={`max-h-[116px] navbar_blur_border max-md:hidden ${
          scrolled
            ? "bg-black rounded-[20px] text-white navbar_shadow_black"
            : "glass_effect"
        } transition-colors duration-1000`}
      >
        <ul className="flex justify-between items-center  py-3.5 px-2.5">
          <div className="px-16">
            <img
              src={logo}
              alt="logo"
              loading="lazy"
              decoding="async"
              className="h-22 w-22"
            />
          </div>
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
              onClick={() => {
                console.log("Get Started");
              }}
              className={`${
                scrolled
                  ? "bg-white text-black"
                  : activeLink.includes("services") ||
                    activeLink.includes("pricing")
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }  py-2.5 px-6 rounded-full font-medium text-2lg`}
            >
              Get Started
            </Button>
          </div>
        </ul>
      </nav>
      {/* Mobile Nav Placeholder */}
      <div className="md:hidden flex justify-between items-center">
        <div className="">
          <img
            src={logo}
            alt="logo"
            loading="lazy"
            decoding="async"
            className="h-11 w-11"
          />
        </div>
        <Button
          className="glass_effect bg-transparent rounded-full p-2 flex items-center justify-center"
          onClick={() => {}}
        >
          <RxHamburgerMenu
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`text-2xl ${
              activeLink.includes("services") || activeLink.includes("pricing")
                ? "text-black"
                : "text-white"
            }`}
          />
        </Button>
      </div>
    </>
  );
}
