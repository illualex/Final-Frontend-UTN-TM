// src/components/ProductCard.jsx
import React from "react";
import "../styles/ProductCard.css"; // Asegúrate de que el CSS esté en la ubicación correcta

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
        <button className="add-to-cart-button">Agregar al carro</button>
      </div>
    </div>
  );
};

export default ProductCard;
