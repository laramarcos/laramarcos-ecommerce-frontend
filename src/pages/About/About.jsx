import React from "react";
import waffleDulce from "../../assets/images/waffle-dulce.png";
import waffles from "../../assets/images/foto-waffles.jpg";
import foto from "../../assets/images/foto.jpg";
import "./About.css";


export default function AboutUs() {
  return (
    <>
      <section className="nosotros">
        <h2>NOSOTROS</h2>
        <div className="contenido">
          <h3>¿Por qué recomendamos WAFFLITO?</h3>
          <ul>
            <li>- Listo en tan solo pocos minutos</li>
            <li>- Soluciona tus desayunos y meriendas</li>
            <li>- Herramienta para aumentar el consumo de proteínas y fibra</li>
          </ul>

          <h3>¿Quién soy?</h3>
          <p>
            Soy Lara, estudiante de la carrera de Nutrición, y hoy quiero
            presentarte este pequeño proyecto que vengo pensando con mucho ❤️
            para todas esas personas que por la falta de tiempo que disponemos
            hoy en día, se vuelve casi imposible comer de forma saludable.
          </p>
          <p>
            ¡Quiero convencerte que comer rico y sano no tiene por qué ser
            aburrido y tedioso! ¡TODO LO CONTRARIO!
          </p>
          <p>
            Estos waffles no tienen ningún tipo de azúcar, aditivos,
            conservantes ni harinas refinadas. Brindan más saciedad y proteína
            de calidad para quienes buscan una herramienta para merienda,
            desayuno, snack, postre saludable o post - pre entreno.
          </p>
        </div>
      </section>

      <div className="about-products">
        <img src={waffleDulce} alt="waffle dulce" width="30%" />
        <img src={waffles} alt="waffles" width="30%" />
        <img src={foto} alt="foto" width="25%" />
      </div>
    </>
  );
}
