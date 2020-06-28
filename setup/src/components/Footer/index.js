import React from "react"

const Footer = () => (
  <footer class="footer">
    <nav class="footer-menu">
      <ul class="footer-menu-items">
        <li class="footer-menu-item tile-only-mobile">
          <a class="footer-menu-item-link shape" href="/">
            <span class="footer-menu-item-title">home</span>
          </a>
        </li>
        <li class="footer-menu-item tile-only-mobile">
          <a class="footer-menu-item-link shape" href="/sobre/">
            <span class="footer-menu-item-title">sobre</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="loop-infinito tile-only-mobile">
      <a class="loop-infinito-link" href="http://loopinfinito.com.br/">
        <p>
          um projeto
          <span class="loop-infinito-name">loop infinito</span>
        </p>
      </a>
    </div>
  </footer>
)

export default Footer
