import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './AdminProduct.css';

const URL = 'http://localhost:3000/products';

export default function AdminProduct() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      setLoading(true);
      const res = await axios.get(URL);

      if (!res.data || !Array.isArray(res.data)) {
        throw new Error('Formato de datos inválido');
      }

      setProducts(res.data);
      setError(null);
    } catch (err) {
      console.error('Error al obtener productos:', err);
      setError('Error al cargar productos');
      setProducts([]);
      Swal.fire('Error', 'No se pudieron cargar los productos', 'error');
    } finally {
      setLoading(false);
    }
  };

  const submit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('price', data.price);
      formData.append('description', data.description);
      formData.append('category', data.category);

      if (data.image instanceof FileList && data.image.length > 0) {
        formData.append('image', data.image[0]);
      } else if (typeof data.image === 'string') {
        formData.append('image', data.image);
      }

      if (editing) {
        await axios.put(`${URL}/${currentId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        Swal.fire('Actualizado', 'Producto actualizado correctamente', 'success');
      } else {
        await axios.post(URL, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        Swal.fire('Creado', 'Producto creado correctamente', 'success');
      }

      getProducts();
      reset();
      setEditing(false);
      setCurrentId(null);
    } catch (error) {
      console.error('Error al guardar producto:', error.response?.data);
      Swal.fire(
        'Error',
        error.response?.data?.message || 'Ocurrió un error al guardar el producto',
        'error'
      );
    }
  };

  const editProduct = (product) => {
    const formValues = {
      ...product,
      image: product.image?.startsWith('http') ? product.image : ''
    };
    reset(formValues);
    setEditing(true);
    setCurrentId(product._id);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      getProducts();
      Swal.fire('Eliminado', 'Producto eliminado correctamente', 'success');
    } catch (error) {
      console.error('Error al eliminar producto:', error.response?.data);
      Swal.fire('Error', 'No se pudo eliminar el producto', 'error');
    }
  };

  return (
    <div className="admin-container">
      <form onSubmit={handleSubmit(submit)} className="admin-form" encType="multipart/form-data">
        <h2>{editing ? 'Editar producto' : 'Agregar producto'}</h2>

        <div className="input-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            autoFocus
            {...register('name', { required: 'El nombre es obligatorio' })}
          />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="price">Precio</label>
          <input
            type="number"
            step="0.01"
            id="price"
            {...register('price', { required: 'El precio es obligatorio' })}
          />
          {errors.price && <span className="error">{errors.price.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="description">Descripción</label>
          <textarea
            id="description"
            {...register('description', { required: 'La descripción es obligatoria' })}
          />
          {errors.description && <span className="error">{errors.description.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            {...register('category', { required: 'La categoría es obligatoria' })}
          >
            <option value="">Seleccione una categoría</option>
            <option value="dulce">Dulce</option>
            <option value="salado">Salado</option>
          </select>
          {errors.category && <span className="error">{errors.category.message}</span>}
        </div>

        <div className="input-group">
          <label htmlFor="image">Imagen</label>
          <input type="file" id="image" accept="image/*" {...register('image')} />
        </div>

        <button type="submit" className="button-admin">
          {editing ? 'Actualizar producto' : 'Agregar producto'}
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
            {loading ? (
              <tr>
                <td colSpan="8" className="text-center">Cargando productos...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="8" className="text-center error">{error}</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id?.substring(0, 6)}...</td>
                  <td>{product.name}</td>
                  <td>${product.price?.toFixed(2)}</td>
                  <td>
                    {product.description?.substring(0, 50)}
                    {product.description?.length > 50 ? '...' : ''}
                  </td>
                  <td>
                    <img
                      src={
                        product.image?.startsWith('http')
                          ? product.image
                          : `http://localhost:3000/uploads/products/${product.image}`
                      }
                      alt={product.name}
                      style={{ width: '50px' }}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/50';
                        e.target.alt = 'Imagen no disponible';
                      }}
                    />
                  </td>
                  <td>
                    {product.createdAt
                      ? new Date(product.createdAt).toLocaleDateString()
                      : 'N/A'}
                  </td>
                  <td>{product.category}</td>
                  <td>
                    <button onClick={() => editProduct(product)}>✏️</button>
                    <button onClick={() => deleteProduct(product._id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))
            )}
            {!loading && !error && products.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center">No hay productos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
