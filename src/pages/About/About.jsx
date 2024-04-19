import React, { useEffect, useState } from "react";
import aboutpic from "/images/aboutside.png";
import bussinessgrowth from "/images/bussinessGrowth.png";
import uniteforces from "/images/uniteforces.png";
import BpoParadiam from "../Homepage/BpoParadiam/BpoParadiam";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Testimonials from "../Homepage/Testimonials/Testimonials";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const About = () => {
  const [counter, setCounterOn] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="mt-16">
      <Helmet>
        <title>about | serviqore</title>
      </Helmet>
      <div className="md:flex items-center bg-backgroundGray py-8 px-5 md:px-28">
        <div className="md:w-2/3">
          <h1 className="font-bold  text-3xl sm:text-[50px] sm:leading-[61px] text-primary">
            Welcome to Serviqore! We're dedicated to excellence, integrity and
            professional service.
          </h1>
          <p className="text-[17px] text-textMuted mt-4">
          Our mission is to be the reliable ally that empowers businesses with scalable solutions and fosters enduring partnerships for sustained growth and success.
          </p>

          <Link to="/contact">
            <button className="flex items-center gap-3 bg-primary text-xl hover:opacity-90 text-white py-2 px-7 my-6 rounded">
              <span>CTA </span> <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
        {/* image content */}
        <div className="md:w-1/2">
          <img src={aboutpic} alt="about img" />
        </div>
      </div>

      <BpoParadiam headerText="ServiQore envisions itself as the catalyst for robust growth and long term success, both for our clients and our company, through our innovative approach and steadfast commitment to excellence in the BPO industry."
      contentText="we go beyond traditional BPO paradigm of service delivery We're here to build collaborations We understand that businesses need more than solutions they need a reliable ally committed to their growth That's who we are a dependable team ready to add real value to your operations."
      subcontentText="Our goal is simple empower businesses, no matter their size, with solutions that build long term partnerships, not just transactions."
      />

      {/* cunter section */}
      <div>
        <div className="flex text-center flex-wrap px-1 items-center justify-center gap-20 mt-28 ">
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1 className="font-bold text-center text-5xl md:text-[80px] leading-[44px] text-primary mb-10">
                {counter && <CountUp start={0} end={200} duration={2} />}
                <sup>+</sup>
              </h1>
            </ScrollTrigger>

            <h5 className="font-semibold text-[18px] leading-[20px] text-center text-textMuted">
              Security professionals collaborations
            </h5>
          </div>
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1 className="font-bold text-center text-5xl md:text-[80px] leading-[44px] text-primary mb-10">
                {counter && <CountUp start={0} end={50} duration={2} />}
                <sup>+</sup>
              </h1>
            </ScrollTrigger>
            <h5 className="font-semibold text-[18px] leading-[20px] text-center text-textMuted">
              Job Sites
            </h5>
          </div>
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1 className="font-bold text-center text-5xl md:text-[80px] leading-[44px] text-primary mb-10">
                {counter && <CountUp start={0} end={100} duration={2} />}
                <sup>+</sup>
              </h1>
            </ScrollTrigger>
            <h5 className="font-semibold text-[18px] leading-[20px] text-center text-textMuted">
              Incidents resolving every week
            </h5>
          </div>
        </div>
        <p className="mb-20 mt-10 px-5 md:px-28 text-center text-textMuted text-[14px] leading-[20px] font-normal">
          We've cultivated collaborative partnerships with 200+ security
          professionals and 50+ job sites, enhancing service customization and
          client satisfaction. Through streamlined operations, we maximize
          effectiveness and productivity, resolving over 100 incidents every
          week.
        </p>
      </div>

      {/* bussiness growth */}
      <div className="py-8 px-5 md:px-28">
        <div className="md:flex gap-16 items-center justify-center">
          <div className="md:w-1/2">
            <h2 className="text-secondary text-[36px] leading-[44px] font-semibold">
              Business Growth
            </h2>
            <p className="text-[14px] mt-5 text-textMuted font-normal text-justify">
              What sets us apart is our ability to deliver exceptional results.
              We've achieved an outstanding{" "}
              <span className="font-bold ">500%</span> business growth for our
              clients, establishing ServiQore as an industry leader within a
              remarkably short timeframe.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={bussinessgrowth} />
          </div>
        </div>

        <div className="md:flex mt-14 gap-16 items-center justify-center">
          <div className="md:w-1/2">
            <img src={uniteforces} />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-secondary text-[36px] leading-[44px] font-semibold">
              Let's unite forces!
            </h2>
            <p className="text-[14px] mt-5 text-textMuted font-normal text-justify">
              Together, we will enhance efficiency, forge enduring partnerships,
              and strive towards shared success. Connect with ServiQore today to
              explore how we can propel your business to new heights.
            </p>
          </div>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default About;
