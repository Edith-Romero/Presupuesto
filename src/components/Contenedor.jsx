import React, {useState} from 'react';
import Formulario from './Formulario';
import PropTypes from 'prop-types';
import Listado from './Listados';
import ControlPreseupuesto from './ControlPresupuesto';

const Contenedor = ({presupuesto,restante,setRestante}) => {
    const [gastos,setGastos]= useState([]);

    return (
        <div className="container">
            <div className="contenido-principal contenido">
            <div>
            <div className="one-half column">
                <Formulario
                    setGastos={setGastos}
                    gastos={gastos}
                    setRestante={setRestante}
                    restante={restante}
                />
                </div>
                <div className="one-half column">
                <Listado
                    gastos={gastos}
                />
                <ControlPreseupuesto
                    restante={restante}
                    presupuesto={presupuesto}/>
                </div>
            </div>
            </div>
        </div>         
    )
}

Contenedor.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired,
    setRestante:PropTypes.func.isRequired
}
export default Contenedor;