
import { createContext } from "react";
//import axios from "axios";
import { useState, useEffect } from "react";

export const CartContext = createContext();



// eslint-disable-next-line react/prop-types
export const CartProvider = ( { children } ) => {
    const [pizzas, setPizzas]=useState([]);
    
    
   
    
   

    function eliminarPizzaId(array, idAEliminar) {
      setPizzas( array.filter(elemento => elemento.id !== idAEliminar));
    }
  
    function totalPagar(cart) {
      let total = 0;
    
      if (Array.isArray(cart) && cart.length > 0) {
        cart.forEach((pizza) => {
          if (pizza.count && pizza.price) {
            total += pizza.count * pizza.price;
          }
        });
      }
    
      return total;
    }
   /* function totalPagar(cart) {
      
     let total=0;
      cart.forEach((pizza) => {
        total += pizza.count * pizza.price;
      });
     return total;
    
    }
     */
  
           function sumaPizzas(idPizza) {
          setPizzas(
            pizzas.map((pizza) => {
              if (pizza.id === idPizza) {
                return {
                  ...pizza,
                  count: (pizza.count || 0) + 1, 
                };
              } else {
                return pizza;
              }
            })
          );
        }
  
    const restaPizzas = (idPizza) => {
      setPizzas(
        pizzas.map((pizza) => {
          if (pizza.id === idPizza) {
  
            return { ...pizza, count: pizza.count - 1 }
          }
          else {
            return pizza;
          }
        }
        ));
    };
  
  
  
  
  
  

    useEffect(() => {
      const fetchPizzas = async () => {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data);
        console.log(data)
      };
  
      fetchPizzas();
    },[]);
    return (
        <CartContext.Provider value={ {  pizzas, setPizzas, eliminarPizzaId, sumaPizzas, restaPizzas, totalPagar }}>
            {children}
        </CartContext.Provider>
    )  
}
