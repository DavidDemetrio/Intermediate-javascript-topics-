// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweet)
    // Cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        crearHTML();
    });
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();
    // Text tarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    // Validacion
    if(tweet === '') {
        mostrarError('Un mensaje no puede ir vacío.')
        // Evita que se ejecute más líneas de código
        return; 
    }
    const tweetObjt = {
        id: Date.now(),
        tweet
    }
    // Añador al arreglo de tweets
    tweets = [...tweets, tweetObjt];
    // Crear el HTML del tweet
    crearHTML();

    // Reiniciar el formulario
    this.reset(); 
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // Insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    // Elimina la alerta depués de tres segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}

// Muestra un listado de los tweets
function crearHTML() {
    limpiarHTML();
    if(tweets.length > 0) {
        tweets.forEach(tweet => {
            // Agregar botón de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList = 'borrar-tweet';
            btnEliminar.innerText = 'X';

            // Añadir la funcion de eliminar
            //btnEliminar.onclick = borrarTweet; // Se pone de esta forma si a la función no le pasas parámetros
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
            // Crear el HTML
            const li = document.createElement('li');
            // Añadir el texto
            li.innerText = tweet.tweet;
            // Asignar el boton
            li.appendChild(btnEliminar);
            // insertale en el HTML
            listaTweets.appendChild(li);
        });
    }
    sincronizarStorage();
}

// Agregar los tweets actualez al localStorage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Elimina un tweet
function borrarTweet(tweet_id) {
    tweets = tweets.filter(tweet => tweet.id !== tweet_id);
    crearHTML();
}

// Limpiar el HTML
function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}