import React from 'react';

const ExplicacionInteres = () => {
  return (
    <div className="explicacion-interes">
      <h2>¿Cómo se calcula el interés?</h2>
      <ul>
        <li><strong>Interés por monto:</strong>
          <ul>
            <li>Monto ≤ $1,000: Tasa del 25%.</li>
            <li>$1,001 ≤ Monto ≤ $5,000: Tasa del 20%.</li>
            <li>$5,001 ≤ Monto ≤ $10,000: Tasa del 15%.</li>
            <li>Monto &gt; $10,000: Tasa del 10%.</li>
          </ul>
        </li>
        <li><strong>Interés por plazo:</strong>
          <ul>
            <li>Plazo de 3 meses: 5% del monto del préstamo.</li>
            <li>Plazo de 6 meses: 10% del monto del préstamo.</li>
            <li>Plazo de 12 meses: 15% del monto del préstamo.</li>
            <li>Plazo de 24 meses: 20% del monto del préstamo.</li>
          </ul>
        </li>
        <li><strong>Interés total:</strong> Sumamos el interés por monto y el interés por plazo para obtener el interés total. Luego, este interés total se suma al monto del préstamo para calcular el total a pagar.</li>
      </ul>
      <p>Total = Monto del préstamo + (Monto del préstamo * Tasa de interés por monto) + (Monto del préstamo * Tasa de interés por plazo)</p>
    </div>
  );
}

export default ExplicacionInteres;
