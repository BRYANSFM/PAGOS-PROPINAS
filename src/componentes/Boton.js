import React from "react";
// import "../hojas-de-estilo/Boton.css"

export function Boton({ amount, onClick, selectedTip }) {
  return (
    <button
      className=" m-custom-5 box-border p-10 text-center bg-custom-menta-oscuro text-white border-none cursor-pointer rounded-md
      font-bold text-2xl flex-1 select-none hover:bg-custom-celeste-claro hover:text-custom-menta-oscuro"
      onClick={onClick}
      style={{ outline: selectedTip === amount ? '3px solid red' : 'inherit' }} 
    >
      {amount}%
    </button>
  )
}

