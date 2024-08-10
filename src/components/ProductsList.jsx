import React from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "./ProductCard";
import '../styles/ProductsList.css';

const ProductsList = ({ filter }) => {
  const { data: products, loading, error } = useFetch("data/products.json");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los productos.</p>;

  // Filtrar los productos basados en el filtro recibido
  const filteredProducts = products.filter(
    (product) => filter.length === 0 || filter.includes(product.product)
  );

  return (
    <div className="products-list">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductsList;
