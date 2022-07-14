var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var linea = 100;
var color_dib = "#C1AFE3"
var yi, xf;
var color_lad = "#554D63"
var interlineado = 300 / linea

dibujarLinea(color_lad, 1, 1, 1, 299);
dibujarLinea(color_lad, 1, 299, 299, 299);
dibujarLinea(color_lad, 299, 299, 299, 1);
dibujarLinea(color_lad, 299, 1, 1, 1);

for(i=0; i<linea; i++)
{
yi = (i * interlineado);
xf = 300 - interlineado * (i + 1);
dibujarLinea(color_dib, 300, yi, xf, 300);
}

function dibujarLinea(color, x_i, y_i, x_f, y_f)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_i, y_i);
    lienzo.lineTo(x_f, y_f);
    lienzo.stroke();
    lienzo.closePath();
}
