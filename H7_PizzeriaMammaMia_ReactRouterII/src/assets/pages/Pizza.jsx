import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import separadorArray from "../utils/separadorArray"


function Pizza() {
    const [pizzaSola, setPizzaSola] = useState([null]);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/pizzas/${id}`)
            .then((response) => {
                setPizzaSola(response.data);
                setError(null);
            })
            .catch(() => {
                setPizzaSola(null);
                setError("No hay pizzas")
            });
    }, [id]);







    console.log(pizzaSola)

    return (
        <>
           
            <div className="mt-5 d-flex justify-content-center">
                {pizzaSola ? (
                    <div>
                        <h2>Pizza {pizzaSola.name}</h2>
                        <img src={pizzaSola.img} alt="Pizza" />
                        <p>{pizzaSola.desc}</p>
                        <h5>Sus ingredientes son: </h5>
                        {pizzaSola.ingredients && pizzaSola.ingredients.length > 0 ? (
                            separadorArray(pizzaSola.ingredients)
                        ) : (
                            <p>No hay ingredientes disponibles.</p>
                        )}
                        <h3>Precio: ${pizzaSola.price}</h3>
                    </div>
                ) : (<p> {error || "cargando pizzas... "}</p>)}
            </div>



        </>
    );

}

export default Pizza