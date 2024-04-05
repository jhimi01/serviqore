import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Homepage/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blogs from "../pages/Blogs/Blogs";
import Career from "../pages/Career/Career";
import Faq from "../pages/Faq/Faq";
import Contact from "../pages/Contact/Contact";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        { 
            path: "/", element: <Home /> 
        },
        {
            path: '/about',
            element: <About />
        },
       
        {
            path: '/services',
            element: <Services />
        },
        {
            path: '/blogs',
            element: <Blogs />
        },
        {
            path: '/career',
            element: <Career />
        },
        {
            path: '/faq',
            element: <Faq />
        },
        {
            path: '/contact',
            element: <Contact />
        }
       
    ],
  },
]);
