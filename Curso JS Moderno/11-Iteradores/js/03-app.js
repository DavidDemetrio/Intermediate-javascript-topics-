// Ejercicio Fizz Buzz (my solución diferente a la del curso)
/** 
 * Tenemos una serie de elementos del 0-100
 * Todos los que son multiplos de 3 (3,6,9,12...),
 * deben imprimir en la consola la palabra Fizz.
 * Todos los que son multiplos de cinco (5, 10, 15...)
 * deben imprimir la palabra Buzz.
 * Y los que son multiplos de 3 y 5 deben imprimir la 
 * palabra Fizz Buzz
*/

for(let i = 0; i <= 100; i++) {
    const resto_tres = i % 3; //toma el resto de la division al dividir entre tres
    const resto_cinco = i % 5;    

    if(
        resto_tres === 0 &&
        resto_cinco !== 0
    ) {
        console.log(`El número ${i} es múltiplo de 3: Fizz`);
    } else if(
        resto_tres !== 0 &&
        resto_cinco === 0
    ) {
        console.log(`El número ${i} es múltiplo de 5: Buzz`);
    } else if(
        resto_tres === 0 &&
        resto_cinco === 0
    ) {
        console.log(`El número ${i} es múltiplo de 3 y 5: Fizz Buzz`);
    } else {
        console.log(`El número ${i} no es múltiplo de 3 y 5`);
    }
}