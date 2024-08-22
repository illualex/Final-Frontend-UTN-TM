import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
/* import ProductDetailPage from "./pages/ProductDetailPage"; */
import CustomPage from "./pages/CustomPage";
import HelpPage from "./pages/HelpPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <>
      <Router basename="/Final-Frontend-UTN-TM">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            {/* <Route path="/products/:productId" element={<ProductDetailPage />} /> */}
            <Route path="/custom" element={<CustomPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Ruta para redirigir rutas no encontradas */}
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
