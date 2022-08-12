class Cliente
{
    constructor(i, n, b, s)
    {
        this.id_cuenta = i;
        this.nombre = n;
        this.banco = b;
        this.saldo = s;
    }
}

let banco = [];
banco.push("Nacion");
banco.push("Galicia");
banco.push("Macro");
banco.push("Santander");

let cliente = [];
cliente.push(new Cliente("001", "Jonh Doe", "Nacion", 10000));
cliente.push(new Cliente("002", "Cosme Fulanito", "Macro", 1000));
cliente.push(new Cliente("003", "Bill Gates", "Galicia", 1000000000));
cliente.push(new Cliente("004", "Natalia Natalia", "Santander", 85000));
cliente.push(new Cliente("005", "Alan Britos", "Nacion", 10000));
cliente.push(new Cliente("006", "Debora Dora", "Nacion", 25000));
cliente.push(new Cliente("007", "Esteban Quito", "Patagonia", 95000));

let usuario_id = document.getElementById("id_cliente");//número que tipea el cliente para ingresar. función identificación
let destinatario = document.getElementById("id_destinatario");//del menu de transferencia. función tranferir

let date = new Date();
let hora_actual = date.getHours();

let boton_aceptar = document.getElementById("aceptar");
boton_aceptar.addEventListener("click", indentificacion);

let boton_realiza_tranferencia = document.getElementById("transferir");
boton_realiza_tranferencia.addEventListener("click", horarioTransferencia);

let boton_salir = document.getElementById("salir");
boton_salir.addEventListener("click", salirSubmenu);

let boton_tranferir = document.getElementById("transferencia");
boton_tranferir.addEventListener("click", tranferir);

let boton_consulta_saldo = document.getElementById("saldo_usuario");
boton_consulta_saldo.addEventListener("click", consultaSaldo);

let boton_cancelar_tranferir = document.getElementById("cancelar_transferencia");
boton_cancelar_tranferir.addEventListener("click", cancelarTransferir);

function mostrarMenu()
{
    document.getElementById("menu_principal").style.visibility = "visible";
}

function mostrarSubmenu()
{
    document.getElementById("submenu").style.visibility = "visible";
}

function mostrarMenuTranferir()
{
    document.getElementById("menu_transferir").style.visibility = "visible";
}

function ejecutarAlCargar() //función para poder ejecutar mas de una función la cargar la página
{
    mueveReloj();
    ocultarSubmenu();
    ocultarMenuTranferir();
}

function ocultarMenu()
{
    document.getElementById("menu_principal").style.visibility = "hidden";
}

function ocultarSubmenu()
{
    document.getElementById("submenu").style.visibility = "hidden";
}

function ocultarMenuTranferir()
{
    document.getElementById("menu_transferir").style.visibility = "hidden";
}

function mueveReloj()
{
    let date = new Date();
    let hora = date.getHours();
    let minuto = date.getMinutes();
    let segundo = date.getSeconds();

    let ver_hora = "Hora actual: " + hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = ver_hora;

    setTimeout("mueveReloj()",1000);
}

function indentificacion()
{
    let user = "NaN";
    let nombre_cliente = "";

    for(c of cliente)
        {
            if(usuario_id.value == c.id_cuenta)
            {
                user = c.id_cuenta;
                nombre_cliente = c.nombre
            }
        }

    if(usuario_id.value == user)
    {
        let menu = document.getElementById("saludo");
        let saludo = document.createTextNode("Hola " + nombre_cliente + ". ¿Qué operación querés realizar?");
        menu.appendChild(saludo);
        mostrarSubmenu();
        ocultarMenu();
    }
    else
    {
        crearResultados("error", "boton_limpiar", "Volver", "El número de cuenta ingresado no es válido");
        ocultarMenu();
    }
}

function horarioTransferencia()
{
    if(5 <= hora_actual && hora_actual < 12 || 15 <= hora_actual && hora_actual < 22)
    {
        mostrarMenuTranferir();
        ocultarSubmenu();
    }
    else
    {
        crearResultados("error", "boton_limpiar", "Realizar otra operación", "Estas fuera del horario para realizar transferencias");
        ocultarMenu();
    }
}

