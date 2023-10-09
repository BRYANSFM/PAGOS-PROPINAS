import React from "react";
// import "../hojas-de-estilo/Input_custom.css"

export function InputCustom({ value, onChange }) {

  return (
    <input
      style={{ textAlign: 'right' }}
      className="h-custom-40 w-24 bg-white outline-none text-xl text-custom-menta-oscuro2 font-bold rounded-md ml-2 mr-custom-5 focus:outline focus:outline-menta-claro focus:outline-4 placeholder:text-center placeholder:text-xl
      "
      type="number"
      name="number"
      placeholder='Custom'
      value={value}
      onChange={onChange}
    />
  );
}