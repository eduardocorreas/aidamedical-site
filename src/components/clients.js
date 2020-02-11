import React from 'react'

import Slider from 'react-slick'

import logoNascer from '../assets/images/clientes/nascer.png'
import logoCynthia from '../assets/images/clientes/cynthia_charone.png'
import logo35 from '../assets/images/clientes/35+2.png'
import logoArtmed from '../assets/images/clientes/artmed.png'
import logoDrPedro from '../assets/images/clientes/dr_pedro_luiz.png'
import logoErikaPerini from '../assets/images/clientes/erika_perini.png'
import logoFrancisco from '../assets/images/clientes/francisco_tostes.png'
import logoMaradei from '../assets/images/clientes/maradei.png'
import logoNutrindo from '../assets/images/clientes/nutrindo.png'
import logoRaposo from '../assets/images/clientes/raposo.png'
import logoVirtuli from '../assets/images/clientes/virtuli.png'

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  lazyLoad: true,
  autoplay: true,
}

export default function clients() {
  return (
    <section
      id="services"
      className="s-clientes"
      style={{ backgroundColor: '#46A199' }}
    >
      <div className="row section-header">
        <div className="col-full">
          <h3 className="subhead" style={{ color: '#fff' }}>
            Nossos clientes
          </h3>
        </div>
      </div>
      <div
        className="row customer-logos slider"
        style={{ marginBottom: '-50px' }}
      >
        <Slider {...settings}>
          <div className="slide">
            <img
              src={logoNascer}
              alt="Clinica de Reprodução Nascer"
              className="itemCliente"
              width="50%"
            />
          </div>
          <div className="slide">
            <img
              src={logoCynthia}
              alt="Hospital Cynthia Charone"
              className="itemCliente"
              width="50%"
            />
          </div>
          <div className="slide">
            <img
              src={logo35}
              alt="35+ Coaching de Bem-estar"
              className="itemCliente"
              width="50%"
            />
          </div>
          <div className="slide">
            <img
              src={logoMaradei}
              alt="Hospital Maradei"
              className="itemCliente"
              width="50%"
            />
          </div>
          <div className="slide">
            <img
              src={logoArtmed}
              alt="Art Med"
              className="itemCliente"
              width="50%"
            />
          </div>
          <div className="slide">
            <img
              src={logoFrancisco}
              alt="Dr. Francisco Tostes"
              className="itemCliente"
              width="50%"
            />
          </div>
          <div className="slide">
            <img
              src={logoNutrindo}
              alt="Nutrindo ideais"
              className="itemCliente"
              width="50%"
            />
          </div>
          <div className="slide">
            <img
              src={logoErikaPerini}
              alt="Dr. Erika Perini"
              className="itemCliente"
              width="50%"
            />
          </div>
          <div className="slide">
            <img
              src={logoDrPedro}
              alt="Dr. Pedro Luiz"
              className="itemCliente"
              width="50%"
            />
          </div>
          <div className="slide">
            <img
              src={logoVirtuli}
              alt="Clínica Virtuli"
              className="itemCliente"
              width="50%"
            />
          </div>
          <div className="slide">
            <img
              src={logoRaposo}
              alt="Raposo"
              className="itemCliente"
              width="50%"
            />
          </div>
        </Slider>
      </div>
    </section>
  )
}
