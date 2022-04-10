// Inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas";
console.log(producto);

//Las variables se pueden reasignar 
producto = "Monitor de 19 pulgadas";
console.log(producto);

//JavaScript es un lenguaje de tipo dinámico, no se especifica tipo de dato
producto = 20;
console.log(producto);

// Se pueden inicializar sin valor y asignar después
var disponible;
disponible = true;
disponible = false;

// Inicializar multiples variables
var categoria = 'Computadoras',
    marca = "Marca Famosa",
    calificacion  = 5;

 //Las variables no pueden iniciar con números
/*  var 01_;
 var _01;
 var _usuario;
 var __usuario;

 //Camelcase
 var nombreProducto;
 //snakecase
 var nombre_producto;
 //Pascalcase
 var NombreProducto; */ //se utiliza más en clases, el nombre de una clase siempre empeieza con mayuscula