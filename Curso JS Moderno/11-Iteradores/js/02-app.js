/* for(let i = 0; i <= 10; i++) {
    if(i === 5) { break; }
    console.log(`Numero: ${i}`);
} */

/* for(let i = 0; i <= 10; i++) {
    if(i <= 5) {
        console.log('Numero cinco');
        continue;
    }
    console.log(`Numero: ${i}`);
    console.log('Eso es toño papi');
} */

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200, descuento: true },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 }
];

//con esta solución te evitas el tener todavía los resultado dentro de un arreglo
for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`El artículo ${carrito[i].nombre} tiene descuento.`);
        continue;
    }
    console.log(carrito[i].nombre);
}

// Otra manera de hacer el ejercicio anterior
carrito.forEach(producto => {
    producto.descuento ? console.log(`El artículo ${producto.nombre} tiene descuento.`) : console.log(producto.nombre);
});

//otra tercera forma de hacer el ejercicio
const prod_descuento = carrito.map( producto => {
    producto.descuento ? console.log(`El artículo ${producto.nombre} tiene descuento`) : console.log(producto.nombre);
});

// console.log("productos desde el .map:", prod_descuento);