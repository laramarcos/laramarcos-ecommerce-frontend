import './Footer.css';

export default function Footer() {
  
  return <footer className="main-footer">
  <section>
    <h3>Seguinos</h3>
    <ul>
      <li>
        {" "}
        <i className="fa-brands fa-facebook" /> Facebook
      </li>
      <li>
        {" "}
        <i className="fa-brands fa-instagram" /> Instragram{" "}
      </li>
      <li>
        {" "}
        <i className="fa-brands fa-linkedin" /> Linkedin
      </li>
    </ul>
  </section>
  <section>
    <h3>BrandCompany</h3>
    <p> 2025 - Copyright © </p>
  </section>
  <section>
    <h3>Contacto</h3>
    <ul>
      <li>
        <i className="fa-brands fa-whatsapp" /> Whatsapp + 54 11 30801427
      </li>
      <li>Email: wafflitobylari@gmail.com</li>
      <li>Direccion: Manzone 1039, Acassuso</li>
    </ul>
  </section>
  <section>
    <h3>Formas de pago</h3>
    <ul>
      <li>Tarjetas bancarias</li>
      <li>Mercado Pago</li>
      <li>Transferencia</li>
    </ul>
    <img
      src="/assets/images/Medios de pago/redi-footer-mc-removebg-preview.png"
      alt="Mastercard"
      className="logo-buy"
    />
    <img
      src="/assets/images/Medios de pago/redi-footer-mp-removebg-preview.png"
      alt="Mercado Pago"
      className="logo-buy"
    />
    <img
      src="/assets/images/Medios de pago/redi-footer-visa-removebg-preview.png"
      alt="Visa"
      className="logo-buy"
    />
  </section>
  <section>
    <h3>Quick links</h3>
    <ul>
      <li>Preguntas frecuentes</li>
      <li>Cómo comprar</li>
      <li>Envío y seguimiento</li>
      <li>Mi cuenta</li>
    </ul>
  </section>
</footer>
}
