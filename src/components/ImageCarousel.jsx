// src/components/ImageCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation"; // Estilos de navegación
import "swiper/css/pagination"; // Estilos de paginación
import { Navigation, Pagination } from "swiper/modules";
import "../assets/styles/imagecarousel.css";

// Asegúrate de ajustar las rutas según la ubicación de tus imágenes
const images = [
  "https://placehold.co/1200x500?text=Slider-1",
  "https://placehold.co/1200x500?text=Slider-2",
  "https://placehold.co/1200x500?text=Slider-3",
  "https://placehold.co/1200x500?text=Slider-4",
  "https://placehold.co/1200x500?text=Slider-5",
  // Agrega más imágenes aquí
];

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]} // Usa los módulos de navegación y paginación
      spaceBetween={10} // Espacio entre slides
      slidesPerView={1} // Número de slides visibles
      navigation // Habilita navegación con flechas
      pagination={{ clickable: true }} // Habilita paginación con puntos
      loop // Hacer que el slider sea infinito
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{ width: "100%", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
