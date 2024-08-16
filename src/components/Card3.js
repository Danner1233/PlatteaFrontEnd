import React from 'react'
import netflix from '../static/img/Netflix.jpg'

const Card3 = () => {
  return (
    <div>
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
  )
}

export default Card3