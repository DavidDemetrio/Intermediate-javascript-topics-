/** 
 * There are two forms to call a class
*/

// Class declaration
class Cliente {
    // Con constructor pasamos los valores que tendrá el objeto
    // El constructor in other languages are the same name to the class
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    // En JS los métodos son lo mismo que los protoype de un objeto constructor
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // Propiedades estáticas
    //No requieren de instanciar para ser ejecutadas
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}
// To instans the class
const juan = new Cliente('Juan', 4000);
console.log(juan.mostrarInformacion());
console.log(juan.bienvenida);

// Class expresion
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}
const juan2 = new Cliente2('David', 8000);
console.log(juan2);