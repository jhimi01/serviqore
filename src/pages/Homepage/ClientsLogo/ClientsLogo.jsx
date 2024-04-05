import React from "react";
import areas from "../../../assets/clientslogo/arseas.png";
import allstarts from "../../../assets/clientslogo/all star.png";
import trycker from "../../../assets/clientslogo/try.png";
import aoe from "../../../assets/clientslogo/AOE.png";
import boi from "../../../assets/clientslogo/BOI.png";
import thewlft from "../../../assets/clientslogo/the weft.png";

const ClientsLogo = () => {
  return (
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
  );
};

export default ClientsLogo;
