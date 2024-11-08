

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Navbar from './assets/components/Navbar';
//import Home from './assets/components/Home';
import Footer from './assets/components/Footer';
import Pizza from './assets/components/Pizza';
//import Cart from './assets/components/Cart';
//import Register from './assets/components/Register';
//import Login from './assets/components/Login';


function App() {
  
  return (
    <>
     <Navbar/>
     {/* <Home/> */}
     <Pizza/>
     {/* <Register/> */}
     {/* <Login /> */}
    {/*  <Cart/> */}
     <Footer
      texto= "© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados"
     />
      
    </>
  )
}

export default App