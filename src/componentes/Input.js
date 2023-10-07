import React from 'react';
import "../hojas-de-estilo/Input.css"
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";

export function Input({ label, validacion_icono, onChange, ValorValue, labelError = "", identificadorInput }) {

  return (
    <div class="input-container">
      <span class="currency-symbol">
        {validacion_icono ? <BsFillPersonFill /> : "$"}
      </span>
      <div className='Input_completo'>
        <div className='ContenedorLabel'>
          <label className='label' for="label">{label}</label>
          <label className='labelError' for="labelError">{labelError}</label>
        </div>
        <input
          style={{ textAlign: 'right' }}
          id={labelError && identificadorInput ? "myInputError" : "myInput"}
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