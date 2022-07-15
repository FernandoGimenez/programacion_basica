var teclas = { //esto es un objeto, es una variable que contiene más variables dentro/
    UP: 38,  //buena práctica usar MAYUSCULAS con constantes a lo largo del código/
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento)
{
    switch(evento.keyCode)
    {
        case teclas.UP: //es importante poner los dos puntos/
            console.log("arriba");
        break; //evita que se ejecute el resto del código/
        case teclas.DOWN:
            console.log("abajo");
        break;
        case teclas.LEFT:
            console.log("izquierda");
        break;
        case teclas.RIGHT:
            console.log("derecha");
        break;
        default: //es el código que se ejecuta si no se cumple ninguno de los anteriores/
            console.log("otra tecla")
        break
    }
}