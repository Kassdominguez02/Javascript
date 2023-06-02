/*

Arreglos (arrays, matrices, colecciones de datos)


En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.




*/


//Cada asignatura esta asociada a una variable individual

var asignatura1 = "Matematicas";
var asignatura2 = "Literatura";
var asignatura3= "Fisica";


//Array
var asignaturas = ["Matematicas", "Literatura", "Fisica"];

console.log(asignaturas);

var datosDeFelipe=["Felipe",31,"guadalajara","Nikky", true, undefined, null];

//acceso a elementos de un arreglo
console.log("el elemento en la posicion 2 es ", asignaturas[2]);

//mostrar la longitud de mi arreglo

console.log(asignaturas.length);

//Array carrito de compra:

var carrito=["pantalon", "camisa", "corbata"];

var publicacion=["felipe", 137, "29-may-2023"];

console.log(publicacion);

//modificar los elementos dentro del arrays

//reasignamos el valor a un elemto de nuestro arreglo por medio de su index.

publicacion[1]=138;

console.log(publicacion);

// no teniamos un elemnto en la posiscion (index) 4 (idefinido=150)

publicacion[4]=150;

//metodo para agregar elementos al final de un arreglo

asignaturas.push("biologia");

console.log(asignaturas);

asignaturas.push("ingles");

console.log(asignaturas);

//Metodo para eliminar el ultimo elemento de un arreglo

asignaturas.pop();
console.log(asignaturas);

//Metodo para agreagar elemtos al principio del arreglo.

asignaturas.unshift("quimica","E.F.", "artes");

//Metodo para eliminar elementos del inicio de un arreglo

asignaturas.shift();
console.log(asignaturas);

//Metodo para saber si mi arreglo incluye un elemento especifico


let carritoDeWalmart=["gansito", "coca", "galletas","mazapan"];

regalo=carritoDeWalmart.includes("coca"); //verifica si el elemento  esta incluido en el carrito

if(regalo=true){
    console.log("te regalo un sarten");
}

//Metodo para concatenar arreglos

var listaDeGolosinas=["gansito", "coca", "galletas","mazapan"];

var listaDeFrutasYVerduras=["platano","manzanas","mangos","fresas","toronjas"

];

var listaDeComprasDeLaQuincena=listaDeGolosinas.concat(listaDeFrutasYVerduras);

console.log(listaDeComprasDeLaQuincena);

//Metodo para buscar un elemento en un arreglo y devolver el indice de su primera aparicion. si el elemnto no se encuntra, retorna -1

console.log(listaDeComprasDeLaQuincena.indexOf("toronjas"));

//Metodos para unir elementos de un arreglo en una cadena de texto

console.log(listaDeComprasDeLaQuincena.join('\n'));

//Metodo para buscar un elemento en un arreglo y devolver el indice de su primera aparicion. Si el elemento no se encuentra, retorna -1

console.log(listaDeComprasDeLaQuincena.indexOf("Chicharrones"));



console.log("Resumen de compra");
//Metodo para unir elementos de un arreglo en una cadena de texto
console.log(listaDeComprasDeLaQuincena.join(" *** "));


//Método para modificar un array (eliminando, reemplazando y agregando elementos)
console.log(listaDeComprasDeLaQuincena.splice(2, 1)); //Aquí borró un elemento a partir del elemento 2 galletas

console.log(listaDeComprasDeLaQuincena.splice(3, 1, "uvas")); //Este afectará a manzanas porque ya ocupaba el elemento 3

console.log(listaDeComprasDeLaQuincena.splice(5,0, "papa","zanahorias")); //Aquí se agregaron dos elementos más después de la posición 5. Se debe usar cero para indicar que no se está reeemplazando ni eliminando otros elementos.

console.log(listaDeComprasDeLaQuincena);//Aquí ya aparecen todos los cambios realizados.


//Método para invertir el orden de los elementos en el array
console.log(listaDeComprasDeLaQuincena.reverse());


//Método para ordenar los elementos de un array alfabéticamente o numéricamente. Este método ordena los elementos como cadenas de texto por defecto, incluso cuando se trata de números.
console.log(listaDeComprasDeLaQuincena.sort()); //aparecen diferentes porque son dos listas pero sí están ordenadas alfabéticamente


//Método para convertir en cadena de texto lo que está dentro del array 
console.log(listaDeComprasDeLaQuincena.toString());

// Modificacion del arreglo (push, pop, shift, unshift, splice)

//Acceso y busqueda de elementos (indexOf, LastIndexOf, includes)

//Transformacion de elementos (sort, reverse, map)

let precios=[100, 54, 67,45];

function descuento(){
    //codigo para aplicar descuento
}

let preciosConDescuentos=[];

// Operaciones logicas (every, some)

// Creacion de nuevos arreglos (slice, concat, join, reverse)

/*Splice (agregar, eliminar o reemplazar elementos en posiciones especificas)


Sintaxis del splice


array.splice(iniciamos, numeroElementosABorrar, ElementoAInsertar, ElementoAInsertar);

*/

// splice para borrar elementos

var abecedario=["a","b","c","d","e"];
abecedario.splice(2,2);
console.log(abecedario);

//splice para insertar elementos
abecedario.splice(2,0,"c","d");
console.log(abecedario); // a b c d e

//splice para reemplazar elementos de un arreglo
var vocales=["a", "e","i","o","u"];

vocales.splice(1,2,"comer","comer","comer");
console.log(vocales);




