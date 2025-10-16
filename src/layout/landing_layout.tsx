import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { useState, useRef, useEffect } from "react";

export default function LandingLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow = isSidebarOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isSidebarOpen]);

  // useEffect(() => {
  //   function onKey(e: KeyboardEvent) {
  //     if (e.key === "Escape") setIsSidebarOpen(false);
  //   }
  //   window.addEventListener("keydown", onKey);
  //   return () => window.removeEventListener("keydown", onKey);
  // }, []);

  // focus sidebar when opened (helps keyboard users)
  useEffect(() => {
    if (isSidebarOpen) {
      sidebarRef.current?.focus();
    }
  }, [isSidebarOpen]);

  return (
    <section className="min-h-screen flex flex-col relative bg-black overscroll-contain">
      <header className="w-full px-15 max-md:px-4.5 fixed top-14 max-md:top-5 z-50">
        <Navbar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
        />
      </header>

      {/* Backdrop: always in DOM so close animation can run */}
      <div
        aria-hidden={!isSidebarOpen}
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto z-40"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Sidebar: always in DOM so it can animate on close */}
      <div
        ref={sidebarRef}
        tabIndex={-1}
        className={`fixed inset-y-0 left-0 z-50 w-[450px] max-w-full bg-neutral-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "-translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isSidebarOpen}
      >
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}
