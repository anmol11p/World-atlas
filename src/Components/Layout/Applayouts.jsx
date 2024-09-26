import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export const Applayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
