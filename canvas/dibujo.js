var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color, x_i, y_i, x_f, y_f)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_i, y_i);
    lienzo.lineTo(x_f, y_f);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea("green", 40, 10, 300, 250)