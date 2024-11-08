/* eslint-disable react/prop-types */


import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router-dom"

function CardPizza({img, name, price, ingredients, id}) {
 const { sumaPizzas} = useContext(CartContext)
 const navigate = useNavigate();
 
 const handleCardClick = (id)=>{
  navigate(`/pizzas/${id}`);
} 
 
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
    

   <button onClick={()=>handleCardClick(id)}>🔎Ver más</button>
 
    <button onClick={()=>sumaPizzas(id)} className="btn btn-dark">Añadir 🛒</button>
  </div>
</div>
</>
  )
}


export default CardPizza