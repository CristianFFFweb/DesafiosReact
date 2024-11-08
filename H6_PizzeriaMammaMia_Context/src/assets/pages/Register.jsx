import { useState } from "react";

function Register() {
  const [registro, setRegistro] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmaPassword, setconfirmaPassword] = useState("");
  
  const handleRegister = (event) => {
    event.preventDefault();  
   
if ((email.trim() === "") || (password.trim() === "")){
  alert("No puedes dejar campos vacíos")
}
else {
  if (password.length<6){
    alert("Password debe contener al menos 6 caracteres")
  }
  else{
    if (password !== confirmaPassword){
      alert( "Contraseñas deben ser iguales")
    }
    else {
  const nuevoRegistro = { email, password };
  setRegistro([...registro, nuevoRegistro]);}
}
}  

    
  };

  return (
    <div className="register">
      <div>
        <h2>Register</h2>
        <form className="formulario" onSubmit={handleRegister}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Ingrese su email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Crea tu password"
          />
          <input
            onChange={(e) => setconfirmaPassword(e.target.value)}
           type="password" 
           placeholder="Confirma tu password" />
          <button type="submit">Enviar</button>
        </form>

           </div>
    </div>
  );
}

export default Register;