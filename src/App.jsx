import React, { useState } from 'react';
import Header from './componentes/Header.jsx';
import Formulario from './componentes/Formulario.jsx';
import Resultado from './componentes/Resultaldo.jsx';
import Mensaje from './componentes/Mensaje.jsx';
import ExplicacionInteres from "./componentes/ExplicacionInteres.jsx";
import './App.css';

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);
  const [nombre, setNombre] = useState("");
  const [interes, setInteres] = useState(0);

  const calcularTotal = (cantidad, plazo, interes) => {
    const cantidadInt = parseInt(cantidad);
    const plazoInt = parseInt(plazo);

    let totalCantidad;
    if (cantidadInt <= 1000) {
      totalCantidad = cantidadInt * 0.25;
    } else if (cantidadInt > 1000 && cantidadInt <= 5000) {
      totalCantidad = cantidadInt * 0.20;
    } else if (cantidadInt > 5000 && cantidadInt <= 10000) {
      totalCantidad = cantidadInt * 0.15;
    } else {
      totalCantidad = cantidadInt * 0.10;
    }

    let totalPlazo;
    switch (plazoInt) {
      case 3:
        totalPlazo = cantidadInt * 0.05;
        break;
      case 6:
        totalPlazo = cantidadInt * 0.10;
        break;
      case 12:
        totalPlazo = cantidadInt * 0.15;
        break;
      case 24:
        totalPlazo = cantidadInt * 0.20;
        break;
      default:
        break;
    }
    return totalCantidad + totalPlazo + cantidadInt + (cantidadInt * interes / 100);
  }

  let componente;
  if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado name={nombre} total={total} cantidad={cantidad} plazo={plazo} />;
  }

  return (
    <>
      <Header titulo="Calcula tu préstamo" />
      <div className="container">
      <ExplicacionInteres />
        <Formulario
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          setTotal={setTotal}
          setNombre={setNombre}
          setInteres={setInteres}
        />
      </div>
      <div className="mensaje">
        {componente}
      </div>
    </>
  );
}

export default App;
