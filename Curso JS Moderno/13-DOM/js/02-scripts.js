// Segun Juan de la torre la siguiente sintaxis casi ya no se usa
// Seleccionar elementos por su clase

const header = document.getElementsByClassName('header')  //seleccionar elementos que tengan el nombre de una clase
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// si las clases existen más de una vez
const contenedores = document.getElementsByClassName('contenedor');

// Si una clase no existe
const noExiste = document.getElementsByClassName('no_existe');
console.log(noExiste);