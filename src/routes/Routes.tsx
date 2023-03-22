import { useRoutes, BrowserRouter } from "react-router-dom";
import App from "../App";
import ConfirmPage from "pages/BasketLayout";

const LayoutRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/koszyk",
      element: <ConfirmPage />,
    },
  ]);

  return routes;
};

export default LayoutRoutes;
