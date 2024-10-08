import React from "react";
import categoria1 from '../static/img/category_img_01.jpg'
import categoria2 from '../static/img/category_img_02.jpg'
import categoria3 from '../static/img/category_img_03.jpg'

const Featured = () => {
  return (
    <div>
      <section className="container py-5">
        <div className="row text-center pt-3">
          <div className="col-lg-6 m-auto">
            <h1 className="h1">Productos En Tendencia</h1>
            <p>Descubre los productos más populares del momento.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img
                src={categoria1} alt="producto1"
                className="rounded-circle img-fluid border"
              />
            </a>
            <h5 className="text-center mt-3 mb-3">Relojes</h5>
            <p className="text-center">
              <a className="btn btn-success">Compra Ahora</a>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img
                src={categoria2} alt="producto2"
                className="rounded-circle img-fluid border"
              />
            </a>
            <h2 className="h5 text-center mt-3 mb-3">Zapatos</h2>
            <p className="text-center">
              <a className="btn btn-success">Compra Ahora</a>
            </p>
          </div>
          <div className="col-12 col-md-4 p-5 mt-3">
            <a href="#">
              <img
                src={categoria3} alt="producto3"
                className="rounded-circle img-fluid border"
              />
            </a>
            <h2 className="h5 text-center mt-3 mb-3">Accesorios</h2>
            <p className="text-center">
              <a className="btn btn-success">Compra Ahora</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
