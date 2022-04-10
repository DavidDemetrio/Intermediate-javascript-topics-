/* const producto1 = "Monitor de 20 \"";
const producto2 = String("Monitor de 24 \"");
const producto3 = new String("Monitor de 20 \""); */
// console.log(producto1.charAt(2));
// console.log(producto1[2]); // en ECMAScript 5 permite acceder de esta forma a un String

const name1 = "David";
const name2 = String("David");
const name3 = new String("David");

/* for (let letra of name3) {
    console.log(letra);
} */

const materia1 = "Español";
const materia2 = String("Matemáticas");
const materia3 = new String("Geografía");

// console.log(materia1[0]);
// console.log(materia2.charAt());
// console.log(materia3.slice(3));

/* const array = ["A", 01, 1, 3, "Ju", 0, 34, "w", 0, "s"];
console.log(array.indexOf(0));
console.log(array.lastIndexOf(0)); */

/* const ballena = "Ballena Azul, Ballena Asesina";
console.log(ballena.length);
console.log(ballena.indexOf(" ",14));
console.log(ballena.lastIndexOf("u", 8));
console.log(ballena.includes("Azul")); */

const correo = "          david.lopes@gmail.com               ";
const correo_deleted_space = correo.trim();
/* console.log(correo_deleted_space.length);
console.log(correo.length); */

let oracion = "Se han generado 3 metros cubicos";
let t = oracion.lastIndexOf("metros cúbicos") !== -1 || oracion.lastIndexOf("metros cubicos") !== -1 ?
    oracion.replace("metros cubicos", "m3")
    :
    "No hay m3";

// console.log(t);
const oracion_ = "Todos los años son feos";
console.log(oracion_.replace("feos", "buenos"));

const array_ = [1, 23, 45, 5, 78, 56, 34, 68, 90, 34];
const convert_to_string = array_.toString();
const replace_45 = convert_to_string.replace("45", "0");
const new_array = replace_45.split(",");
console.log(new_array);
