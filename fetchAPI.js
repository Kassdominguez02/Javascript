// Javascript sincrono

console.log("inicai sincrono");

function doSync(){
    console.log("se ejecuta la funcion dos");
}
    function unoSync(){
        console.log("se ejecuta la funcion uno");
        doSync();
        console.log("se ejecuta el codigo 3");
    }


    unoSync();
    console.log("fin de sincrono");


// Javascript asincrono
console-log("inicio de asincrono");

function dosAsync(){

    setTimeout(function(){


        console.log("dos");
    }, 5000); //tiempo en milisegundos
}



function unoAsync(){

    dosAsync();
    console.log("tres");
}

unoAsync();

console.log("fin asincrono");


/*

ya que entendemos que la asincronia nos servira para conectarnos con el un servidor, y que sin importar la respuesta que este nos de(exista o no)
o incluso el tiempo que tarde en responder (milisegundos o segundos), es necesario saber que hay carios mecanismos para manejar operaciones asincronas en JS

-CALLBACKS (llamadas de vuelta): la forma mas clasica de gestionar la asincronia

-promises (pronesas):forma moderna

-Async/Await: forma moderna con una sintaxis mas ligera.


que es un  callback

un callback es una funcion que se pasa como argumento a otra funcion. esta funcion se ejecuta desoues de que otra lo haga.
este mecanismo nos ayuda a controlar que cierto codigo no se ejecute antes de que el otro termine.

para que la necesitamos?

sabemos que JS trabaja de forma descendente, estonces habra casos que queramos hacer que un codigo se ejecute despues de que ocurra otra cosa, tambien de forma no secuencial.




*/

function hazclic(){
    console.log("le hiciste clic al boton"); //funcion sincrona

}

const boton=document.getElementById("boton");
boton.addEventListener("click", hazClic);


// ejemplo de callback

// defino una funcion que toma un numero y un callback (function) como parametros

function dobleNumero(num, callback){
    const resultado=num*2;
    callback(resultado);
}

// definir una funcion para mostrar resultado
function mostrarResultado()