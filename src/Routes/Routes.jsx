import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Homepage/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
        { 
            path: "/", element: <Home /> 
        },
        {
            path: '/',
            
        }
    ],
  },
]);
