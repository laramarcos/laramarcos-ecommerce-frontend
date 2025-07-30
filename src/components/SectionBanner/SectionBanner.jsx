import './SectionBanner.css';
import banner1 from '../../assets/images/banner/banner1.jpg'; 
import banner2 from '../../assets/images/banner/banner2.jpg'; 
import banner3 from '../../assets/images/banner/banner3.webp'; 

export default function SectionBanner() {
  return (

<section className="main-banner">
  <div className="slider-content">
    <img
      className="slide"
      src={banner1}
      alt="imagen banner 1"
    />
    <img
      className="slide"
      src={banner2}
      alt="imagen banner 2"
    />
    <img
      className="slide"
      src={banner3}
      alt="imagen banner 3"
    />
  </div>
</section>
  );
}
