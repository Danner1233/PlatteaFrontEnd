import React from 'react'
import About from '../components/About'
import Services from '../components/Services'
import Brands from '../components/Brands'
import Modal from "../components/Modal";

const Aboutus = () => {
  return (
    <div>
        <About />
        <Modal />
        <Services />
        <Brands />
    </div>
  )
}

export default Aboutus