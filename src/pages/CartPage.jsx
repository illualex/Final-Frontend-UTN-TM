// src/pages/CartPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import "../styles/CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useGlobalContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para procesar la compra
    console.log("Compra realizada");
  };

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>El carrito está vacío.</p>
          <Link to="/products" className="go-to-products-link">
            <button>Ir a Productos</button>
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <table className="cart-item-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                />
              ))}
            </tbody>
          </table>
          <CartSummary cartItems={cartItems} onSubmit={handleSubmit} />
        </div>
      )}
    </div>
  );
};

export default CartPage;
