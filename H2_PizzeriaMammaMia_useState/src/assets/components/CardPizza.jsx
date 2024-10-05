
import { separadorArray } from "../utils/separadorArray";
// eslint-disable-next-line react/prop-types
function CardPizza({img,name,price,ingredients}) {
  return (
    <>
<div className="card">
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Pizza {name}</h5>
    
    <hr></hr>
    <h3 className="card-text">Precio: ${price}</h3>
    <hr></hr>
    <p className="card-text"><b>Ingredientes:</b>{separadorArray(ingredients)}</p>
    
    
    <a href="#" className="btn btn-light">🔎Ver más</a>
    <a href="#" className="btn btn-dark">Añadir 🛒</a>
  </div>
</div>
</>
  )
}


export default CardPizza