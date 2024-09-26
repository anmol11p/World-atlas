import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Applayouts } from "./Components/Layout/Applayouts";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import Country from "./Pages/Country/Country";
import CountryDetails from "./Pages/Country/CountryDetails";
import Contact from "./Pages/contact/Contact";
import Formfilled from "./Pages/contact/Formfilled";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Applayouts />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/country/:id",
          element: <CountryDetails />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/formfilled", // Add leading slash for clarity
          element: <Formfilled />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
