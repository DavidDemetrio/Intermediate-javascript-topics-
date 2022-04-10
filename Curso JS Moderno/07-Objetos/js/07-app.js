// En un const al tener una variable como objeto
// sus propiedades si se pueden reescribir o eliminar
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

 producto.disponible = false;
 delete producto.precio;

 console.log(producto);