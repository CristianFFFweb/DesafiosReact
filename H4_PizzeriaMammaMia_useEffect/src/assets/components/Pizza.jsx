import axios from "axios"; 
import { useState, useEffect } from "react";
import separadorArray from "../utils/separadorArray";
function Pizza() {
    const [ pizza, setPizza] = useState([]);
    useEffect(()=>{getPizza()},[]);

    const getPizza = async ()=>{
        try {
            const url="http://localhost:5000/api/pizzas/p001"
            const response = await axios.get(url);
            const pizza = response.data;
            setPizza(pizza)
        }catch (error){alert ("Problema :" + error)}
    }
  return (
    <>

        <div className="pizzaSola">
        <h2>Pizza {pizza.name}</h2>
        <img src={pizza.img} alt="Pizza Napolitana"></img>
        <p>{pizza.desc}</p>
        <h5>Sus ingredientes son: {separadorArray(pizza.ingredients)}</h5>
        <h3>Precio: ${pizza.price}</h3>
        <button>Añadir al Carro 🛒</button>
        </div>


    </>
    
  )
}

export default Pizza