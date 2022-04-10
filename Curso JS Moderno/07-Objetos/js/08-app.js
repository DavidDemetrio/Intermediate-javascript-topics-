"use strict" // Va a exigir que cumplas ciertas reglas al escribir tu código de js
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze( producto );

// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(producto);

/* Una vez habilitado use strict tenemos una
serie de metodos habilitados a los que podemos acceder o object methods */

// Saber si un objeto está congelado
console.log(Object.isFrozen( producto ));