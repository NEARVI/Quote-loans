import React, { useState } from 'react';
import { calcularTotal } from '../helpers';

const Formulario = ({ cantidad, setCantidad, plazo, setPlazo, setTotal, setNombre, setInteres }) => {
    const [error, setError] = useState(false);
    const [nombre, setLocalNombre] = useState('');
    const [interes, setLocalInteres] = useState('');

    const calcularPrestamo = e => {
        e.preventDefault();
        if (cantidad === 0 || plazo === "" || !nombre || !interes) {
            setError(true);
            return;
        }
        setError(false);

        // Usa las variables de estado locales para el cálculo
        const total = calcularTotal(cantidad, plazo, interes);
        setTotal(total);
    }

    return (
        <>
            <form onSubmit={calcularPrestamo}>
                <div className="column">
                    <div>
                        <label>Nombre</label>
                        <input 
                            type="text" 
                            placeholder='Tu nombre aqui'
                            onChange={(e) => {
                                setNombre(e.target.value);
                                setLocalNombre(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label>Cantidad Prestamo</label>
                        <input 
                            type="number" 
                            placeholder='Ej: 1000'
                            onChange={(e) => setCantidad(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Plazo para pagar</label>
                        <select onChange={(e) => setPlazo(e.target.value)}>
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select>
                    </div>
                    <div>
                        <label>Interés Adicional (%)</label>
                        <input 
                            type="number" 
                            placeholder='Ej: 5'
                            max="100"
                            onChange={(e) => {
                                setInteres(e.target.value);
                                setLocalInteres(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="btnSubmit">
                    <input type="submit" value="Calcular" />
                </div>
            </form>
            {error && <p className='error'>Todos los campos son obligatorios...</p>}
        </>
    );
}

export default Formulario;
