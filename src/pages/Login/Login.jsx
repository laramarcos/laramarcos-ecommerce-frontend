import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const API_URL = import.meta.env.VITE_SERVER_API;

export default function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  async function login(authdata) {
    try {
      const { data } = await axios.post(`${API_URL}/login`, authdata);
      Swal.fire('Éxito', 'Inicio de sesión exitoso', 'success');
      
      // Almacenar datos de usuario y token
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);
      
      // Configurar axios para enviar el token en futuras peticiones
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      
      // Redirigir al home después de login
      navigate('/');
    } catch (error) {
      console.log(error);
      Swal.fire('Error', error.response?.data?.message || 'Error al iniciar sesión', 'error');
    }
  }

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleSubmit(login)} className="login-form">
        <input
          type="email"
          {...register('email', { required: true })}
          placeholder="Correo electrónico"
          className="login-input"
          required
        />
        <input
          type="password"
          {...register('password', { required: true })}
          placeholder="Contraseña"
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          Ingresar
        </button>
      </form>
    </div>
  );
}