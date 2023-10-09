import React from "react";
// import "../hojas-de-estilo/valores_calcular.css"

export function ValoresCalcular({ nombre_de_pago, MontoPagar }) {
  return (
    <div className="flex justify-between mx-0 mt-2.5 mb-12 ">
      <div className="flex flex-col">
        <div className="text-white text-base ">
          {nombre_de_pago}
        </div>
        <div className="text-color-valor-fijo text-sm">
          / person
        </div>
      </div>
        <div className="text-color-Monto font-bold text-4xl">
          ${MontoPagar || "0.00"}
      </div>
    </div>
  );
}