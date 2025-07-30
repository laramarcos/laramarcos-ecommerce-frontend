import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faLock, faClock } from '@fortawesome/free-solid-svg-icons';

import './SectionFooter.css';

export default function SectionFooter() {
  return (
    <div className="info-section">
      <div className="info-box">
        <FontAwesomeIcon icon={faTruck} className="info-icon" />
        <h3>HACEMOS ENVÍOS</h3>
        <p>Entregas dentro de CABA/GBA</p>
      </div>

      <div className="info-box">
        <FontAwesomeIcon icon={faLock} className="info-icon" />
        <h3>WAFFLES REALES</h3>
        <p>Hechos con ingredientes saludables</p>
      </div>

      <div className="info-box">
        <FontAwesomeIcon icon={faClock} className="info-icon" />
        <h3>AHORRÁ TIEMPO</h3>
        <p>Listos en 5 minutos</p>
      </div>
    </div>
  );
}
