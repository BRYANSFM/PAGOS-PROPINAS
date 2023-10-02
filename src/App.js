import './App.css';
import { Input } from "./componentes/Input";
import { Boton } from "./componentes/Boton";
import { Input_custom } from "./componentes/Input_custom";
import { ValoresCalcular } from "./componentes/ValoresCalcular";
import { Reset } from "./componentes/Reset";
import { useState } from "react";

function App() {
  
  const[Total, setTotal] = useState('');
  const[PorcientoTotal, setPorcientoTotal] = useState(0);
  const[PorcientoPersona, setPorcientoPersona] = useState(0);
  const[CantidadPersonas, setCantidadPersonas] = useState('');
  const[PorcientoCustom, setPorcientoCustom ] = useState('');
  const[EventoBoton, setEventoBoton ] = useState(false);

  const ManejarCuenta = (valor) => {
    setTotal(valor);
  };

  const Porciento = (valor) => {
    setPorcientoTotal((Total*valor)/100);
    setEventoBoton(true);
    // setPorcientoTotal((parseFloat(PorcientoTotal)).toFixed(2));
    // setPorcientoTotal((PorcientoTotal.toFixed(2)));

  };
  const InputPorciento = (valor) => {
    setPorcientoTotal((Total*valor)/100);
    setPorcientoCustom(valor);
  };
  const OtraCuenta = () => {
    setPorcientoTotal(0);
    setPorcientoPersona(0);
    setTotal('');
    setCantidadPersonas('');
    setPorcientoCustom('');
  };
  const ManejarCuentaPersona = (valor) =>{
    setPorcientoPersona(PorcientoTotal/valor);
    // setPorcientoPersona((parseFloat(PorcientoPersona)).toFixed(2));
    // setPorcientoPersona((PorcientoPersona.toFixed(2)));

    setCantidadPersonas(valor);
  }
  return (
    <div className="App">
      <div className='Encabezado'>
      S  P  L  I  T  T  E R
      </div>
      <div className='contenedor-pagos'>
        <div className='contenedor-izquierda'>
          
          <Input 
            style = {{}}
            label = "Bill"
            validacion_icono = {false}
            Cuenta = {ManejarCuenta}
            ValorValue = {Total}
            identificadorInput = {false}
          />
          <div className='label2'>
            Select Tip %
          </div>
          <div className='contenedor-botones'>
            <div className='fila'>
              <Boton
              //  disabled={!Total} 
               manejarPorciento = {Porciento}>5</Boton>
              <Boton 
                // disabled={!Total}  
                manejarPorciento = {Porciento} >10</Boton>
              <Boton manejarPorciento = {Porciento} >15</Boton>
            </div>
            <div className='fila'>
              <Boton 
                // disabled={!Total} 
                manejarPorciento = {Porciento} >25</Boton>
              <Boton 
                // disabled={!Total} 
                manejarPorciento = {Porciento} >50</Boton>
              <Input_custom
                manejarPorciento = {InputPorciento}
                ValorValue = {PorcientoCustom}/>
            </div>
            <div className='espacio'>
              holas
            </div>
            <Input 
              label = "Number of People"
              validacion_icono = {true}
              Cuenta = {ManejarCuentaPersona}
              ValorValue = {CantidadPersonas}
              labelError = {CantidadPersonas > 0 || !CantidadPersonas ? "" : "Can't be zero" }
              identificadorInput = {true}

            />
          </div>
        </div>
        <div className='contenedor-derecha'>
          <ValoresCalcular
            nombre_de_pago = "Tip Amount"
            // MontoPagar={CantidadPersonas >0 ? PorcientoPersona : 0}
            MontoPagar={
              Total && CantidadPersonas && (EventoBoton || PorcientoCustom) && CantidadPersonas > 0 ? PorcientoPersona : 0
            }
          />
          <ValoresCalcular
            nombre_de_pago = "Total"
            MontoPagar = {
              Total && CantidadPersonas && (EventoBoton || PorcientoCustom) && CantidadPersonas > 0 ? PorcientoTotal : 0
            }
          />
          <Reset manejarReset = {OtraCuenta} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
