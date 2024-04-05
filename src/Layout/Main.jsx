import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer/Footer";
import ScrollToTop from "../pages/Shared/ScrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div>
      <NavigationBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
