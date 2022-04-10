const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Comprobar si un valor existe en un arreglo
meses.forEach(mes => {
    if(mes === 'Enero') {
        // console.log("Si existe");
    }
});

const resultado = meses.includes('Diciembre');
// console.log(resultado);

// En un arreglo de objetos se utliza some
const existe = carrito.some(producto => producto.nombre === 'Tablet');
// console.log(existe);

// En un arreglo tradicional usando some
const is_mes = meses.some(mes => mes === 'Abrill')
// console.log(is_mes); 
