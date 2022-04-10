function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);

function  formatearCliente(cliente) {
    const { nombre, saldo } = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}.`;
}

console.log(formatearCliente(juan));

function Empresa(nombre, saldo, categoría) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoría = categoría;
}

const CCJ = new Empresa('Código con Juan', 4000, 'Cursos en Línea.');
console.log(formatearCliente(CCJ));