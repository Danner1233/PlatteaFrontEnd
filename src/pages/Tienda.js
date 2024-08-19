import { useEffect,useState } from "react";
import React from "react";
import levis from '../static/img/brand_01.png';
import { getProductos } from '../api/producto.api'


function Tienda() {

  const [productos ,setProductos] = useState([])
  useEffect(() => {

    async function cargarProductos() {

      const response = await getProductos()
      setProductos(response.data)
    }
    cargarProductos()

  }, [])
  return (
    <div>
      <div>
        <div className="store-container">
          <div className="products">
            {
              productos.map(producto =>(
                <div key={producto.IdProducto} className="product">
              <img src={levis} alt="Product 1" />
              <h2>{producto.NombreProducto}</h2>
              <p>{producto.DescripcionProducto}</p>
              <p>$ {producto.PrecioProducto}</p>
              <button className="buy-button">Add to Cart</button>
            </div>
              ))
              
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tienda;
