import Header from "./Header"
import CardPizza from "./CardPizza"
import { pizzas } from "../utils/pizzas";

const  muestraCards = (pizzas)=> pizzas.map((contenido)=> (<CardPizza
  key={contenido.id}
  name={contenido.name}
  price={contenido.price}
  ingredients={contenido.ingredients}
  img={contenido.img}
  />))
 

function Home() {
  
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