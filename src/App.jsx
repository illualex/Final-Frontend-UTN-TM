import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Navbar from './components/Navbar'; // Importa el Navbar si lo estás usando

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Agrega el Navbar si deseas que esté en todas las páginas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} /> {/* Ruta dinámica */}
      </Routes>
    </Router>
  );
};

export default App;
