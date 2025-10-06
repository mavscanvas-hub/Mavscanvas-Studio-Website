import { createBrowserRouter } from "react-router-dom";
import LandingLayout from "./layout/landing_layout";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);

export default router;
