const producto = {
    nombre: "Minitor 32 pulgadas",
    precio: 400
}

// Destructuring con arrays
const numeros = [10, 20, 30, 40, 50];

const [ , , tercero ] = numeros;
console.log(tercero);
const [ primero, , ...tercero_arr ] = numeros;
console.log(primero);
console.log(tercero_arr);