/*
operadores

los operadores nos permiten realizar una operacion en uno o varios operandos (variables de datos)



*/

/*
- Operadores de asignacion
 - Operadores de cadena
 - Operadores logicos
 - Operadoes de comparacion
 - Operadores aritmeticos
 */

 //operadores de asigancion:

 let edadDeKass=29;
 var recipiente="cafe";


 /*
 operadores de comparacion (<,>, >=, <=, ==, ===, !=, !==)
 
 */

 let numero1=13;
 let numero2=25;
 let numero3="25";

 console.log("el valor 13 es menor que 25" + (numero1 < numero2));
 console.log("el valor 13 es menor que 25" + (numero1 > numero2));
 console.log("el valor 25 es mayor o igual que 25" + (numero2 >= numero3));
 
 //operador de igualdad (solo evalua valores)

 console.log ("el valor 25 es igual a valor 25 "+ (numero2 == numero3));


//operador de igual estricta (evalua el valor pero tambien evalue el tipo de dato)
console.log ("el valor 25 es igual a valor 25 "+ (numero2 === numero3));

//operaodr  de desigualdad (!=)

console.log("el valor 13 no es igual al valor 25 "+ (numero1 != numero2));

//operador de desigualdad estricta (!==)

console.log(" el valor 25 no es igual al valor 25 " +(numero2 !== numero3));



/*
Operadores logicos (&& (and), || (or), ! (not))

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion. El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y ,los podemos poner en un orden especifico).


AND (&&)

Sirve para determinar si dos expresiones son verdaderas. 

    - Si ambas expresiones son verdaderas, el resultado es verdadero. 
    - Si una de las dos expresiones es falsa, todo el resultado es falso.




OR (||)

Sirve para determinar si dos expresiones son falsas.

    - Si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
    - Si las dos afirmaciones son falsas, todo es falso.



NOT (!)

Sirve para mostrar lo contrario a lo que estamos devolviendo


*/

//Ejemplo and

/*var num1=12;
var num2=24;

afirmacion1=(num1 < num2);
afirmacion2=(num1 != num2);

console.log(afirmacion1 && afirmacion2);

//Ejemplo OR

afirmacion3= (num1< num2);
afirmacion4= (num1 != num2);

console.log(afirmacion3 || afirmacion4);

//Ejemplo con NOT (!)
console.log(!afirmacion3); //falso
console.log(!afirmacion4); //falso

*/

// Ejercicio  de combinacion de operaciones


//!Combinando operaciones2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

console.log(op);

/*
operadores aritmeticos (+, -, *, %, ++, --)



 */

let valor1=55;
let valor2=17;

console.log("suma", (valor1+valor2));
console.log("resta",(valor1-valor2));
console.log("multiplicacion",(55*27));
console.log("division", (valor1/valor2));
console.log("residuo",(valor1%valor2));
console.log("exponente", valor1**valor2);
console.log("incremento", ++valor1);
console.log("decremento",--valor2);




