import React from "react";
import Products from "../components/Products";
import Brands from "../components/Brands";
import Modal from "../components/Modal";

const Shop = () => {
  return (
    <div>
      <Modal />
      <Products />
      <Brands />
    </div>
  );
};

export default Shop;
