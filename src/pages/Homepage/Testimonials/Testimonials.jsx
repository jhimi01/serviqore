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
  const testimonials = [
    {
      name: "Wg Cdr Rana Hasan",
      title: "CEO",
      company: "AMGUARDS Security Services",
      feedback:
        "Serviqore's remote security guard monitoring and dispatch service has been an invaluable asset to our organization. Their team is reliable and operates with professionalism, ensuring that our job sites are monitored and secured around the clock. Their prompt response to incidents and thorough handling of situations have exceeded our expectations. We're very happy to be in partnership.",
    },
    {
      name: "Haas Prince",
      title: "CEO",
      company: "All Star Security USA",
      feedback:
        "Working with Serviqore for our security guards and activities monitoring needs has been a seamless experience from day one. They consistently deliver timely and effective responses to incidents, demonstrating their commitment to our security business. Serviqore has become an integral part of our security team.",
    },
    {
      name: "Jose Jiminez",
      title: "CEO",
      company: "Cheaters PI Investigations",
      feedback:
        "Serviqore has been an invaluable ally for my Private Investigator Business. Their support services have significantly enhanced our investigative operations, providing real-time updates and invaluable insights during surveillance missions. Their admin assistance has streamlined our day-to-day tasks, allowing us to focus on core investigative activities, keeping our investigations on track. Overall, their reliable and indispensable support has played a crucial role in our success.",
    },
    {
      name: "Ifty Waset",
      title: "CEO",
      company: "The Weft Advisory, Australia",
      feedback:
        "Partnering with Serviqore's Digital Marketing team has been a game-changer for The Weft Advisory. Their professionalism and expertise have propelled our firm's online presence to new heights. Their strategic approach and tailored solutions have not only increased our visibility but also boosted our client acquisition. Serviqore's team is a valuable asset, and we highly recommend their services to any business looking to elevate their digital marketing efforts.",
    },
  ];

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
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index} className="w-full pl-5 pr-8 pb-10 ">
              <div className="w-full">
                <img src={mark} />
                <p className="text-justify leading-[21px] text-textMuted text-[15px] font-normal mt-4 mb-1 pl-3">
                  {testi.feedback}
                </p>
                <h3 className="pl-6 text-[17px] font-semibold leading-[22px] text-secondary">
                  -
                  <span>
                    {testi.name}, {testi.title}, {testi.company}
                  </span>
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
