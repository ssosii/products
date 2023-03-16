import { useRoutes, BrowserRouter } from "react-router-dom";
import App from "./App";
import BasketLayout from "BasketLayout";

const LayoutRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/koszyk",
      element: <BasketLayout />,
    },
  ]);

  return routes;
};

export default LayoutRoutes;
