import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mark from "../../../assets/“.png";
import "./Testimonials.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import custom icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="md:w-10/12 overflow-visible relative w-11/12 mx-auto my-10">
      <h2 className="font-semibold text-[36px] leading-[44px] text-secondary pb-3 border-b-[1px] border-[#B4B4B4] ">
        Testimonials
      </h2>

      <div className="mt-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper relative"
        >
          <SwiperSlide className="w-full">
            <div className="w-full">
              <img src={mark} />
              <p className="text-justify leading-[18px] text-textMuted text-[14px] font-normal my-2 pl-6">
                Working with ServiQore has been an absolute game-changer for our
                business. Their expertise in digital marketing helped us triple
                our online visibility within just a few months. The team's
                dedication and strategic approach truly set them apart. We're
                grateful for their partnership and highly recommend their
                services.
              </p>
              <h3 className="pl-6 text-[20px] font-semibold leading-[22px] text-secondary">
                - John Smith, CEO, XYZ Corporation
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="w-full">
              <img src={mark} />
              <p className="text-justify leading-[18px] text-textMuted text-[14px] font-normal my-2 pl-6">
                ServiQore's virtual resourcing services have been instrumental
                in streamlining our operations. Their team seamlessly integrated
                with ours, providing exceptional support and contributing to
                significant cost savings. Their commitment to excellence and
                responsiveness exceeded our expectations. We're thrilled with
                the results and look forward to continuing our partnership.
              </p>
              <h3 className="pl-6 text-[20px] font-semibold leading-[22px] text-secondary">
                - Sarah Johnson, Manager, ABC Enterprises
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="w-full">
              <img src={mark} />
              <p className="text-justify leading-[18px] text-textMuted text-[14px] font-normal my-2 pl-6">
                We've been working with ServiQore for over a year now, and the
                results speak for themselves. Their cost-saving initiatives have
                helped us optimize operational efficiency and redirect resources
                towards growth initiatives. Their commitment to our success is
                evident in everything they do. ServiQore has truly become an
                indispensable partner in our journey towards business expansion.
              </p>
              <h3 className="pl-6 text-[20px] font-semibold leading-[22px] text-secondary">
                - Mark Davis, Founder, PQR Ventures
              </h3>
            </div>
          </SwiperSlide>
          <SwiperSlide className="w-full">
            <div className="w-full">
              <img src={mark} />
              <p className="text-justify leading-[18px] text-textMuted text-[14px] font-normal my-2 pl-6">
                ServiQore's virtual resourcing services have been instrumental
                in streamlining our operations. Their team seamlessly integrated
                with ours, providing exceptional support and contributing to
                significant cost savings. Their commitment to excellence and
                responsiveness exceeded our expectations. We're thrilled with
                the results and look forward to continuing our partnership.
              </p>
              <h3 className="pl-6 text-[20px] font-semibold leading-[22px] text-secondary">
                - Sarah Johnson, Manager, ABC Enterprises
              </h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
