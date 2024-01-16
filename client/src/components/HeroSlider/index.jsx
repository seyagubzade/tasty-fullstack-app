import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BgImg1 from "../../assets/images/bg_1.jpg";
import BgImg2 from "../../assets/images/bg_2.jpg";
import BgImg3 from "../../assets/images/bg_3.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
            delay: 20000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src={BgImg1} alt="bg-img" />
          <div className="content">
            <h1 class="mb-5">Tasty &amp; Delicious Food</h1>
            <a class="btn btn-outline-light btn-outline-white px-5 py-3">
              Book a table
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={BgImg2} alt="bg-img" />
          <div className="content">
            <h1 class="mb-5">Tasty &amp; Delicious Food</h1>
            <a class="btn btn-outline-light btn-outline-white px-5 py-3">
              Book a table
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={BgImg3} alt="bg-img" />
          <div className="content">
            <h1 class="mb-5">Tasty &amp; Delicious Food</h1>
            <a class="btn btn-outline-light btn-outline-white px-5 py-3">
              Book a table
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSlider;
