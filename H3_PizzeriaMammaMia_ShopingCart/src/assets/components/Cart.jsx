import { pizzaCart } from "../utils/pizzas";
import { useState } from "react";

function Cart() {
  const [cart, setCart] = useState(pizzaCart);
  
 
  ;
  
  function eliminarPizzaId(array, idAEliminar) {
    setCart( array.filter(elemento => elemento.id !== idAEliminar));
  }

 function totalPagar(cart) {
    let total = 0; 
  
    cart.forEach((pizza) => {
      total += pizza.count * pizza.price;
    });
  
    
    return total;
  }

  function sumaPizzas(idPizza) {
    setCart(
      cart.map((pizza) => {
        if (pizza.id === idPizza) {
          return (
            { ...pizza, count: pizza.count + 1 });
        }
        else {
          return pizza;
        }
      }
      ));

  }

  const restaPizzas = (idPizza) => {
    setCart(
      cart.map((pizza) => {
        if (pizza.id === idPizza) {

          return { ...pizza, count: pizza.count - 1 }
        }
        else {
          return pizza;
        }
      }
      ));
  };






  return (
    <>
      <div className="pizzaCarro"><h2>Carrito de Compras</h2></div>
                <div  >
                    {cart.map((index)=>
                    (<ul key={index.id}>
                    <li key={index.id} className="detalleCarro">
                    <div><img className="imgPizzas" src={index.img}></img></div>
                    <div>Pizza {index.name}</div>
                    <div>Pecio: ${index.price}</div> 
                    <div className="botones"><button onClick={()=>sumaPizzas(index.id)}>➕</button><button onClick={()=>restaPizzas(index.id)}>➖</button></div>
                    
                    <div>Cantidad: {index.count >= 1 ? index.count : eliminarPizzaId(cart,index.id)}</div>
                    <div><h3>Subtotal: ${index.count*index.price}</h3></div>
                    </li>

                </ul>))
                    }</div>
                    <div>
                      <h2>Total a Pagar:{totalPagar(cart)}</h2>
                    </div>
      

    </>

  )
}

export default Cart;