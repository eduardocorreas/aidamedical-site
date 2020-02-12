import React from 'react'

import Map from '../assets/images/mapa-medical.png'

export default function performanceMap() {
  return (
    <section id="works" class="s-works">
      <div class="row section-header" style={{ marginTop: '-50px' }}>
        <div class="col-full">
          <h3 class="subhead" style={{ color: '#46A199' }}>
            Conheça mais
          </h3>
          <h1 class="display-1">Área de atuação</h1>
        </div>
      </div>

      <p
        class="text-center"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={Map} alt="Mapa de atuação" />
      </p>
    </section>
  )
}
