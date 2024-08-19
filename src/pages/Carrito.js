import React from "react";
import Modal from "../components/Modal";
import Cart from "../components/Cart";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Carrito = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <Cart />
      <Footer />
    </div>
  );
};

export default Carrito;
