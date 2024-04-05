import React from 'react';
import footerLogo from "../../../assets/footerlogo.png";
import './Footer.css';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegPaperPlane,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="footer justify-between py-14 bg-primary text-white px-5 md:px-28">
      <nav>
        <img src={footerLogo} alt="Footer Logo" />
        <p>Copyright © 2024 Serviqore All rights reserved</p>
      </nav>
      <nav>
        <h6 className="font-bold text-xl text-white">Home</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Blogs</a>
        <a className="link link-hover">Contact us</a>
      </nav>
      <nav>
        <h6 className="font-bold text-xl text-white">Support</h6>
        <a className="link link-hover">Call us +01000000000</a>
        <a className="link link-hover">Terms of Services</a>
        <a className="link link-hover">Privacy Policy</a>
      </nav>
      <form className='w-9/12'>
        <h6 className="font-bold text-xl text-white">Stay up to date</h6>
        <fieldset className="form-control w-80">
          <div className="join relative w-9/12">
            <input
              type="text"
              placeholder="Your email address"
              className="py-2 w-full px-4 rounded bg-[#fbfbfb38] text-white"
            />
            <button>
             
              <span className="absolute top-2 right-2">
                <FaRegPaperPlane />
              </span>
            </button>
          </div>
        </fieldset>
        <div className="flex gap-4 w-full text-[20px] mt-5">
          <a className="link link-hover">
            <FaFacebook />
          </a>
          <a className="link link-hover">
            <RiTwitterXFill />
          </a>
          <a className="link link-hover">
            <FaInstagram />
          </a>
          <a className="link link-hover">
            <FaTelegram />
          </a>
          <a className="link link-hover">
            <FaYoutube />{" "}
          </a>
          <a className="link link-hover">
            <FaLinkedin />
          </a>
          <a className="link link-hover">
            <FaWhatsapp />
          </a>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
