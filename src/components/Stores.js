import React from 'react'

import Card1 from "./Card3";

const Stores = () => {
  return (
    <div>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3"></div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <Card1 />
            </div>
            <div className="col-12 col-md-4 mb-4">
              <Card1 />
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
  );
};

export default Stores;
