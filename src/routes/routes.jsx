import Layout from "../components/container-block/layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
        path: "",
        element : <Home />
    }]
  },
]);

export default router;
