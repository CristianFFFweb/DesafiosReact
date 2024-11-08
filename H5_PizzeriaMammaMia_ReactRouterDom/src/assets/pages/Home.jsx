import Header from "../components/Header"
import CardPizza from "../components/CardPizza"
//import { pizzas } from "../utils/pizzas";
import axios from "axios";
import { useState, useEffect } from "react";

const  muestraCards = (pizzas)=> pizzas.map((contenido)=> (<CardPizza
  key={contenido.id}
  desc={contenido.desc}
  name={contenido.name}
  price={contenido.price}
  ingredients={contenido.ingredients}
  img={contenido.img}
  />))
 

function Home() {
  const [pizzas, setPizzas]=useState([]);
  useEffect(()=>{getPizzas()},[])
  const getPizzas = async () => {
try {
    const url = "http://localhost:5000/api/pizzas";    
    const response = await axios.get(url);
    const pizzas = response.data;
    setPizzas(pizzas)
    console.log(pizzas); } catch (error){
      alert("Problemas con el servidor  :" + error)
    } 
    
    
    };
  return (
    <>

      <Header
        Title="Pizzeria Mamma Mía"
        Descripcion="...las mejores pizzas que encontrarás!"
      />
      <div className="cardsMostrar">
              {muestraCards(pizzas)}
      </div>
    </>)
  
}
 export default Home;