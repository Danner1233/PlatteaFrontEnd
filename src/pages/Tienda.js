import React from "react";
import Bannertienda from "../components/Bannertienda";
import Productostienda from "../components/Productostienda";
import Modal from "../components/Modal";

const Tienda = () => {
  return (
    <div>
      <Modal />
      <Bannertienda />
      <Productostienda />
    </div>
  );
};

export default Tienda;
