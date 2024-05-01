import React, { useEffect, useState } from "react";
import aboutpic from "/images/AboutImages/aboutside.png";
import servic1 from "/images/AboutImages/digital_marketing.png";
import servic2 from "/images/AboutImages/virtualresourcing.png";
import servic3 from "/images/AboutImages/AccountingBookkeepingAccountingBookkeeping.png";
import servic4 from "/images/AboutImages/GUARDACCOUNTIBILITY.png";
import vector1 from "/images/AboutImages/Vector1.png";
import vector2 from "/images/AboutImages/Vector2.png";
import vector3 from "/images/AboutImages/Vector3.png";
import vector4 from "/images/AboutImages/Vector4.png";

import BpoParadiam from "../Homepage/BpoParadiam/BpoParadiam";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
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
      <div className=" bg-backgroundGray py-8">
       <div className="md:flex items-center gap-10 justify-between w-11/12 md:w-10/12 mx-auto">
       <div className="md:w-2/3 mx-auto">
          <h1 className="font-bold  text-3xl sm:text-[50px] sm:leading-[61px] text-secondary">
            Welcome to Serviqore! We're dedicated to excellence, integrity and
            professional service.
          </h1>
          <p className="text-[17px] text-textMuted mt-4">
            Our mission is to be the reliable ally that empowers businesses with
            scalable solutions and fosters enduring partnerships for sustained
            growth and success.
          </p>

          <Link to="/contact">
            <button className="flex gap-2 bg-primary hover:opacity-85 text-white py-2 px-4 my-3 items-center rounded">
              <span>Contact us </span> <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
        {/* image content */}
        <div className="md:w-1/2 ml-auto">
          <img src={aboutpic} className="ml-auto" alt="about img" />
        </div>
       </div>
      </div>

      <BpoParadiam
        headerText="ServiQore envisions itself as the catalyst for robust growth and long term success, both for our clients and our company, through our innovative approach and steadfast commitment to excellence in the BPO industry."
        contentText="we go beyond traditional BPO paradigm of service delivery We're here to build collaborations We understand that businesses need more than solutions they need a reliable ally committed to their growth That's who we are a dependable team ready to add real value to your operations."
        subcontentText="Our goal is simple empower businesses, no matter their size, with solutions that build long term partnerships, not just transactions."
      />

      {/* cunter section */}
      <div>
        <div className="flex text-center flex-wrap px-1 items-center justify-center md:gap-20 gap-14 mt-28 ">
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1 className="font-bold text-center text-5xl md:text-[80px] leading-[44px] text-primary mb-10">
                {counter && <CountUp start={0} end={200} duration={2} />}
                <sup className="font-[400]">+</sup>
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
                <sup className="font-[400]">+</sup>
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
                {counter && <CountUp start={0} end={50} duration={2} />}
                <sup className="font-[400]">+</sup>
              </h1>
            </ScrollTrigger>
            <h5 className="font-semibold text-[18px] leading-[20px] text-center text-textMuted">
              Incidents resolving every week
            </h5>
          </div>
        </div>
        <p className="mb-20 mt-10 px-5 md:px-28 text-center text-textMuted text-[15px] font-normal">
          We've cultivated collaborative partnerships with 200+ security
          professionals and 50+ job sites, enhancing service customization and
          client satisfaction. Through streamlined operations, we maximize
          effectiveness and productivity, resolving over 100 incidents every
          week.
        </p>
      </div>

      <div className="text-center py-8 px-5 md:px-28">
        <h2 className="text-[36px] text-secondary font-semibold">
          What we do?
        </h2>
        <p className="text-textMuted mt-5">
          Drawing from our collective expertise in Accounting, Virtual Resources
          and Digital Marketing, we craft tailored strategies for every client.
          Whether a startup or a big player, our mission remains constant: to
          boost success with scalable solutions for smooth operations and
          sustainable growth. Our diverse range of services includes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 my-14 justify-center">
          <div>
            <div className="bg-[#F5F7FA] flex items-center justify-center p-3 mx-auto h-56 rounded-3xl">
              <img src={servic4} alt="service" />
            </div>
            <h3 className="text-secondtextMuted font-semibold text-[28px] leading-[30px] mt-5">
              Security Guard Monitoring & Dispatch
            </h3>
          </div>
          <div>
            <div className="bg-[#F5F7FA] flex items-center justify-center p-3 mx-auto h-56 rounded-3xl">
              <img src={servic2} alt="service" />
            </div>
            <h3 className="text-secondtextMuted font-semibold text-[28px] leading-[30px] mt-5">
              Virtual <br /> Resourcing
            </h3>
          </div>
          <div>
            <div className="bg-[#F5F7FA] flex items-center justify-center p-3 mx-auto h-56 rounded-3xl">
              <img src={servic3} alt="service" />
            </div>
            <h3 className="text-secondtextMuted font-semibold text-[28px] leading-[30px] mt-5">
              Accounting & Bookkeeping
            </h3>
          </div>
          <div>
            <div className="bg-[#F5F7FA] w- flex items-center justify-center p-3 mx-auto p- h-56 rounded-3xl">
              <img src={servic1} alt="service" />
            </div>
            <h3 className="text-secondtextMuted font-semibold text-[28px] leading-[30px] mt-5">
              Digital <br /> Marketing
            </h3>
          </div>
        </div>
      </div>

      <div className="text-center pt-8  px-5 md:px-28">
        <h2 className="text-[36px] text-secondary font-semibold">
          Why Choose us??
        </h2>
        <p className="text-textMuted mt-5">
          We work together to take your security business to its fullest
          potential by:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-14 mt-10 mb-5">
          <div>
            <div className=" flex items-center justify-center pb-9 mx-auto rounded-3xl h-36 ">
              <img src={vector1} alt="service" />
            </div>
            <h3 className="text-secondtextMuted text-[16px] text-center">
              Response on time to address issues within a
              <span className="font-semibold"> 2 minute</span> timeframe.
            </h3>
          </div>
          <div>
            <div className=" flex items-center justify-center pb-9 mx-auto rounded-3xl h-36 ">
              <img src={vector2} alt="service" />
            </div>
            <h3 className="text-secondtextMuted text-[16px] text-center">
              Enabling you to concentrate on essential business tasks and
              expansion. We support clients in concentrating on core activities
              while simplifying
              <span className="font-semibold pl-1">
                monitoring, communication, and documentation processes
              </span>
              .
            </h3>
          </div>
          <div>
            <div className=" flex items-center justify-center pb-9 mx-auto rounded-3xl h-36 ">
              <img src={vector3} alt="service" />
            </div>
            <h3 className="text-secondtextMuted text-[16px] text-center">
              Having tech savvy and seasoned team to oversee guards round the
              clock, ensuring
              <span className="font-semibold pl-1">
                tailored security strategies and compliance with protocols
              </span>
              .
            </h3>
          </div>
        </div>
        {/* real time value */}
        <div className="px-10 md:px-0 md:w-2/3 mx-auto py-5">
          <div className="flex items-center justify-center mx-auto rounded-3xl">
            <img src={vector4} alt="service" />
          </div>
          <h3 className="text-secondary font-semibold text-[30px] my-5">
            Real value for money
          </h3>
          <ul className="list-disc text-start text-secondtextMuted space-y-2">
            <li>
              We have a track record of helping clients grow their businesses
              significantly,
              <span className="font-semibold pl-1">
                with growth rates ranging from 300% to 500%
              </span>
              in the first year.
            </li>
            <li>
              Our services lead to significant
              <span className="font-semibold pl-1">
                savings on monthly staffing costs, up to 50%
              </span>
              , compared to traditional in house operations.
            </li>
            <li>
              <span className="font-semibold pl-1">
                Our staffing model is flexible
              </span>
              , allowing quick adjustments to meet changing demand
            </li>
            <li>
              We consistently work towards streamlining processes , finding ways
              to boost efficiency and cut costs for our clients, resulting in
              long term savings and value creation.
            </li>
          </ul>
        </div>
      </div>
      <div className="md:px-28 px-5 text-center mt-10 mb-14">
        <h1 className="text-black text-[30px] font-bold py-4">
          Get Started Today
        </h1>
        <Link to="/contact">
          <button className="flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white py-2 px-6 mb-6 rounded mx-auto">
            <span>Contact us </span> <FaLongArrowAltRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
