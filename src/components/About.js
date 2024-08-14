import React from 'react'
import aboutHero from '../static/img/about-hero.svg';

const About = () => {
    return (
        <div>
            <section className="bg-success py-5">
                <div className="container">
                    <div className="row align-items-center py-5">
                        <div className="col-md-8 text-white">
                            <h1>Sobre Nosotros</h1>
                            <p>
                            Somos una plataforma dedicada a ofrecer la mejor experiencia de compra en línea. 
                            Nuestro compromiso es brindarte productos de calidad, con un servicio rápido y seguro, 
                            directamente en la comodidad de tu hogar.
                            </p>
                        </div>
                        <div className="col-md-4">
                        <img src={aboutHero} alt="About Hero" />

                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;