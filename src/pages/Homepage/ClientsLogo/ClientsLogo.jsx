import React from "react";
import one from "/images/clientslogo/1.png";
import two from "/images/clientslogo/2.png";
import three from "/images/clientslogo/3.png";
import four from "/images/clientslogo/4.png";
import five from "/images/clientslogo/5.png";
import six from "/images/clientslogo/6.png";
import seven from "/images/clientslogo/7.png";
import "./ClientsLogo.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const images = [one, two, three, four, five, six, seven];

const ClientsLogo = () => {
  return (
    <div className="text-center mx-auto  pt-10 pb-8 my-24 bg-primary">
      <h2 className="font-semibold text-4xl leading-10 text-white">
        We’re Trusted By
      </h2>
      <div className="bg-primary mt-8 py-6">
        <Swiper
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 80 },
            768: { slidesPerView: 3, spaceBetween: 100 },
            1024: { slidesPerView: 5, spaceBetween: 130 },
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper w-11/12 md:w-10/12 h-full mx-auto"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="client logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientsLogo;
