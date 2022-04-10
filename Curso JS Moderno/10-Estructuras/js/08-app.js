// Buenas prácticas al trabajar con el if
const autenticado = true;
if(autenticado) {
    console.log('El usuario está autenticado');
}

const puntaje = 450;

function revisarPuntaje() {
    if(puntaje > 400) {
        console.log('Excelente');
        // Solo funciona dentro de una funcion del return
        return; //ya no ejecuta lo que sigue y se sale de la funcion
    }

    if(puntaje > 300){
        console.log('Buen puntaje');
        return;
    }
}
revisarPuntaje();