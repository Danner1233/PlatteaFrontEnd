import React from "react";
import Carrusel from "../components/Carrusel";
import Featured from "../components/Featured";
import Featuredstore from "../components/Featuredstore";
import Modal from "../components/Modal";
import NavbarInit from '../components/layout/NavbarInit';
import Footer from '../components/layout/Footer';


const Main = () => {
  return (
    <div>
      <NavbarInit />
      <Modal />
      <Carrusel />
      <Featured />
      <Featuredstore />
      <Footer />
    </div>
  );
};

export default Main;
