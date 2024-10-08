import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";
import useFetch from "../hooks/useFetch";
import "../styles/ProductCarousel.css";

const ProductCarousel = () => {
  const { data: products, loading, error } = useFetch("data/products.json");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Swiper
        className="product-carousel"
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          426: { slidesPerView: 2, spaceBetween: 20 },
          769: { slidesPerView: 3, spaceBetween: 30 },
          1025: { slidesPerView: 4, spaceBetween: 40 },
          1441: { slidesPerView: 5, spaceBetween: 50 },
        }}
        navigation
        autoplay={{ delay: 10000 }}
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
    </>
  );
};

export default ProductCarousel;
