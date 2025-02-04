import { Outlet } from "react-router";
import Footer from "./Footer";

export default function FooterLayout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
