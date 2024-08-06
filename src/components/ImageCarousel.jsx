// src/components/ImageCarousel.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 3000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          src="https://placehold.co/1920x1080?text=Slider-1"
          alt="Slide 1"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://placehold.co/1920x1080?text=Slider-2"
          alt="Slide 2"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://placehold.co/1920x1080?text=Slider-3"
          alt="Slide 3"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://placehold.co/1920x1080?text=Slider-4"
          alt="Slide 1"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://placehold.co/1920x1080?text=Slider-5"
          alt="Slide 1"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      {/* Añade más SwiperSlide aquí si es necesario */}
    </Swiper>
  );
};

export default ImageCarousel;
