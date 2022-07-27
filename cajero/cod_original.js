class Billete
{
    constructor(v, c)
    {
        this.imagen = new Image;
        this.valor = v;
        this.cantidad = c;
        this.imagen.src = imagen_billete[this.valor];
    }
}

var imagen_billete = [];
imagen_billete[20] = "billete20.png";
imagen_billete[50] = "billete50.png";
imagen_billete[100] = "billete100.png";
imagen_billete[200] = "billete200.png";
imagen_billete[500] = "billete500.png";
imagen_billete[1000] = "billete1000.png";

var entregado = [];
var caja = [];  
caja.push( new Billete(1000, 5) );
caja.push( new Billete(500, 10) );
caja.push( new Billete(200, 5) );
caja.push( new Billete(100, 10) );
caja.push( new Billete(50, 10) );
caja.push( new Billete(20, 5) ); //total $12600

var dinero = 0;
var div = 0;
var papeles = 0;

var boton_extraer = document.getElementById("extraer");
boton_extraer.addEventListener("click", entregarDinero);
var parrafo_a_eliminar = document.getElementById("resultados");

function entregarDinero()
{
    var num_usuario = document.getElementById("cant_dinero");
    dinero = parseInt(num_usuario.value);

    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.valor, papeles) );
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if(dinero > 0)
    {
        parrafo_a_eliminar.innerHTML = "Soy un cajero pobre y no tengo dinero :(" + "<br />";
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                parrafo_a_eliminar.appendChild(e.imagen);
                parrafo_a_eliminar.innerHTML += " x" + e.cantidad + " billetes" + "<br />";
            }
        }
    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {
                parrafo_a_eliminar.appendChild(e.imagen);
                parrafo_a_eliminar.innerHTML += " x" + e.cantidad + " billetes" + "<br />";
            }
        }
    }
}