import React from "react";
import "./FaqSection.css";

const FaqSection = () => {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto my-14">
      <h1 className="text-[64px] my-4 leading-[76px] font-semibold text-primary text-center">
        FAQ
      </h1>
      <div className="collapse overflow-visible collapse-plus rounded-none mb-1">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
          className="collapse-title rounded-xl text-xl font-medium text-secondary bg-[#F5F5F5]"
        >
          What is a Remote Security Dispatch Center?
        </div>
        <div className="collapse-content mt-3 bg-white p-0">
          <p
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            className="text-textMuted rounded-xl p-5"
          >
            A Remote Security Dispatch Center is a centralized facility equipped
            with advanced technology and staffed by trained professionals who
            monitor and respond to security incidents remotely, providing
            around-the-clock protection for businesses and properties.
          </p>
        </div>
      </div>

      <div className="collapse overflow-visible collapse-plus rounded-none mb-1">
        <input type="radio" name="my-accordion-3" />
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
          className="collapse-title rounded-xl text-xl font-medium text-secondary bg-[#F5F5F5]"
        >
          How does the Remote Security Dispatch Center operate?
        </div>
        <div className="collapse-content mt-3 bg-white p-0">
          <p
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            className="text-textMuted rounded-xl p-5"
          >
            The Remote Security Dispatch Center operates by utilizing advanced
            technology and a team of trained professionals to monitor security
            incidents remotely. This includes surveillance systems, alarms, and
            communication channels to promptly respond to any threats or
            emergencies.
          </p>
        </div>
      </div>

      <div className="collapse overflow-visible collapse-plus rounded-none mb-1">
        <input type="radio" name="my-accordion-3" />
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
          className="collapse-title rounded-xl text-xl font-medium text-secondary bg-[#F5F5F5]"
        >
          What types of security incidents can the Remote Security Dispatch
          Center handle?
        </div>
        <div className="collapse-content mt-3 bg-white p-0">
          <p
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            className="text-textMuted rounded-xl p-5"
          >
            The Remote Security Dispatch Center can handle various security
            incidents, including but not limited to, intrusions, thefts,
            vandalism, suspicious activities, and emergency situations such as
            fires or medical emergencies.
          </p>
        </div>
      </div>

      <div className="collapse overflow-visible collapse-plus rounded-none mb-1">
        <input type="radio" name="my-accordion-3" />
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
          className="collapse-title rounded-xl text-xl font-medium text-secondary bg-[#F5F5F5]"
        >
          How does the Remote Security Dispatch Center respond to security
          incidents?
        </div>
        <div className="collapse-content mt-3 bg-white p-0">
          <p
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            className="text-textMuted rounded-xl p-5"
          >
            The Remote Security Dispatch Center can handle various security
            incidents, including but not limited to, intrusions, thefts,
            vandalism, suspicious activities, and emergency situations such as
            fires or medical emergencies.
          </p>
        </div>
      </div>

      <div className="collapse overflow-visible collapse-plus rounded-none mb-1">
        <input type="radio" name="my-accordion-3" />
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
          className="collapse-title rounded-xl text-xl font-medium text-secondary bg-[#F5F5F5]"
        >
          Is the Remote Security Dispatch Center staffed 24/7?
        </div>
        <div className="collapse-content mt-3 bg-white p-0">
          <p
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            className="text-textMuted rounded-xl p-5"
          >
            The Remote Security Dispatch Center can handle various security
            incidents, including but not limited to, intrusions, thefts,
            vandalism, suspicious activities, and emergency situations such as
            fires or medical emergencies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
