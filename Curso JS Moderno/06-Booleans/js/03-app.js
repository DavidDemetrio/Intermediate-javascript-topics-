// Consejos para escribir codigo que utilice booleans

const autenticado =  true;

// if(autenticado === true) { // Es mala práctica
if(autenticado) { //ponlo así  
    console.log('Si puedes ver netflix');
} else {
    console.log('No puedes ver netflix');
}

// Operador ternario
console.log(autenticado ? 'Si está autenticado' : 'No está autenticado');