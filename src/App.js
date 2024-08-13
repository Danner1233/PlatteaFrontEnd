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
import Products from "./components/Products";

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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
