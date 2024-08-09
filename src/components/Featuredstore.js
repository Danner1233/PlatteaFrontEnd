import React from "react";

const Featuredstore = () => {
  return (
    <div>
      <section className="bg-light">
        <div className="container py-5">
          <div className="row text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h1">Tiendas Destacadas</h1>
              <p>
                Explora nuestra selección de tiendas destacadas, donde
                encontrarás una variedad de productos únicos y de calidad.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 mb-4">
              <div className="card h-100">
                <a href="shop-single.html">
                  <img
                    src="./assets/img/Netflix.jpg"
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
                    src="./assets/img/primeVideo.jpg"
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
                    src="./assets/img/adidas.jpeg"
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

export default Featuredstore;
