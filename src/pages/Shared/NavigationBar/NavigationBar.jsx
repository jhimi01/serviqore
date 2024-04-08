import { NavLink } from "react-router-dom";
import "./NavigationBar.css";
import logo from "../../../assets/Vector.png";
import { TiThMenuOutline } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";

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
<div className="md:w-10/12 w-11/12 mx-auto navbar">


    <div className="navbar-start flex-row-reverse w-full lg:w-1/2 justify-between">
        <div className="dropdown">
        <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="lg:hidden drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
          <div tabIndex={0} role="button" className="lg:hidden">
            {/* <svg
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
            </svg> */}
            <GiHamburgerMenu className="text-2xl sm:text-4xl text-primary" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 right-0 z-[2] p-2 shadow bg-base-100 rounded-box w-52"
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
