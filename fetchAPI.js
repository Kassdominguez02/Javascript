// Javascript sincrono

console.log("inicai sincrono");

function doSync() {
    console.log("se ejecuta la funcion dos");
}
function unoSync() {
    console.log("se ejecuta la funcion uno");
    doSync();
    console.log("se ejecuta el codigo 3");
}


unoSync();
console.log("fin de sincrono");


// Javascript asincrono
console.log("inicio de asincrono");

function dosAsync() {

    setTimeout(function () {


        console.log("dos");
    }, 5000); //tiempo en milisegundos
}



function unoAsync() {

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

function hazclic() {
    console.log("le hiciste clic al boton"); //funcion sincrona

}

/*
const boton =document.getElementById("boton");
boton.addEventListener("click", hazclic);

*/

// ejemplo de callback

// defino una funcion que toma un numero y un callback (function) como parametros

function dobleNumero(num, callback) {
    const resultado = num * 2;
    callback(resultado);
}

// definir una funcion para mostrar resultado
function mostrarResultado(resultado) {
    console.log("el resulrado es: "), resultado;
}

dobleNumero(5, mostrarResultado);

/*
Promises (promesas)

son otro mecanismo para manejar la sincronia. Utilizar promesas hace que el codigo sea mas legible y practico de usar callbacks, y como su nombre lo indica una promesa es algo que en un principio
no sabemos si se va a cumplir, pero en un  futuro pueden pasar varias cosas. la gran ventaja de utilizar promesas es que evitamos anidar muchas funciones y usamos una sola funcion (metodo) para manejar los  callbacks.

NOTA: las promesas son objetos

promise.then

promise.catch

las promesas tienen estados:

-pendiente (pending): es el estado inicial de nuestra promesa, aqui aun no tenemos resultados.

-fullfilled: cuando la operacion es asincrona se completa con exito (resolve)

-rejected (rechazo): cuando la operacion falla (reject)

tmabien las promesas, al ser objetos tienen metodos

-then (function resolve): ejecuta un callback llamado resolve cuando la promesa se cumple.

-catch (funcion reject): ejecuta un callback llamado reject cuando la promesa se rechaza.

-then (resolve, reject): puedo ejecutar las dos funciones en el mismo metodo then.


*/


//Creo una funcion llamada obtenerProductos para poder utilizar promesas y hacer la conexion a mi url para obtener datos
function obtenerProductos() {
    //cuando se ejecute la funcion, quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve, y otra cuando se rechaza
    return new Promise(function (resolve, reject) { //el objeto maneja dos funciones (resuelto, rechazo)
        fetch('https://fakestoreapi.com/products') //direccion a donde me voy a conectar y buscar
            .then(function (response) { //espero respuestas...
                if (response.ok) { //propiedad booleana (si o no hay respuesta)
                    return response.json();//metodo para convertir la respuesta a un objeto .json
                } else { //si no...
                    throw new Error("Error al obtener los productos. Error 404! Servidor no encontrado"); //lanzo un nuevo error (404)
                }
            })
            .then(function (data) { //Si hay una respuesta, resuelvo la promesa (exitosa) y ya tengo mis datos para despues jugar con ellos
                resolve(data);
            })
            .catch(function (error) { //Si no hay una respuesta, resulvo con un rechazo.
                reject(error);
            });
    });
};


// Uso de la promesa

obtenerProductos()
    .then(function (resultado) {
        console.log(resultado);
    })

    .catch(function (error) {
        console.log(error);
    });

//otro ejemplo de promesa para validad un nombre

let nombre = "Felipe";

//objeto promesa tiene 2 posibles soluciones
const promesaNombre = new Promise(function (resolve, reject) {
    if (nombre !== "Felipe") {
        reject("error, el nombre no es felipe"); //entonces rechaza la promesa
    } else {
        resolve("bienvenido, el nombre es correcto", nombre); //resuelve la promesa e imprime un dato
    }

});

console.log(promesaNombre);


/*

Ejemplo de PokeApi

-necesito la url
- promesa con los 2 posibles caminos:
    -si se resuelve traigo los datos de la api
    -si no, muestro error

*/


const obtenerPokemon = new Promise((resolve, reject) => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto') // me conecto y busco
        .then(respuesta => { //cuando se conecte..
            if (respuesta.ok) { //  si la conexion es ok
                return respuesta.json(); //guardo el dato en .json
            } else {
                throw new Error("error 404"); // muestro un error
            }
        })

        //segundo bloque (cuando ya me conecte al servidor)

        .then(datos => {
            // entonces esos datos..

            resolve(datos); //se usan como parametros de mi resolucion
        })

        // tercer bloque (solo en caso de que no se encuentre informacion)
        .catch(error => {
            reject("mensaje  de error, no encontramos tu pokemon" + error);
        });
});

