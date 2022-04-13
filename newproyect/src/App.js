import React, {useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import PIntarDatos from "./components/PintarDatos";

function App() {

  const [nombrePersonaje,setNombrePersonaje] = useState('')

  useEffect(() => {
    console.log(localStorage.getItem("nombreApi"))
    if(localStorage.getItem("nombreApi")){
      setNombrePersonaje(JSON.parse(localStorage.getItem("nombreApi")))
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("nombreApi", JSON.stringify(nombrePersonaje))
  },[nombrePersonaje]);


 
  return (
    <div className="container">
      <h1>App</h1>
      <Formulario setNombrePersonaje={setNombrePersonaje} />
      <PIntarDatos nombrePersonaje={nombrePersonaje} />
    </div>
  );
}

export default App;
