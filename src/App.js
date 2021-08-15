import React, { useState} from 'react'
import Pregunta from './components/Pregunta';
import Contenedor from './components/Contenedor';


function App() {

  // Definir el State que almacena el presupuesto
const [ presupuesto, setPresupuesto] = useState (0);
const [ restante, setRestante] = useState(0);
const [ mostrarpregunta,setActualizarPregunta] = useState(true);


  return (
    <div className="container">
      <header>
          <h2>Presupuesto de Gastos Semanales</h2>
          <div className="contenido-principal contenido">
            {mostrarpregunta ? 
            (          
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setActualizarPregunta={setActualizarPregunta}
              />
             ) : 
             (         
             <Contenedor
                presupuesto={presupuesto}
                restante={restante}
                setRestante={setRestante}
              />
              )
            }   
            </div>
      </header>
    </div>
  );
}

export default App;
