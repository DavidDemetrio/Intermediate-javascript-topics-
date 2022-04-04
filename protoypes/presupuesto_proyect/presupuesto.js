// Variables y selectores
let presupuesto;
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        const { presupuesto, restante } = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }
    // Reutilizar el cóigo porque aquí puede ir tanto mensaje correcto
    // o incorrecto
    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        // Mensaje de error
        divMensaje.textContent = mensaje;
        // insertar en el HTML5
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        // Quitar HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000)
    }
}

// Instanciar
// Se instancia global porque la clase solo construirá HTML sin tener que hacer cambio a un presupuesto, restante
//  o gastos
const ui = new UI();

// Funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt("¿Cuál es tu presupuesto?");
    if(presupuestoUsuario === '' || preguntarPresupuesto === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }
    // Presupesto válido
    // Se instancia en una variable global dentro de una función solo cuando la clase presentará constructores
    presupuesto = new Presupuesto(presupuestoUsuario);
    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto (e) {
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = document.querySelector('#cantidad').value;

    // Validar
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos están vacíos.', 'error');
        return;
    } else if(cantidad <=0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }

    console.log("restar a presupuesto");
}

function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener("submit", agregarGasto);
}

// Eventos
eventListeners();