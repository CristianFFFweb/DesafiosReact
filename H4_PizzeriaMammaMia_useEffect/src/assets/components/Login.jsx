import { useState } from "react";

function Login() {
    const [emailLogin,setEmailLogin ]=useState("");
    const [ passLogin, setPassLogin ]=useState("");
console.log(emailLogin + " " +passLogin)
    const handleLogin = (event) => {
        event.preventDefault();  
       
    if ((emailLogin.trim() === "") || (passLogin.trim() === "")){
      alert("No puedes dejar campos vacíos")
    }
    else {
      if (passLogin.length<6){
        alert("Password debe contener al menos 6 caracteres")
      }
      else{
             alert("Ingresaste correctamente")}
    }
    }  
       
  return (<>
    
    <div className="register">
      <div>
        <h2>Login</h2>
        <form className="formulario" onSubmit={handleLogin}>
          <input
            onChange={(e) => setEmailLogin(e.target.value)}
            type="email"
            placeholder="Ingrese su email"
          />
          <input
            onChange={(e) => setPassLogin(e.target.value)}
            type="password"
            placeholder="Ingresa tu password"
          />
          
          <button type="submit">Ingresar</button>
        </form>

           </div>
    </div>
    
    </>
  )
        
      };
    
    
            
    
         
    
 


export default Login