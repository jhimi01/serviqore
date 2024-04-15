import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Homepage/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import BlogsDetails from "../pages/Blogs/BlogsDetails";
import Erronpage from "../pages/Erronpage/Erronpage";

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
          element: <BlogsDetails />,
          loader: async ({ params }) => {
            try {
              const response = await fetch(`/public/data.json`);
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              const data = await response.json();
              const blogDetails = data.find(blog => blog._id === parseInt(params.id));
              return blogDetails;
            } catch (error) {
              console.error("Error loading blog details:", error);
              return null; // Return null if there's an error loading data
            }
          }
        },
        
        {
            path: '/contact',
            element: <Contact />
        }
       
    ],
  },
  {
    path: '*',
    element: <Erronpage></Erronpage>
  }
]);
