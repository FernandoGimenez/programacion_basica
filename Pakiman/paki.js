var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
/* estoy creando una colección de Pakimanes, sin crear una variable que lo indique.
En el parametro de push, es donde estoy creando al instancia del nuevo objeto.
Antes: var tocinauro = new Pakiman("Pokaho", 80, 50); */
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 120, 40));

for(var fer of coleccion)
//of -> nos guarda el objeto (la instancia de la clase) en la variable
//in -> nos guarda el indice del array en la variable durante cada vuelta del ciclo
{
    fer.mostrar();
}
