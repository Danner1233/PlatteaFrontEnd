import React from "react";
import Bannertienda from "../components/Bannertienda";
import Productostienda from "../components/Productostienda";
import Modal from "../components/Modal";
import NavbarInit from '../components/layout/NavbarInit';
import Footer from '../components/layout/Footer';

const Tienda = () => {
  return (
    <div>
      <NavbarInit />
      <Modal />
      <Bannertienda />
      <Productostienda />
      <Footer />
    </div>
  );
};

export default Tienda;
