import React from 'react'
import Producto from '../components/Producto'
import Modal from "../components/Modal";
import NavbarInit from '../components/layout/NavbarInit';
import Footer from '../components/layout/Footer';

const Product = () => {
  return (
    <div>
      <NavbarInit />
        <Modal />
        <Producto />
        <Footer />
    </div>
  )
}

export default Product