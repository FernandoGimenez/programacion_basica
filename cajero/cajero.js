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
var provisorio = [];
var caja = [];  
caja.push( new Billete(1000, 5) );
caja.push( new Billete(500, 5) );
caja.push( new Billete(200, 10) );
caja.push( new Billete(100, 50) );
caja.push( new Billete(50, 100) );
caja.push( new Billete(20, 10) );

var dinero = 0;
var div = 0;
var papeles = 0;
var total_caja = 0;
var total_provisorio = 0;

var boton_extraer = document.getElementById("extraer");
boton_extraer.addEventListener("click", entregarDinero);
boton_extraer.addEventListener("click", saldoCajero);

var boton_saldo = document.getElementById("saldo");
boton_saldo.addEventListener("click", comprobarSaldo);

function entregarDinero()
{
    var monto_usuario = document.getElementById("cant_dinero");
    var dinero = parseInt(monto_usuario.value);
    var dinero_provisorio = parseInt(monto_usuario.value);
    saldoCajero();

    if(dinero <= total_caja)
    {
        for(bi of caja)
        {
            if(dinero_provisorio > 0)
            {
                div = Math.floor(dinero_provisorio / bi.valor);
                if(div > bi.cantidad)
                {
                    papeles = bi.cantidad;
                }
                else
                {
                    papeles = div;
                }
                provisorio.push( new Billete(bi.valor, papeles) );
                dinero_provisorio -= bi.valor * papeles;
            }
        }

        var monto_provisorio = saldoProvisorio();

        if(dinero == monto_provisorio)
        {
            for(bi of caja)
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

                    caja.splice( caja.indexOf(bi), 1 );
                    caja.push( new Billete(bi.valor, bi.cantidad - papeles) );
                    entregado.push( new Billete(bi.valor, papeles) );
                    dinero -= bi.valor * papeles
                    ordenarCaja();
                }
            }
            crearResultados("extraer", "boton_limpiar", "Nueva extracción") + "<br />"
            ocultarMostrarBotones(true);
        }
        else
        {
            crearResultados("error", "boton_limpiar", "Probar con otro monto", "Lo siento, no puedo entregarte ese monto :(");
            ocultarMostrarBotones(true);
        }
    }
    else if(monto_usuario.value == 0)
    {
        crearResultados("error", "boton_limpiar", "Probar de nuevo", "Digite algún monto para extraer");
        ocultarMostrarBotones(true);
    }
    else
    {
        crearResultados("error", "boton_limpiar", "Prueba con un monto menor", "Soy un cajero pobre, no me alcanza para darte ese monto :(");
        ocultarMostrarBotones(true);
    }
}

function saldoCajero()
{
    for(var saldo of caja)
    {
        total_caja = saldo.valor * saldo.cantidad + total_caja;
    }
    return total_caja;
}

function saldoProvisorio()
{
    for(var saldo of provisorio)
    {
        total_provisorio = saldo.valor * saldo.cantidad + total_provisorio;
    }
    return total_provisorio;
}

function ordenarCaja()
{
    caja.sort(
        function resta(a, b)
        {
            return b.valor - a.valor;
        }
    )
}

function ocultarMostrarBotones(oculto) //variable booleana
{//creé esta función para obligar al usuario a presionar el botón que borra todo antes de hacer una nueva operación
    if(oculto)
    {
        document.getElementById("extraer").style.display = "none";
        document.getElementById("saldo").style.display = "none";
    }
    else
    {
        document.getElementById("extraer").style.display = "";
        document.getElementById("saldo").style.display = "";
    }
}

function comprobarSaldo() //pendiente de crear, ver errores
{
    saldoCajero();
    if(total_caja == 0)
    {
        crearResultados("error", "boton_limpiar", "Regresa otro día", "Lo siento, estoy más seco que mi creador :(");
        ocultarMostrarBotones(true);
    }
    else
    {
        crearResultados("saldo", "boton_limpiar", "Sacar plata ya!!!", "El saldo de este cajero es: $" + total_caja)
        ocultarMostrarBotones(true);
    }
}

function crearResultados(condicion, nombre_boton, texto_boton, texto_parrafo)
{//condicion puede ser "extraer" o "saldo"
    var nombre_boton = document.createElement("button");
    nombre_boton.type = "button";
    nombre_boton.innerText = texto_boton;
    document.body.appendChild(nombre_boton);

    switch(condicion)
    {
        case "extraer":
            var resultado = document.createElement("p");
            document.body.appendChild(resultado);
        //pongo estos dos lineas por fuera del ciclo para que me genere un solo parrafo que despues pueda eliminar
            for(var e of entregado)
            {
                if(e.cantidad > 0)
                {
                    //agregado de imagen y cantidad en caso de entregar dinero
                    resultado.appendChild(e.imagen);
                    resultado.innerHTML += " x" + e.cantidad + " billetes" + "<br />";
                }
            }
        break;
        case "saldo":
            var resultado = document.createElement("p");
            resultado.innerHTML = texto_parrafo + "<br />";
            document.body.appendChild(resultado) + "<br />";
            for(var sal of caja)
            {
                //agregado de imagen y cantidad en caso de entregar dinero
                resultado.appendChild(sal.imagen);
                resultado.innerHTML += " x" + sal.cantidad + " billetes" + "<br />";
            }
        break;
        case "error":
            var resultado = document.createElement("p");
            var contenido = document.createTextNode(texto_parrafo);
            resultado.appendChild(contenido);
            document.body.appendChild(resultado);
            //creo el parrafo en vez de llamarlo por id, porque por alguna razón que desconozco me daba error al intentar llamarlo mas de una vez
        break;
        default:
            console.log("Revisá el código, las opciones son: 'extraer', 'saldo' y 'error'");
        break;
    }

    nombre_boton.addEventListener("click", limpiarPantalla);

    function limpiarPantalla()
    {
        resultado.parentNode.removeChild(resultado);
        nombre_boton.parentNode.removeChild(nombre_boton);
        document.getElementById("cant_dinero").value = ""; //linea de código para borrar lo que escribí en la caja numérica

        entregado.splice(0);//borra el array completo para poder reutilizarlo en la próxima operación
        provisorio.splice(0);
        total_provisorio = 0;
        total_caja = 0;
        ocultarMostrarBotones(false);
    }
}