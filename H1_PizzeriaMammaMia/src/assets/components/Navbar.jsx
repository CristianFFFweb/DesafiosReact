import {LocalNumero} from '../../assets/utils/formateaNumero.js'
function Navbar() {
    const total = 25000;
    const token = false;
    return (

        <div>

            <nav className="barraNav">
                <p><b>Pizzeria Mamma Mía!</b></p>
                
                <div> <button type="button" className="btn btn-dark">🍕 Home</button>
                    <button type="button" className="btn btn-dark">{token ? "🔓 Profile" : "🔐 Register"}</button>
                    <button type="button" className="btn btn-dark">{token ? "🔓 Logout" : "🔐 Login"}</button>
                </div>




                <p>🛒<b>{LocalNumero(total)}</b></p>

            </nav>

        </div>
    )
}

export default Navbar
