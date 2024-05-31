import React from "react";
import footerLogo from "/images/footerlogo.png";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegPaperPlane,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import {
  RiGitRepositoryPrivateFill,
  RiGitRepositoryPrivateLine,
  RiTwitterXFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { MdPrivacyTip } from "react-icons/md";
import { BsCheck2Square } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className=" bg-primary text-white ">
      <div className="footer pb-10 pt-14 justify-between md:w-10/12 w-11/12 mx-auto">
        <nav>
          <div>
          <img src={footerLogo} alt="Footer Logo" />
          <h3 className="text-[10px] font-semibold pl-1">Service Excellence Assured</h3>
          </div>
          
        </nav>
        <nav>
          <Link to="/" className="font-bold text-xl text-white">
            Home
          </Link>
          <Link to="/about" className="link link-hover">
            About us
          </Link>
          <Link to="services" className="link link-hover">
            Services
          </Link>
          <Link to="/blogs" className="link link-hover">
            Blogs
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact us
          </Link>
        </nav>
        <nav>
          <h6 className="font-bold text-xl text-white">Support</h6>
          <a className="link link-hover flex items-center gap-1">
            <IoIosMail className="font-bold text-xl" /> info@serviqore.com
          </a>
          <Link
            to="/privacystatements"
            className="link link-hover flex items-center gap-1"
          >
            <MdPrivacyTip className="font-bold text-xl" /> Privacy Statement
          </Link>
          <Link
            to="/terms&conditions"
            className="link link-hover flex items-center gap-1"
          >
            <BsCheck2Square className="font-bold text-xl" /> Terms & Conditions
          </Link>
        </nav>
        <form className="w-9/12">
          <h6 className="font-bold text-xl text-white">Stay up to date</h6>
          <fieldset className="form-control w-80">
            <div className="join relative w-9/12">
              <label className="relative focus-within:text-transparent cursor-text">
                <input
                  type="text"
                  className="py-2 w-full px-6 rounded bg-[#fbfbfb38] text-white focus:outline-none"
                />
                <span className="absolute left-1 top-2 px-1 capitalize tracking-wide">
                  Your email address
                </span>
              </label>
              <button>
                <span className="absolute top-[4px] right-5 bg-white text-primary px-3 py-1 rounded">
                  send
                </span>
              </button>
            </div>
          </fieldset>
          <div className="flex items-center justify-start gap-4 w-full text-[20px] mt-2">
            <a className="link link-hover">
              <FaFacebook />
            </a>
            <a className="link link-hover">
              <FaInstagram />
            </a>
            <a className="link link-hover">
              <FaLinkedin />
            </a>
            <a className="link link-hover">
              <FaWhatsapp />
            </a>
          </div>
        </form>
      </div>
      <div className="text-center py-3 text-sm ">
        <p>Copyright © 2024 Serviqore All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
