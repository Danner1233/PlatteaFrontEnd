import React from "react";
import Banner from "../components/Banner";
import Stores from "../components/Stores";
import Modal from "../components/Modal";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Perfil = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <Banner />
      <div className="row text-center py-3">
        <h1 className="h1">Tiendas</h1>
        <p>
          __________________________________________________________________________
        </p>
      </div>
      <Stores />
      <Footer />
    </div>
  );
};

export default Perfil;
