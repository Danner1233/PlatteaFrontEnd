import React from "react";
import Carrusel from "../components/Carrusel";
import Featured from "../components/Featured";
import Featuredstore from "../components/Featuredstore";
import Modal from "../components/Modal";
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';


const Main = () => {
  return (
    <div>
      <Navbar />
      <Modal />
      <Carrusel />
      <Featured />
      <Featuredstore />
      <Footer />
    </div>
  );
};

export default Main;
