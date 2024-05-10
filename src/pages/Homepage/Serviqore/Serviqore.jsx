import React from "react";
import group from "/images/Group.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Serviqore = () => {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto py-10">
      <div className="md:flex items-center justify-center mt-12">
        <div className="md:w-1/2">
          <img className="mx-auto my-5" src={group} />
        </div>
        <div className="md:w-1/2 text-start">
          <h1 className="font-semibold text-2xl sm:text-[30px] text-black leading-[42px]">
            Ready to elevate your security services to the next level?
          </h1>
          <h1 className="font-semibold text-4xl sm:text-[50px] text-black mb-3 md:mt-4 md:mb-7">
            Partner with Serviqore
          </h1>
          <div><Link to="/contact">
            <button className="flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white py-2 px-4 rounded mr-auto">
              <span>Get a Quote </span> <FaLongArrowAltRight />
            </button>
          </Link></div>
        </div>
      </div>
    </div>
  );
};

export default Serviqore;
