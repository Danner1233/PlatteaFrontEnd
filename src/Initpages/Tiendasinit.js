import React from "react";
import Storesinit from "../components/Storesinit";
import Modal from "../components/Modal";
import NavbarInit from '../components/layout/NavbarInit';
import Footer from '../components/layout/Footer';

const Tiendas = () => {
  return (
    <div>
      <NavbarInit />
      <Modal />
      <div className="row text-center py-3">
        <h1 className="h1">Deportes</h1>
        <p>
          __________________________________________________________________________
        </p>
      </div>
      <Storesinit />
      <div className="row text-center py-3">
        <h1 className="h1">Peliculas</h1>
        <p>
          __________________________________________________________________________
        </p>
      </div>
      <Storesinit />
      <div className="row text-center py-3">
        <h1 className="h1">Juegos</h1>
        <p>
          __________________________________________________________________________
        </p>
      </div>
      <Storesinit />
      <Footer />
    </div>
  );
};

export default Tiendas;
