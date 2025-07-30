import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Register.css';

const URL = 'https://6879afa963f24f1fdca29785.mockapi.io/users';

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(URL, data);
      Swal.fire('Registro exitoso', 'El usuario fue creado correctamente', 'success');
      reset();
    } catch (error) {
      Swal.fire('Error', 'No se pudo registrar el usuario', 'error');
      console.error(error);
    }
  };

  const password = watch('password');

  return (
    <div>
      <h1 className="title">Registro</h1>

      <form className="formulario-reg" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            {...register('nombre', {
              required: 'Este campo es obligatorio',
              minLength: { value: 3, message: 'Debe tener al menos 3 caracteres' },
              maxLength: { value: 15, message: 'Máximo 15 caracteres' },
            })}
            placeholder="Lara Marcos"
            autoFocus
          />
          {errors.nombre && <span className="error">{errors.nombre.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="correo">Correo electrónico</label>
          <input
            id="correo"
            type="email"
            {...register('correo', {
              required: 'Este campo es obligatorio',
              pattern: {
                value: /^[A-Za-z0-9._+\-']+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/,
                message: 'Correo no válido',
              },
            })}
          />
          {errors.correo && <span className="error">{errors.correo.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="Contraseña">Contraseña</label>
          <input
            id="Contraseña"
            type="password"
            {...register('password', {
              required: 'Este campo es obligatorio',
              minLength: { value: 4, message: 'Debe tener al menos 4 caracteres' },
            })}
          />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="confirm-password">Repetir contraseña</label>
          <input
            id="confirm-password"
            type="password"
            {...register('confirmPassword', {
              required: 'Este campo es obligatorio',
              validate: (value) =>
                value === password || 'Las contraseñas no coinciden',
            })}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword.message}</span>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="birthday">Fecha de nacimiento</label>
          <input
            id="birthday"
            type="date"
            {...register('birthday', { required: 'Este campo es obligatorio' })}
          />
          {errors.birthday && <span className="error">{errors.birthday.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="pais">Seleccione País</label>
          <select id="pais" {...register('country')}>
            <option value="AR">Argentina</option>
            <option value="BO">Bolivia</option>
            <option value="BR">Brasil</option>
            <option value="CL">Chile</option>
            <option value="CO">Colombia</option>
            <option value="EC">Ecuador</option>
            <option value="PA">Paraguay</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="comentario">Comentario</label>
          <textarea
            id="comentario"
            rows="5"
            {...register('comentario')}
          ></textarea>
        </div>

        <button type="submit">ENVIAR</button>
      </form>
    </div>
  );
}
