const carrito = [
    { nombre: "Monitor 27 pulgadas", precio: 500},
    { nombre: "Pantalla", precio: 500},
    { nombre: "Teclado", precio: 800},
    { nombre: "Celular", precio: 500},
    { nombre: "Tablet", precio: 1500},
    { nombre: "Mouse", precio: 120},
]

for(let i = 0; i < carrito.length; i++) {
    console.log( `${carrito[i].nombre} - Precio: ${carrito[i].precio}` );
}

carrito.forEach( function(producto) {
    console.log( `${producto.nombre} - Precio: ${producto.precio}` );
});

const reproductor = {
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`pausar canicón`),
    borrar: id => console.log(`Borrar canción ${id}`),
    crearPlaylist: nombrePlayslist => console.log(`Se ha creado la playlist ${nombrePlayslist}`),
    reproducirPlaylist: nombrePlaylist => console.log(`Reproduciendo la playlist ${nombrePlaylist}`)
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(40);
reproductor.crearPlaylist('Puro metall');
reproductor.reproducirPlaylist('Puro metall');