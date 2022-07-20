var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var papel = d.getContext("2d");
var ancho = d.width;
var color_lad = "#554D63";

dibujarLinea(color_lad, 1, 1, 1, 299);
dibujarLinea(color_lad, 1, 299, 299, 299);
dibujarLinea(color_lad, 299, 299, 299, 1);
dibujarLinea(color_lad, 299, 1, 1, 1);

function dibujarLinea(color, x_i, y_i, x_f, y_f)
{
    papel.beginPath();
    papel.strokeStyle = color;
    papel.moveTo(x_i, y_i);
    papel.lineTo(x_f, y_f);
    papel.stroke();
    papel.closePath();
}

function dibujoPorClick()
{
    var linea = parseInt(texto.value);
    var i = 0;
    var color_dib = "#C1AFE3";
    var yi, xf;
    var interlineado = ancho / linea;

    while(i < linea)
{
    yi = ancho - i * interlineado;
    xf = (i + 1) * interlineado;
    dibujarLinea(color_dib, 0, yi, xf, 0);
    i = i + 1;
}

    for(i=0; i<linea; i++)
    {
        yi = (i * interlineado);
        xf = ancho - interlineado * (i + 1);
        dibujarLinea(color_dib, ancho, yi, xf, ancho);
    }
}