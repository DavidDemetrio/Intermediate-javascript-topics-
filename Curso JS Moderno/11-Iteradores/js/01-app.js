// Se ejecuta hasta que el código deje de cumplir una condicion
// for( let i = 0; i <= 200; i+= 2 ) {
//     console.log(`Número ${i}`);
// }

/**
 * En un foor loop cómo identificas los 
 * números que son pares y que son nones
*/

for(let i = 0; i <= 20; i++) {
    const res = i % 2;
    const resultado = res === 0 ? `${i} es número par` : `${i} es número impar`;
    console.log(resultado);
}

const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500},
    { nombre: "Pantalla", precio: 500},
    { nombre: "Teclado", precio: 800},
    { nombre: "Celular", precio: 500},
    { nombre: "Tablet", precio: 1500},
    { nombre: "Mouse", precio: 120},
]