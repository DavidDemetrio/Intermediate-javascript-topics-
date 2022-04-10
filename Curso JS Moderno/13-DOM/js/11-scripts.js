const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

/* Los addEventListener puede tener funciones anónimas como este primer caso
   o funciones declarativas (ya sea arrow functions o imperativas) */
/* btnFlotante.addEventListener("click", () => {
    console.log("hola perros");
}); */

btnFlotante.addEventListener("click", mostrarOcultarFooter);

function mostrarOcultarFooter() {
    if( footer.classList.contains('activo') ) {
        footer.classList.remove('activo');
        /* Sabemos que el this en un método dentro de un objeto
           hace referencia a una propiedad dentro de ese objeto, pero en los
           eventos el this también representa al elemento que ejecuta una funcion que 
           escucha ese evento. En este caso this es lo mismo que btnFlotante porque
           btnFlotante genera esta función */
        this.classList.remove('activo');
        this.textContent = "Idioma y moneda"
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }

}