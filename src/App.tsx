import { Index } from "./pages/index";
import { ThankYou } from "./pages/thank-you";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./constants/routes";
import * as Styled from "./App.styles";
import { FIELD_SET } from "constants/field-set";

const router = createBrowserRouter([
  {
    path: routes.index,
    element: <Index fieldSet={FIELD_SET} />,
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
  return (
    <Styled.Container>
      <RouterProvider router={router} />
    </Styled.Container>
  );
}

export default App;
