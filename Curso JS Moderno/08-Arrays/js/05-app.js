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

// Agregar un elemento al inicio del array
carrito.unshift(producto3);

console.log(carrito);