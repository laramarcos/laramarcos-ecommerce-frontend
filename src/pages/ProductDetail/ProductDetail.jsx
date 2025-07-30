import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://6879afa963f24f1fdca29785.mockapi.io/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(() => toast.error('Error al cargar el producto'));
  }, [id]);

  if (!product) return <div className="loading">Cargando...</div>;

  return (
    <div className="producto-detalle">
      <div className="imagen-detalle">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="info">
        <h1>{product.name}</h1>
        <p className="precio">${product.price}</p>
        {product.discount && (
          <p className="descuento">${product.price * 0.9} (10% OFF)</p>
        )}
        <p>{product.description}</p>

        <button
          onClick={() => {
            addToCart(product);
            toast.success(`${product.name} agregado al carrito 🛒`);
          }}
          className="agregar-carrito"
        >
          Agregar al carrito
        </button>

        <div className="envio">
          <label htmlFor="codigoPostal">Medios de envío</label>
          <br />
          <input
            type="text"
            id="codigoPostal"
            placeholder="Tu código postal"
          />
          <button>CALCULAR</button>
        </div>

        <div className="ingredientes-detalle">
          <h3>INGREDIENTES: </h3>
          
          <p>{product.ingredients || "Harina, huevo, leche, manteca..."}</p>
        </div>
      </div>
    </div>
  );
}
