/* eslint-disable react/prop-types */


import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"


function CardPizza({img, name, price, ingredients, id}) {
 const { sumaPizzas} = useContext(CartContext)
 
  return (
   
    <>
<div className="card tarjeta">
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Pizza {name}</h5>
    <hr></hr>
    <h3 className="card-text">Precio: ${price}</h3>
    <hr></hr>
    <p className="card-text">
      <b>Ingredientes:
      </b>
      
      <ul>{ingredients.map((ing) => (<li key={ing.id}>{ing}</li>))}</ul> 
      
    </p>
    
{/*     sumaPizzas(id)
 */}    <Link to='/pizza/p001'>🔎Ver más</Link>
 
    <button onClick={()=>sumaPizzas(id)} className="btn btn-dark">Añadir 🛒</button>
  </div>
</div>
</>
  )
}


export default CardPizza