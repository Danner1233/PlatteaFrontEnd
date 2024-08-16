import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import { Modal } from "bootstrap";
import Perfil from "./pages/Perfil";
import Carrito from "./pages/Carrito";
import Banner from "./components/Banner";
import Cart from "./components/Cart"
import Card3 from "./components/Card3";
import Card2 from "./components/Card2";
import Card1 from "./components/Card1";

function App() {
  return (
    <Router>
      <Navbar />
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
        <Route path="/buscar" element={<Modal />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/card1" element={<Card3 />} />
        <Route path="/card2" element={<Card2 />} />
        <Route path="/card3" element={<Card1 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
