import React from 'react';
// import "../hojas-de-estilo/Input.css";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";

export function Input({ label, validacion_icono, onChange, ValorValue, labelError = "", identificadorInput }) {

  return (
    <div class="relative w-full">
      <span class="absolute left-custom-15 top-custom-73% -translate-y-1/2 text-gris-claro ">
        {validacion_icono ? <BsFillPersonFill /> : "$"}
      </span>
      <div className='flex flex-col'>
        <div className='flex justify-between'>
          <label className='text-color-label mb-2' for="label">{label}</label>
          <label className='text-color-label-Error mb-2 ' for="labelError">{labelError}</label>
        </div>
        <input
          style={{ textAlign: 'right' }}
          className={labelError && identificadorInput ? "p-2.5 h-5 flex-1 bg-white outline outline-4 outline-color-label-Error text-xl font-bold rounded-md" : "p-2.5 h-5 flex-1 bg-gris-fondo-input  rounded-md border-none text-xl text-custom-menta-oscuro2 font-bold focus:outline focus:outline-4 focus:outline-menta-claro "}
          type="number"
          name="number"
          placeholder='0'
          value={ValorValue}
          onChange={onChange}
        />
      </div>
    </div>
  );
}