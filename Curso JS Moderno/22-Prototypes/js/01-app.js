const cliente = {
    nombre: 'David',
    saldo: 500,
    show_saldo: () => { this.saldo }, 
}

console.log(cliente);

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const david = new Cliente('david', 500);
// console.log(david);
console.log(Cliente);