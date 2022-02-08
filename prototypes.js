function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

/**
 * Se utiliza function porque este busca desde
 * el objeto actual y un arrow lo hace desde la ventana
 * global
 */
Cliente.prototype.tipoCliente = function() {
    let tipo;
    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function (retirar) {
    this.saldo -= retirar;
}

function Persona(nombre, saldo, telefono) {
    // Para no repetir propiedades de diferentes clases
    Cliente.call(this, nombre, saldo); //Heredar propiedades del construcor cliente
    this.telefono = telefono;
}

// Heredar funciones del Cliente
Persona.prototype = Object.create(Cliente.prototype); //Object.create es una funcion diseñada para copiar el prototype
Persona.prototype.constructor = Cliente;

// Instanciarlo 
const juan = new Persona('Juan', 5000, 8758898894);
console.log(Persona);
console.log(juan.nombreClienteSaldo());


/* // Instanciar un objeto
const pedro = new Cliente('Pedro', 6000);
pedro.tipoCliente();
console.log(pedro);

function Empresa(nombre, saldo, categoría) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoría = categoría;
}

const CCJ = new Empresa('Código con Juan', 4000, 'Cursos en Línea.'); */