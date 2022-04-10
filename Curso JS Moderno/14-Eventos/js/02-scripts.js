const nav = document.querySelector('.navegacion');

// Registrar un evento
nav.addEventListener('mouseenter', () => {
    console.log('entrando a la navegación');
    nav.style.backgroundColor = "transparent";
});

nav.addEventListener('dblclick', () => {
    console.log("¡Saliendo de la navegación perro!");
    nav.style.backgroundColor = "white";
});

// OJO: mousedown y click son similares
// mouseout
// mouseup