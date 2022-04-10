const carrito = [];

// Definir un producto
const producto = {
    nombre: "Minitor 32 pulgadas",
    precio: 400
}

const producto2 = {
    nombre: "Celular",
    precio: 800
}

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: "Teclado",
    precio: 50 
}
carrito.push(producto3);
/* // Agregar un elemento al inicio del array
carrito.unshift(producto3);

console.log(carrito);

// Eliminar el último elemento de un array
carrito.pop();
console.log(carrito);
carrito.pop();
console.log(carrito);

// Eliminar de inico del arrreglo
carrito.shift();
console.log(carrito); */

// Eliminar un elemento de medio
console.log(carrito);
carrito.splice(1,1); // desde que posicion eliminar y cuatos elementos desde esa posicion
console.log(carrito);


/* Ojo: todo esto se elimina de forma imperativa */