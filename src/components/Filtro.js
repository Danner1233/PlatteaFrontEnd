import React from 'react'

const Filtro = () => {
  return (
    <div className="col-lg-3">
        <h1 className="h2 pb-4">Categories</h1>
      <ul className="list-unstyled templatemo-accordion">
        <li className="pb-3">
          <a
            className="collapsed d-flex justify-content-between h3 text-decoration-none"
            href="#"
          >
            Genero
            <i className="fa fa-fw fa-chevron-circle-down mt-1 accordion-toggle" />
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
            <i className="fa fa-fw fa-chevron-circle-down mt-1 accordion-toggle" />
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
            <i className="fa fa-fw fa-chevron-circle-down mt-1 accordion-toggle" />
          </a>
          <ul id="collapseThree" className="collapse list-unstyled pl-3">
            <li>
              <a className="text-decoration-none" href="#">
                Bolsa
              </a>
            </li>
            <li>
              <a className="text-decoration-none" href="#">
                Jersey
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
  )
}

export default Filtro