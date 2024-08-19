import React from "react";
import Products from "../components/Products";
import Brands from "../components/Brands";
import Modal from "../components/Modal";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Shop = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <Products />
      <Brands />
      <Footer />
    </div>
  );
};

export default Shop;
