import React from "react";
import group from "../../../assets/Group.png";
import { FaLongArrowAltRight } from "react-icons/fa";

const Serviqore = () => {
  return (
    <div className="text-center md:w-10/12 w-11/12 mx-auto">
      <div>
        {" "}
        <h1 className="font-semibold text-[36px] text-black">
          Partner with Serviqore
        </h1>
        <p className="font-normal my-3 text-[16px] leading-[16px] text-[#959595]">
          Your Trusted Ally in Remote Security Supervision.
        </p>
        <img className="mx-auto my-5" src={group} />
      </div>
      <div>
        <h1 className="font-semibold text-3xl sm:text-[36px] text-black">
          Ready to elevate your security services to the next level?
        </h1>
        <p className="font-normal my-3 text-[16px] leading-[16px] text-black">
          Contact us today to explore how our solutions can support your
          Security Guard Company's success.
        </p>
        <button className="flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white py-2 px-4 my-6 rounded mx-auto">
          <span>Get a Quote </span> <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default Serviqore;
