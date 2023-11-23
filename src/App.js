// import './App.css';
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
    <div className="w-full h-screen pt-2.5 flex flex-wrap justify-center items-center flex-col bg-mi-color-menta ">
      
      <div className='flex flex-wrap justify-center items-center text-gris mb-20 font-bold text-3xl w-28 h-20'>
        S  P  L  I  T  T  E R
      </div>
      <div className='w-760 h-[430px] p-27 bg-white rounded-3xl shadow-custom flex flex-row'>
        <div className='mr-5 w-2/4 '>
          <Input
            style={{}}
            label="Bill"
            validacion_icono={false}
            onChange={(e) => setBill(parseInt(e.currentTarget.value))}
            ValorValue={bill}
            identificadorInput={false}
          />
          <div className='text-otro-gris mb-custom-5 mt-custom-30'>
            Select Tip %
          </div>
          <div className='w-full h-custom-120'>
            <div className='flex items-center justify-center w-full'>
              <Boton
                selectedTip={selectedTip}
                amount={5}
                onClick={() => setSelectedTip(5)}
              />
              <Boton
                selectedTip={selectedTip}
                amount={10}
                onClick={() => setSelectedTip(10)}
              />
              <Boton
                selectedTip={selectedTip}
                amount={15}
                onClick={() => setSelectedTip(15)}
              />
            </div>
            <div className='flex items-center justify-center w-full'>
              <Boton
                selectedTip={selectedTip}
                amount={25}
                onClick={() => setSelectedTip(25)}
              />
              <Boton
                selectedTip={selectedTip}
                amount={50}
                onClick={() => setSelectedTip(50)}
              />
              <InputCustom
                onChange={e => setSelectedTip(parseInt(e.currentTarget.value))}
                value={selectedTip}
              />
            </div>
            <div className='h-5 w-full bg-white select-none text-white '>
              hola
            </div>

            <Input
              label="Number of People"
              validacion_icono={true}
              onChange={(e) => setNumberPeople(parseInt(e.currentTarget.value))}
              ValorValue={numberPeople}
              // labelError={CantidadPersonas > 0 || !CantidadPersonas ? "" : "Can't be zero"}
              identificadorInput={true}
              labelError={numberPeople ===0  && "can't be zero"}
            />
          </div>
        </div>
        <div className='ml-5 bg-custom-menta-oscuro rounded-2xl p-custom-30 pt-custom-35 w-2/4 '>
          <ValoresCalcular
            nombre_de_pago="Tip Amount"
            // MontoPagar={CantidadPersonas >0 ? PorcientoPersona : 0}
            MontoPagar={tip}
          />
          <ValoresCalcular
            nombre_de_pago="Total"
            MontoPagar={tipDividedByPerson}
          />
          <Reset manejarReset={reset} />
        </div>
      </div>
    </div>
  );
}

export default App;
