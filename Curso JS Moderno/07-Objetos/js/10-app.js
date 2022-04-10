const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

// Une dos objetos
const resultado = Object.assign(producto, medidas);

// Spread Operator o Rest Operator es otra manera de unir dos objetos
const resultado2 = { ...producto, ...medidas } //toma una copia de producto y medidas y asignalas dentro del objeto
console.log(resultado);
console.log(resultado2);