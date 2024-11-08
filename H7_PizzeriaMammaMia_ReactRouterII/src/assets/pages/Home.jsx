import Header from "../components/Header"
import CardPizza from "../components/CardPizza"

import { useContext } from "react";
import { CartContext } from "../context/CartContext";


 

function Home() {

const { pizzasHome } = useContext(CartContext); 






const  muestraCards = (pizzasHome)=> pizzasHome.map((contenido)=> (<CardPizza
  key={contenido.id}
  desc={contenido.desc}
  name={contenido.name}
  price={contenido.price}
  ingredients={contenido.ingredients}
  img={contenido.img}
  id={contenido.id}
  />))
   
    return (
    <>

      <Header
        Title="Pizzeria Mamma Mía"
        Descripcion="...las mejores pizzas que encontrarás!"
      />
      <div className="cardsMostrar">
              {muestraCards(pizzasHome)}
      </div>
    </>)
  
}
 export default Home; 

 