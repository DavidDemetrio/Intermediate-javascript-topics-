const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', iniciarApp);
    email.addEventListener("blur", validarFormulario);
    asunto.addEventListener("blur", validarFormulario);
    mensaje.addEventListener("blur", validarFormulario);
    formulario.addEventListener('submit', enviarEmail);
}

function iniciarApp() {
    btnEnviar.disabled = false;
}

function validarFormulario(e) {
    if(e.target.value.length > 0) {
        const error = document.querySelector('p.error');
        if(error) {
            error.remove();
        }
        e.target.classList.remove('border', 'border-red-500')
        e.target.classList.add('border', 'border-green-500')
    } else {
        e.target.classList.remove('border', 'border-green-500')
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son requeridos.');
    }

    if(e.target.type === "email") {
        if(regex.test(e.target.value)) {
            e.target.classList.add('border', 'border-green-500')
        } else {
            e.target.classList.add('border', 'border-red-500');
            e.target.classList.remove('border', 'border-green-500')
            btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
            mostrarError('Email no válido');
        }
    }

    if(regex.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50')
    }
}

function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
}

// Enviar email
function enviarEmail(e) {
    e.preventDefault();
    // Mostrar el spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    // Después de tres segundos ocultar el spinner y mostrar el mensaje
    setTimeout( () => {
        spinner.style.display = 'none';
        // Mensaje se envió correctamente
        const parrafo = document.createElement('p');
        parrafo.textContent = 'El mensaje se envió correctamente.';
        parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');
        // Inserta el parrafo antes del spinner
        formulario.insertBefore(parrafo, spinner);
        // Eliminar el mensaje de éxito de envío de formulario
        setTimeout( () => {
            parrafo.remove();
            resetearFormulario();
        }, 3000);
    }, 3000);
}

// Función que resetea el formulario
function resetearFormulario() {
    formulario.reset();
    iniciarApp();   
}