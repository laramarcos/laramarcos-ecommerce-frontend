import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Register from './pages/Register/Register';
import AdminProduct from './pages/AdminProduct/AdminProduct';
import SectionBanner from './components/SectionBanner/SectionBanner';
import SectionFooter from './components/SectionFooter/SectionFooter';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Login from './pages/Login/Login';
import AdminGuard from './shared/guard/AdminGuard';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify'; // Importa ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos CSS
import Swal from 'sweetalert2';


export default function App() {
  const [products, setProducts] = useState([]);

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

  return (
    <CartProvider>
      {/* ToastContainer debe estar en el nivel más alto de tu app */}
      <ToastContainer 
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <Header />
      <SectionBanner />
      
      <main className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/admin-product" 
            element={
              <AdminGuard>
                <AdminProduct/>
              </AdminGuard>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>

      <SectionFooter />
      <Footer />
    </CartProvider>
  );
}