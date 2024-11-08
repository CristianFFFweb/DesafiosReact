/* eslint-disable react/prop-types */



import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function CardPizza({img,name,price,ingredients}) {
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
    
    
    <Link to='/pizza/p001'>🔎Ver más</Link>
    <a href="#" className="btn btn-dark">Añadir 🛒</a>
  </div>
</div>
</>
  )
}


export default CardPizza