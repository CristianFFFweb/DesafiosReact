import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
        <img src="src/assets/img/pizza404.jpg" />
        <Link to="/"><button type="button" className="btn btn-dark">Volver</button></Link>
    </div>
  )
}

export default NotFound