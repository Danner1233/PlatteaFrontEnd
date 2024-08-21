
import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Aboutus from "./pages/Aboutus";
import About from "./components/About";
import Services from "./components/Services";
import Brands from "./components/Brands";
import Contactus from "./pages/Contactus";
import Contact from "./components/Contact";
import Infocontact from "./components/Infocontact";
import Shop from "./pages/Shop";
import Tiendas from "./pages/Tiendas";
import Products from "./components/Products";
import Stores from "./components/Stores";
import Product from "./pages/Product";
import Perfil from "./pages/Perfil";
import Carrito from "./pages/Carrito";
import Banner from "./components/Banner";
import Tienda from "./pages/Tienda";
import Bannertienda from "./components/Bannertienda";
import Productostienda from "./components/Productostienda";
import Cart from "./components/Cart";
import Card3 from "./components/Card3";
import Card2 from "./components/Card2";
import Card1 from "./components/Card1";
import Pago from "./components/Pago";
import Tarjeta from "./pages/Tarjeta";
import Login from "./components/Login";
import Register from "./components/Register";
import Overleylogin from "./components/Overleylogin";
import Overleyregister from "./components/Overleyregister";
import Iniciodesesio from "./pages/Iniciodesesio";
import Filtro from "./components/Filtro";
import Filtrodos from "./components/Filtrodos";
import Filtrotres from "./components/Filtrotres";
import Productogeneral from "./components/Productogeneral";
import Cambiodehoja from "./components/Cambiodehoja";
import Productocubiculo from './components/Productocubiculo';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/contactanos" element={<Contactus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/infocontact" element={<Infocontact />} />
        <Route path="/productos" element={<Shop />} />
        <Route path="/products" element={<Products />} />
        <Route path="/tiendas" element={<Tiendas />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/producto" element={<Product />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/tienda-JJJ" element={<Tienda />} />
        <Route path="/bannerti" element={<Bannertienda />} />
        <Route path="/productoti" element={<Productostienda />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/card1" element={<Card3 />} />
        <Route path="/card2" element={<Card2 />} />
        <Route path="/card3" element={<Card1 />} />
        <Route path="/pago" element={<Pago />} />
        <Route path="/tarjeta" element={<Tarjeta />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/overleylogin" element={<Overleylogin />} />
        <Route path="/overleyregister" element={<Overleyregister />} />
        <Route path="/iniciosesion" element={<Iniciodesesio />} />
        <Route path="/filtro" element={<Filtro />} />
        <Route path="/filtro2" element={<Filtrodos />} />
        <Route path="/filtro3" element={<Filtrotres />} />
        <Route path="/progeneral" element={<Productogeneral />} />
        <Route path="/Cambiohoja" element={<Cambiodehoja />} />
        <Route path="/productocubiculo" element={<Productocubiculo />} />
      </Routes>
    </>
  );
}

export default App;
