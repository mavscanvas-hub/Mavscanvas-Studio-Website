import { Link, useLocation } from "react-router-dom";
import logo from "../assets/company_op/logo.webp";
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

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <nav className="glass_effect max-h-[116px] navbar_blur_border">
      <ul className="flex justify-between items-center py-3.5 px-2.5">
        <div className="px-16">
          <img src={logo} alt="logo" className="h-22 w-22" />
        </div>
        <div className="flex gap-12 items-center">
          <ul className="flex items-center gap-12">
            {links.map((link) => (
              <li
                key={link.name}
                className={`${
                  activeLink.includes("services") ||
                  activeLink.includes("pricing")
                    ? "text-black"
                    : "text-white"
                }`}
              >
                <Link
                  to={link.href}
                  className={`${
                    link.href === activeLink
                      ? `font-medium ${
                          activeLink.includes("services") ||
                          activeLink.includes("pricing")
                            ? "navbar_shadow_white text-black"
                            : "navbar_shadow_black text-white"
                        }`
                      : "font-thin"
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
              activeLink.includes("services")
                ? "bg-black text-white"
                : "bg-white text-black"
            }  py-2.5 px-6 rounded-full font-medium text-2lg`}
          >
            Get Started
          </Button>
        </div>
      </ul>
    </nav>
  );
}
