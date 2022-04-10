"use strict" // Va a exigir que cumplas ciertas reglas al escribir tu código de js
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// Sellar el objeto:
// no se pueden agregar ni eliminar propiedades
// pero sí modificar las existentes
Object.seal( producto );

producto.disponible = false;
producto.imagen = "imagen.jpg";
delete producto.nombre;

console.log(producto);

/* Una vez habilitado use strict tenemos una
serie de metodos habilitados a los que podemos acceder o object methods */

// Saber si un objeto está sellado
console.log(Object.isSealed( producto ));