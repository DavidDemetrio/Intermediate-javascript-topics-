const autenticado = false;
const puedePagar = false;
console.log( autenticado && puedePagar ? 'Si está autenticado' :'No está autenticado' );

// operador ternario anidado
console.log(autenticado ? puedePagar ? 'Está autenticado y puede pagar' : 'No puedes bro' : 'No esta autenticado');

autenticado ?(
    x=1,
    console.log(x)
) : (
    y = 0,
    console.log(y)
)
    