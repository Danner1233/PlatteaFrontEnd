import React from "react";
import Productsinit from "../components/Productsinit";
import Brands from "../components/Brands";
import Modal from "../components/Modal";
import NavbarInit from '../components/layout/NavbarInit';
import Footer from '../components/layout/Footer';

const Shop = () => {
  return (
    <div>
      <NavbarInit />
      <Modal />
      <Productsinit />
      <Brands />
      <Footer />
    </div>
  );
};

export default Shop;
