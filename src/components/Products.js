import React from "react";
import shop1 from '../static/img/shop_01.jpg';
import shop2 from '../static/img/shop_02.jpg';
import shop3 from '../static/img/shop_03.jpg';
import shop4 from '../static/img/shop_04.jpg';
import shop5 from '../static/img/shop_05.jpg';
import shop6 from '../static/img/shop_06.jpg';
import shop7 from '../static/img/shop_07.jpg';
import shop8 from '../static/img/shop_08.jpg';
import shop9 from '../static/img/shop_09.jpg';

const Products = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="h2 pb-4">Categories</h1>
          <ul className="list-unstyled templatemo-accordion">
            <li className="pb-3">
              <a
                className="collapsed d-flex justify-content-between h3 text-decoration-none"
                href="#"
              >
                Genero
                <i className="fa fa-fw fa-chevron-circle-down mt-1" />
              </a>
              <ul className="collapse show list-unstyled pl-3">
                <li>
                  <a className="text-decoration-none" href="#">
                    Hombre
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Mujer
                  </a>
                </li>
              </ul>
            </li>
            <li className="pb-3">
              <a
                className="collapsed d-flex justify-content-between h3 text-decoration-none"
                href="#"
              >
                Sale
                <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
              </a>
              <ul id="collapseTwo" className="collapse list-unstyled pl-3">
                <li>
                  <a className="text-decoration-none" href="#">
                    Deportivo
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Lujo
                  </a>
                </li>
              </ul>
            </li>
            <li className="pb-3">
              <a
                className="collapsed d-flex justify-content-between h3 text-decoration-none"
                href="#"
              >
                Producto
                <i className="pull-right fa fa-fw fa-chevron-circle-down mt-1" />
              </a>
              <ul id="collapseThree" className="collapse list-unstyled pl-3">
                <li>
                  <a className="text-decoration-none" href="#">
                    Bolsa
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    jersey
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none" href="#">
                    Gafas de sol
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-lg-9">
          <div className="row">
            <div className="col-md-6">
              <ul className="list-inline shop-top-menu pb-3 pt-1">
                <li className="list-inline-item">
                  <a
                    className="h3 text-dark text-decoration-none mr-3"
                    href="#"
                  >
                    Todo
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="h3 text-dark text-decoration-none mr-3"
                    href="#"
                  >
                    Hombre
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="h3 text-dark text-decoration-none" href="#">
                    Mujer
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 pb-4">
              <div className="d-flex">
                <select className="form-control">
                  <option>Destacado</option>
                  <option>A - Z</option>
                  <option>Articulo</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={shop1}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white"
                          href="shop-single.html"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-cart-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    Oupidatat non
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
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
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={shop2}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white"
                          href="shop-single.html"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-cart-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    Oupidatat non
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
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
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={shop3}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white"
                          href="shop-single.html"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-cart-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    Oupidatat non
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
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
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={shop4}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white"
                          href="shop-single.html"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-cart-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    Oupidatat non
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
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
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={shop5}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white"
                          href="shop-single.html"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-cart-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    Oupidatat non
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
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
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={shop6}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white"
                          href="shop-single.html"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-cart-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    Oupidatat non
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
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
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={shop7}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white"
                          href="shop-single.html"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-cart-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    Oupidatat non
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
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
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={shop8}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white"
                          href="shop-single.html"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-cart-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    Oupidatat non
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
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
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4 product-wap rounded-0">
                <div className="card rounded-0">
                  <img
                    className="card-img rounded-0 img-fluid"
                    src={shop9}
                  />
                  <div className="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="btn btn-success text-white"
                          href="shop-single.html"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="shop-single.html"
                        >
                          <i className="fas fa-cart-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="shop-single.html"
                    className="h3 text-decoration-none"
                  >
                    Oupidatat non
                  </a>
                  <ul className="w-100 list-unstyled d-flex justify-content-between mb-0">
                    <li>M/L/X/XL</li>
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
                  <p className="text-center mb-0">$250.00</p>
                </div>
              </div>
            </div>
          </div>
          <div div="row">
            <ul className="pagination pagination-lg justify-content-end">
              <li className="page-item disabled">
                <a
                  className="page-link active rounded-0 mr-3 shadow-sm border-top-0 border-left-0"
                  href="#"
                  tabIndex={-1}
                >
                  1
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link rounded-0 mr-3 shadow-sm border-top-0 border-left-0 text-dark"
                  href="#"
                >
                  2
                </a>
              </li>
              <li className="page-item">
                <a
                  className="page-link rounded-0 shadow-sm border-top-0 border-left-0 text-dark"
                  href="#"
                >
                  3
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
