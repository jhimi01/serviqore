import React from "react";
import aboutimg from "/images/about 2 1.png";

const BpoParadiam = ({headerText, peraText, contentText, subcontentText}) => {
  return (
    <div>
      <div className="text-center md:w-2/3 w-11/12 mx-auto my-10">
        <h1 className="font-semibold text-3xl sm:text-[36px] text-black">
         {headerText}
        </h1>
        <p className="text-textMuted font-normal  text-[17px]  px-6 mx-auto mt-3">
          {peraText}
        </p>
      </div>

      <div className="md:w-10/12 w-11/12 mx-auto md:flex items-center">
        {/* image content */}
        <div className="md:w-1/2">
          <img src={aboutimg} />
        </div>
        {/* pera content */}
        <div className="md:w-1/2">
          <h1 className="font-semibold text-3xl sm:text-[36px] leading-[44px] text-secondary">
            With a proven track record of achievements
          </h1>
          <p className="font-normal text-[16px] leading-[20px] text-justify text-textMuted mt-3">
            {contentText}
           <p className="text-black mt-4">{subcontentText}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BpoParadiam;
