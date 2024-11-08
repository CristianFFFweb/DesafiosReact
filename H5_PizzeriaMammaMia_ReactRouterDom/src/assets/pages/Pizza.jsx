import axios from "axios"; 
import { useState, useEffect } from "react";


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
        <h5>Sus ingredientes son: </h5>
        {/* <ul>
                {pizza.ingredients.map((ingrediente) => (
                    <li key={pizza.id}>{ingrediente}</li>
                ))}
         </ul> */}{/* <----- eso funciona solo una vez luego no renderiza no se por que,
         asi que mejor lo comente para poder mostrar la pagina Pizza, solo faltaran los ingredientes :( */}
         
        <h3>Precio: ${pizza.price}</h3>
       
        </div>


    </>

    
  )
}

export default Pizza