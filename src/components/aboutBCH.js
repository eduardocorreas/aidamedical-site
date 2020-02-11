import React from 'react'

export default function components() {
  return (
    <section
      id="services"
      className="s-services"
      style="background-color: #46A199"
    >
      <div className="row section-header">
        <div className="col-full">
          <h1 className="display-1 text-center" style="color: white">
            O que podemos <strong>fazer por você?</strong>
          </h1>
        </div>
      </div>

      <div className="row">
        <p style="font-size: 1.2em" className="text-center">
          Estratégia de negócios é a nossa principal oferta. Em um primeiro
          momento, realizamos uma avaliação interna para entender a história, as
          ambições e as capacidades da sua empresa e, a partir disso,
          conseguimos elaborar um planejamento estratégico de acordo com as suas
          necessidades e do ambiente competitivo.
        </p>

        <br />
        <br />
        <div className="row services-list block-1-3 block-m-1-2 block-tab-full">
          <div
            className="col-block service-item"
          >
            <div className="service-icon service-icon--brand-identity text-center">
              <img
                src="images/icons/icon-gestao-empresarial.png"
                alt="Gestão Empresarial"
              />
            </div>
            <p
              style="font-size: 1.5em; font-weight: bold"
              className="text-center"
            >
              Gestão Empresarial
            </p>
          </div>

          <div
            className="col-block service-item"
          >
            <div className="service-icon  service-icon--web-design text-center">
              <img src="images/icons/icon-marketing.png" alt="Marketing" />
            </div>
            <p
              style="font-size: 1.5em; font-weight: bold"
              className="text-center"
            >
              Marketing{' '}
            </p>
          </div>

          <div
            className="col-block service-item"
          >
            <div className="service-icon  service-icon--ui-design text-center">
              <img
                src="images/icons/icon-social-media.png"
                alt="Social Media"
              />
            </div>
            <p
              style="font-size: 1.5em; font-weight: bold"
              className="text-center"
            >
              Social Media
            </p>
          </div>
        </div>
        <div className="row services-list block-1-2 block-m-1-2">
          <div
            className="col-block service-item"
          >
            <div className="service-icon  service-icon--ui-design text-center">
              <img
                src="images/icons/icon-planejamento-estrategico.png"
                alt="Social Media"
              />
            </div>
            <p
              style="font-size: 1.5em; font-weight: bold"
              className="text-center"
            >
              Planejamento Estratégico
            </p>
          </div>
          <div
            className="col-block service-item"
          >
            <div className="service-icon  service-icon--ui-design text-center">
              <img
                src="images/icons/icon-comunicacao-interna.png"
                alt="Comunicação interna"
              />
            </div>
            <p
              style="font-size: 1.5em; font-weight: bold"
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
