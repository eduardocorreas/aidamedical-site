import React from 'react'

import iconRaio from '../assets/images/icons/icon-raio.png'
import iconGestao from '../assets/images/icons/icon-gestao-empresarial.png'
import iconComunicacao from '../assets/images/icons/icon-comunicacao-interna.png'
import iconSocialMedia from '../assets/images/icons/icon-social-media.png'
import iconMarketing from '../assets/images/icons/icon-marketing.png'

export default function aboutBS() {
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
          Esse é nosso programa de treinamento oferecemos{' '}
          <strong>cursos, palestras e workshops </strong>
          destinado para negócios da saúde, no qual, temos como objetivo
          instruir de maneira estratégica cada cliente para potencializar sua
          projeção de negócio.
        </p>

        <br />
        <div className="row services-list block-1-2 block-m-1-2 block-tab-full">
          <div className="col-block service-item">
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              <img src={iconRaio} alt="Icone de Raio" />
              Problemas com a equipe?
            </p>
            <p className="text-center">
              Está cansado de ter problemas com a equipe e não sabe como
              motivá-la? Nós oferecemos vários treinamentos que nos permitem
              identificar os principais erros e solucioná-los da melhor maneira.
            </p>
          </div>

          <div className="col-block service-item">
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              <img src={iconRaio} alt="Icone de Raio" />
              Estagnação de faturamento?
            </p>
            <p className="text-center">
              Sente sua empresa parada no tempo? Com as técnicas de gestão
              ideais para sua empresa, podemos alavancar e melhorar a projeção
              do seu negócio.
            </p>
          </div>

          <div className="col-block service-item">
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              <img src={iconRaio} alt="Icone de Raio" />
              Falha no atendimento?
            </p>
            <p className="text-center">
              Se o seu atendimento está muito longe do ideal, podemos traçar o
              melhor caminho para chegarmos no ponto <br /> que o seu público
              merece
            </p>
          </div>
          <div className="col-block service-item">
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              <img src={iconRaio} alt="Icone de Raio" />
              Não sabe onde quer chegar?
            </p>
            <p className="text-center">
              O planejamento estratégico é o melhor amigo de uma empresa de
              sucesso e, sabendo disso, queremos munir seus gestores com
              técnicas de ouro para que possamos enxergar seu negócio a longo
              prazo.
            </p>
          </div>
        </div>

        <div
          className="row services-list block-1-4 block-m-1-2 block-tab-full"
          style={{ marginBottom: 50 }}
        >
          <div className="col-block service-item">
            <div
              className="service-icon service-icon--brand-identity text-center"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img src={iconGestao} alt="Treinamento de Gestão" />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              Treinamento de Gestão
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
              <img src={iconComunicacao} alt="Treinamento de Humanização" />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              Treinamento de Humanização
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
              Treinamento de Equipe de Apoio
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
              <img src={iconMarketing} alt="Social Media" />
            </div>
            <p
              style={{ fontSize: '1.5em', fontWeight: 'bold' }}
              className="text-center"
            >
              Treinamento de Planejamento Anual
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
