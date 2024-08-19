import React from 'react'
import shop1 from '../static/img/shop_01.jpg';

const Productogeneral = () => {
  return (
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
                          href="/producto"
                        >
                          <i className="far fa-heart" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="/producto"
                        >
                          <i className="far fa-eye" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="btn btn-success text-white mt-2"
                          href="/producto"
                        >
                          <i className="fas fa-cart-plus" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <a
                    href="/producto"
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
  )
}

export default Productogeneral