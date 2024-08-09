import React, { useEffect } from "react";
import "../index.css";
import banner1 from '../static/img/banner_img_01.jpg';
import banner2 from '../static/img/banner_img_02.jpg';
import banner3 from '../static/img/banner_img_03.jpg';
function Carrusel() {
  useEffect(() => {
    // Carga de scripts externos en el index.html es más seguro
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript(`${process.env.PUBLIC_URL}/js/bootstrap.bundle.min.js`);
    loadScript(`${process.env.PUBLIC_URL}/js/jquery-1.11.0.min.js`);
    loadScript(`${process.env.PUBLIC_URL}/js/jquery-migrate-1.2.1.min.js`);
    loadScript(`${process.env.PUBLIC_URL}/js/templatemo.js`);
  }, []);

  return (
    <div>
      <div
        className="modal fade bg-white"
        id="templatemo_search"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="w-100 pt-1 mb-5 text-right">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <form
            method="get"
            className="modal-content modal-body border-0 p-0"
          >
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                id="inputModalSearch"
                name="q"
                placeholder="Search ..."
              />
              <button
                type="submit"
                className="input-group-text bg-success text-light"
              >
                <i className="fa fa-fw fa-search text-white" />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        id="template-mo-zay-hero-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to={0}
            className="active"
          />
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to={1}
          />
          <li
            data-bs-target="#template-mo-zay-hero-carousel"
            data-bs-slide-to={2}
          />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src={banner1} alt="banner1"
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left align-self-center">
                    <h1 className="h1 text-success">
                      <b>PLATTĔA</b> Venta en Línea
                    </h1>
                    <h3 className="h2">
                      La Mejor Experiencia de Compra en Línea
                    </h3>
                    <p>
                      PLATTĔA es una plataforma de ventas en línea que ofrece
                      una experiencia de compra sencilla y eficiente. Nos
                      dedicamos a proporcionar las mejores ofertas y productos
                      de alta calidad.{" "}
                      <a
                        rel="sponsored"
                        className="text-success"
                        href="#"
                        target="_blank"
                      >
                        PLATTĔA
                      </a>{" "}
                      Sitio Web.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src={banner2} alt="banner2"
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">
                      ¡Mantén tu bebida a la temperatura perfecta!
                    </h1>
                    <p>
                      Descubre el termo Curology, diseñado para mantener tus
                      bebidas frías o calientes durante horas.
                      <strong>Perfecto</strong> para llevar contigo a cualquier
                      lugar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="row p-5">
                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                  <img
                    className="img-fluid"
                    src={banner3} alt="banner3"
                  />
                </div>
                <div className="col-lg-6 mb-0 d-flex align-items-center">
                  <div className="text-align-left">
                    <h1 className="h1">Lámpara de Noche Curology</h1>
                    <h3 className="h2">Ilumina tus noches con estilo </h3>
                    <p>
                      Te presentamos la Lámpara de Noche Curology, perfecta para
                      crear un ambiente acogedor en tu hogar. Con
                      características innovadoras y un diseño elegante, esta
                      lámpara es ideal para cualquier habitación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev text-decoration-none w-auto ps-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="prev"
        >
          <i className="fas fa-chevron-left" />
        </a>
        <a
          className="carousel-control-next text-decoration-none w-auto pe-3"
          href="#template-mo-zay-hero-carousel"
          role="button"
          data-bs-slide="next"
        >
          <i className="fas fa-chevron-right" />
        </a>
      </div>
    </div>
  );
}

export default Carrusel;
