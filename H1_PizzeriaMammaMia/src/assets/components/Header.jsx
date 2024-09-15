
// eslint-disable-next-line react/prop-types
function Header({Title,Descripcion}) {
  return (
    <div className="headerPizza">
    
    <h2> {Title}</h2>
    <h5>{Descripcion}</h5>
    <hr></hr>

    </div>
  )
}

export default Header;