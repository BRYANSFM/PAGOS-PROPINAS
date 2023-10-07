import React from "react";
import "../hojas-de-estilo/Input_custom.css"

export function InputCustom({ value, onChange }) {

  return (
    <input
      style={{ textAlign: 'right' }}
      id="myInput2"
      type="number"
      name="number"
      placeholder='Custom'
      value={value}
      onChange={onChange}
    />
  );
}