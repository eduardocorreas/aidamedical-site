import React from 'react'

import iconMarketing from '../assets/images/icons/icon-marketing.png'
import iconGestao from '../assets/images/icons/icon-gestao-empresarial.png'
import iconSocialMedia from '../assets/images/icons/icon-social-media.png'
import iconPlanejamento from '../assets/images/icons/icon-planejamento-estrategico.png'
import iconComunicacao from '../assets/images/icons/icon-comunicacao-interna.png'

export default function aboutBCH() {
  return (
    <section
      id="services"
      className="s-services"
      style={{ backgroundColor: '#46A199' }}
    >
      <div className="row section-header">
        <div className="col-full">
          <h1 className="display-1 text-center" style={{ color: '#fff' }}>
            O que podemos <strong>fazer por você?</strong>
          </h1>
        </div>
      </div>

      <div className="row">
        <p style={{ fontSize: '1.2em' }} className="text-center">
          Estratégia de negócios é a nossa principal oferta. Em um primeiro
          momento, realizamos uma avaliação interna para entender a história, as
          ambições e as capacidades da sua empresa e, a partir disso,
          conseguimos elaborar um planejamento estratégico de acordo com as suas
          necessidades e do ambiente competitivo.
        </p>

        <br />
        <br />
        <div className="row services-list block-1-3 block-m-1-2 block-tab-full">
          <div className="col-block service-item">
            <div
              className="service-icon service-icon--brand-identity text-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={iconGestao} alt="Gestão Empresarial" />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              Gestão Empresarial
            </p>
          </div>

          <div className="col-block service-item">
            <div
              className="service-icon  service-icon--web-design text-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={iconMarketing} alt="Marketing" />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              Marketing{' '}
            </p>
          </div>

          <div className="col-block service-item">
            <div
              className="service-icon  service-icon--ui-design text-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={iconSocialMedia} alt="Social Media" />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              Social Media
            </p>
          </div>
        </div>
        <div className="row services-list block-1-2 block-m-1-2">
          <div className="col-block service-item">
            <div
              className="service-icon service-icon--ui-design text-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={iconPlanejamento} alt="Social Media" />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              Planejamento Estratégico
            </p>
          </div>
          <div className="col-block service-item">
            <div
              className="service-icon  service-icon--ui-design text-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={iconComunicacao} alt="Comunicação interna" />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              Comunicação interna/externa
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
