const producto = 'Monitor 20 Pulgadas';

// .repeat repetir una cadena de texto

const texto = 'en Promoción'.repeat(2.4);//ojo: te redondea al entero más pr´ximo si le pasa un número decimal
console.log(texto);
console.log(`${producto} ${texto} !!!`);

// split, dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar';
console.log(hobbies.split(", "));

const tweet = "Aprendiendo JavaScript #JSModernoConJuan";
console.log(tweet.split('#'));