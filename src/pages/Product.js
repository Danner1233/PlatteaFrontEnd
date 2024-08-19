import React from 'react'
import Producto from '../components/Producto'
import Modal from "../components/Modal";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Product = () => {
  return (
    <div>
      <Navbar />
        <Modal />
        <Producto />
        <Footer />
    </div>
  )
}

export default Product