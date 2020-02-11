import React from 'react'

// import { Container } from './styles';

export default function contacts() {
  return (
    <section id="contact" class="s-contact">
      <div class="row section-header">
        <div class="col-full">
          <h3 class="subhead subhead--light">Contato</h3>
          <h1 class="display-1 display-1--light">
            Quer descobrir o que podemos fazer por você?
          </h1>
        </div>
      </div>

      <div class="row stats block-1-3 block-m-1-2 block-mob-full">
        <div class="col-block service-item">
          <form
            action="https://aidabrasil.us20.list-manage.com/subscribe/post?u=2de1929e3891a63430b960f9b&amp;id=5915a143d3"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form mc-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div class="mc-field-group">
                <input
                  type="text"
                  value=""
                  name="FNAME"
                  class="mc-form"
                  style={{ background: '#fff' }}
                  id="mce-FNAME"
                  placeholder="Insira seu nome"
                />
              </div>
              <div class="mc-field-group">
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email mc-form"
                  style={{ background: '#fff' }}
                  id="mce-EMAIL"
                  placeholder="Insira seu e-mail"
                />
              </div>
              <div id="mce-responses" class="clear">
                <div class="response" id="mce-error-response"></div>
                <div class="response" id="mce-success-response"></div>
              </div>
              <div
                style={{ position: 'absolute', left: '-5000px;' }}
                aria-hidden="true"
              >
                <input
                  type="hidden"
                  name="b_2de1929e3891a63430b960f9b_5915a143d3"
                  tabindex="-1"
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Fale Conosco"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                  style={{ background: '#46A199', color: '#fff' }}
                />
              </div>
            </div>
          </form>
        </div>

        <div class="col-block service-item">
          <h3 class="subhead subhead--light text-center">Contato</h3>
          <p class="text-center">
            gp@aidabrasil.com <br />
            (91) 98906-7908
          </p>
        </div>

        <div class="col-block service-item">
          <h3 class="subhead subhead--light">Siga-nos</h3>

          <ul class="contact-social text-center">
            <li>
              <a
                href="https://www.facebook.com/agaidabrasil/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/agaidabr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/aida-brasil-comunica%C3%A7%C3%A3o-&-marketing/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCIbaP0QUPnGQsOjvegdMgAw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-full cl-copyright text-center">
          <span>
            Aida Brasil &copy;
            <script>document.write(new Date().getFullYear());</script> Todos os
            direitos reservados | Desenvolvido por Aida Brasil.
          </span>
        </div>
      </div>

      <div class="cl-go-top">
        <a class="smoothscroll" title="Voltar ao início" href="#top">
          <i class="icon-arrow-up" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  )
}
