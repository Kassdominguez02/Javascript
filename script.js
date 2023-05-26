//alert("Estoy vivo");

//Este es un comentario de una sola linea

/*

Este 

Es 

Un

Comentario

Multilinea


*/


/*

Variables


Es un elemento del cual su valor puede cambiar o variar dependiendo la circunstancia. Esta varible ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de este espacio, es el tipo de variable que tenemos.

variable= recipiente
valor=info con la que llenamos el recipiente

declarar= poner nombre a nuestro recipiente
inicializar= llenar ese recipiente


*/

recipiente="agua";
recipiente="cafe";
recipiente="colores";
recipiente="leche";

//usamos esta linea de codigo para imprimir o mostrar la informacion de mi recipiente

console.log(recipiente)



/*
tipos de datos (primitivos y no primitivos) :

se llama primitivos porque son datos que no pueden ser modificados, ya vienen con el lenjuaje


-string: sirve para agregar valores en forma de texto. Para que se considere asi, el valor debe estar dentro comillas simples (''), dobles ("""), y backticks (``)

-Number: sirve para agregar valores en formato numerico. operaciones aritmeticas. No se necesitan comillas.

-boolean: sirven para representar valores de tipo true o false, si o no,  encencido o apagado, 0 y 1.

-Undefined: sirve para representar una variable o tipo de dato que no tiene valor.
cuando declaramos variables sin inicializar, tendremos datos del tipo undefined.

-Null: sirve para definir que un valor es nulo.

-Symbol:

-Object (no es primitivo):

-NaN (Not at number): sirve para representar un valor que no es un numero. lo obtenemos si hacemos una operacion con una variable que no es un numero o una operacion que no es posible.


*/

//Ejemplo para la concatenacion

apodoDeFelipe="el amante de los chilaquiles verdes"
console.log(apodoDeFelipe);


//Ejemplos de valores Numericos

edadDeFelipe=31;
costoDeUnGansito=18.5;
cuentaDeFelipe=-156.35;

console.log(edadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);

//Ejemplos de valores booleanos:
esAdmin=true;
contraseñaCorrecta=false;
cuentaPremium=false;

//Ejemplos de undefined

repuestaDeMiCrush="no";

precioBoletoEstacionamiento=null;

//Ejemplo de dato Nulo:

repuestaDeMiCrush=null;

//Ejemplo con valores NaN:

operacionMatematica=0/0;
console.log(operacionMatematica)

//TypeOf

console.log(typeof(esAdmin));
console.log(typeof(edadDeFelipe));
console.log(typeof(operacionMatematica));

/*Tipos de variables

en JS tenemos 3 tipos de variable

-var: era una forma principal de declarar variables. Es una variable flexible, tiene un scope global, es decir el valor de la variable esta disponible en todo el programa


-let: lo usamos para limitar el alcance de nuestra variables,  y se limita a un bloque de codigo o expresion (meter a la mama de bambi en una caja). Es una variable local

-const: una variable con un valor constante o inmutable.


*/

// Es este caso, la mama de bambi esta visible desde cualquier lugar del programa

var mamaDeBambiViva="false";

var cazador="listo para disparar"

let nombre="felipe";

const pi=3.1416;

/*

Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.


Parametros = variables que necesitamos para alimentar mi funcion (todas las  variables se tienen que utilizar)
Ejemplo: limon, azucar, vasito de agua, cucharita, hielos, egua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)
Ejemplo: prepararAguitaDeLimon


Operaciones: Conjunto de instrucciones (en orden especifico).
Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.


Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limon


*/


//1.- creamos la funcion con la palabra reservada function y le ponemos nombre, abrimos y cerramos parentesis y  llaves. los parantesis son para los parametros o argumentos, y las llaves para delimitar el bloque o funcion

// ponemos los parametros o variables dentro del parentesis

//3.- Poner las instrucciones dentro de las llaves

//invocar la funcion escribiendo su nombre y poner ()


    

function prepararAguitaDeLimon (){

    
    let limon="limon";
    let agua="agua";
    let hielos="hielos";
    let azucar="azucar";
    let vaso="vaso";
    let cuchara="cuchara";

    console.log("cortar el limon "+ limon);
    console.log("exprimir el limon ");
    console.log("agregar el limon al vaso "+ vaso);
    console.log("agregar el hielo a el vaso "+ hielos);
    console.log("agregar agua al vaso "+ agua);
    console.log("agregar azucar al gusto "+ azucar);
    console.log("mezclar y disfrutar "+ cuchara);

    
    console.log(cuchara);

}

prepararAguitaDeLimon();

//ejemplo de los 3 formas de agregar a funciones

//primera forma: usando dentro de parentesis

function suma(a, b){//valores estab undefined
    var a=5;// cambio el undefined por 5
    var b=7;// cambio el undefined por 7

    operacion=a+b;

    console.log(operacion);//imprime mi operacion


}

suma();//invocamos la funcion

//segunda forma: usando valores dentro del ()

function resta (a=8, b=5){
    operacion=a-b;
    console.log(operacion);
}

resta();

// tercera forma: Inicializando valores dentro de la invocacion

function multiplicacion(a,b){
    operacion=a*b;
    console.log(operacion);
}

multiplicacion(3,9);

//funciones anonimas

let funcionAnonima =function (a,b){
    operacion=a/b;
    console.log(operacion);

}

funcionAnonima(10,5);

/*Return

la sentencia return finaliza la ejecucion de la funcion y especifica un valor para ser devuelto a quien llama la funcionm. O lo que es es lo mismo usamos return para finalizar y tambien asignar el resultado a una variable.


*/
//funccion para dar un saludo personalizado
/*
function saludo (nombreSaludo){


    console.log("hola "+ nombreSaludo);
}

saludo("kass");*/

function saludo (){

    let nombreSaludo="Felipe";
    let apellidoSaludo="Maqueda";

    console.log("hola "+nombreSaludo);

    return nombreSaludo+" "+apellidoSaludo;
}

let nombreQueSaqueDeMiFuncion=saludo();

console.log("esta persona han visto tu aplicacion "+nombreQueSaqueDeMiFuncion);

var nombreIngresadoDesdeElNavegador =prompt("introduce tu nombre");

console.log("gracias por entrar a mi pagina "+ nombreIngresadoDesdeElNavegador);




