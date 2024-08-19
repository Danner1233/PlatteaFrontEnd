import React from "react";
import Contact from "../components/Contact";
import Infocontact from "../components/Infocontact";
import Modal from "../components/Modal";
import NavbarInit from '../components/layout/NavbarInit';
import Footer from '../components/layout/Footer';
const Contactus = () => {
  return (
    <div>
      <NavbarInit />
      <Modal />
      <Contact />
      <Infocontact />
      <Footer />
    </div>
  );
};

export default Contactus;
