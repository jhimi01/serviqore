import React, { useEffect, useState, useRef } from "react";
import "./Contact.css";
import contactimg from "/images/Contact/contact.png";
import location from "/images/Contact/location.png";
import email from "/images/Contact/email.png";
import phone from "/images/Contact/phone.png";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const maxChars = 500;
  const form = useRef();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleMessageChange = (event) => {
    let messageText = event.target.value;
    if (messageText.length > maxChars) {
      messageText = messageText.slice(0, maxChars);
    }
    setMessage(messageText);
    setCharCount(messageText.length);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm("service_xewxz8z", "template_a3kp633", form.current, {
        publicKey: "YRD5OfDFzjYupKcFJ",
      })
      .then(
        () => {
          // Reset form fields
          setMessage("");
          setCharCount(0);
          setLoading(false);

          // Clear input fields
          form.current.reset();

          toast.success("Successfully sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          console.log("SUCCESS!");
        },
        (error) => {
          setLoading(false);
          toast.error(error.text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="md:w-10/12 w-11/12 contactsection my-20 mt-20 mx-auto">
      <Helmet>
        <title>contact | serviqore</title>
      </Helmet>
      <div className="md:flex items-center justify-between gap-20">
        <div className="md:w-1/2">
          <h1 className="text-black relative font-semibold text-[36px] leading-[76px] ">
            Contact us
          </h1>
          <p className="text-textMuted my-7 text-[16px] font-normal leading-[16px]">
            Reach out to us for any query
          </p>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 mt-5"
          >
            <label className="relative">
              <input
                type="text"
                className="input rounded-none input-bordered w-full"
                name="from_name"
                required
              />
              <span className="absolute left-4 text-primary top-2 px-1  capitalize tracking-wide -translate-y-5 bg-white">
                full name
              </span>
            </label>
            <label className="relative">
              <input
                type="email"
                className="input rounded-none input-bordered w-full"
                name="from_email"
                required
              />
              <span className="absolute left-4 text-primary top-2 px-1  capitalize tracking-wide -translate-y-5 bg-white">
                email
              </span>
            </label>
            <label className="relative">
              <textarea
                className="textarea  rounded-none textarea-bordered leading-5 pt-3  resize-none w-full"
                rows={6}
                onChange={handleMessageChange}
                value={message}
                name="message"
                required
              ></textarea>
              <span className="text-textMuted right-3 absolute tracking-wide bottom-3">
                {charCount}/{maxChars}
              </span>
              <span className="absolute left-4 text-primary top-2 px-1  capitalize tracking-wide -translate-y-5 bg-white">
                message
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-primary text-white rounded py-2 font-bold hover:bg-[#0785C2] cursor-pointer relative ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
              {loading ? "Sending..." : "SUBMIT"}
            </button>
          </form>
        </div>

        <div className="md:w-1/2 md:mt-0 mt-10 flex items-center justify-end">
          {/* <img src={contactimg} alt="contact img" /> */}
          <div className="flex items-center flex-wrap mt-14">
            <div className="flex p-4 items-start gap-6">
              <img src={location} alt="location" />
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-[16px] leading-[20px] text-black">
                    Australia Office
                  </h4>
                  <p className="text-[#333] font-normal text-[16px] mt-1 ">
                    Office 1/2, Erica Lane Minto, NSW 2566 Australia
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[16px] leading-[20px] text-black">
                    Bangladesh Office
                  </h4>
                  <p className="text-[#333] font-normal text-[16px] mt-1 ">
                    Unit B7, House 19, Road 8, Shekhertek,
                    Mohammadpur, Dhaka - 1207
                  </p>
                </div>
              </div>
            </div>
            <div className="flex p-4 items-center justify-center gap-3">
              <img src={email} alt="email" />
              <div>
                <h4 className="font-semibold text-[16px] leading-[20px] text-black">
                  Email
                </h4>
                <p className="text-[#333] font-normal text-[14px] ">
                  info@serviqore.com
                </p>
              </div>
            </div>
            <div className="flex p-4 items-center justify-center gap-3">
              <img src={phone} alt="phone" />
              <div>
                <h4 className="font-semibold text-[16px] leading-[20px] text-black">
                  Phone
                </h4>
                <p className="text-[#333] font-normal text-[14px] leading-[18px]">
                  +880 1896 191700
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </div>
  );
};

export default Contact;