//Ya que le di el mensaje a mi mesero (creacion de la promesa), ahora voy a poder mostrar la informacion si la promesa se resuelve (encuentra la info), o si se rechaza (no encuentra la info)

obtenerPokemon

    .then(pokemon => { //el valor pokemon = datos obtenidos del servidor en .json
        console.log("Pokemon obtenido", pokemon.name);
    })
    .catch(error => {
        console.log(error);
    });

/*
fetch Api es una interfaz de JS, que nos da un metodo llamado fetch, el cual nos permite manejar solicitudes HTTP (GET, POST, PUT, DELETE).

Como cuando usamos fetch API sabemos que de forma implicita estamos usando promesas, tambien de forma implicita sabemos qye esa promesa se puede resolver o rechazar.

el metodo fetch toma una url como argumento y devuelve una promesa que se resuelve como un objeto llamado "response", que incluye la respuesta de la solicitud (aparte de decirnos que la conexion es ok, "pega" la info que estamos solicitando).

Ya que tenemos el objeto llamado "response", vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc.

*/
//realizamos la peticion al servidor

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(pokeRespuesta => {  //cuando la promesa se resuelve, ejecutamos esta funcion
        return pokeRespuesta.json(); //esta funcion retorna la pokeInfo en un .json
    })

    .then(pokeInfo => {  //cuando la promesa de la conexion se resuelve, entonces ejecutamos esta otra funcion. Esta funcion guarda la informacion de la respuesta, y lo guarda en una nueva variable llamada pokeInfo.

        //Uso esa variable pra hacer muchas cosas
        console.log("El nomnbre del pokemon es: ", pokeInfo.name, "su numero de la pokedex es: ", pokeInfo.id)
        console.log(pokeInfo);
    })



    .catch(pokeError => {
        console.log("No encontramos nada de informacion", + pokeError);
    })





//Manipilacion de DOM y Fetch

const input = document.getElementById("inputPokemon");
const button = document.getElementById("botonPokemon");
const pokemonContainer = document.getElementById("pokemonContainer");



function traerPokemon(nombrePokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)

        //guardo la respuesta enJSON
        .then(respuesta => respuesta.json()) // ser resuelve la promesa

        //ese .json lo asigno a una variable llamada datos, que usare para alimentar una funcion llamada crearPokemon
        .then((datos) => {
            crearPokemon(datos);
        });
}


function crearPokemon(nombrePokemon) {
    const pokeImg = document.createElement("img"); //creo img
    pokeImg.src = nombrePokemon.sprites.front_default;
    //front_default es la propiedad donde esta mi pokemon


    const h2 = document.createElement("h2"); //creo una etiqueta h2

    h2.innerHTML = nombrePokemon.name; // le pongo el nombre del pokemon a ese h2.

    const pokeDiv = document.createElement("div"); // creamos un div para poner mi pokemon

    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);

    pokemonContainer.appendChild(pokeDiv);


}

button.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    traerPokemon(input.value); //ejecuta la funcion traerPokemon
}
);