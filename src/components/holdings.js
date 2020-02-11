import React from 'react'

import logoBCH from '../assets/images/logo-business-consulting.png'
import logoBS from '../assets/images/logo-business-school.png'
import logoSMC from '../assets/images/logo-social-media-consulting.png'

export default function holdings() {
  return (
    <section
      id="services"
      className="s-services2"
      style={{ backgroundColor: '#33736d' }}
    >
      <div className="row section-header" style={{ marginTop: '50px' }}>
        <div className="col-full">
          <h3 className="subhead" style={{ color: '#fff' }}>
            Conheça os nossos protocolos
          </h3>
        </div>
      </div>

      <div className="row services-list block-1-3 block-m-1-2 block-tab-full">
        <div className="col-block service-item">
          <div className="service-icon service-icon--brand-identity text-center">
            <a href="{{ url('/business-consulting-in-health')}}">
              <img
                src={logoBCH}
                className="iconService"
                alt="Icone Branding"
                style={{ width: '85%' }}
              />
            </a>
          </div>
        </div>

        <div
          className="col-block service-item aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="service-icon  service-icon--web-design text-center">
            <a href="{{ url('/social-media-consulting')}}">
              <img
                src={logoSMC}
                className="iconService"
                alt="Icone Advertising"
                style={{ width: '85%' }}
              />
            </a>
          </div>
        </div>

        <div
          className="col-block service-item aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="service-icon  service-icon--ui-design text-center">
            <a href="{{ url('/business-school')}}">
              <img
                src={logoBS}
                className="iconService"
                alt="Icone Digital"
                style={{ width: '85%' }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
