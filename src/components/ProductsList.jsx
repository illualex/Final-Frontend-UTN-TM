import React from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import { useCart } from "../hooks/useCart"; // Importa useCart como exportación por defecto
import "../styles/ProductsList.css";

const ProductsList = ({ filter }) => {
  const { data: products, loading, error } = useFetch("data/products.json");
  const { addToCart } = useCart(); // Usa la función addToCart desde useCart

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
          id={product.id}
          image={product.image}
          title={product.name}
          price={product.price}
          addItemToCart={addToCart} // Pasar la función addToCart aquí
        />
      ))}
    </div>
  );
};

export default ProductsList;
