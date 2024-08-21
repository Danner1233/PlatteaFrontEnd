import React from "react";
import $ from 'jquery';
import shop1 from '../static/img/shop_01.jpg';
import Filtro from "./Filtro";
import Filtrodos from "./Filtrodos";
import Filtrotres from "./Filtrotres";
import { useEffect, useState } from "react";
import { getProductos } from '../api/producto.api'
import Cambiodehoja from "./Cambiodehoja";

function Products() {
  useEffect(() => {
    // Accordion
    const allPanels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function () {
      const target = $(this).next();
      if (!target.hasClass('active')) {
        allPanels.removeClass('active').slideUp();
        target.addClass('active').slideDown();
      } else {
        target.removeClass('active').slideUp();
      }
      return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function () {
      const thisSrc = $(this).children('img').attr('src');
      $('#product-detail').attr('src', thisSrc);
      return false;
    });

    $('#btn-minus').click(function () {
      let val = parseInt($("#var-value").html());
      if (val > 1) {
        val--;
      }
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });

    $('#btn-plus').click(function () {
      let val = parseInt($("#var-value").html());
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });

    $('.btn-size').click(function () {
      const thisVal = $(this).html();
      $("#product-size").val(thisVal);
      $(".btn-size").removeClass('btn-secondary').addClass('btn-success');
      $(this).removeClass('btn-success').addClass('btn-secondary');
      return false;
    });
  }, []);
  const [productos, setProductos] = useState([])
  useEffect(() => {
    async function cargarProductos() {

      const response = await getProductos()
      setProductos(response.data)
      console.log(response)
    }
    cargarProductos()

  }, [])
  // Empty dependency array means this effect runs once after the initial render
  return (
    <div className="container py-5">
      <div className="row">
        <Filtro />
        <div className="col-lg-9">
          <div className="row">
            <Filtrodos />
            <Filtrotres />
          </div>

          <div className="row">
            {productos.map(producto => (
              <div key={producto.IdProducto} className="col-md-4">
                <div className="card mb-4 product-wap rounded-0">
                  <div className="card rounded-0">
                    <img
                      className="card-img rounded-0 img-fluid"
                      key={producto.IdProducto}
                      src={producto.FotoProductoURL}
                      alt={producto.NombreProducto}
                      onError={(e) => { e.target.onerror = null; e.target.src = 'http://localhost:4000/uploads/img/producto/shop_01_1724130396815.jpg'; }} // Cambia la ruta a tu imagen por defecto
                    />
                    <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                      <ul className="list-unstyled">
                        <li>
                          <a
                            className="btn btn-success text-white"
                            href={`/producto/${producto.IdProducto}`} // Usando el ID del producto
                          >
                            <i className="far fa-heart" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href={`/producto/${producto.IdProducto}`} // Usando el ID del producto
                          >
                            <i className="far fa-eye" />
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-success text-white mt-2"
                            href={`/producto/${producto.IdProducto}`} // Usando el ID del producto
                          >
                            <i className="fas fa-cart-plus" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <a
                      href={`/producto/${producto.IdProducto}`} // Usando el ID del producto
                      className="h3 text-decoration-none"
                    >
                      {producto.NombreProducto}
                    </a>
                    <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                      <li className="pt-2">
                        <span className="product-color-dot color-dot-red float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-blue float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-black float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-light float-left rounded-circle ml-1" />
                        <span className="product-color-dot color-dot-green float-left rounded-circle ml-1" />
                      </li>
                    </ul>
                    <ul className="list-unstyled d-flex justify-content-center mb-1">
                      <li>
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-warning fa fa-star" />
                        <i className="text-muted fa fa-star" />
                        <i className="text-muted fa fa-star" />
                      </li>
                    </ul>
                    <p className="text-center mb-0">$ {producto.PrecioProducto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <Cambiodehoja />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Products;
