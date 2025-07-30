import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebook, 
  faInstagram, 
  faLinkedin, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import visa from '../../assets/images/Medios de pago/redi-footer-visa-removebg-preview.png';
import mastercard from '../../assets/images/Medios de pago/redi-footer-mc-removebg-preview.png';
import mercadoPago from '../../assets/images/Medios de pago/redi-footer-mp-removebg-preview.png';
import './Footer.css';

export default function Footer() {
  
  return <footer className="main-footer">
  <section>
    <h3>Seguinos</h3>
    <ul>
      <li>
  <FontAwesomeIcon icon={faFacebook} /> Facebook
</li>
<li>
  <FontAwesomeIcon icon={faInstagram} /> Instagram
</li>
<li>
  <FontAwesomeIcon icon={faLinkedin} /> Linkedin
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
  <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp +54 11 30801427
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
        <img src={mastercard} alt="Mastercard" className="logo-buy" />
        <img src={mercadoPago} alt="Mercado Pago" className="logo-buy" />
        <img src={visa} alt="Visa" className="logo-buy" />
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
