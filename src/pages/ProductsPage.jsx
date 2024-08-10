import React, { useState } from "react";
import "../styles/ProductsPage.css";
import FilterSection from "../components/FilterSection";
import ProductsList from "../components/ProductsList";

const ProductsPage = () => {
  const [filter, setFilter] = useState([]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="products-page">
      <FilterSection onFilterChange={handleFilterChange} />
      <div className="products-section">
        <ProductsList filter={filter} />
      </div>
    </div>
  );
};

export default ProductsPage;
