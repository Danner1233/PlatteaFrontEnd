import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Shop from "./pages/Shop";
import Tiendas from "./pages/Tiendas";
import Product from "./pages/Product";
import Perfil from "./pages/Perfil";
import Carrito from "./pages/Carrito";
import Tienda from "./pages/Tienda";
import Tarjeta from "./pages/Tarjeta";
import Iniciodesesio from "./pages/Iniciodesesio";
import Aboutusinit from "./Initpages/Aboutusinit";
import Contactusinit from "./Initpages/Contactusinit";
import Maininit from "./Initpages/Maininit";
import Productinit from "./Initpages/Productinit";
import Shopinit from "./Initpages/Shopinit";
import Tiendainit from "./Initpages/Tiendainit";
import Tiendasinit from "./Initpages/Tiendasinit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactanos" element={<Contactus />} />
        <Route path="/productos" element={<Shop />} />
        <Route path="/tiendas" element={<Tiendas />} />
        <Route path="/producto" element={<Product />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/tienda-JJJ" element={<Tienda />} />
        <Route path="/tarjeta" element={<Tarjeta />} />
        <Route path="/iniciosesion" element={<Iniciodesesio />} />
        <Route path="/aboutinit" element={<Aboutusinit />} />
        <Route path="/contactusinit" element={<Contactusinit />} />
        <Route path="/maininit" element={<Maininit />} />
        <Route path="/productinit" element={<Productinit />} />
        <Route path="/shopinit" element={<Shopinit />} />
        <Route path="/tiendainit" element={<Tiendainit />} />
        <Route path="/tiendasinit" element={<Tiendasinit />} />
      </Routes>
    </Router>
  );
}

export default App;
