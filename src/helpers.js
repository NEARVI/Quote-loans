export function calcularTotal(cantidad, plazo, interes) {
    const cantidadInt = parseFloat(cantidad);
    const plazoInt = parseInt(plazo, 10);
    const interesFloat = parseFloat(interes) / 100;

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
            totalPlazo = 0;
            break;
    }

    const totalInteres = cantidadInt * interesFloat;
    return totalCantidad + totalPlazo + totalInteres + cantidadInt;
}
