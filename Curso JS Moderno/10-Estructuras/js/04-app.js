// Operador mayor que y menor que
const dinero = 500;
const totalApagar = 500;
const tarjeta = true;
const cheque = true;

// En los if siempre se ejecuta la primera condición que se cumpla
if( dinero >= totalApagar ) { //En la primera condicion siempre coloca la más importante
    console.log('Sí se puede pagar');
} else if(cheque) {
    console.log('Si tengo un cheque');
} else if(tarjeta) {
    console.log('Si puedo pagar porque tengo la tarjeta');
} else {
    console.log('Fondos Insuficientes');
}