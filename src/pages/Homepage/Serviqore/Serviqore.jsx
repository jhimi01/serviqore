import React from "react";
import group from "/images/Group.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Serviqore = () => {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto py-10 mb-10">
      <div className="md:flex justify-center mt-12">
        <div className="md:w-1/2">
          <img className="mx-auto my-5" src={group} />
        </div>
        <div className="md:w-1/2 text-start space-y-3 md:space-y-6">
          <h1 className="font-semibold text-2xl sm:text-[26px] leading-[30px] text-black md:leading-[42px]">
            Ready to elevate your security services to the next level?
          </h1>
          <h1 className="font-semibold text-2xl sm:text-[26px] leading-[30px] md:leading-[42px] text-black ">
            Partner with Serviqore
          </h1>
          <div>
            <button className=" bg-primary hover:opacity-90 text-white py-2 px-4 rounded mr-auto">
              <Link
                to="/contact"
                className="flex items-center justify-center gap-2"
              >
                <span>Get a Quote </span> <FaLongArrowAltRight />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serviqore;
