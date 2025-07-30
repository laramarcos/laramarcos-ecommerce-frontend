import React from 'react';
import './Contact.css';

export default function Contact() {
  return <section className="contact">
  <form className="formulario">
    <div className="input-group">
      <label htmlFor="name">Nombre</label>
      <input
        type="text"
        name="nombre"
        id="name"
        required=""
        minLength={3}
        maxLength={15}
        placeholder="Lara Marcos"
        autofocus=""
        autoComplete=""
      />
    </div>
    <div className="input-group">
      <label htmlFor="correo">Correo electronico</label>
      <input
        type="email"
        name="correo"
        id="correo"
        required=""
        pattern="[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$"
      />
    </div>
    <div className="input-group">
      <label htmlFor="comentario">Comentario</label>
      <textarea
        name="coment"
        id="comentario"
        cols={30}
        rows={10}
        defaultValue={""}
      />
    </div>
    <button type="submit">ENVIAR</button>
  </form>
  <div className="map">
    <h3>Dónde estamos?</h3>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8287.273600801162!2d-58.50252104897837!3d-34.48242282604881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1741124228685!5m2!1ses!2sar"
      width="100%"
      style={{ border: 0 }}
      loading="lazy"
      height={500}
    />
  </div>
</section>
}