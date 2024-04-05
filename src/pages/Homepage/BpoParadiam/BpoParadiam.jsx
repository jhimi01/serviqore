import React from "react";
import aboutimg from "../../../assets/about 2 1.png";
import areas from "../../../assets/clientslogo/arseas.png";
import allstarts from "../../../assets/clientslogo/all star.png";
import trycker from "../../../assets/clientslogo/try.png";
import aoe from "../../../assets/clientslogo/AOE.png";
import boi from "../../../assets/clientslogo/BOI.png";
import thewlft from "../../../assets/clientslogo/the weft.png";

const BpoParadiam = () => {
  return (
    <div>
      <div className="text-center md:w-2/3 w-11/12 mx-auto my-10">
        <h1 className="font-semibold text-[36px] text-black">
          We transcend the traditional BPO paradigm by fostering collaborations
        </h1>
        <p className="text-[#959595] font-normal  text-[16px] leading-[16px] md:w-3/4 mx-auto mt-3">
          We understand that businesses require more than just solutions; they
          need a reliable ally committed to their growth journey. That's
          precisely who we are – a dependable team poised to add tangible value
          to your operations.
        </p>
      </div>

      <div className="md:w-10/12 w-11/12 mx-auto md:flex items-center">
        {/* image content */}
        <div className="md:w-1/2">
          <img src={aboutimg} />
        </div>
        {/* pera content */}
        <div className="md:w-1/2">
          <h1 className="font-semibold text-[36px] leading-[44px] text-secondary">
            With a proven track record of achievements
          </h1>
          <p className="font-normal text-[14px] leading-[20px] text-justify text-textMuted mt-3">
            we've successfully built and operated Remote Dispatch Centers for
            four clients in the USA. In the first year of operation, we
            implemented three Remote Dispatch Center solutions, driving
            significant business expansion. Our cost-saving initiatives have
            optimized operational efficiency, resulting in savings of up to 50%
            for our clients.
          </p>
        </div>
      </div>

      {/* some clients logo */}
      <div className="text-center md:w-10/12 mx-auto mt-14 ">
        <h2 className="font-semibold text-[36px] leading-[44px] text-primary">
          Some of Our Key Clients
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <img src={areas} alt="clients logo" />
          <img src={allstarts} alt="clients logo" />
          <img src={trycker} alt="clients logo" />
          <img src={aoe} alt="clients logo" />
          <img src={boi} alt="clients logo" />
          <img src={thewlft} alt="clients logo" />
        </div>
      </div>
    </div>
  );
};

export default BpoParadiam;
