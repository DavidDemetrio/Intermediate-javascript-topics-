/* // Uso de includes y some para arrays
const numbers = [1, 2, 3, 4, 5];
const result = numbers.some(num => num === 1);
const result2 = numbers.includes(1);
console.log(result);
console.log(result2);


const conciertos = [
    { concierto: "Linkin Park", hora_inicio: 12.00 },
    { concierto: "ACDC", hora_inicio: 14.00 },
    { concierto: "Greta Van Fleet", hora_inicio: 10.00 },
    { concierto: "Richie Kotzen", hora_inicio: 12.00 },
];

const is_conciertos = conciertos.some(concierto => concierto.hora_inicio === 10.00);
console.log(is_conciertos);

// Agregar elementos usando spread operator
const carrito = [];

// Definir un producto
const producto = {
    nombre: "Minitor 32 pulgadas",
    precio: 400
};

const producto2 = {
    nombre: "Celular",
    precio: 800
};

const producto3 = {
    nombre: "Teclado",
    precio: 50 
};

let resultado;
resultado = [...carrito, producto];
resultado = [...resultado, producto3]; // hace lo mismo que push
resultado = [producto2, ...resultado]; // hace lo mismo que unshit

console.log(carrito);
console.log(resultado); */

/* // Ejercicios con unshift
const new_array = ["David", "Demetrio", "López", "Paz"];
new_array.unshift("mAR");
let modified_array = [...new_array, "Pedro"];
console.log(new_array);
console.log(modified_array);
modified_array = ["Karla",...modified_array];
console.log(modified_array); */

/** 
 * Ejercicios destructuring de objetos
*/

const mago = {
    name_: "Denys",
    edad: 2400,
    poder: {
        alto: 600,
        medio: 500,
        bajo: 300
    }
};

const { name_, edad, poder, poder: { alto, medio, bajo } } = mago;
/* console.log(name_);
console.log(edad);
console.log(alto);
console.log(medio);
console.log(bajo);
console.log(poder); */

const dias_meses = ["Enero", "Febero", "Marzo", "Abril", "Mayo"];
const [ , , tercer_mes] = dias_meses;
const [primero, , ...tercero_arr] = dias_meses; 

console.log(primero);
console.log(tercero_arr);