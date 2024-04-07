import React, { useState } from "react";
import aboutpic from "../../assets/aboutside.png";
import bussinessgrowth from "../../assets/bussinessGrowth.png";
import uniteforces from "../../assets/uniteforces.png";
import BpoParadiam from "../Homepage/BpoParadiam/BpoParadiam";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Testimonials from "../Homepage/Testimonials/Testimonials";
import { Helmet } from "react-helmet";

const About = () => {
  const [counter, setCounterOn] = useState(false);

  return (
    <div className="mt-16">
       <Helmet>
        <title>about | serviqore</title>
    </Helmet>
      <div className="md:flex items-center bg-backgroundGray py-8 px-5 md:px-28">
        <div className="md:w-1/2">
          <h1 className="font-bold text-[54px] leading-[61px] text-primary">
            Your strategic success partner in scalability and seamless
            operations
          </h1>
          <p className="text-[16px] text-textMuted leading-16px mt-4">
            We're a passionate team dedicated to excellence, integrity, and
            professional service. Our mission is simple yet impactful: to
            empower businesses of all sizes with solutions that foster long-term
            partnerships, not just transactions.
          </p>
        </div>
        {/* image content */}
        <div className="md:w-1/2">
          <img src={aboutpic} alt="about img" />
        </div>
      </div>

      <BpoParadiam />

      {/* cunter section */}
      <div>
        <div className="flex flex-wrap px-1 items-center justify-center gap-20 mt-20 ">
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1 className="font-bold text-[90px] leading-[44px] text-primary mb-10">
                {counter && <CountUp start={0} end={200} duration={2} />}+
              </h1>
            </ScrollTrigger>

            <h5 className="font-bold text-[14px] leading-[20px] text-center text-textMuted">
              Security professionals collaborations
            </h5>
          </div>
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1 className="font-bold text-[90px] leading-[44px] text-primary mb-10">
                {counter && <CountUp start={0} end={50} duration={2} />}+
              </h1>
            </ScrollTrigger>
            <h5 className="font-bold text-[14px] leading-[20px] text-center text-textMuted">
              Job Sites
            </h5>
          </div>
          <div>
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h1 className="font-bold text-[90px] leading-[44px] text-primary mb-10">
                {counter && <CountUp start={0} end={100} duration={2} />}+
              </h1>
            </ScrollTrigger>
            <h5 className="font-bold text-[14px] leading-[20px] text-center text-textMuted">
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

      {/* testimonials section */}
      <Testimonials />
    </div>
  );
};

export default About;
