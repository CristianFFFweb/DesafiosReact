import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext.jsx';
function Navbar() {
    const { totalPagar, pizzas } =useContext(CartContext)
    const cartTotal = totalPagar(pizzas)
    console.log(cartTotal)
    
    return (

        <div>

            <nav className="barraNav">
                <p><b>Pizzeria Mamma Mía!</b></p>
                
                <div> <Link to='/'><button type="button" className="btn btn-dark">🍕 Home</button></Link>
                    {/* <button type="button" className="btn btn-dark">{token ? "🔓 Profile" : "🔐 Register"}</button>
                    <button type="button" className="btn btn-dark">{token ? "🔓 Logout" : "🔐 Login"}</button> */}
                    <Link to='/register'><button type="button" className="btn btn-dark">🔐 Register</button></Link>
                    <Link to='/login'><button type="button" className="btn btn-dark">🔐 Login</button></Link>
                    <Link to='/profile'><button type="button" className="btn btn-dark">👾 Profile</button></Link>
                </div>




                <Link to='/Cart'><p>🛒<b>{cartTotal}</b></p></Link>

            </nav>

        </div>
    )
}

export default Navbar
