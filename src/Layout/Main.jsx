import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Preloader from "../components/Preloader";
const LazyNavbar = lazy(() =>
  import("../pages/Shared/NavigationBar/NavigationBar")
);
const LazyFooter = lazy(() => import("../pages/Shared/Footer/Footer"));
const LazyScrollTop = lazy(() =>
  import("../pages/Shared/ScrollToTop/ScrollToTop")
);

const Main = () => {
  return (
    <>
      <Suspense fallback={<Preloader></Preloader>}>
        <div>
          <LazyNavbar />
          <Outlet />
          <LazyScrollTop />
          <LazyFooter />
        </div>
      </Suspense>
    </>
  );
};
export default Main;
