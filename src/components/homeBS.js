import React from 'react'

import homeBG from '../assets/images/business-school-bg.jpg'

export default function HomeBS() {
  return (
    <section
      id="home"
      class="s-home target-section"
      style={{
        backgroundImage: `url(${homeBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <div class="shadow-overlay"></div>

      <div class="home-content">
        <div class="row home-content__main">
          <h1>
            Potencialize sua <br />
            projeção de negócio.
          </h1>

          <p>
            Navegue e descubra tudo <br />
            que podemos fazer pelo seu negócio.
          </p>
        </div>
      </div>
      <a href="#services" class="home-scroll smoothscroll">
        <span class="home-scroll__text">Role para baixo</span>
        <span class="home-scroll__icon"></span>
      </a>
    </section>
  )
}
