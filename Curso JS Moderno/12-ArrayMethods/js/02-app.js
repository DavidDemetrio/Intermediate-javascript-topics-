const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Forma manual
meses.forEach((mes,i) => {
    if(mes === 'Abr') {
        // console.log(`Encontrado en el índice ${i}`);
    }
});

// Encontrar el índie de abril
const indice = meses.findIndex(mes => mes === 'Abñril');
// console.log(indice);

// Encontrar un índice en un arreglo de objetos
const is_producto = carrito.findIndex(producto => producto.nombre === 'Audifonos');
console.log(is_producto);