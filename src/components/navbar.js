import React, { useState } from 'react'

export default function Navbar() {
  const [visible, setVisible] = useState('hidden')
  const [opacity, setOpacity] = useState(0)

  function changeVisibility() {
    if (visible === 'hidden') {
      setVisible('visible')
      setOpacity(1)
    } else {
      setVisible('hidden')
      setOpacity(0)
    }
  }

  return (
    <>
      <nav className="header-nav" style={{ visibility: visible }}>
        <div
          onClick={() => changeVisibility()}
          className="header-nav__close"
          title="close"
        >
          <span>Fechar</span>
        </div>

        <div
          className="header-nav__content"
          style={{ visibility: visible, opacity: opacity }}
        >
          <h3>Aida Medical</h3>

          <ul className="header-nav__list">
            <li className="current">
              <a className="smoothscroll" href="#home" title="home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#dna" title="dna">
                Nosso DNA
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#services" title="services">
                Serviços
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#works" title="works">
                Área de Atuação
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#works" title="works">
                Blog
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#works" title="works">
                Eventos
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact" title="contact">
                Contatos
              </a>
            </li>
          </ul>

          <ul className="header-nav__social">
            <li>
              <a
                href="https://www.facebook.com/agaidabrasil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/agaidabr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/aida-brasil-comunica%C3%A7%C3%A3o-&-marketing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" rel="noopener noreferrer"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCIbaP0QUPnGQsOjvegdMgAw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="header-menu-toggle" onClick={() => changeVisibility()}>
        <span className="header-menu-icon"></span>
      </div>
    </>
  )
}
