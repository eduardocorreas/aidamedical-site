import React from 'react'

import homeBG from '../assets/images/social-media-bg.png'

export default function HomeSMC() {
  return (
    <section
      id="home"
      class="s-home target-section"
      style={{ backgroundImage: `url(${homeBG})` }}
    >
      <div class="shadow-overlay"></div>

      <div class="home-content">
        <div class="row home-content__main">
          <h1>
            Profissional de saúde
            <br />
            entre nas redes sociais.
          </h1>

          <p>
            Navegue e descubra tudo <br />
            que podemos fazer por você.
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
