// Parámetros por default
function sumar(a, b) { // a y b son parámetros
    console.log(a + b);
}

sumar(234, 55); // son argumentos (los valores reales)

function saludar(nombre = '', apellido = '') {
    console.log(`Hola ${nombre}  ${apellido}`);
}

saludar('David');