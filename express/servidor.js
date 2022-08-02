/* como utilizar el paquete express:

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

*/

var cafecito = require("express");
/* require es una función que busca dentro del equipo las dependencias pertenecientes
a Express y las almacena en la instancia creada para el efecto */
var aplicacion = cafecito();

aplicacion.get("/", inicio);
// get es la url "/" sería el home
// es como addEventListener(), solo que en vez del evento, colocamos el pedazo de url que se va a abrir
aplicacion.get("/cursos", cursos);//puedo crear otra url

function inicio(peticion, resultado)
{
    resultado.send("Este es el <strong>home</strong>");
}

function cursos(peticion, resultado)
{
    resultado.send("Estos son los <strong>cursos</strong>");
}

aplicacion.listen(8989); //esto ppone a correr el servidor en un puerto específico