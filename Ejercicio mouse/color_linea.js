document.getElementById("black_button").addEventListener("click", colorLinea);
document.getElementById("blue_button").addEventListener("click", colorLinea);
document.getElementById("red_button").addEventListener("click", colorLinea);
document.getElementById("yellow_button").addEventListener("click", colorLinea);
document.getElementById("green_button").addEventListener("click", colorLinea);
document.getElementById("violet_button").addEventListener("click", colorLinea);
document.getElementById("pink_button").addEventListener("click", colorLinea);
document.getElementById("orange_button").addEventListener("click", colorLinea);
document.getElementById("brown_button").addEventListener("click", colorLinea);

var color_boton = {
    BLACK: "black_button",
    BLUE: "blue_button",
    RED: "red_button",
    YELLOW: "yellow_button",
    GREEN: "green_button",
    VIOLET: "violet_button",
    PINK: "pink_button",
    ORANGE: "orange_button",
    BROWN: "brown_button"
};
var color_line = {
    BLACK: "black",
    BLUE: "blue",
    RED: "red",
    YELLOW: "yellow",
    GREEN: "green",
    VIOLET: "violet",
    PINK: "pink",
    ORANGE: "orange",
    BROWN: "brown",
    WHITE: "white"
};
console.log(color_line);

function colorLinea(evento_color)
{
    switch(evento_color.target.id)
    {
        case color_boton.BLACK:
            color_line = color_line.BLACK;
            console.log(evento_color.target.id);
            console.log(color_line);
        break;
        case color_boton.BLUE:
            color_line.BLUE;
        break;
        case color_boton.RED:
            color_line.RED;
        break;
        case color_boton.YELLOW:
            color_line.YELLOW;
        break;
        case color_boton.GREEN:
            color_line.GREEN;
        break;
        case color_boton.VIOLET:
            color_line.VIOLET;
        break;
        case color_boton.PINK:
            color_line.PINK;
        break;
        case color_boton.ORANGE:
            color_line.ORANGE;
        break;
        case color_boton.BROWN:
            color_line.BROWN;
        break;
        default:
            color_line.WHITE;
    }
}