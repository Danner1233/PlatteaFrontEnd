import React from "react";
import Contact from "../components/Contact";
import Infocontact from "../components/Infocontact";
import Modal from "../components/Modal";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
const Contactus = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <Contact />
      <Infocontact />
      <Footer />
    </div>
  );
};

export default Contactus;
