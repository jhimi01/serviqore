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
    <div
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
      className=" mx-auto fixed top-0 left-0 right-0 z-50 bg-white"
    >
      <div className="md:w-10/12 w-11/12 mx-auto navbar">
        <div className="navbar-start flex-row-reverse w-full lg:w-1/2 justify-between">
          <div className="dropdown">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="lg:hidden drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button btn ">
                  <div tabIndex={0} role="button" className="lg:hidden">
                    <GiHamburgerMenu className="text-2xl sm:text-4xl text-primary" />
                  </div>
                </label>
              </div>
              <div className="drawer-side lg:hidden">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <img src={logo} />
                <ul className="menu p-4 lg:w-[30%] md:2/3 sm:w-1/2 w-9/12 min-h-full bg-base-200 text-base-content">
                  <div className="h-[90px] w-[90px] object-cover">
                    <img className="object-cover" src={logo} />
                  </div>
                  <hr className="border-1 mb-2 mr-2  border-textMuted" />
                  <Navigation />
                </ul>
              </div>
            </div>
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
