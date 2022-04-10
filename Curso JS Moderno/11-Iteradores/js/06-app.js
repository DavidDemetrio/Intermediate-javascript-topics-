// forEach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS'];

/* pendientes.forEach( (pendiente, index) => { //se puede poner i, indice o index como buena práctica
    console.log(pendiente);
    console.log(index);
}); */


const nuevoArreglo = pendientes.forEach( producto => producto);
const nuevoArreglo2 = pendientes.map( producto => producto);

console.log(nuevoArreglo);
console.log(nuevoArreglo2);