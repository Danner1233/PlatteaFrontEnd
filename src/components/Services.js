import React from 'react'

const Services = () => {
    return (
        <div>
            <section className="container py-5">
                <div className="row text-center pt-5 pb-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Nuestros Servicios</h1>
                        <p>
                        Nos especializamos en ofrecerte una plataforma confiable y eficiente, con soporte en tiempo real, opciones de entrega flexibles, y un proceso de devolución sin estrés. 
                        Tu comodidad es nuestra prioridad.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fa fa-truck fa-lg" /></div>
                            <h2 className="h5 mt-4 text-center">Delivery Services</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fas fa-exchange-alt" /></div>
                            <h2 className="h5 mt-4 text-center">Shipping &amp; Return</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fa fa-percent" /></div>
                            <h2 className="h5 mt-4 text-center">Promotion</h2>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 pb-5">
                        <div className="h-100 py-5 services-icon-wap shadow">
                            <div className="h1 text-success text-center"><i className="fa fa-user" /></div>
                            <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services