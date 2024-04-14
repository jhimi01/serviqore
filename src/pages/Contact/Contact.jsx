import React, { useEffect, useState, useRef } from "react";
import "./Contact.css";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { Helmet } from "react-helmet";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [loading, setLoading] = useState(false); // State for loading indicator
  const maxChars = 300;
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
    <div className="md:w-9/12 contactsection my-20 w-11/12 mt-32 mx-auto">
      <Helmet>
        <title>contact | serviqore</title>
      </Helmet>
      <div className="md:flex justify-between gap-20">
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
              className={`w-full bg-primary text-white rounded py-2 font-bold hover:opacity-90 cursor-pointer relative ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>

        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          className="md:w-1/2 relative contactMap md:mt-0 mt-10"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9741630735525!2d90.34285607122342!3d23.748300741743016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf6fc9430681%3A0xb12344d77921dcdc!2sB7%2C%20House%2C%2019%20Rd%208%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1712336393258!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="flex mt-14">
        <div className="flex w-1/3 hover:shadow p-4 items-center justify-center gap-3">
          <FaMagnifyingGlassLocation className="text-primary text-5xl" />
          <div>
            <h4 className="font-semibold text-[16px] leading-[20px] text-black">
              Location
            </h4>
            <p className="text-[#646464] font-normal text-[14px] leading-[18px]">
              House 19, Road 8, Shekhertek, Mohammadpur, Dhaka - 1207
            </p>
          </div>
        </div>
        <div className="flex w-1/3 hover:shadow p-4 items-center justify-center gap-3">
          <MdEmail className="text-primary text-5xl" />
          <div>
            <h4 className="font-semibold text-[16px] leading-[20px] text-black">
              Email
            </h4>
            <p className="text-[#646464] font-normal text-[14px] leading-[18px]">
              info@serviqore.com
            </p>
          </div>
        </div>
        <div className="flex w-1/3 hover:shadow p-4 items-center justify-center gap-3">
          <MdLocalPhone className="text-primary  text-5xl" />
          <div>
            <h4 className="font-semibold text-[16px] leading-[20px] text-black">
              Phone
            </h4>
            <p className="text-[#646464] font-normal text-[14px] leading-[18px]">
              +880 1896 191700
            </p>
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
