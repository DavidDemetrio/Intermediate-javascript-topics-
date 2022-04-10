const diaHoy = new Date();
let valor;

valor = diaHoy;
valor = diaHoy.getFullYear();  // con get extraes datos de la fecha
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
valor = diaHoy.setFullYear(10000);  // con set los modificas
valor = diaHoy.getDate();
valor = diaHoy.getDay();
console.log(valor);