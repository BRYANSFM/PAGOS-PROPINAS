import React from "react";
import "../hojas-de-estilo/Input_custom.css"

export function Input_custom({ manejarPorciento, ValorValue }) {
  const PorcientoCustom = (e) =>{
    manejarPorciento(e.target.value);
  };
  return(
    <input
    id="myInput2"
    type="number"
    name="number"
    placeholder='Custom'
    value={ValorValue}
    onChange={PorcientoCustom}
    />
  );
}