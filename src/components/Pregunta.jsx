import React, { Fragment,useState } from 'react'
import PropTypes from 'prop-types';
import Error from './Error'

const Pregunta = ( { setPresupuesto, setRestante,setActualizarPregunta} ) => {
    
    // Definir State el monto que agregas en leer presupuesto
    const [ cantidad, guardarCantidad ] = useState(0);
    const [error, setError] = useState(false);


    // Definir la funcion que lee el presupuesto

    const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10));
    }

    // Sumit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault(parseInt(e.target.value, 10));
    
    
    // Validar
    if(cantidad < 1 || isNaN( cantidad ) ) {
        setError(true);
        return;
    }
         //Si se pasa la validacion
        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setActualizarPregunta(false);
    } 

    return (  
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error mensaje="El Presupuesto es Incorrecto"/>: null}

            <form
                onSubmit={agregarPresupuesto}
            >
                 <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                 />

                 <input
                    type= "submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                 />
            </form>
        </Fragment>
);
}

Pregunta.prototypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setActualizarPregunta: PropTypes.func.isRequired
}
 
export default Pregunta;