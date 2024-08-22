import React from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";
import { useCart } from "../hooks/useCart";
import "../styles/ProductsList.css";

const ProductsList = ({ filter }) => {
  const { data: products, loading, error } = useFetch("data/products.json");
  const { addToCart } = useCart();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los productos.</p>;

  const filteredProducts = products.filter(
    (product) => filter.length === 0 || filter.includes(product.product)
  );

  return (
    <>
      <div className="products-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            addItemToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
