function sumar(a, b) {
    return a + b;
}

const resultado = sumar(5, 1);

console.log(resultado);

// Ejemplo mas avanzado

let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}

total = agregarCarrito(340);
total = agregarCarrito(300);
total = agregarCarrito(300);

const totalPagar = calcularImpuesto(total);

console.log(total);
console.log(totalPagar);