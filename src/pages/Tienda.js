import React from "react";
import Bannertienda from "../components/Bannertienda";
import Productostienda from "../components/Productostienda";
import Modal from "../components/Modal";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Tienda = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <Bannertienda />
      <Productostienda />
      <Footer />
    </div>
  );
};

export default Tienda;
