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



