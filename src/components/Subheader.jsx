import React from 'react';

const Subheader = ({title, text}) => {
    return (
        <div className="bg-[#F9FDFC] py-14 px-5 md:px-28 text-center">
        <h1 className="text-secondary font-semibold text-[64px] leading-[76px] ">
          {title}
        </h1>
        <p className="text-textMuted text-[16px] font-normal mt-5">
         {text}
        </p>
      </div>
    );
};

export default Subheader;