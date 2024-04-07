import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Homepage/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import BlogsDetails from "../pages/Blogs/BlogsDetails";



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
            path:'/blog/:id',
            element: <BlogsDetails></BlogsDetails>
          },
        {
            path: '/contact',
            element: <Contact />
        }
       
    ],
  },
]);
