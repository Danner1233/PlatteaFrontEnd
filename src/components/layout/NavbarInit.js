import React from "react";
import logo from '../../static/img/pnologo.png';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
          <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
              <div>
                <i className="fa fa-envelope mx-2" />
                <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:aorostegui2@gmail.com">
                  aorostegui2@gmail.com
                </a>
                <i className="fa fa-phone mx-2" />
                <a className="navbar-sm-brand text-light text-decoration-none" href="javascript:void(0);">
                  010-020-0340
                </a>
              </div>
              <div>
                <a className="text-light" href="javascript:void(0);" rel="sponsored">
                  <i className="fab fa-facebook-f fa-sm fa-fw me-2" />
                </a>
                <a className="text-light" href="javascript:void(0);">
                  <i className="fab fa-instagram fa-sm fa-fw me-2" />
                </a>
                <a className="text-light" href="javascript:void(0);">
                  <i className="fab fa-twitter fa-sm fa-fw me-2" />
                </a>
                <a className="text-light" href="javascript:void(0);">
                  <i className="fab fa-linkedin fa-sm fa-fw" />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light shadow">
          <div className="container d-flex justify-content-between align-items-center">
            <Link className="navbar-brand text-success logo h1 align-self-center" to="/">
              <img src={logo} alt="Logo" width={58} height={53} />
            </Link>
            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Inicio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tiendas">Tiendas</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/productos">Comprar</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Aboutus">Sobre</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contactanos">Contáctanos</Link>
                  </li>
                </ul>
              </div>
              <div className="navbar align-self-center d-flex">
                <Link className="btn btn-outline-primary me-2" to="/registrarse">
                  Registrarse
                </Link>
                <Link className="btn btn-outline-success" to="/iniciar-sesion">
                  Iniciar Sesión
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
