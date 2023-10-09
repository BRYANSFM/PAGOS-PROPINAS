import React from 'react';
// import "../hojas-de-estilo/Reset.css";

export function Reset({manejarReset}) {
  return(
    <button 
      className='w-full h-11 bg-color-reset rounded-md mt-custom-120 flex justify-center items-center text-xl border-none text-color-reset2 cursor-pointer hover:bg-custom-celeste-claro hover:text-custom-menta-oscuro' 
      onClick={manejarReset}>
      RESET
    </button>
  ); 
}