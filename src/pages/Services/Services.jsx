import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import serviceimg from "../../assets/serviceimg.png";
import serviceicon1 from "../../assets/serviceicon/servicicon1.png";
import serviceicon2 from "../../assets/serviceicon/servicicon2.png";
import serviceicon3 from "../../assets/serviceicon/servicicon3.png";
import serviceicon4 from "../../assets/serviceicon/servicicon4.png";
import serviceicon5 from "../../assets/serviceicon/servicicon5.png";
import work1 from "../../assets/serviceicon/work1.png";
import work2 from "../../assets/serviceicon/work2.png";
import work3 from "../../assets/serviceicon/work3.png";
import work4 from "../../assets/serviceicon/work4.png";

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const services = [
    {
      icon: serviceicon2,
      title: "Real-Time Oversight",
      text: "Equip your guards with the tools they need to monitor and protect client premises effectively, leverage remote monitoring systems to enhance your security operations with real-time visibility and proactive threat detection capabilities.",
    },
    {
      icon: serviceicon1,
      title: "Emergency Response Coordination",
      text: "Access our highly trained & experienced dispatch team, available 24/7, to efficiently coordinate responses to security incidents, ensuring timely resolution, minimizing risks and maximizing client satisfaction.",
    },
    {
      icon: serviceicon3,
      title: "Guard Accountability Solutions",
      text: "Ensure accountability and adherence to protocols among your security personnel with our monitoring and reporting solutions.",
    },
    {
      icon: serviceicon4,
      title: "Comprehensive Reporting",
      text: "Gain valuable & actionable insights into your security team’s performance and operations with our detailed reports and analytics, enabling you to optimize resources, identify areas for improvement, and demonstrate value to your clients.",
    },
    {
      icon: serviceicon5,
      title: "Improved Operational Efficiency",
      text: "Streamline your operations and optimize resource allocation with our advanced monitoring and dispatch solutions, enabling you to deliver exceptional service to your clients.",
    },
  ];

  return (
    <div className="mt-8">
      <Helmet>
        <title>service | serviqore</title>
      </Helmet>
      <div className="md:flex items-center py-10 bg-backgroundGray px-5 md:px-28 ">
        {/* content side */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-[64px] text-primary font-bold md:leading-[65px]">
            Your Remote Security Dispatch Center
          </h1>
          <p className="text-secondary font-normal text-[16px] leading-[16px] md:mt-5">
            At Serviqore, we specialize in empowering Security Guard Companies
            with advanced remote monitoring and supervision solutions to enhance
            their operational efficiency and effectiveness.
          </p>
        </div>
        {/* image side */}
        <div className="md:w-1/2 mt-5 md:mt-0">
          <img src={serviceimg} alt="service" />
        </div>
      </div>

      <div className="w-11/12 md:w-10/12 mx-auto my-20">
        <div className="text-center md:w-2/3 w-11/12 mx-auto my-10">
          <h1 className="font-bold text-[30px] text-black">
            A customized plan of action
          </h1>
          <p className="text-[#959595] font-normal  text-[16px] leading-[16px] md:w-3/4 mx-auto my-5">
            With cutting-edge technology and a dedicated team of experienced
            security dispatchers, we offer comprehensive support and resources
            to help Security Guard Companies thrive in a competitive landscape.
            Here's what sets us apart:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-3 gap-7 md:gap-14">
          {services.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-[#D8E6D6] rounded-full p-3">
                <img className="w-10" src={item.icon} alt="serviceicon" />
              </div>
              <div>
                <h3 className="text-[30px] leading-[40px] py-1 text-secondary font-semibold text-center">
                  {item.title}
                </h3>
                <p className="text-justify text-[14px] text-textMuted leading-[20px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:px-28 px-5 py-10 mx-auto my-5 bg-[#F9FDFC]">
        <h1 className="text-center text-black py-8 font-bold text-[30px]">
          Why Choose Us?
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 md:gap-14">
          <div className="flex flex-col items-center">
            <div className="p-3">
              <img className="w-10" src={work1} alt="serviceicon" />
            </div>
            <div>
              <h3 className="text-[24px] leading-[40px] py-1 text-secondary font-semibold text-center">
                Expertise
              </h3>
              <p className="text-justify text-[14px] text-textMuted leading-[20px]">
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
              <h3 className="text-[24px] leading-[40px] py-1 text-secondary font-semibold text-center">
                Customized Solutions
              </h3>
              <p className="text-justify text-[14px] text-textMuted leading-[20px]">
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
              <h3 className="text-[24px] leading-[40px] py-1 text-secondary font-semibold text-center">
                Efficiency
              </h3>
              <p className="text-justify text-[14px] text-textMuted leading-[20px]">
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
              <h3 className="text-[24px] leading-[40px] py-1 text-secondary font-semibold text-center">
                Dedicated Support
              </h3>
              <p className="text-justify text-[14px] text-textMuted leading-[20px]">
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
      </div>
    </div>
  );
};

export default Services;
