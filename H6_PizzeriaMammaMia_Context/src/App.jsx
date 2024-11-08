

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Routes , Route } from "react-router-dom";

import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import Register from './assets/pages/Register';
import Login from './assets/pages/Login'
import Cart from './assets/pages/Cart'
import Pizza from './assets/pages/Pizza'
import NotFound from './assets/pages/NotFound'
import Profile from './assets/pages/Profile'

import Footer from './assets/components/Footer'
import { CartProvider } from './assets/context/CartContext';





function App() {
  
  return (
    <><CartProvider >
     <Navbar/>
     
     <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/pizza/p001" element= {<Pizza/>}/>
      <Route path="/404" element={<NotFound/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/profile" element={<Profile/>}/>
      


     </Routes>
     </CartProvider>
     <Footer
      texto= "© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados"
     />
     
    </>
  )
}

export default App
