import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import logo from "../../../assets/Vector.png";

const NavigationBar = () => {
  const Navigation = () => (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => `
            navigationlink ${
              isActive ? "text-white rounded bg-primary " : "hover:text-primary"
            }
            `}
      >
        Home
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) => `
           navigationlink ${
             isActive ? "text-white rounded bg-primary" : "hover:text-primary"
           }
           `}
      >
        Services
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => `
            navigationlink ${
              isActive ? "text-white rounded bg-primary" : "hover:text-primary"
            }
            `}
      >
        About us
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) => `
          navigationlink ${
            isActive ? "text-white rounded bg-primary" : "hover:text-primary"
          }
          `}
      >
        Blogs
      </NavLink>
   
    
      <NavLink
        to="/contact"
        className={({ isActive }) => `
           navigationlink ${
             isActive ? "text-white rounded bg-primary" : "hover:text-primary"
           }
           `}
      >
        Contact us
      </NavLink>
    </>
  );

  return (
    <div style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} className=" mx-auto fixed top-0 left-0 right-0 z-50 bg-white">
<div className="md:w-10/12 mx-auto navbar">


    <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Navigation />
          </ul>
        </div>
        <a className="cursor-pointer" href="/">
          <img src={logo} alt="Example" />
        </a>
      </div>
      <div className="navbar-end w-2/3 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Navigation />
        </ul>
      </div>
</div>


    </div>
  );
};

export default NavigationBar;
