let elemento;

elemento = document.all; // acceder a todos los elementos de tu documento HTML o XML
elemento = document.head;
elemento = document.body;
elemento = document.domain; // acceder a la url donde se encuentra alojado tu proyecto
elemento = document.forms; // obtener todos los formularios q hay en tu documento HTML
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;

elemento = document.links; // acceder a todos los enlaces del documento
elemento = document.links[4];
elemento = document.links[4].classList; // muestra en forma de collection html las classes que hay en el enlace del índice 4
elemento = document.links[4].className; // muestra en forma de arrat las clases que hay en elemento del índice 4 del documento html

elemento = document.images; // saber cuantas imagenes tiene el documento
elemento = document.scripts; // saber cuantos script hay en el documento

console.log(elemento);