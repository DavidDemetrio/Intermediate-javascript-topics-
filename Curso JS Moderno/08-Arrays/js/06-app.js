// Agregar elementos usando spread operator
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

const producto3 = {
    nombre: "Teclado",
    precio: 50 
}

let resultado;
resultado = [...carrito, producto]
resultado = [...resultado, producto3] // hace lo mismo que push
resultado = [producto2, ...resultado] // hace lo mismo que unshit

console.log(carrito);
console.log(resultado);