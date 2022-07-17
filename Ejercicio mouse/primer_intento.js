/*Con éste código conseguí que se dibujara sobre el canvas al hacer click,
pero no pude detener el evento*/
var mouse = {
    MOVE: "mousemove",
    UP: "mouseup",
    DOWN: "mousedown",
    LEFT: 0,
    RIGHT: 1
};

draw_area.addEventListener("mouse.LEFT", dibujarMouse);
draw_area.addEventListener("mousedown", dibujarMouse);
draw_area.addEventListener("mouseup", dibujarMouse);

var draw_area = document.getElementById("recuadro");
var dibujo = draw_area.getContext("2d");

function dibujarMouse(evento)
{
    var line_color = "black";
    var xi = evento.offsetX;
    var yi = evento.offsetY;

    if(evento.type == mouse.MOVE)
    {
        document.addEventListener("mousemove", dibujarMouse);
        if(evento.button == mouse.LEFT)
        {
        dibujarLinea(line_color, xi-1, yi-1, xi+1, yi+1, dibujo);
        }
    }
    console.log (evento.type);
    if(evento.type == mouse.UP)
    {
        stop.dibujarMouse;
        console.log("tendría que haber parado");
    }
}

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