import './Header.css';
import logo from '../../assets/images/WAFFLITO-LOGO.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import CartModal from '../../components/CartModal/CartModal';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¿Quieres cerrar tu sesión?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, cerrar sesión'
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar datos de autenticación
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        
        // Eliminar el token de las cabeceras de axios
        delete axios.defaults.headers.common['Authorization'];
        
        // Redirigir al login
        navigate('/login');
        
        Swal.fire(
          'Sesión cerrada',
          'Has cerrado sesión correctamente.',
          'success'
        );
      }
    });
  };

  return (
    <header className="main-header">
      <label className="burger" htmlFor="burger-check">
        <i className="fa-solid fa-bars" />
      </label>
      <input type="checkbox" className="burger-check" id="burger-check" />
      
      <div className="header-left">
        <NavLink to="/">
          <img className="header-logo" src={logo} alt="Brand logo" />
        </NavLink>
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">Principal</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin-product" className="nav-link">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">Contacto</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">Nosotros</NavLink>
            </li>
            {!user && (
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">Registro</NavLink>
              </li>
            )}

            {user?.role === 'admin' && (
              <li className="nav-item">
                <NavLink to="/admin-product" className="nav-link">Admin Products</NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>

      <div className="header-right">
        {user ? (
          <div className="user-section">
            <span className="user-name">{user.name}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <NavLink to="/login" className="nav-link">Login</NavLink>
        )}
        
        {/* Icono del carrito con contador */}
        <div 
          className="cart-icon-container"
          onClick={() => setIsCartOpen(true)}
        >
          <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
          {cart.length > 0 && (
            <span className="cart-badge">{cart.length}</span>
          )}
        </div>
      </div>

      {/* Modal del carrito */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}