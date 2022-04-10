/* 
const productos = {
    producto1: {
        producto: "Monitor 20\"",
        precio: 600,
        status: "A"
    },
    producto2: {
        producto: "Monitor 20\"",
        precio: 600,
        status: "A"
    },
    producto3: {
        producto: "Monitor 20\"",
        precio: 600,
        status: "A"
    },
    producto4: {
        producto: "Monitor 20\"",
        precio: 600,
        status: "A"
    },    
    producto5: {
    producto: "Monitor 20\"",
    precio: 600,        
    status: "A"
    }
}; */

// Agregar propiedad de descuento
// delete productos.producto5.precio;
// console.log(productos);
/* 
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'    
        },
        fabricacion: {
            pais: 'China'
        }
    }
};
console.log(Object.entries(producto));
const { informacion, informacion: { medidas } } = producto; */
// console.log(peso);
// console.log(informacion);
/* Object.freeze(fabricacion);
producto.informacion.fabricacion.edad = 3;
console.log(producto);

console.log(Object.isFrozen(producto)); */

/* Object.freeze(medidas);
informacion.medidas.peso = "10kg";
// console.log(producto);

// Unir dos objetos
const nombre = {
    name: "David"
};
const apellido = {
    app: "Lópes"
};

const resultado = Object.assign(apellido, nombre);
console.log(resultado);
const res = {...nombre, ...apellido};
console.log(res); */