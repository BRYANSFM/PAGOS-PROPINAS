import React from "react";
import "../hojas-de-estilo/valores_calcular.css"
import { useState } from "react";

export function ValoresCalcular({nombre_de_pago, MontoPagar }) {
  return(
    <div className="contenedor_montos">
      <div className="contenedor_montos_izquierda">
        <div className="nombre_de_pago">
          {nombre_de_pago}
        </div>
        <div className="valor_Fijo">
          / person
        </div>
      </div>
      <div className="contenedor_montos_derecha">
        <div className="Monto">
          ${MontoPagar>0 ?  MontoPagar : "0.00"}
          {console.log(MontoPagar)}
        </div>
      </div>
    </div>      
  );
}