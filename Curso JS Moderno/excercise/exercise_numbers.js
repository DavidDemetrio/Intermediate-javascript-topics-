/* let number_round = Math.ceil();
// console.log(number_round);

// Redondear siemprehacia el entero menor
const numbers = [23.8, 45.7, 45.01, 4.3, 4.999999, 3.234, 2.34, 5.5443, 7.675, 876.655, 5.6, 4.7, 4.7];
const new_numbers = [];
for (let num of numbers) {
    new_numbers.push(Math.floor(num));
} 
console.log(numbers);
console.log(new_numbers); */

let puntaje = 5;
++puntaje;
console.log(puntaje);
console.log(Number.isInteger(puntaje));

// Boolean
const true_ = "true";
const true2 = true;

console.log(true_ == true2);

const boolean4 = new Boolean(true);
console.log(boolean4);
console.log(typeof boolean4);