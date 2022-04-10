const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`pausar canicón`),
    borrar: id => console.log(`Borrar canción ${id}`),
    crearPlaylist: nombrePlayslist => console.log(`Se ha creado la playlist ${nombrePlayslist}`),
    reproducirPlaylist: nombrePlaylist => console.log(`Reproduciendo la playlist ${nombrePlaylist}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    } 
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(40);
reproductor.crearPlaylist('Puro metall');
reproductor.reproducirPlaylist('Puro metall');

console.log(reproductor);