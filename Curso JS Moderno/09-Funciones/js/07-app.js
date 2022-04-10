// Cómo se mandan a llamar o se comunican las funciones

iniciarA();
function iniciarA() {
    console.log('Iniciando App');

    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la función');
    usuarioAutenticado('Pablo');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuarui autenticado exitosamente: ${usuario}`);
};