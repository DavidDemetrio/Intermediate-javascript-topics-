const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

// .concat
const total = meses.concat(meses2, meses3, 'Otro mes');
console.log(total);

// spread operator rest operator
const resultado2 = [...meses, ...meses2, ...meses3, 'otro mes'];
console.log(resultado2);