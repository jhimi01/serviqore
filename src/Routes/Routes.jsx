import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Homepage/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import BlogsDetails from "../pages/Blogs/BlogsDetails";
import Erronpage from "../pages/Erronpage/Erronpage";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import TermsConditions from "../pages/TermsConditions/TermsConditions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blog/:id",
        element: <BlogsDetails />,
        loader: ({ params }) =>
          fetch(`https://server-server.vercel.app/blogs/${params.id}`),
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacystatements",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms&conditions",
        element: <TermsConditions />,
      },
    ],
  },
  {
    path: "*",
    element: <Erronpage></Erronpage>,
  },
]);
