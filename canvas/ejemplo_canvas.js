var d = document.getElementById("dibujito"); //es un método del documento que trae un elemeto por su id/

var lienzo = d.getContext("2d"); //es un método del canvas (rep. por d en este caso). Puede ser 2d o 3d/

//liezo, es el contexto en le cual ejecuto las funciones para dibujar. Podemos crear una función con el siguiente esquema/
lienzo.beginPath(); //así es como JS le llama a arrancar un trazao. Es una función que no tiene parámetros, solo es invocada/

lienzo.strokeStyle = "red"; //variable que le asigna el color a la línea/

lienzo.moveTo(100, 100); //método del canvas que indica las coordenadas (x, y) de arranque/

lienzo.lineTo(200, 200); //método para trazar la linea (en este caso)/

lienzo.stroke(); //es la función o método que dibuja la linea/

lienzo.closePath(); //método que "levanta el lapiz", si no invoco esta función, la proxima línea parte de ese punto/
