import React from 'react';
import './SectionFooter.css';

export default function SectionFooter() {
  return (
<div className="info-section">
  <div className="info-box">
    <i className="fas fa-truck" />
    <h3>HACEMOS ENVÍOS</h3>
    <p>Entregas dentro de CABA/GBA</p>
  </div>
  <div className="info-box">
    <i className="fa-solid fa-lock" />
    <h3>WAFFLES REALES</h3>
    <p>Hechos con ingredientes saludables</p>
  </div>
  <div className="info-box">
    <i className="fa-solid fa-clock" />
    <h3>AHORRÁ TIEMPO</h3>
    <p>Listos en 5 minutos</p>
  </div>
</div>
)}
