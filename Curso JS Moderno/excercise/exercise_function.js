/* // Construir un object constructor

function object_constructor(name, edad) {
    this.name = name;
    this.edad = edad;
}

const persona = new object_constructor("David", 24);
// console.log(persona);


// Congelar y sellar un objeto
// Object.seal(persona);
delete persona.name;
// console.log(persona);

// const sumar2;
sumar2(); // a estas alturas es undefined...
function sumar2() {
    console.log(3 + 3); // pero como ya habiamos llamado la función, se queda como undefined
} */

// using promt function
/* const get_name = prompt("Write you name please:");
console.log(`Hi ${get_name}`); */

// Funciones
/* function saludar(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = (nombre) => `Hola ${nombre}`;

const result = saludar("David");
console.log(result);
console.log(saludar("Pedro"));
console.log(saludar2("Karen")); */

/* const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]


const nuevoArray = carrito.map(  producto =>  `Articulo: ${ producto.nombre } Precio: $ producto.precio} `)

const nuevoArray2 = carrito.forEach( producto =>  console.log( `Articulo: ${ producto.nombre } Precio: $ producto.precio} `));

console.log(nuevoArray);
console.log(nuevoArray2); */

// Usando get y set
/* const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300, descuento: true},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50, descuento: true},
    { nombre: 'Celular', precio: 500},
]

for(let i = 0; i <= 10; i++) {
    if(carrito[i].descuento) {
        console.log(`El articulo ${carrito[i].nombre} Tiene descuento... `);
        continue;
    }
    console.log(carrito[i].nombre);
} */



// const arr = [1, 2, 3, 4, 5];

/* arr.forEach (ar => {
    if(ar == 3) {
        console.log("El valor es " + ar);
        continue;
    }
    console.log(ar);
}); */

/* for (let ar of arr) {
    if(ar == 3) {
        console.log("El valor es " + ar);
        break;
    }
    console.log(ar);
} */

/* function saludar(nombre) {
    if(nombre == "David") {
        console.log(`Hola ${nombre}`);
        continue;
    }
    console.log(`$n{ombre}`);
} */

/** 
 * Relizar un programa que al teclear el número 1 arroje en un mensaje de alerta
 * "caja 1 disponible" y que al teclear el número 2 diga "caja 2 disponible" y así sucesivamente
*/
/* const caja_disponible = (e) => {
    Swal.fire({
        position: 'center',
        title: `Caja ${e.key} disponible`,
        showConfirmButton: false,
        timer: 1500
    });
};

window.addEventListener("keydown", caja_disponible); */
/* 
const productos_demit = {
    producto1: {
        nombre: "Silica Silky",
        precio: 79,
        status: "Activo"
    },
    producto2: {
        nombre: "Tinte Colortech",
        precio: 49,
        status: "Activo"
    },
    producto3: {
        nombre: "Primer Lisse",
        precio: 89,
        status: "No hay producto"
    },
    set cambiar_producto(producto) {
        this.producto1.nombre = producto;
    },
    get nombre_producto() {
        return this.producto1.nombre;
    }
};

productos_demit.cambiar_producto = "nass"; 
console.log(productos_demit);
console.log(productos_demit.nombre_producto); */

const names = ["David", "Lopez", "Quintanilla"];

/* for (let name of names) {
    if(name.length > 5) {
        console.log(`Tu nombre ${name} tiene un largo de ${name.length}`);
        continue;
    }
    console.log(name);
} */
/* 
console.time("p");
let i = 0;
while (i < 5) {
    i++;
    if(i == 3) {
        console.log(`El número a coincidir es ${i}`);
        continue;
    }
    console.log(i);
    console.log("i+1", i+1);
    console.log("hola");
}
console.timeEnd("p"); */

/* const sumar_precios = [100, 110, 230, 540];
const result = sumar_precios.reduce((total, precio) => total + precio, 0);
console.log(result); */

const object = {
    nombre: "David",
    edad: 24,
};


const object2 = {
    nombre: "Davddid",
    edad: 24
};
/* console.log(object);
object.cambiar_nombre = "Pedro";
console.log(object);
object.monstrar_nombre; */

console.log(names.lastIndexOf("Quintanilla"));
console.log(Object.assign(object, object2));
console.log({...object, ...object2});