import React from 'react';
import "../hojas-de-estilo/Reset.css"

export function Reset({manejarReset}) {
  return(
    <button className='Reset' onClick={manejarReset}>
      RESET
    </button>
  ); 
}