import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import {v4 as uuid} from "uuid";

const Formulario = ({gastos,setGastos,setRestante,restante}) => {
    const [nombre,setNombre] = useState('');
    const [cantidad,setCantidad] = useState(0);
    const [error,setError]= useState(false);

    // Cuando el usuario genera un gastos
    const agregarGasto = e =>{
        e.preventDefault();
    // Validar
        if(cantidad<1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true);
            return;
        }
            setError(false);
    // construir gastos
    const nuevoGasto = {
        nombre : nombre,
        cantidad : cantidad,
        id: uuid() 
    }
    // pasar el gasto al componente inicial
    setGastos([
        ...gastos,
        nuevoGasto
    ])

    // Restarle al presupuesto
    let resta = restante - cantidad
    setRestante(resta)

    // resetear el form
    setNombre('')
    setCantidad(0)
}

    return (  
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" /> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                    <input
                        type="text"
                        className="u-full-width"
                        placeholder="Ej.Transporte"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Ej.300"
                        value={cantidad}
                        onChange={e => setCantidad(parseInt(e.target.value,10))}
                    />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}
 Formulario.prototype ={
    gastos: PropTypes.array.isRequired,
    setGastos:PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    restante:PropTypes.number.isRequired,
 }
export default Formulario;
