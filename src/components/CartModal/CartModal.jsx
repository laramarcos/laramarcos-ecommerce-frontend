import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';
import './CartModal.css'; // (Opcional: para estilos)

export default function CartModal({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className={`cart-modal ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Tu Carrito ({cart.length})</h2>
        <button onClick={onClose} className="close-btn">×</button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Tu carrito está vacío</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} width="60" />
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="item-actions">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
                <button 
                  onClick={() => {
                    removeFromCart(item.id);
                    toast.error(`${item.name} eliminado`);
                  }}
                  className="delete-btn"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="cart-footer">
        <p className="total">Total: <strong>${total.toFixed(2)}</strong></p>
        <button 
          className="checkout-btn"
          disabled={cart.length === 0}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}