import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch"; // Importa el hook
import "../assets/styles/ProductCarousel.css";

const ProductCarousel = () => {
  const { data: products, loading, error } = useFetch("data/products.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        426: { slidesPerView: 2, spaceBetween: 20 },
        769: { slidesPerView: 3, spaceBetween: 30 },
        1025: { slidesPerView: 4, spaceBetween: 40 },
        1441: { slidesPerView: 5, spaceBetween: 50 },
      }}
      navigation
      loop
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard
            image={product.image}
            title={product.name}
            price={product.price}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductCarousel;
