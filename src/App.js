import './App.css';
import { Input } from "./componentes/Input";
import { Boton } from "./componentes/Boton";
import { InputCustom } from "./componentes/Input_custom";
import { ValoresCalcular } from "./componentes/ValoresCalcular";
import { Reset } from "./componentes/Reset";
import { useState } from "react";

const formatNumber = (number) => parseFloat(number.toFixed(2))

function App() {
  const [bill, setBill] = useState('');
  const [selectedTip, setSelectedTip] = useState('');
  const [numberPeople, setNumberPeople] = useState('');

  const tip = bill ? formatNumber(bill * (selectedTip / 100)) : 0;
  const tipDividedByPerson = tip && numberPeople ? formatNumber(tip / numberPeople) : 0;

  function reset() {
    setBill('');
    setSelectedTip('');
    setNumberPeople('');
  }

  console.log({ selectedTip })

  return (
    <div className="App">
      <div className='Encabezado'>
        S  P  L  I  T  T  E R
      </div>
      <div className='contenedor-pagos'>
        <div className='contenedor-izquierda'>
          <Input
            style={{}}
            label="Bill"
            validacion_icono={false}
            onChange={(e) => setBill(parseInt(e.currentTarget.value))}
            ValorValue={bill}
            identificadorInput={false}
          />
          <div className='label2'>
            Select Tip %
          </div>
          <div className='contenedor-botones'>
            <div className='fila'>
              <Boton
                selectedTip={selectedTip}
                amount={5}
                onClick={() => setSelectedTip(5)}
              >5</Boton>
              <Boton
                selectedTip={selectedTip}
                amount={10}
                onClick={() => setSelectedTip(10)}
              >10</Boton>
              <Boton
                selectedTip={selectedTip}
                amount={15}
                onClick={() => setSelectedTip(15)}
              >15</Boton>
            </div>
            <div className='fila'>
              <Boton
                selectedTip={selectedTip}
                amount={25}
                onClick={() => setSelectedTip(25)}
              >25</Boton>
              <Boton
                selectedTip={selectedTip}
                amount={50}
                onClick={() => setSelectedTip(50)}
              >50</Boton>
              <InputCustom
                onChange={e => setSelectedTip(parseInt(e.currentTarget.value))}
                value={selectedTip}
              />
            </div>
            <div className='espacio'>
              holas
            </div>

            <Input
              label="Number of People"
              validacion_icono={true}
              onChange={(e) => setNumberPeople(parseInt(e.currentTarget.value))}
              ValorValue={numberPeople}
              // labelError={numberPeople > 0 || !numberPeople ? "" : "Can't be zero"}
              identificadorInput={true}

            />
          </div>
        </div>
        <div className='contenedor-derecha'>
          <ValoresCalcular
            nombre_de_pago="Tip Amount"
            // MontoPagar={CantidadPersonas >0 ? PorcientoPersona : 0}
            MontoPagar={tip}
          />
          <ValoresCalcular
            nombre_de_pago="Total"
            MontoPagar={
              tipDividedByPerson
            }

          />
          <Reset manejarReset={reset} />
        </div>
      </div>

    </div>
  );
}

export default App;
