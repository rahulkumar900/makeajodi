import Layout from "../components/container-block/layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import PrivacyPolicy from "../pages/privacy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);

export default router;
