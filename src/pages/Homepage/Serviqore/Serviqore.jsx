import React from "react";
import group from "/images/Group.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Serviqore = () => {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto py-10">
      <div className="flex items-center justify-center mt-12">
        <div className="w-1/2">
          <img className="mx-auto my-5" src={group} />
        </div>
        <div className="w-1/2 text-start">
          <h1 className="font-semibold text-2xl sm:text-[30px] text-black">
            Ready to elevate your security services to the next level?
          </h1>
          <h1 className="font-semibold text-[50px] text-black">
            Partner with Serviqore
          </h1>
          {/* <p className="font-normal my-3 text-[16px] leading-[16px] text-textMuted">
          Your Trusted Ally in Remote Security Supervision.
        </p>
          <p className="font-normal my-3 text-[16px] leading-[16px] text-black">
            Contact us today to explore how our solutions can support your
            Security Guard Company's success.
          </p> */}
          <Link to="/contact">
            <button className="flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white py-2 px-4 my-6 rounded mr-auto">
              <span>Get a Quote </span> <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Serviqore;
