const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio} `); // this hace referencia al objeto en sí mismo
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarInfo: function() {
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio} `); // this hace referencia al objeto en sí mismo
    }
}

producto.mostrarInfo();
producto.mostrarInfo();