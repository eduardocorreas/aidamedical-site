import React from 'react'

import iconConference from '../assets/images/icons/icon-conference.png'
import iconConsulting from '../assets/images/icons/icon-consulting.png'
import iconProntuario from '../assets/images/icons/icon-prontuario.png'
import iconAdvertising from '../assets/images/icons/icon-advertising.png'

export default function aboutSMC() {
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
          Esse protocolo foi criado especialmente para os profissionais da saúde
          que desejam entrar nas redes sociais e{' '}
          <strong>ainda não sabem por onde começar</strong>. Sabemos que muito
          se fala de Marketing Digital, mas vamos falar como o Social Media
          Consulting in Health pode ajudar você a se posicionar no mercado! Esse
          produto nada mais é do que uma{' '}
          <strong>
            metodologia que guia a estratégia de marketing de conteúdo das suas
            redes sociais
          </strong>
          .<br />
          <br />
          Apresentamos todas as ferramentas e melhores escolhas para quem deseja
          ter sucesso nesse canal de comunicação.
        </p>

        <br />
        <br />
        <div className="row services-list block-1-2 block-m-1-2 block-tab-full">
          <div className="col-block service-item">
            <div
              className="service-icon service-icon--brand-identity text-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={iconConference} alt="Consultorias online Semanais" />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              Consultorias online Semanais
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
              <img
                src={iconConsulting}
                alt="Consultor exclusivo para pensar estrategicamente"
              />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              Consultor exclusivo para pensar estrategicamente
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
              <img src={iconProntuario} alt="Roteiro de execução mensal" />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              Roteiro de execução mensal
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
              <img src={iconAdvertising} alt="4 Layouts/mês" />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              4 Layouts/mês
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
