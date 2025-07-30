import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} agregado al carrito 🛒`);
  };

  return (
    <div className="card">
      {/* Etiqueta de oferta (si aplica) */}
      {product.onSale && <div className="card-sale">OFF!</div>}
      
      <img
        src={product.image}
        alt={product.name}
        className="card-image"
      />

      <div className="card-body">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-price">${product.price}</p>
        
        <div className="card-buttons">
          <button 
            onClick={handleAddToCart}
            className="btn-add-to-cart"
          >
            Agregar
          </button>
          <Link
            to={`/product/${product.id}`}
            className="btn-details"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}


// export default function ProductCard({ product }) {
//   return (
//     <article className="card" key={product.id}>
//       <img
//         src={product.image}
//         alt={product.name}
//         className="card-image"
//       />
//       <div className="card-sale label-circle">OFERTA!</div>
//       <div className="card-body">
//         <h3 className="card-title">{product.name}</h3>
//         <div className="card-info">
//           <span className="card-normal-price">${product.price}</span>
//           <span className="card-price">${product.price}</span>
//         </div>
//         <div className="waffle-footer">
//           <a href="" className="waffle-buy">
//             Agregar al carrito
//           </a>
//         </div>
//       </div>
//     </article>
//   );
// }
