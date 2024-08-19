import React from 'react'
import About from '../components/About'
import Services from '../components/Services'
import Brands from '../components/Brands'
import Modal from "../components/Modal";
import NavbarInit from '../components/layout/NavbarInit';
import Footer from '../components/layout/Footer';

const Aboutus = () => {
  return (
    <div>
        <NavbarInit />
        <About />
        <Modal />
        <Services />
        <Brands />
        <Footer />
    </div>
  )
}

export default Aboutus