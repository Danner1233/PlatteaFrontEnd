import React from "react";
import Banner from "../components/Banner";
import Stores from "../components/Stores";
import Modal from "../components/Modal";

const Perfil = () => {
  return (
    <div>
      <Modal />
      <Banner />
      <div className="row text-center py-3">
        <h1 className="h1">Tiendas</h1>
        <p>
          __________________________________________________________________________
        </p>
      </div>
      <Stores />
    </div>
  );
};

export default Perfil;
