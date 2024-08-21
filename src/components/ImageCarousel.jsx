import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/ImageCarousel.css";

import bannerLogitech from "../assets/images/image-carousel/img-logitech-banner.jpg";
import bannerBuildPc from "../assets/images/image-carousel/img-buildpc-banner.jpg";
import bannerNvidia from "../assets/images/image-carousel/img-nvidia-banner.jpg";
import bannerAmd from "../assets/images/image-carousel/img-amd-banner.jpg";
import bannerGigabyte from "../assets/images/image-carousel/img-gigabyte-banner.jpg";

const ImageCarousel = () => {
  return (
    <Swiper
      className="custom-swiper"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 3000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("Banner change")}
    >
      <SwiperSlide>
        <img src={bannerLogitech} alt="Persona usando un volante para computadora" className="img-banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerGigabyte} alt="Grupo de personas con Aorus" className="img-banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerNvidia} alt="Placa de video de la marca Nvidia" className="img-banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerAmd} alt="Placa de video y un procesador de la marca AMD" className="img-banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={bannerBuildPc} alt="Banner de Arma tu pc" className="img-banner" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
