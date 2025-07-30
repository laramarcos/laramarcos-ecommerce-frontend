import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './AdminProduct.css';

const URL = 'https://6879afa963f24f1fdca29785.mockapi.io/products';

export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get(URL);
      setProducts(res.data);
    } catch (error) {
      Swal.fire('Error', 'No se pudieron obtener los productos', 'error');
    }
  };

  const submit = async (data) => {
    try {
      if (editing) {
        await axios.put(`${URL}/${currentId}`, data);
        Swal.fire('Actualizado', 'Producto actualizado correctamente', 'success');
      } else {
        await axios.post(URL, data);
        Swal.fire('Creado', 'Producto creado correctamente', 'success');
      }
      getProducts();
      reset();
      setEditing(false);
      setCurrentId(null);
    } catch (error) {
      Swal.fire('Error', 'Ocurrió un error al guardar el producto', 'error');
    }
  };

  const editProduct = (product) => {
    reset(product);
    setEditing(true);
    setCurrentId(product.id);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      getProducts();
      Swal.fire('Eliminado', 'Producto eliminado correctamente', 'success');
    } catch (error) {
      Swal.fire('Error', 'No se pudo eliminar el producto', 'error');
    }
  };

  return (
    <div className="admin-container">
      <form onSubmit={handleSubmit(submit)} className="admin-form">
        <h2>{editing ? 'Editar producto' : 'Agregar producto'}</h2>

        <div className="input-group">
          <label>Nombre del producto</label>
          <input type="text" {...register('name', { required: 'Este campo es obligatorio' })} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className="input-group">
          <label>Precio</label>
          <input type="number" step="0.01" {...register('price', { required: 'Este campo es obligatorio' })} />
          {errors.price && <span className="error">{errors.price.message}</span>}
        </div>

        <div className="input-group">
          <label>Descripción</label>
          <textarea {...register('description', { required: 'Este campo es obligatorio' })} />
          {errors.description && <span className="error">{errors.description.message}</span>}
        </div>

        <div className="input-group">
          <label>URL de la imagen</label>
          <input type="url" {...register('image', { required: 'Este campo es obligatorio' })} />
          {errors.image && <span className="error">{errors.image.message}</span>}
        </div>

        <div className="input-group">
          <label>Fecha de creación</label>
          <input type="date" {...register('createdAt', { required: 'Este campo es obligatorio' })} />
          {errors.createdAt && <span className="error">{errors.createdAt.message}</span>}
        </div>

        <div className="input-group">
          <label>Categoría</label>
          <select {...register('category', { required: 'Este campo es obligatorio' })}>
            <option value="">Seleccionar categoría</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
            <option value="vegano">Vegano</option>
          </select>
          {errors.category && <span className="error">{errors.category.message}</span>}
        </div>

        <button className='button-admin' type="submit">
          {editing ? 'ACTUALIZAR' : 'CARGAR'}
        </button>
      </form>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Descripción</th>
              <th>Imagen</th>
              <th>Fecha</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td>
                  <img src={product.image} alt={product.name} style={{ width: '50px' }} />
                </td>
                <td>{product.createdAt}</td>
                <td>{product.category}</td>
                <td>
                  <button onClick={() => editProduct(product)}>✏️</button>
                  <button onClick={() => deleteProduct(product.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
