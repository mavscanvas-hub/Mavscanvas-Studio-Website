import { Link } from "react-router-dom";
import logo from "../assets/company/logo.png";
import Button from "./custom/button";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/a",
  },
  {
    name: "Services",
    href: "/b",
  },
  {
    name: "Work",
    href: "/c",
  },
  {
    name: "Pricing",
    href: "/d",
  },
];

export default function Navbar() {
  return (
    <nav className="glass_effect max-h-[116px] navbar_blur_border">
      <ul className="flex justify-between items-center py-3.5 px-2.5">
        <div className="px-16">
          <img src={logo} alt="logo" className="h-22 w-22" />
        </div>
        <div className="flex gap-12 items-center">
          <ul className="flex items-center gap-12">
            {links.map((link) => (
              <li key={link.name} className="text-white">
                <Link
                  to={link.href}
                  className={`${
                    link.href === window.location.pathname
                      ? "text-primary font-medium navbar_shadow "
                      : "text-white font-thin"
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
            className="bg-white text-black py-2.5 px-6 rounded-full font-medium text-2lg"
          >
            Get Started
          </Button>
        </div>
      </ul>
    </nav>
  );
}
