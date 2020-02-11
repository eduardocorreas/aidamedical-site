import React from 'react'
import ServiceBg from '../assets/images/services-bg.png'
import iconRaio from '../assets/images/icons/icon-raio.png'

export default function about() {
  return (
    <section
      id="dna"
      className="s-services"
      style={{
        background: ServiceBg,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        marginTop: '-50px',
      }}
    >
      <div className="row section-header" style={{ marginTop: '0px' }}>
        <div className="col-full">
          <h1 className="display-1 text-center" style={{ color: '#fff' }}>
            A saúde do <strong>seu negócio</strong> <br />é a nossa
            <strong> marca</strong>.
          </h1>
        </div>
      </div>

      <div className="row">
        <p style={{ fontSize: '1.2em' }} className="text-center">
          A <strong>AIDA MEDICAL</strong> é uma empresa especializada em
          consultoria de negócios de assistência médica assessorando empresas,
          organizações sem fins lucrativos, investidores em serviços de saúde,
          tecnologia da informação em saúde e serviços farmacêuticos. Aqui, o{' '}
          <strong>seu negócio é nosso paciente</strong> e com uma análise
          minuciosa conseguimos montar seu prontuário e diagnosticar todas as
          suas necessidades.
        </p>

        <br />
        <br />
        <div className="row services-list block-1-4 block-m-1-2 block-tab-full">
          <div
            className="col-block service-item aos-init aos-animate divider-service-one"
            data-aos="fade-up"
          >
            <div className="service-icon service-icon--brand-identity text-center">
              <h3 style={{ color: '#fff', fontSize: '0.5em' }}>
                <img
                  src={iconRaio}
                  alt="Icone de Raio"
                  style={{ width: '15%' }}
                />
                MISSÃO
              </h3>
            </div>
            <p className="text-center ">
              Criar estratégias inovadoras e rápidas que possam fazer a
              diferença nos negócios dos nossos clientes.
            </p>
            <br />
          </div>
          <div
            className="col-block service-item aos-init aos-animate  divider-service-two"
            data-aos="fade-up"
          >
            <div className="service-icon service-icon--brand-identity text-center">
              <h3 style={{ color: '#fff', fontSize: '0.5em' }}>
                <img
                  src={iconRaio}
                  alt="Icone de Raio"
                  style={{ width: '15%' }}
                />
                VISÃO
              </h3>
            </div>
            <p className="text-center">
              Ser a maior e melhor agência digital do mundo onde os
              colaboradores tenham a maior eficiência de qualquer lugar e que
              possamos estar.{' '}
            </p>
          </div>

          <div
            className="col-block service-item aos-init aos-animate divider-service-one"
            data-aos="fade-up"
          >
            <div className="service-icon service-icon--brand-identity text-center">
              <h3 style={{ color: '#fff', fontSize: '0.5em' }}>
                <img
                  src={iconRaio}
                  alt="Icone de Raio"
                  style={{ width: '15%' }}
                />
                PILARES
              </h3>
            </div>
            <p className="text-center">
              Ética, profissionalismo, confiança e comprometimento com o negócio
              de cada cliente do grupo AIDA.
            </p>
            <br />
          </div>

          <div
            className="col-block service-item aos-init aos-animate"
            data-aos="fade-up"
          >
            <div className="service-icon service-icon--brand-identity text-center">
              <h3 style={{ color: '#fff', fontSize: '0.5em' }}>
                <img
                  src={iconRaio}
                  alt="Icone de Raio"
                  style={{ width: '15%' }}
                />
                OBJETIVOS
              </h3>
            </div>
            <p className="text-center">
              Mudar a experiência de consultoria de marketing que o mercado
              mundial está acostumado e fazer que uma simples reunião seja uma
              quebra de um paradoxo.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
