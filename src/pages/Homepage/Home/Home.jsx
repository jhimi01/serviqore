import { Swiper, SwiperSlide } from "swiper/react";
import bgSlider1 from "../../../../public/images/HomeBanner/bg1.png";
import bgSlider2 from "../../../../public/images/HomeBanner/bg2.png";
import bgSlider3 from "../../../../public/images/HomeBanner/bg3.png";
import bgSlider4 from "../../../../public/images/HomeBanner/bg4.png";
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
  // useEffect(() => {
  //   window.scroll(0, 0);
  // }, []);

  return (
    <>
      <Helmet>
        <title>Serviqore</title>
      </Helmet>
      <div className="homepage-slider bg-backgroundGray md:py-7 px-5 md:px-28 mt-16 ">
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
            <div className="md:flex mt-10">
              {/* content side */}
              <div className="md:w-1/2 ">
                <h1 className="text-[35px] md:text-[60px] text-primary font-bold leading-[50px] md:leading-[70px]">
                  Response within 2 minutes
                </h1>
                <p className="text-textMuted font-normal text-[16px] mt-8">
                  No more waiting in uncertainty. Experience peace of mind
                  knowing that our remote monitoring ensures instant
                  coordination and dispatching, including escalation to relevant
                  parties during critical moments.
                </p>
                <div className="flex gap-4 mt-5">
                  <Link to="/services">
                    <button className="flex items-center justify-center gap-2 bg-primary border-primary  border-2 hover:opacity-90 text-white py-2 px-4 my-6 rounded mx-auto">
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
                <img src={bgSlider1} />
              </div>
            </div>
          </SwiperSlide>

          {/* second slider */}
          <SwiperSlide>
            <div className="md:flex mt-10">
              {/* content side */}
              <div className="md:w-1/2 ">
                <h1 className="text-[35px] md:text-[60px] text-primary font-bold leading-[50px] md:leading-[70px]">
                  Save up to <br /> 50%
                </h1>
                <p className="text-textMuted font-normal text-[16px] mt-8">
                  Maximize efficiency, minimize costs. Our remote monitoring
                  slashes expenses by up to 50% compared to in-house solutions,
                  delivering top-tier security without the hefty price tag.
                </p>
                <div className="flex gap-4 mt-5">
                  <Link to="/services">
                    <button
                      className="flex items-center justify-center gap-2 bg-primary border-primary
                    border-2  hover:opacity-90 text-white py-2 px-4 my-6 rounded mx-auto"
                    >
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
                <img src={bgSlider2} />
              </div>
            </div>
          </SwiperSlide>

          {/* third slider */}
          <SwiperSlide>
            <div className="md:flex mt-10">
              {/* content side */}
              <div className="md:w-1/2 ">
                <h1 className="text-[35px] md:text-[60px] text-primary font-bold leading-[50px] md:leading-[70px]">
                  24/7 <br /> Vigilance
                </h1>
                <p className="text-textMuted font-normal text-[16px] mt-8">
                  Rest easy knowing your security guards are performing duties
                  as protocols describe. Our remote monitoring provides 24/7
                  vigilance, eliminating vulnerabilities and safeguarding
                  against threats round-the-clock.
                </p>
                <div className="flex gap-4 mt-5">
                  <Link to="/services">
                    <button
                      className="flex items-center justify-center gap-2 bg-primary border-primary
                    border-2  hover:opacity-90 text-white py-2 px-4 my-6 rounded mx-auto"
                    >
                      <span>Learn more </span> <FaLongArrowAltRight />
                    </button>
                  </Link>
                  <Link to="/contact">
                    <button className="flex items-center justify-center gap-2 border-primary   hover:bg-primary text-primary border-2 hover:text-white py-2 px-4 my-6 rounded mx-auto">
                      <span>Contact us </span> <FaLongArrowAltRight />
                    </button>
                  </Link>
                </div>
              </div>
              {/* image side */}
              <div className="md:w-1/2">
                <img src={bgSlider3} />
              </div>
            </div>
          </SwiperSlide>

          {/* four slider */}
          <SwiperSlide>
            <div className="md:flex mt-10">
              {/* content side */}
              <div className="md:w-1/2 ">
                <h1 className="text-[35px] md:text-[60px] text-primary font-bold leading-[50px] md:leading-[70px]">
                  Transparent Accountability
                </h1>
                <p className="text-textMuted font-normal text-[16px] mt-8">
                  Ensure guard performance with crystal-clear transparency. Our
                  monitoring service ensures transparent accountability,
                  guaranteeing adherence to protocols and efficient patrols for
                  enhanced security.
                </p>
                <div className="flex gap-4 mt-5">
                  <Link to="/services">
                    <button
                      className="flex items-center justify-center gap-2 bg-primary border-primary
                    border-2  hover:opacity-90 text-white py-2 px-4 my-6 rounded mx-auto"
                    >
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
                <img src={bgSlider4} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <BpoParadiam
        headerText="We transcend the traditional BPO paradigm
                    by fostering collaborations"
        peraText="We understand that businesses require more than just solutions; they
        need a reliable ally committed to their growth journey. That's
        precisely who we are – a dependable team poised to add tangible value
        to your operations."
        contentText="we've successfully built and operated Remote Dispatch Centers for
        four clients in the USA. In the first year of operation, we
        implemented three Remote Dispatch Center solutions, driving
        significant business expansion. Our cost-saving initiatives have
        optimized operational efficiency, resulting in savings of up to 50%
        for our clients."
      />

      <ClientsLogo />

      <Testimonials />

      <Serviqore />

      <FaqSection />
    </>
  );
};

export default Home;
