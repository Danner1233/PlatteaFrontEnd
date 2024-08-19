import React from "react";
import levis from '../static/img/brand_01.png';

const Productostienda = () => {
  
  return (
    <div>
      <div className="store-container">
        <div className="products">
          <div className="product">
            <img src={levis} alt="Product 1" />
            <h2>Product 1</h2>
            <p>Description of Product 1.</p>
            <p>Price: $100.000 COP</p>
            <button className="buy-button">Add to Cart</button>
          </div>         
        </div>
      </div>
    </div>
  );
};

export default Productostienda;
