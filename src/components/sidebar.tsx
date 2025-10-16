import Bg from "../assets/sidebar/bg.png";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

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

export default function Sidebar({
  setIsSidebarOpen,
  isSidebarOpen,
}: {
  setIsSidebarOpen: (open: boolean) => void;
  isSidebarOpen: boolean;
}) {
  const location = useLocation();

  return (
    <aside
      className="w-full pt-15 pb-41 h-full bg-black min-h-screen px-8 flex flex-col gap-18"
      style={{ backgroundImage: `url(${Bg})`, backgroundSize: "cover" }}
    >
      <div className="flex justify-between items-center">
        <button className="bg-[#02DDEF] text-[28px]/[120%] rounded-full px-6 py-2.5">
          Get Started
        </button>
        <button
          className="p-3"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <IoClose className="text-4xl text-white" />
        </button>
      </div>
      <div className="flex flex-col gap-10">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => {
                setIsSidebarOpen(false);
              }}
              className={`text-[36px]/[120%] font-light text-white ${
                isActive ? "navbar_shadow_black text-white font-medium" : ""
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
