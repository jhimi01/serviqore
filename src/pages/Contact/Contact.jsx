import React from "react";
import "./Contact.css";
import {
  FaMagnifyingGlassLocation,
  FaMapLocationDot,
  FaPhoneVolume,
} from "react-icons/fa6";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="md:w-9/12 contactsection my-20 w-11/12 mx-auto">
      <div className="md:flex justify-between gap-20">
        {/* form side */}
        <div className="md:w-1/2">
          <h1 className="text-black relative font-semibold text-[36px] leading-[76px] mb-4">
            Contact us
          </h1>
          <p className="text-[#959595] text-[16px] font-normal leading-[16px]">
            Reach out to us for any query
          </p>

          <form className="flex flex-col gap-4 mt-5">
            <input
              type="text"
              placeholder="Type here"
              className="input rounded-none input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Type here"
              className="input rounded-none input-bordered w-full"
            />
            <textarea
              className="textarea rounded-none textarea-bordered"
              placeholder="Message"
            ></textarea>
            <input
              type="submit"
              className="w-full bg-primary text-white rounded py-2 font-bold hover:opacity-90 cursor-pointer"
            />
          </form>
        </div>

        {/* image side */}
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          className="md:w-1/2 relative contactMap"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9741630735525!2d90.34285607122342!3d23.748300741743016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf6fc9430681%3A0xb12344d77921dcdc!2sB7%2C%20House%2C%2019%20Rd%208%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1712336393258!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex mt-20">
        <div className="flex w-1/3 hover:shadow p-4 items-center justify-center gap-3">
          <FaMagnifyingGlassLocation className="text-primary text-5xl" />
          <div>
            <h4 className="font-semibold text-[16px] leading-[16px] text-black">
              Location
            </h4>
            <p className="text-[#646464] font-normal text-[14px] leading-[16px]">
              Unit B7, House 19, Road 8, Shekhertek, Mohammadpur, Dhaka - 1207
            </p>
          </div>
        </div>
        <div className="flex w-1/3 hover:shadow p-4 items-center justify-center gap-3">
          <MdEmail className="text-primary text-5xl" />
          <div>
            <h4 className="font-semibold text-[16px] leading-[16px] text-black">
              Email
            </h4>
            <p className="text-[#646464] font-normal text-[14px] leading-[16px]">
               info@serviqore.com
            </p>
          </div>
        </div>
        <div className="flex w-1/3 hover:shadow p-4 items-center justify-center gap-3">
          <MdLocalPhone className="text-primary  text-5xl" />
          <div>
            <h4 className="font-semibold text-[16px] leading-[16px] text-black">
              Phone
            </h4>
            <p className="text-[#646464] font-normal text-[14px] leading-[16px]">
              +880 1896 191700
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
