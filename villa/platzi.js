var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOk: false
}
var vaca = {
    url: "vaca.png",
    cargaOk: false //por defecto comieza en false
};
var cerdo = {
    url: "cerdo.png",
    cargaOk: false
}
var pollo = {
    url: "pollo.png",
    cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo)
//tengo que esperar a que cargue la imagen desde su ubicación antes de ejecutar el código/
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

var cant_vaca = aleatorio(1, 10);
var cant_vaca_final = cant_vaca;
var cant_pollo = aleatorio(1, 10);
var cant_pollo_final = cant_pollo;

var x_vaca = new Array();
var y_vaca = new Array();
var x_cerdo = aleatorio(0, 420);
var y_cerdo = aleatorio(0, 420);
var x_pollo = new Array ();
var y_pollo = new Array ();

document.addEventListener("keydown", moverCerdo);
var tecla = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;
    memorizarPosicion();
    dibujar()
}

function cargarCerdos()
{
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOk = true;
    memorizarPosicion();
    dibujar();
}

function memorizarPosicion()
{
    var ancho_fig = 60
    
    if(fondo.cargaOk)//no es necesario el ==true; si es verdadero, se ejcuta el código del corchete/
    {
        papel.drawImage(fondo.imagen, 0, 0);
        /* el primer parámetro es el objeto completo imagen y los otros la posición en x e y por
        donde la imagen se empieza a desplegar */
    }
    if(vaca.cargaOk)
    {
        console.log(cant_vaca, "vacas");
        for(var v = 0; v < cant_vaca; v++)
        {
            var xv = aleatorio(0, 420 / ancho_fig);
            var xfv = xv * ancho_fig;
            var yv = aleatorio(0, 420 / ancho_fig);
            var yfv = yv * ancho_fig;
            x_vaca[v] = xfv;
            y_vaca[v] = yfv;
        }

    }
    if(pollo.cargaOk)
    {
        console.log(cant_pollo, "pollos")
        for(var p = 0; p < cant_pollo; p++)
        {
            var xp = aleatorio(0, 420 / ancho_fig);
            var xfp = xp * ancho_fig;
            var yp = aleatorio(0, 420/ ancho_fig);
            var yfp = yp * ancho_fig;
            x_pollo[p] = xfp;
            y_pollo[p] = yfp;
        }
    }
}

function dibujar()
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOk)
    {
        for(var v = 0; v < cant_vaca_final; v++)
        {
            papel.drawImage(vaca.imagen, x_vaca[v], y_vaca[v]);
        }
    }
    if(cerdo.cargaOk)
    {
        papel.drawImage(cerdo.imagen, x_cerdo, y_cerdo);
    }
    if(pollo.cargaOk)
    {
        for(var p = 0; p < cant_pollo_final; p++)
        {
            papel.drawImage(pollo.imagen, x_pollo[p], y_pollo[p]);
        }

    }
}

function moverCerdo(evento) //modificar esta función
{
    var movimiento = 20
    switch(evento.keyCode)
    {
        case(tecla.RIGHT):
        {
            papel.drawImage(cerdo.imagen, x_cerdo + movimiento, y_cerdo);
            x_cerdo = x_cerdo + movimiento;
            dibujar();
        }
        break;
        case(tecla.LEFT):
        {
            papel.drawImage(cerdo.imagen, x_cerdo - movimiento, y_cerdo);
            x_cerdo = x_cerdo - movimiento;
            dibujar();
        }
        break;
        case(tecla.DOWN):
        {
            papel.drawImage(cerdo.imagen, x_cerdo, y_cerdo + movimiento);
            y_cerdo = y_cerdo + movimiento;
            dibujar();
        }
        break;
        case(tecla.UP):
        {
            papel.drawImage(cerdo.imagen, x_cerdo, y_cerdo - movimiento);
            y_cerdo = y_cerdo - movimiento;
            dibujar();
        }
        break;
    }
}

function aleatorio (min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min +1)) + min;
    return resultado;
}