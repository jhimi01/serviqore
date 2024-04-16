import React from "react";
import logo from "../../public/images/Vector.png";

const Preloader = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <img src={logo} alt="logo" />
      <progress className="progress w-56 bg-[#9d9d9d]"></progress>
    </div>
  );
};

export default Preloader;
