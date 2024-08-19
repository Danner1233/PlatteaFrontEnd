import React from "react";
import logo from '../../static/img/pnologo.png';
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min';


function Navbar() {
  const handleClick = (event) => {
    event.preventDefault();
    // Tu lógica aquí (si necesitas manejar algo en el clic)
  };

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
                <a className="navbar-sm-brand text-light text-decoration-none" href="#" onClick={handleClick}>
                  010-020-0340
                </a>
              </div>
              <div>
                <a className="text-light" href="#" onClick={handleClick} rel="sponsored">
                  <i className="fab fa-facebook-f fa-sm fa-fw me-2" />
                </a>
                <a className="text-light" href="#" onClick={handleClick}>
                  <i className="fab fa-instagram fa-sm fa-fw me-2" />
                </a>
                <a className="text-light" href="#" onClick={handleClick}>
                  <i className="fab fa-twitter fa-sm fa-fw me-2" />
                </a>
                <a className="text-light" href="#" onClick={handleClick}>
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
                    <Link className="nav-link" to="/contactanos">Contactanos</Link>
                  </li>
                </ul>
              </div>
              <div className="navbar align-self-center d-flex">
                <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                  <div className="input-group">
                    <input type="text" className="form-control" id="inputMobileSearch" placeholder="Search ..." />
                    <div className="input-group-text">
                      <i className="fa fa-fw fa-search" />
                    </div>
                  </div>
                </div>
                <a className="nav-icon d-none d-lg-inline" href="#" onClick={handleClick} data-bs-toggle="modal" data-bs-target="#templatemo_search">
                  <i className="fa fa-fw fa-search text-dark mr-2" />
                </a>
                <Link className="nav-icon position-relative text-decoration-none" to="/carrito">
                  <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />
                </Link>
                <Link className="nav-icon position-relative text-decoration-none" to="/perfil">
                  <i className="fa fa-fw fa-user text-dark mr-3" />
                </Link>
                {/* Dropdown */}
                <div className="dropdown">
                  <a className="nav-icon position-relative text-decoration-none dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa fa-fw fa-cog text-dark mr-3" />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="/configuracion">Configuración</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/historial">Historial</Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/maininit">Cerrar Sesión</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
