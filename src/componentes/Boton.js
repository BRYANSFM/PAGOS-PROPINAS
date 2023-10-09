import React from "react";
import "../hojas-de-estilo/Boton.css"

export function Boton({ amount, onClick, selectedTip }) {
  return (
    <button
      className="BotonPorciento"
      onClick={onClick}
      style={{ outline: selectedTip === amount ? '3px solid red' : 'inherit' }} /*PRUEBA con GIT */
    >
      {amount}%
    </button>
  )
}