function salirSubmenu()
{
    let menu = document.getElementById("saludo");
    menu.removeChild(menu.lastChild);
    //menu.nodeValue.removeChild(saludo); <-no uso esta expresión porque borra "saludo" completo y no se puede volver a utilizar
    ocultarSubmenu();
    mostrarMenu();
    document.getElementById("id_cliente").value = "";
}

function consultaSaldo()
{
    let saldo_cliente = 0;
    for(s of cliente)
    {
        if(usuario_id.value == s.id_cuenta)
            {
                saldo_cliente = s.saldo;
            }
    }
    crearResultados("error", "boton_limpiar", "Aceptar", "Tu saldo es " + saldo_cliente);
    ocultarMenu();
}

function tranferir()
{
    let monto_transferencia = document.getElementById("dinero_transferir");
    let dinero_transferencia = parseInt(monto_transferencia.value);

    let user = "";
    let nombre_cliente = ""
    let banco_cliente = "";
    let saldo_cliente = 0;

    let destino = "NaN";
    let nombre_destino = ""
    let banco_destino = "";
    let saldo_destino = 0;

    for(c of cliente)
    {
        if(usuario_id.value == c.id_cuenta)
            {
                user = c.id_cuenta;
                nombre_cliente = c.nombre;
                banco_cliente = c.banco;
                saldo_cliente = c.saldo;
            }

        if(destinatario.value == c.id_cuenta)
            {
                destino = c.id_cuenta;
                nombre_destino = c.nombre;
                banco_destino = c.banco;
                saldo_destino = c.saldo;
            }   
    }

    if(destino == user || destino != destinatario.value || saldo_destino == 0)
    {
        crearResultados("error", "boton_limpiar", "Probar de nuevo", "Algunos de los datos ingresados son incorrectos");
        ocultarMenu();
    }
    else
    {
        if(banco_cliente == banco_destino && dinero_transferencia <= saldo_cliente)//condicional para ver si aplican comisiones de transferencia
        {
            let usuario_index = cliente.findIndex(elemento => {//metodo para encontrar el indice del array de objetos cliente
                return elemento.id_cuenta === user
                });
            let destino_index = cliente.findIndex(elemento => {
                return elemento.id_cuenta === destino
                });
            
            saldo_final_cliente = saldo_cliente - dinero_transferencia
            saldo_final_destino = saldo_destino + dinero_transferencia
            
            sfc = cliente.splice(usuario_index, 1, new Cliente(user, nombre_cliente, banco_cliente, saldo_final_cliente));
            sfd = cliente.splice(destino_index, 1, new Cliente(destino, nombre_destino, banco_destino, saldo_final_destino));

            crearResultados("error", "boton_limpiar", "Aceptar", "Se han transferido " + monto_transferencia + " a " + nombre_destino + ". El saldo de tu cuenta es " + saldo_final_cliente);
            ocultarMenu();
        }
        else if(banco_cliente != banco_destino && dinero_transferencia*1.01 <= saldo_cliente)
        {
            let usuario_index = cliente.findIndex(elemento => {
                return elemento.id_cuenta === user
                });
            let destino_index = cliente.findIndex(elemento => {
                return elemento.id_cuenta === destino
                });
        
            dinero_con_comisión = dinero_transferencia * 1.01;
            saldo_final_cliente = saldo_cliente - dinero_con_comisión;
            saldo_final_destino = saldo_destino + dinero_con_comisión;
            
            sfc = cliente.splice(usuario_index, 1, new Cliente(user, nombre_cliente, banco_cliente, saldo_final_cliente));
            sfd = cliente.splice(destino_index, 1, new Cliente(destino, nombre_destino, banco_destino, saldo_final_destino));

            crearResultados("error", "boton_limpiar", "Aceptar", "Se han transferido " + dinero_con_comisión + " a " + nombre_destino + ". El saldo de tu cuenta es " + saldo_final_cliente);
            ocultarMenu();
        }
        else
        {
            crearResultados("error", "boton_limpiar", "Aceptar", "Tu saldo es insuficiente");
            ocultarMenu();
        }
    }

}
let saldo_final_cliente = 0;
let saldo_final_destino = 0;

function cancelarTransferir()
{
    document.getElementById("dinero_transferir").value = "";
    document.getElementById("id_destinatario").value = "";
    ocultarMenuTranferir();
    mostrarSubmenu();
    document.getElementById("cant_dinero").value = "";
}