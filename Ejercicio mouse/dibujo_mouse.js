var mouse = {
    LEFT: 0,
    DOWN: 1,
    UP: 0,
};
var color_boton = {
    BLACK: "black_button",
    BLUE: "blue_button",
    RED: "red_button",
    YELLOW: "yellow_button",
    GREEN: "green_button",
    VIOLET: "violet_button",
    PINK: "pink_button",
    ORANGE: "orange_button",
    BROWN: "brown_button"
};
var color_line = {
    BLACK: "black",
    BLUE: "blue",
    RED: "red",
    YELLOW: "yellow",
    GREEN: "green",
    VIOLET: "violet",
    PINK: "pink",
    ORANGE: "orange",
    BROWN: "brown",
    WHITE: "white"
};
var area_de_dibujo = document.getElementById("recuadro");
var area = area_de_dibujo.getContext("2d");

area_de_dibujo.addEventListener("mousedown", dibujarMouse);
area_de_dibujo.addEventListener("mouseup", dibujarMouse);

document.getElementById("black_button").addEventListener("click", colorLinea);
document.getElementById("blue_button").addEventListener("click", colorLinea);
document.getElementById("red_button").addEventListener("click", colorLinea);
document.getElementById("yellow_button").addEventListener("click", colorLinea);
document.getElementById("green_button").addEventListener("click", colorLinea);
document.getElementById("violet_button").addEventListener("click", colorLinea);
document.getElementById("pink_button").addEventListener("click", colorLinea);
document.getElementById("orange_button").addEventListener("click", colorLinea);
document.getElementById("brown_button").addEventListener("click", colorLinea);

function dibujarMouse(elemeto)
{
    var x = elemeto.offsetX;
    var y = elemeto.offsetY;

    if(elemeto.button == mouse.LEFT && elemeto.buttons == mouse.DOWN)
    {
        area_de_dibujo.addEventListener("mousemove", dibujarMouse);
        // el evento mousemove es llamado aquí para que no empiece a realizar trazos la función hasta que se cumplan las condiciones/
        dibujarLinea(color_line, x-1, y-1, x+1, y+1, area);
    }
}

function dibujarLinea(color, x_i, y_i, x_f, y_f, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_i, y_i);
    lienzo.lineTo(x_f, y_f);
    lienzo.stroke();
    lienzo.closePath();
}

//código para elegir el color de la línea en base al objeto color_line/
function colorLinea(evento_color)
{
    switch(evento_color.target.id)
    {
        case color_boton.BLACK:
            color_line = color_line.BLACK;
        break;
        case color_boton.BLUE:
            color_line = color_line.BLUE;
        break;
        case color_boton.RED:
            color_line = color_line.RED;
        break;
        case color_boton.YELLOW:
            color_line = color_line.YELLOW;
        break;
        case color_boton.GREEN:
            color_line = color_line.GREEN;
        break;
        case color_boton.VIOLET:
            color_line = color_line.VIOLET;
        break;
        case color_boton.PINK:
            color_line = color_line.PINK;
        break;
        case color_boton.ORANGE:
            color_line = color_line.ORANGE;
        break;
        case color_boton.BROWN:
            color_line = color_line.BROWN;
        break;
        default:
            color_line = color_line.WHITE;
    }
}