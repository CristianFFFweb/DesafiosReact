import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";



function Cart() {
  const {  pizzas, sumaPizzas, totalPagar, restaPizzas } = useContext(CartContext);
  const { token } =useContext(UserContext)
  const cartTotal = totalPagar(pizzas);
 
 
  return (
    <>
      <div className="pizzaCarro"><h2>Carrito de Compras</h2></div>
                <div  >
                    {pizzas.map((index)=>
                    index.count>0 ? 
                    (<ul key={index.id}>
                    <li key={index.id} className="detalleCarro">
                    <div><img className="imgPizzas" src={index.img}></img></div>
                    <div>Pizza {index.name}</div>
                    <div>Pecio: ${index.price}</div> 
                    <div className="botones"><button onClick={()=>sumaPizzas(index.id)}>➕</button><button onClick={()=>restaPizzas(index.id)}>➖</button></div>
                    
{/*                   <div>Cantidad: {index.count >= 1 ? index.count : eliminarPizzaId(pizzas,index.id)}</div>
 */}                  <div>Cantidad: {index.count}</div>
                    <div><h3>Subtotal: ${index.count*index.price}</h3></div>
                    </li>

                </ul>):null)
                    }</div>
                    <div>
                      <h2>Total:{cartTotal}</h2>
                      <button>{token?"💰Pagar":null}</button>
                    </div>
      

    </>

  )
}

export default Cart;