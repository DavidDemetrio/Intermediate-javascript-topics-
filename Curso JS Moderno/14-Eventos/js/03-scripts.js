const busqueda = document.querySelector('.busqueda');

// El evento blur es excelente para validacion de formularios
// ya que consiste en en seleccionar el elemento que produce el elemento
// y una ves que te sales de ese elemento se ejecuta el evento.
busqueda.addEventListener("input", () => {
    console.log("Escribiendo...");
});

// copy
// paste
// cut
// keyup
// keydown