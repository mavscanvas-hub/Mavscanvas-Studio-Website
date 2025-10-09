import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "./layout/landing_layout";
import Home from "./pages/home";
import About from "./pages/about";

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
    ],
  },
]);

export default router;
