import React from 'react';


const Card = () => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {/* Producto 1 */}
        <div className="cart-item">
          <img src="shirt-image.jpg" alt="Basic Tee" className="cart-item-image" />
          <div className="cart-item-details">
            <h2>Basic Tee 6-Pack</h2>
            <p>Size: XXS</p>
            <p>Color: White</p>
          </div>
          <div className="cart-item-actions">
            <input type="number" value="1" className="quantity-input" />
            <button className="remove-button">🗑️</button>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="cart-item">
          <img src="shirt-image.jpg" alt="Basic Tee" className="cart-item-image" />
          <div className="cart-item-details">
            <h2>Basic Tee 3-Pack</h2>
            <p>Size: M</p>
            <p>Color: Black</p>
          </div>
          <div className="cart-item-actions">
            <input type="number" value="2" className="quantity-input" />
            <button className="remove-button">🗑️</button>
          </div>
        </div>

        {/* Producto 3 */}
        <div className="cart-item">
          <img src="shirt-image.jpg" alt="Basic Tee" className="cart-item-image" />
          <div className="cart-item-details">
            <h2>Basic Tee 2-Pack</h2>
            <p>Size: L</p>
            <p>Color: Grey</p>
          </div>
          <div className="cart-item-actions">
            <input type="number" value="1" className="quantity-input" />
            <button className="remove-button">🗑️</button>
          </div>
        </div>
      </div>

      <div className="cart-summary">
        <div className="summary-item">
          <span>Subtotal</span>
          <span>$300.000</span>
        </div>
        <div className="summary-item">
          <span>IVA</span>
          <span>$30.000</span>
        </div>
        <div className="summary-item">
          <span>Descuento</span>
          <span>-$50.000</span>
        </div>
        <div className="summary-total">
          <span>Total</span>
          <span>$280.000</span>
        </div>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Card;
