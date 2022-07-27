var teclas = { //esto es un objeto, es una variable que contiene más variables dentro/
    UP: 38,  //buena práctica usar MAYUSCULAS con constantes a lo largo del código/
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
var cuadro = document.getElementById ("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
/*como el ancho de la línea es 3, colocando esas coordenadas de inicio, genero un punto.
Es un truco usado en videojuegos para generar bordes redondeados*/
function dibujarLinea(color, x_i, y_i, x_f, y_f, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3; //le da el ancho a la línea, el número representa los pixeles
    lienzo.moveTo(x_i, y_i);
    lienzo.lineTo(x_f, y_f);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento) //evento está para ver con console.log que ocurre por dentro de la función/
{
    var colorcito = "#c1afe3";
    var movimiento = 3;
    switch(evento.keyCode)
    {
        case teclas.UP: //es importante poner los dos puntos/
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
        break; //evita que se ejecute el resto del código/
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default: //es el código que se ejecuta si no se cumple ninguno de los anteriores/
            console.log("otra tecla");
        break;
    }
}