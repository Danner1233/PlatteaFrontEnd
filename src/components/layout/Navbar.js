import React from "react";
import logo from '../../static/img/pnologo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
          id="templatemo_nav_top"
        >
          <div className="container text-light">
            <div className="w-100 d-flex justify-content-between">
              <div>
                <i className="fa fa-envelope mx-2" />
                <a
                  className="navbar-sm-brand text-light text-decoration-none"
                  href="mailto:aorostegui2@gmail.com"
                >
                  aorostegui2@gmail.com
                </a>
                <i className="fa fa-phone mx-2" />
                <a
                  className="navbar-sm-brand text-light text-decoration-none"
                  href="#"
                >
                  010-020-0340
                </a>{" "}
                {/* tel */}
              </div>
              <div>
                <a className="text-light" href="#" rel="sponsored">
                  <i className="fab fa-facebook-f fa-sm fa-fw me-2" />
                </a>
                <a className="text-light" href="#">
                  <i className="fab fa-instagram fa-sm fa-fw me-2" />
                </a>
                <a className="text-light" href='#"'>
                  <i className="fab fa-twitter fa-sm fa-fw me-2" />
                </a>
                <a className="text-light" href="#">
                  <i className="fab fa-linkedin fa-sm fa-fw" />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light shadow">
          <div className="container d-flex justify-content-between align-items-center">
            <a
              className="navbar-brand text-success logo h1 align-self-center"
              href="index.html"
            >
              <img src={logo} alt="Logo" width={58} height={53} />
            </a>
            <button
              className="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#templatemo_main_nav"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
              id="templatemo_main_nav"
            >
              <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Inicio
                    </a>
                  </li>
                  <li className="nav-item">
                  <Link to="/Aboutus" className="nav-link">Sobre</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="shop.html">
                      Comprar
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contactanos
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar align-self-center d-flex">
                <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      id="inputMobileSearch"
                      placeholder="Search ..."
                    />
                    <div className="input-group-text">
                      <i className="fa fa-fw fa-search" />
                    </div>
                  </div>
                </div>
                <a
                  className="nav-icon d-none d-lg-inline"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#templatemo_search"
                >
                  <i className="fa fa-fw fa-search text-dark mr-2" />
                </a>
                <a
                  className="nav-icon position-relative text-decoration-none"
                  href="#"
                >
                  <i className="fa fa-fw fa-cart-arrow-down text-dark mr-1" />

                </a>
                <a
                  className="nav-icon position-relative text-decoration-none"
                  href="#"
                >
                  <i className="fa fa-fw fa-user text-dark mr-3" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
