import { Swiper, SwiperSlide } from "swiper/react";
import bgSlider from "/images/bgslider.png";
import "./Home.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import BpoParadiam from "../BpoParadiam/BpoParadiam";
import Testimonials from "../Testimonials/Testimonials";
import Serviqore from "../Serviqore/Serviqore";
import FaqSection from "../FaqSection/FaqSection";
import ClientsLogo from "../ClientsLogo/ClientsLogo";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Serviqore</title>
      </Helmet>
      <div className="bg-backgroundGray px-5 md:px-28 mt-16 ">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          navigation={false}
          centeredSlides={false}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {/* firts slider */}
          <SwiperSlide>
            <div className="md:flex items-center py-10">
              {/* content side */}
              <div className="md:w-1/2">
                <h1 className="text-[60px] text-primary font-bold leading-[65px]">
                  Response within 2 minutes
                </h1>
                <p className="text-textMuted font-normal text-[16px] leading-[20px] mt-5">
                  No more waiting in uncertainty. Experience peace of mind
                  knowing that our remote monitoring ensures instant
                  coordination and dispatching, including escalation to relevant
                  parties during critical moments.
                </p>
                <div className="flex gap-4">
                  <Link to="/about">
                    <button className="flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white py-2 px-4 my-6 rounded mx-auto">
                      <span>Learn more </span> <FaLongArrowAltRight />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="flex items-center justify-center gap-2 border-primary  hover:bg-primary text-primary border-2 hover:text-white py-2 px-4 my-6 rounded mx-auto">
                      <span>Contact us </span> <FaLongArrowAltRight />
                    </button>
                  </Link>
                </div>
              </div>
              {/* image side */}
              <div className="md:w-1/2">
                <img src={bgSlider} />
              </div>
            </div>
          </SwiperSlide>

          {/* second slider */}
          <SwiperSlide>
            <div className="md:flex items-center py-10">
              {/* content side */}
              <div className="md:w-1/2">
                <h1 className=" text-[55px] text-primary font-bold leading-[65px]">
                  Save up to <br /> <span className="text-[80px]">50%</span>
                </h1>
                <p className="text-textMuted font-normal text-[16px] leading-[20px] mt-5">
                  Maximize efficiency, minimize costs. Our remote monitoring
                  slashes expenses by up to 50% compared to in-house solutions,
                  delivering top-tier security without the hefty price tag.
                </p>
                <div className="flex gap-4">
                  <Link to="/about">
                    <button className="flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white py-2 px-4 my-6 rounded mx-auto">
                      <span>Learn more </span> <FaLongArrowAltRight />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="flex items-center justify-center gap-2 border-primary  hover:bg-primary text-primary border-2 hover:text-white py-2 px-4 my-6 rounded mx-auto">
                      <span>Contact us </span> <FaLongArrowAltRight />
                    </button>
                  </Link>
                </div>
              </div>
              {/* image side */}
              <div className="md:w-1/2">
                <img src={bgSlider} />
              </div>
            </div>
          </SwiperSlide>

          {/* third slider */}
          <SwiperSlide>
            <div className="md:flex items-center py-10">
              {/* content side */}
              <div className="md:w-1/2">
                <h1 className="text-[60px] text-primary font-bold leading-[65px]">
                  24/7 <br /> <span className="text-[50px]">Vigilance</span>
                </h1>
                <p className="text-textMuted font-normal text-[16px] leading-[20px] mt-5">
                  Rest easy knowing your security guards are performing duties
                  as protocols describe. Our remote monitoring provides 24/7
                  vigilance, eliminating vulnerabilities and safeguarding
                  against threats round-the-clock.
                </p>
                <div className="flex gap-4">
                  <Link to="/about">
                    <button className="flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white py-2 px-4 my-6 rounded mx-auto">
                      <span>Learn more </span> <FaLongArrowAltRight />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="flex items-center justify-center gap-2 border-primary  hover:bg-primary text-primary border-2 hover:text-white py-2 px-4 my-6 rounded mx-auto">
                      <span>Contact us </span> <FaLongArrowAltRight />
                    </button>
                  </Link>
                </div>
              </div>
              {/* image side */}
              <div className="md:w-1/2">
                <img src={bgSlider} />
              </div>
            </div>
          </SwiperSlide>

          {/* four slider */}
          <SwiperSlide>
            <div className="md:flex items-center py-10">
              {/* content side */}
              <div className="md:w-1/2">
                <h1 className="text-[60px] text-primary font-bold leading-[65px]">
                  Transparent Accountability
                </h1>
                <p className="text-textMuted font-normal text-[16px] leading-[20px] mt-5">
                  Ensure guard performance with crystal-clear transparency. Our
                  monitoring service ensures transparent accountability,
                  guaranteeing adherence to protocols and efficient patrols for
                  enhanced security.
                </p>
                <div className="flex gap-4">
                  <Link to="/about">
                    <button className="flex items-center justify-center gap-2 bg-primary hover:opacity-90 text-white py-2 px-4 my-6 rounded mx-auto">
                      <span>Learn more </span> <FaLongArrowAltRight />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="flex items-center justify-center gap-2 border-primary  hover:bg-primary text-primary border-2 hover:text-white py-2 px-4 my-6 rounded mx-auto">
                      <span>Contact us </span> <FaLongArrowAltRight />
                    </button>
                  </Link>
                </div>
              </div>
              {/* image side */}
              <div className="md:w-1/2 relative">
                <img src={bgSlider} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <BpoParadiam />

      <ClientsLogo />

      <Testimonials />

      <Serviqore />

      <FaqSection />
    </>
  );
};

export default Home;
