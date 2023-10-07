import React from "react";
import "../hojas-de-estilo/Boton.css"

export function Boton({ amount, onClick, selectedTip }) {
  return (
    <button
      className="BotonPorciento"
      onClick={onClick}
      style={{ border: selectedTip === amount ? '3px solid red' : 'inherit' }}
    >
      {amount}%
    </button>
  )
}

