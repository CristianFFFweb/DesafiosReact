
export function separadorArray (arreglo) {
    let listaIngredientes="";
    for (let i=0; i<=arreglo.length-1; i++){
        
        if(i<arreglo.length-1){
            listaIngredientes+=arreglo[i]+", "
            
            
        }
        else {listaIngredientes+=arreglo[i]+"."}
    }
    return listaIngredientes;
}

    