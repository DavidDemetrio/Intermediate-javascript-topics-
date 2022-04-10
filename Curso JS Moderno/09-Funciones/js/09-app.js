// Métodos de funcion (otra forma de crear funciones en un objeto)
const reproductor = {
    reproducir: function (id) {
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function () {
        console.log(`pausar canicón`);
    },
    borrar: function(id) {
        console.log(`Borrar canción ${id}`);
    },
    crearPlaylist: function(nombrePlayslist) {
        console.log(`Se ha creado la playlist ${nombrePlayslist}`);
    },
    reproducirPlaylist: function (nombrePlaylist) {
        console.log(`Reproduciendo la playlist ${nombrePlaylist}`);
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(40);
reproductor.crearPlaylist('Puro metall');
reproductor.reproducirPlaylist('Puro metall');