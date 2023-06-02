//Traee o referenciar todos los elementos del html y lo vamos a guardar en variables para poder utilizarlos despues


// Metodo de selection

let numeroContador=document.getElementById("numeroContador");

let botonIncremento=document.getElementById("botonIncrementar");
let botonDecremento=document.getElementById("botonDecrementar");

let botonResetear=document.querySelector("#botonResetear");

let memeRandom=document.querySelector("#memeRandom");

//Declarar una variable con un estado inicial

var valorContador=0;

//logica de negocio

function incrementar(){
valorContador++;
numeroContador.innerHTML=valorContador;


// si el valor de mi contador es igual a 10, entonces se ejecuta mostrar imagen

if (valorContador===10){
    mostrarImagen();
}

}




function decrementar(){
    valorContador--;
    numeroContador.innerHTML=valorContador;

}



function resetear(){
    valorContador=0;
    numeroContador.innerHTML=valorContador;

}


// funcion para mostrar la imagen

// la intencion es que cuando la funcion sea invocada, recorra el arreglo y tome uno de los elementos de forma aleatoria

function mostrarImagen(){
    var coleccionImagenes=["./img/meme1.png", "./img/meme2.png", "./img/meme3.png", "./img/meme4.png"];

    let indexRandom=Math.floor(Math.random()*coleccionImagenes.length);

    //obtener la URL o direccion aleatoria

    let urlAleatoria=coleccionImagenes[indexRandom];

    //agrego la URL al atributo
    memeRandom.src=urlAleatoria;
    memeRandom.style.display="block";



}

/*Evento con EventListener

Permite escuchar el evento indicado (primero parametro) y en el caso de que ocurra (escuche), se ejcuta la funcion asociada (segundo parametro)


Sintaxis

object.addEventListener(nombreDelEvento, funcionQueSeDispara)

*/


botonIncremento.addEventListener("click",incrementar);

botonDecremento.addEventListener("click",decrementar);


botonResetear.addEventListener("click",resetear);
