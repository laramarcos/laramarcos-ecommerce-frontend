import './SectionInfo.css';
import imagen from '../../assets/images/waffle-salado.png'; 

export default function SectionInfo() {
  return (
    <div className="main-container">
    <section className="ingredientes">
  <div className="texto">
    <h2>DESAYUNÁ RICO Y SALUDABLE</h2>
    <p>
      Sin conservantes ni ingredientes artificiales. Nuestros waffles están
      hechos con ingredientes naturales sin harinas refinadas, sin azúcar y sin
      lácteos!
    </p>
  </div>
  <div className="imagen">
    <img src={imagen} alt="Waffle salado" />
  </div>
</section>

    </div>

  );
}
