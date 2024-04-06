import React from "react";
import areas from "../../../assets/clientslogo/arseas.png";
import amguards from "../../../assets/clientslogo/amguards.png";
import allstarts from "../../../assets/clientslogo/all star.png";
import trycker from "../../../assets/clientslogo/try.png";
import aoe from "../../../assets/clientslogo/AOE.png";
import boi from "../../../assets/clientslogo/BOI.png";
import thewlft from "../../../assets/clientslogo/the weft.png";
import "./ClientsLogo.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const images = [
  amguards,
  allstarts,
  trycker,
  aoe,
  boi,
  thewlft,
  areas
];

const ClientsLogo = () => {
  return (
    <div className="text-center mx-auto my-24">
      <h2 className="font-semibold text-3xl leading-10 text-primary">
        Some of Our Key Clients
      </h2>
      <div className="bg-primary mt-8 py-6">
        <Swiper
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          breakpoints={{
            // 300: { slidesPerView: 2, spaceBetween: 0 },
            320: { slidesPerView: 3, spaceBetween: 0 },
            768: { slidesPerView: 5, spaceBetween: 40 },
            1024: { slidesPerView: 6, spaceBetween: 30 },
          }}
          navigation={false}
          modules={[Autoplay]}
          className="mySwiper rounded md:w-10/12 mx-auto"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="w-max">
              <div className="w-full h-24">
                <img
                  className="w-full h-full object-contain"
                  //  className="w-32 h-32 object-contain grayscale transition duration-300 hover:grayscale-0"
             
                  src={image}
                  alt={`clients logo ${index}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClientsLogo;
