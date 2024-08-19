import React from "react";
import Stores from "../components/Stores";
import Modal from "../components/Modal";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Tiendas = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <div className="row text-center py-3">
        <h1 className="h1">Deportes</h1>
        <p>
          __________________________________________________________________________
        </p>
      </div>
      <Stores />
      <div className="row text-center py-3">
        <h1 className="h1">Peliculas</h1>
        <p>
          __________________________________________________________________________
        </p>
      </div>
      <Stores />
      <div className="row text-center py-3">
        <h1 className="h1">Juegos</h1>
        <p>
          __________________________________________________________________________
        </p>
      </div>
      <Stores />
      <Footer />
    </div>
  );
};

export default Tiendas;
