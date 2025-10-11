import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "./layout/landing_layout";
import Home from "./pages/home";
import About from "./pages/about";
import Service from "./pages/service";
import Work from "./pages/work";
import Pricing from "./pages/pricing";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/services",
        Component: Service,
      },
      {
        path: "/work",
        Component: Work,
      },
      {
        path: "/pricing",
        Component: Pricing,
      },
    ],
  },
]);

export default router;
