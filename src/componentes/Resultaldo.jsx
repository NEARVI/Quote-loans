import React from 'react';

const Resultado = ({ name, total, cantidad, plazo }) => {
    return (
        <div className="resultado">
            <h2>Cotización de préstamo de {name}:</h2>
            <p>La cantidad solicitada es: $ {cantidad}</p>
            <p>A pagar en: {plazo} Meses</p>
            <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
            <p>Total a pagar: $ {total.toFixed(2)}</p>
            <p></p>
        </div>
    );
}

export default Resultado;
