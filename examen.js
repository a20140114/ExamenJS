var nombre = prompt("Inserte su nombre:")
alert("Hola " + nombre + ", bienvenido/a al cuestionario de los mares")
var correcta = 0
var incorrecta = 0

var pregunta1 = prompt("1. ¿Cuánta agua hay en la Tierra?; A. Alrededor de un 41% de la superficie terrestre es agua. ; B. Alrededor de un 51% de la superficie terrestre es agua ; C. Alrededor de un 71% de la superficie terrestre es agua")

if(pregunta1 = "C"){
    correcta = + 1
    alert("Lo has hecho bien" + nombre)
}else{
    incorrecta = + 1
    alert("Vuelve a intentarlo" + nombre)
}

var pregunta2 = prompt("2-¿Qué océano es el más grande? ; A. El Pacífico ; B. El Atlántico ; C. El Índico")

if(pregunta2 = "A"){
    correcta = + 1
    alert("Lo has hecho bien" + nombre)
}else{
    incorrecta = + 1
    alert("Vuelve a intentarlo" + nombre)
}


var pregunta3 = prompt("3. ¿Cuánto mide la parte más profunda de los Océanos? ; A. 11 Km ; B. 23 Km ; C. 31 Km")

if(pregunta3 = "A"){
    correcta = + 1
    alert("Lo has hecho bien" + nombre)
}else{
    incorrecta = + 1
    alert("Vuelve a intentarlo" + nombre)
}
