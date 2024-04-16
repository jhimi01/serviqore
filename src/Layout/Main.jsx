import { Outlet } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import Footer from "../pages/Shared/Footer/Footer";
import ScrollToTop from "../pages/Shared/ScrollToTop/ScrollToTop";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";

const Main = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
     {isLoading ? (
        <Preloader />
      ) : (<div>
        <NavigationBar />
        <ScrollToTop />
        <Outlet />
        <Footer />
      </div>)}
</>
  )

}
export default Main;
