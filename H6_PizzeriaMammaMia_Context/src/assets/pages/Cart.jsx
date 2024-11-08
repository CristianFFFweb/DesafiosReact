import { CartContext } from "../context/CartContext";
import { useContext } from "react";



function Cart() {
  const {  pizzas, eliminarPizzaId, sumaPizzas, totalPagar, restaPizzas } = useContext(CartContext);
  const cartTotal = totalPagar(pizzas);
 
 
  return (
    <>
      <div className="pizzaCarro"><h2>Carrito de Compras</h2></div>
                <div  >
                    {pizzas.map((index)=>
                    (<ul key={index.id}>
                    <li key={index.id} className="detalleCarro">
                    <div><img className="imgPizzas" src={index.img}></img></div>
                    <div>Pizza {index.name}</div>
                    <div>Pecio: ${index.price}</div> 
                    <div className="botones"><button onClick={()=>sumaPizzas(index.id)}>➕</button><button onClick={()=>restaPizzas(index.id)}>➖</button></div>
                    
                    <div>Cantidad: {index.count >= 1 ? index.count : eliminarPizzaId(pizzas,index.id)}</div>
                    <div><h3>Subtotal: ${index.count*index.price}</h3></div>
                    </li>

                </ul>))
                    }</div>
                    <div>
                      <h2>Total a Pagar:{cartTotal}</h2>
                    </div>
      

    </>

  )
}

export default Cart;