class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

// Herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
}

const empresa = new Empresa('Código con Juan', 300, 345645, 1);
console.log(empresa.mostrarInformacion());
// Los métodos static no es necesario instanciar objetos, se usa directamente con la clase  
console.log(Cliente.bienvenida());