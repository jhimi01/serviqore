import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import aboutmain from "/images/serviceicon/aboutmain.png";
import Vector1 from "/images/serviceicon/Vector1.png";
import Vector2 from "/images/serviceicon/Vector2.png";
import Vector3 from "/images/serviceicon/Vector3.png";
import Vector4 from "/images/serviceicon/Vector4.png";
import Vector5 from "/images/serviceicon/Vector5.png";
import remote from "/images/serviceicon/remote.png";
import response from "/images/serviceicon/response.png";
import realvalue from "/images/serviceicon/realvalue.png";
import monitoring from "/images/serviceicon/monitoring.png";
import training from "/images/serviceicon/training.png";
import growth from "/images/serviceicon/growth.png";
import reporting from "/images/serviceicon/reporting.png";
import effeciency from "/images/serviceicon/effeciency.png";
import work1 from "/images/serviceicon/work1.png";
import work2 from "/images/serviceicon/work2.png";
import work3 from "/images/serviceicon/work3.png";
import work4 from "/images/serviceicon/work4.png";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="mt-16">
      <Helmet>
        <title>Remote Dispatch Service | serviqore</title>
      </Helmet>
      <div className="md:flex items-center py-6 bg-backgroundGray px-5 md:px-28 ">
        {/* content side */}
        <div className="md:w-[55%] mx-auto">
          <h1 className="text-4xl md:text-[60px] text-primary font-bold md:leading-[65px]">
            Security Guard Monitoring Service
          </h1>
          <p className="text-secondary font-normal text-[16px] mt-3 md:mt-5">
            We're dedicated to excellence, integrity and professional service.
            Our mission is to empower businesses of all sizes with collaborative
            solutions for long term success. Beyond traditional BPO, we're your
            reliable ally committed to growth. With over 3 years of experience
            and expertise in Remote Security Monitoring and Dispatch we tailor
            strategies for smooth operations and sustainable growth.
          </p>
          <p className="text-secondary font-normal text-[16px] md:mt-5">
            We provide Centralised Monitoring & Dispatch Centre services to
            multiple security guard businesses in the USA. Our service ensure
            streamline communication and coordination.
          </p>
        </div>
        {/* image side */}
        <div className="md:w-[45%] mx-auto mt-5 md:mt-0">
          <img src={aboutmain} alt="service" />
        </div>
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto my-20">
        <h1 className="text-center font-semibold text-[30px] text-black">
          What you will get
        </h1>

        <div className="mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-secondtextMuted">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 p-5 rounded-full items-center justify-center flex h-24 bg-[#D8E6D6]">
              <img src={Vector1} alt="vector" />
            </div>
            <p className="mt-5">
              <span className="font-semibold">Contact Centre</span> for your
              guards and clients
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-24 p-5 rounded-full items-center justify-center flex h-24 bg-[#D8E6D6]">
              <img src={Vector2} alt="vector" />
            </div>
            <p className="mt-5">
              Response within <span className="font-semibold">2 minutes:</span>
              incident response, resolution and documentation, as well as
              clients’ requests
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-24 p-5 rounded-full items-center justify-center flex h-24 bg-[#D8E6D6]">
              <img src={Vector3} alt="vector" />
            </div>
            <p className="mt-5">
              <span className="font-semibold">Real-time GPS</span> and Reports
              monitoring
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-24 p-5 rounded-full items-center justify-center flex h-24 bg-[#D8E6D6]">
              <img src={Vector4} alt="vector" />
            </div>
            <p className="mt-5">
              <span className="font-semibold">Fatigue</span> management
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-24 p-5 rounded-full items-center justify-center flex h-24 bg-[#D8E6D6]">
              <img src={Vector5} alt="vector" />
            </div>
            <p className="mt-5">
              <span className="font-semibold">Customisable</span> according to
              your business needs
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 space-y-20">
        {/* 1st section */}
        <div className="md:flex px-5 pb-6 md:px-28 items-center bg-[#F9FDFC]">
          {/* img Connect */}
          <div className="md:w-1/2 ">
            <img src={remote} className="mx-auto" alt="img" />
          </div>
          <div className="md:w-1/2 text-secondtextMuted ">
            <h1 className="subheaderText">A Remote Dispatch Center</h1>
            <p className="my-3">
              We act as a centralised hub for resource optimisation. Our daily
              activities include:
            </p>
            <ul className="list-disc pl-10">
              <li>Scheduling/Rostering</li>
              <li>Multiple Guards</li>
              <li>Multiple Clients</li>
              <li>Multiple Job/Post Sites</li>
            </ul>
          </div>
        </div>

        {/* 2nd section */}
        <div className="md:flex-row flex-col-reverse flex px-5  pb-6 md:px-28 items-center">
          <div className="md:w-1/2 text-secondtextMuted ">
            <h1 className="subheaderText">Real value for money</h1>
            <ul className="list-disc pl-5 mt-5">
              <li>
                We have a track record of helping clients grow their businesses
                significantly,{" "}
                <span className="font-semibold">
                  with growth rates ranging from 300% to 500%
                </span>{" "}
                in the first year.
              </li>
              <li>
                Our services lead to significant{" "}
                <span className="font-semibold">
                  savings on monthly staffing costs, up to 50%
                </span>
                , compared to traditional in house operations
              </li>
              <li>
                <span className="font-semibold">
                  Our staffing model is flexible,
                </span>{" "}
                allowing quick adjustments to meet changing demand
              </li>
              <li>
                We consistently work towards streamlining processes , finding
                ways to boost efficiency and cut costs for our clients,
                resulting in long term savings and value creation
              </li>
            </ul>
          </div>
          {/* img Connect */}
          <div className="md:w-1/2 mx-auto">
            <img src={realvalue} className="mx-auto" alt="img" />
          </div>
        </div>

        {/* 3rd section */}
        <div className="md:flex px-5 py-6 md:px-28 items-center bg-[#F9FDFC]">
          {/* img Connect */}
          <div className="md:w-1/2 ">
            <img src={response} className="mx-auto" alt="response" />
          </div>
          <div className="md:w-1/2 text-secondtextMuted ">
            <h1 className="subheaderText">Efficient Response Management</h1>
            <p className="my-3">
              We pride ourselves on our rapid response time, ensuring that we
              address all issues within 2 minutes. Swift Response:
            </p>
            <ul className="list-disc pl-10">
              <li>Addressing incidents within a 2 minute time frame.</li>
              <li>
                Efficient Resolution: Minimizing disruptions with our skilled
                team.
              </li>
              <li>
                Comprehensive Documentation: Meticulously recording each
                resolution
              </li>
              <li>
                Client Centric Service: Prioritising prompt and effective
                responses to clients' requests.
              </li>
            </ul>
          </div>
        </div>

        {/* 4th section */}
        <div className="md:flex-row flex-col-reverse flex px-5 gap-20 pb-6 md:px-28 items-center">
          <div className="md:w-1/2 text-secondtextMuted ">
            <h1 className="subheaderText">Real time Monitoring:</h1>
            <p className="my-3">
              Through state-of-the-art security guard monitoring system, we
              ensure guards are active round the clock
            </p>
            <ul className="list-disc pl-20 mt-5">
              <li>Live GPS Location and</li>
              <li>Tacking History</li>
              <li>Firewatch Reports</li>
              <li>Incidents Reports</li>
              <li>Hourly Reports</li>
              <li>30 Minutes Reports</li>
            </ul>
          </div>
          {/* img Connect */}
          <div className="md:w-1/2 mx-auto">
            <img className="mx-auto" src={monitoring} alt="img" />
          </div>
        </div>

        {/* 5th section */}
        <div className="md:flex px-5 py-6 md:px-28 items-center bg-[#F9FDFC]">
          {/* img Connect */}
          <div className="md:w-1/2 ">
            <img src={training} className="mx-auto" alt="training" />
          </div>
          <div className="md:w-1/2 text-secondtextMuted ">
            <h1 className="subheaderText">Training and Development</h1>
            <p className="my-3">Continuous training and evaluation to ensure</p>
            <ul className="list-disc pl-10">
              <li>Professional and efficient communications</li>
              <li>Development and documentation of protocols and procedure</li>
              <li>Protocols are strictly followed</li>
              <li>Scopes of Improvement</li>
            </ul>
          </div>
        </div>

        {/* 6th section */}
        <div className="md:flex-row flex-col-reverse flex px-5 gap-20 pb-6 md:px-28 items-center">
          <div className="md:w-1/2 text-secondtextMuted ">
            <h1 className="subheaderText">Surge Capacity for Growth</h1>
            <p className="my-3">
              Utilization of cloud-based infrastructure allows to ensure
            </p>
            <ul className="list-disc pl-20 mt-5">
              <li>Service continuity and</li>
              <li>
                scalability as business demand grows enable cost effective
                scaling
              </li>
            </ul>
          </div>
          {/* img Connect */}
          <div className="md:w-1/2 mx-auto">
            <img src={growth} className="mx-auto" alt="img" />
          </div>
        </div>

        {/* 7th section */}
        <div className="md:flex md:text-start text-center px-5 py-6 md:px-28 items-center bg-[#F9FDFC]">
          {/* img Connect */}
          <div className="md:w-1/2 ">
            <img src={reporting} className="mx-auto" alt="training" />
          </div>
          <div className="md:w-1/2 text-secondtextMuted ">
            <h1 className="subheaderText">Comprehensive Reporting</h1>
            <p className="my-3">
              Gain valuable & actionable insights into your security team’s
              performance and operations with our detailed reports and
              analytics, enabling you to optimize resources, identify areas for
              improvement, and demonstrate value to your clients.
            </p>
          </div>
        </div>

        {/* 8th section */}
        <div className="md:flex-row flex-col-reverse md:text-start text-center flex px-5 gap-20 pb-6 md:px-28 items-center">
          <div className="md:w-1/2 text-secondtextMuted ">
            <h1 className="subheaderText">Improved Operational Efficiency</h1>
            <p className="my-3">
              Streamline your operations and optimize resource allocation with
              our advanced monitoring and dispatch solutions, enabling you to
              deliver exceptional service to your clients.
            </p>
          </div>
          {/* img Connect */}
          <div className="md:w-1/2 mx-auto">
            <img src={effeciency} className="mx-auto" alt="effeciency img" />
          </div>
        </div>
      </div>

      <div className="md:px-28 px-5 py-10 mx-auto my-5 bg-[#F9FDFC]">
        <h1 className="text-center text-black py-8 font-bold text-[30px]">
          Why Choose Us?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-10">
          <div className="flex flex-col items-center">
            <div className="p-3">
              <img className="w-10" src={work1} alt="serviceicon" />
            </div>
            <div>
              <h3 className="text-[24px] leading-[30px] py-1 text-secondary font-semibold text-center">
                Expertise
              </h3>
              <p className="text-center text-[14px] text-textMuted mt-2">
                With years of experience in the recruitment industry, our team
                has the knowledge and expertise to deliver exceptional results
                for our clients.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3">
              <img className="w-10" src={work2} alt="serviceicon" />
            </div>
            <div>
              <h3 className="text-[20px] leading-[30px] py-1 text-secondary font-semibold text-center">
                Customized Solutions
              </h3>
              <p className="text-center text-[14px] text-textMuted mt-2">
                We understand that every business is unique, which is why we
                tailor our services to meet your specific needs and objectives.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3">
              <img className="w-10" src={work3} alt="serviceicon" />
            </div>
            <div>
              <h3 className="text-[20px] leading-[30px] py-1 text-secondary font-semibold text-center">
                Efficiency
              </h3>
              <p className="text-center text-[14px] text-textMuted mt-2">
                Our streamlined processes and advanced technology enable us to
                identify and secure top talent quickly and efficiently, saving
                you time and resources.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3">
              <img className="w-10" src={work4} alt="serviceicon" />
            </div>
            <div>
              <h3 className="text-[20px] leading-[30px] py-1 text-secondary font-semibold text-center">
                Dedicated Support
              </h3>
              <p className="text-center text-[14px] text-textMuted mt-2">
                From initial consultation to post-placement follow-up, our team
                is committed to providing personalized support and guidance
                every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-28 px-5 text-center my-14">
        <h1 className="text-black text-[30px] font-bold py-4">
          Get Started Today
        </h1>
        <p className="text-textMuted text-[16px]">
          Ready to take your recruitment efforts to the next level? Contact us
          today to learn more about our Virtual Resourcing Service and discover
          how we can help you build a winning team for your organization.
        </p>
        <Link to="/contact">
          <button className="flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white py-2 px-6 my-6 rounded mx-auto">
            <span>Contact us </span> <FaLongArrowAltRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
