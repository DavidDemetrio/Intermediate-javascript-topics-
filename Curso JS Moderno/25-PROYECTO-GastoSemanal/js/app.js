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
    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }
    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
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
    // Agregar listado de gastos
    agregarGastoListado(gastos) {
        this.limpiarHTML();
        // Iterar sobre los gastos
        gastos.forEach(gasto => {
            const { cantidad, nombre, id } = gasto;
            // Crear un li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = "list-group-item d-flex justify-content-between align-items-center";
            // Forma antigua de agregar atributos a un elemento
            // nuevoGasto.setAttribute('data-id', id);
            // Hace lo mismo que el código anterior, solo que 
            // es más actual este segundo y más recomendado.
            nuevoGasto.dataset.id = id;
            // Agregar el HTML del gasto
            // A algunos no les gusta usar innerHTML
            // se dice que es un poco insegura.
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-p badge-pill">$ ${cantidad}</span>`;
            // Botón para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gastos');
            btnBorrar.innerHTML = "Borrar &times";
            nuevoGasto.appendChild(btnBorrar);
            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }
    limpiarHTML() {
        while(gastoListado.firstElementChild) {
            gastoListado.removeChild(gastoListado.firstElementChild);
        }
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
    const cantidad = Number(document.querySelector('#cantidad').value);
    // Validar
    if(nombre === '' || cantidad === '') {
        ui.imprimirAlerta('Ambos campos están vacíos.', 'error');
        return;
    } else if(cantidad <=0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no válida', 'error');
        return;
    }
    // Genear un objeto con el gasto
    const gasto = { nombre, cantidad, id: Date.now() };
    presupuesto.nuevoGasto(gasto);
    ui.imprimirAlerta('Gasto agregado correctamente');
    // Imprimir los gastos
    const { gastos } = presupuesto;
    ui.agregarGastoListado(gastos);
    // Reiniciar formulario
    formulario.reset();
}

function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener("submit", agregarGasto);
}

// Eventos
eventListeners();