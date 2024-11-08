import {LocalNumero} from '../../assets/utils/formateaNumero.js'
import { Link } from 'react-router-dom';
function Navbar() {
    const total = 25000;
    /* const token = false; */
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




                <Link to='/Cart'><p>🛒<b>{LocalNumero(total)}</b></p></Link>

            </nav>

        </div>
    )
}

export default Navbar
