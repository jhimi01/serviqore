import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import mark from "/images/“.png";
import "./Testimonials.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <div className="my-10">
      <div className="md:w-10/12 mx-auto w-11/12">
        <h2 className="font-semibold text-[36px] leading-[44px] text-secondary pb-3 border-b-[1px] border-[#B4B4B4] ">
          Testimonials
        </h2>
      </div>

      <div className="testimonials mt-8 md:w-[87%] w-[95%] mx-auto">
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
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="w-full pl-5 pr-8 pb-10 ">
            <div className="w-full">
              <img src={mark} />
              <p className="text-justify leading-[21px] text-textMuted text-[15px] font-normal mt-4 mb-2 pl-3">
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
          <SwiperSlide className="w-full pl-5 pr-8 pb-10">
            <div className="w-full">
              <img src={mark} />
              <p className="text-justify leading-[21px] text-textMuted text-[15px] font-normal mt-4 mb-2 pl-3">
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
          <SwiperSlide className="w-full pl-5 pr-8 pb-10">
            <div className="w-full">
              <img src={mark} />
              <p className="text-justify leading-[21px] text-textMuted text-[15px] font-normal mt-4 mb-2 pl-3">
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
          <SwiperSlide className="w-full pl-5 pr-8 pb-10">
            <div className="w-full">
              <img src={mark} />
              <p className="text-justify leading-[21px] text-textMuted text-[15px] font-normal mt-4 mb-2 pl-3">
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
