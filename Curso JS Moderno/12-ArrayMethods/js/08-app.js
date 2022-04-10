// Rest o spread operator
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


const meses2 = [...meses, 'Agosto']; //al hacer lo así no modifica la variable sobre la que se opera
console.log(meses2);

// Spread operator con un arreglo de objetos agregar un nuevo elemento al arreglo
const producto = { producto: 'Disco duro', precio: 300 };
const carrito2 = [...carrito, producto];
console.log(carrito2);