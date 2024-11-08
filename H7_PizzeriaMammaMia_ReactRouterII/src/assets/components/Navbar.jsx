import { useContext } from 'react';
import { Link, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
import { UserContext } from '../context/UserContext.jsx';
import Home from '../pages/Home.jsx';

function Navbar() {
    const { totalPagar, pizzas } =useContext(CartContext)
    const { token, logout} = useContext(UserContext)
    const cartTotal = totalPagar(pizzas)
    console.log(cartTotal)
 
    const setActiveClass = ({ isActive }) => (isActive ? "btn btn-success" : "btn btn-dark");
    return (

        <div>

            <nav className="barraNav">
                <p><b>Pizzeria Mamma Mía!</b></p>

                <div>
                
                <NavLink to='/' className={setActiveClass}><button type="button" className={setActiveClass}>🍕 Home</button></NavLink>
                <NavLink to={token?'/profile':'/register'} className={setActiveClass}>
                    <button type="button" className="btn btn-dark">
                        {token ? "🔓 Profile" : "🔐 Register"}
                    </button>
                </NavLink>
               
                 <button type="button" className="btn btn-dark" onClick={()=>logout()}>{token ? "🔓 Logout" : "🔐 Login"}</button>
                
                </div>
                
                {/* <div> <NavLink to='/' className={setActiveClass}><button type="button" className={setActiveClass}>🍕 Home</button></NavLink>
                    <button type="button" className="btn btn-dark">{token===true ? "🔓 Profile" : "🔐 Register"}</button>
                    <button type="button" className="btn btn-dark">{token ? "🔓 Logout" : "🔐 Login"}</button>
                    <NavLink to='/register' className={setActiveClass}><button type="button" className={setActiveClass}>🔐 Register</button></NavLink>
                    <NavLink to='/login' className={setActiveClass}><button type="button" className={setActiveClass}>🔐 Login</button></NavLink>
                    <NavLink to='/profile' className={setActiveClass}><button type="button" className={setActiveClass}>👾 Profile</button></NavLink>
                </div> */}




                <Link to='/Cart'><p>Total: 🛒<b>{cartTotal}</b></p></Link>

            </nav>
            <Routes>
                    <Route path="/profile" element={token?<Home/>:<Navigate to="/login"/>}/>
            </Routes>

        </div>
    )
}

export default Navbar
