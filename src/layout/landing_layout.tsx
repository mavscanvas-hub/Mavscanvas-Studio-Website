import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/sidebar";
import Pricing from "../components/modal/pricing_modal";
import FAQModal from "../components/modal/faq_modal";
import { useState, useRef, useEffect } from "react";

export default function LandingLayout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [getStartedModalOpen, setGetStartedModalOpen] = useState(false);
  const [faqModal, setFaqModal] = useState(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.documentElement.style.overflow =
      isSidebarOpen || getStartedModalOpen || faqModal ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isSidebarOpen, getStartedModalOpen, faqModal]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsSidebarOpen(false);
        setGetStartedModalOpen(false);
        setFaqModal(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      sidebarRef.current?.focus();
    }
  }, [isSidebarOpen]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  return (
    <section
      className={`min-h-screen flex flex-col relative ${
        getStartedModalOpen ? "bg-transparent" : "bg-black"
      } overscroll-contain`}
    >
      <header className="w-full px-15 max-md:px-4.5 fixed top-14 max-md:top-5 z-50">
        <Navbar
          setIsSidebarOpen={setIsSidebarOpen}
          isSidebarOpen={isSidebarOpen}
          setGetStartedModalOpen={setGetStartedModalOpen}
          getStartedModalOpen={getStartedModalOpen}
        />
      </header>

      <div
        aria-hidden={!isSidebarOpen}
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isSidebarOpen
            ? "opacity-100 pointer-events-auto z-40"
            : "opacity-0 pointer-events-none"
        }`}
      />

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

      {getStartedModalOpen && (
        <Pricing setGetStartedModalOpen={setGetStartedModalOpen} />
      )}
      {faqModal && (
        <div className="relative z-[9999] max-h-screen overflow-auto w-full">
          <FAQModal />
        </div>
      )}

      <div className="flex-1">
        <Outlet />
      </div>
      <Footer faqModal={faqModal} setFaqModal={setFaqModal} />
    </section>
  );
}
