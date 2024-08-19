import React from "react";
import Productocubiculo from "./Productocubiculo";


const Productostienda = () => {
  
  return (
    <div>
      <div className="store-container">
        <div className="products">
          <Productocubiculo />
          <Productocubiculo />
          <Productocubiculo />
        </div>
      </div>
    </div>
  );
};

export default Productostienda;
