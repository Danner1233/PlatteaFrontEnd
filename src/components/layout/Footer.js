import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark" id="tempaltemo_footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                PLATTĔA
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <i className="fas fa-map-marker-alt fa-fw" />
                  Direccion
                </li>
                <li>
                  <i className="fa fa-phone fa-fw" />
                  <a className="text-decoration-none" href="#">
                    010-020-0340
                  </a>
                </li>
                <li>
                  <i className="fa fa-envelope fa-fw" />
                  <a
                    className="text-decoration-none"
                    href="mailto:aorostegui2@gmail.com"
                  >
                    aorostegui2@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">
                Productos
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <a className="text-decoration-none" href="#">
                    De Lujo
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Ropa Deportiva
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Calzado De Hombre
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Calzado De Mujer
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Vestidos
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Accesorios Para Gym
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Calzado Depotivo
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 pt-5">
              <h2 className="h2 text-light border-bottom pb-3 border-light">
                Secciones
              </h2>
              <ul className="list-unstyled text-light footer-link-list">
                <li>
                  <a className="text-decoration-none" href="index.html">
                    Inicio
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="about.html">
                    Sobre de
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="shop.html">
                    Tiendas
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="contact.html">
                    Contactanos
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row text-light mb-4">
            <div className="col-12 mb-3">
              <div className="w-100 my-3 border-top border-light" />
            </div>
            <div className="col-auto me-auto">
              <ul className="list-inline text-left footer-icons">
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="#"
                  >
                    <i className="fab fa-facebook-f fa-lg fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="#"
                  >
                    <i className="fab fa-instagram fa-lg fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="#"
                  >
                    <i className="fab fa-twitter fa-lg fa-fw" />
                  </a>
                </li>
                <li className="list-inline-item border border-light rounded-circle text-center">
                  <a
                    className="text-light text-decoration-none"
                    target="_blank"
                    href="#"
                  >
                    <i className="fab fa-linkedin fa-lg fa-fw" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-auto">
              <label className="sr-only" htmlFor="subscribeEmail">
                Correo Electronico
              </label>
            </div>
          </div>
        </div>
        <div className="w-100 bg-black py-3">
          <div className="container">
            <div className="row pt-2">
              <div className="col-12">
                <p className="text-left text-light">
                  Copyright © 2024 PLATTĔA | Diseñado Por Alexix Orostegui,
                  Andres Suarez, Carlos Martinez y Danner Arias
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
