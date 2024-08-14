import React from 'react'

import netflix from '../static/img/Netflix.jpg'
import prime from '../static/img/primeVideo.jpg'
import adidas from '../static/img/adidas.jpeg'

const Stores = () => {
  return (
    <div>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img
                    src={netflix}
                    className="card-img-top"
                    alt="..."
                    height="270px"
                  />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-muted fa fa-star" />
                      <i className="text-muted fa fa-star" />
                    </li>
                  </ul>
                  <a
                    href="shop-single.html"
                    className="h2 text-decoration-none text-dark"
                  >
                    Netflix
                  </a>
                  <p className="card-text">
                    Netflix es una plataforma de streaming líder que ofrece una
                    amplia variedad de series, películas, documentales y
                    programas originales.
                  </p>
                  <p className="text-muted">Reseñas (24)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img
                    src={prime}
                    className="card-img-top"
                    alt="..."
                    height="270px"
                  />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-muted fa fa-star" />
                      <i className="text-muted fa fa-star" />
                    </li>
                  </ul>
                  <a
                    href="shop-single.html"
                    className="h2 text-decoration-none text-dark"
                  >
                    Prime Video
                  </a>
                  <p className="card-text">
                    Prime Video es un servicio de streaming que ofrece una
                    extensa biblioteca de películas, series y programas
                    originales de alta calidad.
                  </p>
                  <p className="text-muted">Reseñas (48)</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img
                    src={adidas}
                    className="card-img-top"
                    alt="..."
                    height="270px"
                  />
                </a>
                <div className="card-body">
                  <ul className="list-unstyled d-flex justify-content-between">
                    <li>
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                      <i className="text-warning fa fa-star" />
                    </li>
                  </ul>
                  <a
                    href="shop-single.html"
                    className="h2 text-decoration-none text-dark"
                  >
                    Adidas
                  </a>
                  <p className="card-text">
                    Adidas es una marca global líder en ropa y calzado
                    deportivo, conocida por su innovación y estilo.
                  </p>
                  <p className="text-muted">Reseñas (74)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Stores