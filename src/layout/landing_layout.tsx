import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Outlet } from "react-router-dom";
export default function LandingLayout() {
  return (
    <section className="min-h-screen flex flex-col relative bg-black overscroll-contain">
      <header className="w-full px-15 max-md:px-4.5 fixed top-14 max-md:top-5 z-50">
        <Navbar />
      </header>
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </section>
  );
}
