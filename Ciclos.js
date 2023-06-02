/*
Bucles e iteraciones

En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas.



*/

/*

- While (mientras)
 - Do While (hacer mientras)
 - For (para)



While (mientras)

Este bucle nos sirve para realizar una tarea repetitiva, mientras una condicion sea VERDADERA. A diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condicion y ejecuta el bloque de codigo hasta que la condicion devuelva FALSE.

*/

let rolDeUsuario = "registrado"; //esto ya esta definido


while (!"registrado") { //la evaluacion es sobre el rol
    
    function registrarUsuario(){
        console.log("Usuario Registrado");
    }

}


dejaloComprar();

let Felipe="listaDeAmigos";
let Fernanda="bloqueada";

while("listaDeAmigos"){
    console.log("Mostrar publicacion");
}


//variable tiempo de coccion que servira como contador

var tiempoTranscurridoDeCoccion=0;

//Usamoa ciclo do while

do{
    console.log("horneando las galletas..");
    tiempoTranscurridoDeCoccion +=5;


//Todo el bloque de codigo se va evaluar mientras el tiempo de coccion sea menor a 30 minutos. Esto es porque las galletas se puden cocinar en 5, 10, 15, 20 o 25 minutos, teniendo un maximo de 30. Si pasamos de ese tiempo, puede que las galletas se quemen. 

//Esto es como si revisaramos el horno cada 5 minutos


} while (tiempoTranscurridoDeCoccion <30);


console.log("Las galletas estan listas");
/*

Do - While (hacer mientras)

Es similar al while, con la diferencia de que la condicion se evalua despues de cada iteracion. Esto garantiza que el bloque de codigo se ejecute al menos una vez, incluso si la condicion inicial es falsa



do {
    //bloque de codigo que vamos a ejecutar
} while (condicion);


*/

/*For (para)

Se utiliza cuandos se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.


for (inicializacion; condicion ; expresion de iteracion){
    //Bloque de codigo a ejecutar
}


 - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

 - condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 

 - expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.


*/

console.log("Ejemplo de la pizza con For")


//Definir mi lista de pasos
var pasosDeReceta = ["Preparar la masa", "Agregar los ingredientes", "Hornear la pizza"]; //3 pasos

//Definir mi lista de tiempo por paso
var tiempoPorPaso = [15, 10, 20];


//En el ciclo for, para cada paso, se tiene un tiempo estimado.

//Para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso, voy incrementando mi variable paso para saber cuantos pasos me quedan pendientes. Cuando ya no haya pasos, termino el proceso.
for (var i = 0; i < pasosDeReceta.length; i++){

    console.log("Realizando paso " + pasosDeReceta[i]);
    console.log("Esperando " + tiempoPorPaso[i] + " minutos");

}

console.log("Disfruta tu pizza");

//Ejemplo contador FOR (chohetes)

for (let i=10; i>0; i--){
    console.log("faltan"+ i+"segundos para el despegue");
}

//Ejemplo de For para cupones de decsuento:

for(let cupones=10; cupones>0; cupones--){
    console.log("tienes un cupon de descuento, nos quedan 10"+cupones);
    
}
