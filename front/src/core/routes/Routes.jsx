import { createBrowserRouter } from "react-router-dom";
import MainPage from "../../ui/pages/MainPage.jsx";
import BlockchainPage from "../../ui/pages/BlockchainPage.jsx";
import LkPage from "../../ui/pages/LkPage.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/blockchain",
    element: <BlockchainPage />,
  },
  {
    path: "/lk",
    element: <LkPage />,
  },
]);

export default Routes;
