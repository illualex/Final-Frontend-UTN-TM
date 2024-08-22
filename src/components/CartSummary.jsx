import React from "react";
import "../styles/CartSummary.css";

import envioOca from "../assets/images/icons/envio-oca.png";
import envioArgentino from "../assets/images/icons/envio-argentino.png";
import envioAndreani from "../assets/images/icons/envio-andreani.png";
import envioExpress from "../assets/images/icons/envio-express.png";

const CartSummary = ({ cartItems, onSubmit }) => {
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div className="cart-summary">
        <h3>Resumen de Compra</h3>
        <form onSubmit={onSubmit}>
          <div className="shipping-section">
            <h4>Envío:</h4>
            <div className="shipping-details">
              <div className="postal-code">
                <label htmlFor="postal-code">Código postal:</label>
                <input
                  id="postal-code"
                  type="text"
                  placeholder="Código postal"
                />
              </div>
              <div className="shipping-options">
                <label className="shipping-option">
                  <input type="radio" name="shipping" value="oca" />
                  <img src={envioOca} alt="OCA" className="shipping-image" />
                  OCA
                </label>
                <label className="shipping-option">
                  <input
                    type="radio"
                    name="shipping"
                    value="correo-argentino"
                  />
                  <img
                    src={envioArgentino}
                    alt="Correo Argentino"
                    className="shipping-image"
                  />
                  Correo Argentino
                </label>
                <label className="shipping-option">
                  <input type="radio" name="shipping" value="andreani" />
                  <img
                    src={envioAndreani}
                    alt="Andreani"
                    className="shipping-image"
                  />
                  Andreani
                </label>
                <label className="shipping-option">
                  <input type="radio" name="shipping" value="express" />
                  <img
                    src={envioExpress}
                    alt="Envío Express"
                    className="shipping-image"
                  />
                  Envío Express
                </label>
              </div>
            </div>
          </div>

          <div className="payment-section">
            <h4>Forma de Pago:</h4>
            <div className="payment-options">
              <label>
                <input type="radio" name="payment" value="credit-card" />
                Tarjeta de Crédito/Débito
              </label>
              <label>
                <input type="radio" name="payment" value="paypal" />
                PayPal
              </label>
              <label>
                <input type="radio" name="payment" value="transfer" />
                Transferencia Bancaria
              </label>
              <label>
                <input type="radio" name="payment" value="cash" />
                Pago en Efectivo
              </label>
              <label>
                <input type="radio" name="payment" value="wallet" />
                Billeteras Virtuales
              </label>
            </div>
          </div>

          <div className="discount-section">
            <label htmlFor="discount-code">Código de descuento:</label>
            <input
              id="discount-code"
              type="text"
              placeholder="Introduce tu código"
            />
          </div>

          <div className="total-section">
            <p>Precio: ${total.toFixed(2)}</p>
          </div>

          <button type="submit">Finalizar Compra</button>
        </form>
      </div>
    </>
  );
};

export default CartSummary;
