import { Swiper, SwiperSlide } from "swiper/react";
import bgSlider from "../../../assets/1 fast response 1.png";
import "./Home.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import BpoParadiam from "../BpoParadiam/BpoParadiam";
import Testimonials from "../Testimonials/Testimonials";
import Serviqore from "../Serviqore/Serviqore";
import FaqSection from "../FaqSection/FaqSection";

const Home = () => {
  return (
    <>
      <div className="bg-backgroundGray herosection px-5 md:px-28">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          centeredSlides={false}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* firts slider */}
          <SwiperSlide>
            <div className="md:flex items-center py-10">
              {/* content side */}
              <div className="md:w-1/2">
                <h1 className="text-[64px] text-primary font-bold leading-[65px]">
                  Response within 2 minutes
                </h1>
                <p className="text-textMuted font-normal text-[16px] leading-[16px] mt-5">
                  No more waiting in uncertainty. Experience peace of mind
                  knowing that our remote monitoring ensures instant
                  coordination and dispatching, including escalation to relevant
                  parties during critical moments.
                </p>
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
                <h1 className="text-[64px] text-primary font-bold leading-[65px]">
                  Save up to <br /> 50%
                </h1>
                <p className="text-textMuted font-normal text-[16px] leading-[16px] mt-5">
                  Maximize efficiency, minimize costs. Our remote monitoring
                  slashes expenses by up to 50% compared to in-house solutions,
                  delivering top-tier security without the hefty price tag.
                </p>
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
                <h1 className="text-[64px] text-primary font-bold leading-[65px]">
                  24/7 <br /> Vigilance
                </h1>
                <p className="text-textMuted font-normal text-[16px] leading-[16px] mt-5">
                  Rest easy knowing your security guards are performing duties
                  as protocols describe. Our remote monitoring provides 24/7
                  vigilance, eliminating vulnerabilities and safeguarding
                  against threats round-the-clock.
                </p>
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
                <h1 className="text-[64px] text-primary font-bold leading-[65px]">
                  Transparent <br /> Accountability
                </h1>
                <p className="text-textMuted font-normal text-[16px] leading-[16px] mt-5">
                  Ensure guard performance with crystal-clear transparency. Our
                  monitoring service ensures transparent accountability,
                  guaranteeing adherence to protocols and efficient patrols for
                  enhanced security.
                </p>
              </div>
              {/* image side */}
              <div className="md:w-1/2">
                <img src={bgSlider} />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <BpoParadiam />

      <Testimonials />

      <Serviqore />

      <FaqSection />
    </>
  );
};

export default Home;
