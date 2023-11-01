import { Index } from "./pages/index";
import { ThankYou } from "./pages/thank-you";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./constants/routes";

const router = createBrowserRouter([
  {
    path: routes.index,
    element: <Index />,
  },
  {
    path: routes.thankyou,
    element: <ThankYou />,
  },
  {
    path: "*",
    element: <Navigate to={routes.index} />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
