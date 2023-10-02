import React from "react";
import "../hojas-de-estilo/Boton.css"

export function Boton(props) {
  return(
    <button 
      className="BotonPorciento"
      onClick={ () =>
      // props.disabled ===false  && 
       props.manejarPorciento(props.children)}>
      {props.children}%
    </button>
  )
}

