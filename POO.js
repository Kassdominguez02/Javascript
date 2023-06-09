/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/

//Arreglos (objeto)
// los arreglos almacen datos nada mas, categorizado.

var casaArreglo = [3, 2, 1, "rojo"];


//objeto casa, tiene key, value y se usan llaves.





// creacion de un objeto Cassa

const casa = {
    numHabitaciones: 3,
    numPisos: 2,
    numBaños: 1,
    color: "rojo"
}


// para imprimir la info de un objeto, utiloz la referencia al objeto
console.log(casa.color);

//Plantilla para repetir 50 veces la misma casa

class casaPlantilla {
    //1.- Definir propiedades como variables, para luego agregarle valores

    numHabitaciones = 0;
    numBaños = 0;
    numPisos = 0;
    color = "";


    //2.- Definimos metodos como funciones, porqu estas funciones nos dicen los que pude hacer un objeto.

    encenderLuces() {
        console.log("click, luces encendidas");
    }

    abrirVentanas() {
        console.log("click, ventanas abiertas");
    }

    guardarmeDelFresnito() {
        console.log("que angustia");
    }

    imprimirInfoDeLaCasa() {
        console.log("el numero de habiatciones es de :", this.numHabitaciones);
    }

    //3. Definir una funcion construtora. Esta funcion es una fuction especial que se dedica unica y exclusivamente a tomar datos que definimos como variables, para usarlos como parametros de construccion y asi poder instaciar nuestro objeto

    // los parametros se pasan en el orden en el que fueron declarados, para que cada valor se asigne a la variable correspondiente.

    constructor(numHabitaciones, numBaños, numPisos, color) {
        this.numHabitaciones = numHabitaciones;
        this.numBaños = numBaños;
        this.numPisos = numPisos;
        this.color = color;
    }

}


//En la clase definimos todo de forma "normal" (declaran las variables como normalmente las usamos = y ;, pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor.)

/*Instanciar objetos, usamos la siguiete sintaxis:

variable con nombre = palabraReservadaNew referenciaDeLaClase (parametros de construccion);

let objeto = new ClaseObjeto (parametros);


*/

let casaDeFelipe = new casaPlantilla(6, 3, 3, "azul");

console.log(casaDeFelipe);
casaDeFelipe.encenderLuces();
casaDeFelipe.guardarmeDelFresnito();

let casaDeKass = new casaPlantilla(5, 3, 4, "rosa");
console.log(casaDeKass);


//Ejemplo de POO con gatos

class gatitos {
    //1 propiedades

    nombre = "";
    edad = 0;
    tamaño = "";
    caracter = "";
    numeroVidas = 0;
    color = "";
    raza = "";
    vacunas = false;

    //3. constructor

    constructor(nombre, edad, tamaño, caracter, numeroVidas, color, raza, vacunas) {

        this.nombre = nombre;
        this.edad = edad;
        this.tamaño = tamaño;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;
    }

    //2.-Metods

    imprimirInfo() {
        console.log("el nombre de mi gato es :", this.nombre);
        console.log("la edad de mi gato es :", this.edad);
        console.log("el tamaño de mi gato es :", this.tamaño); ç
        console.log("el caracter de mi gato es :", this.caracter);
        console.log("el num de vidas de mi gato es :", this.numeroVidas);
        console.log("el color de mi gato es :", this.color);
        console.log("la raza de mi gato es :", this.raza);
        console.log("Mi gato tiene vacunas:", this.vacunas);

    };

    maullar() {
        console.log("miau miau")
    };

    rasgunar() {
        console.log("el gato ha rasguñado el sillon");
    };

    ronronear() {
        console.log("rrrrrrrrrrr");

    };

    cuidarGato() {
        if (this.edad > 3) {
            console.log("cuida a tu gatito porque le quedan pocas vidas");
        }
    }
}

//Intanciar

let juanchoDelCampo=new gatitos("juancho",5,"pequeño","cariñoso",6, "gris", "angora",true);
let benito=new gatitos("juancho",5,"pequeño","cariñoso",6, "gris", "angora",true);
let tom=new gatitos("juancho",5,"pequeño","cariñoso",6, "gris", "angora",true);
let DonGato=new gatitos("juancho",5,"pequeño","cariñoso",6, "gris", "angora",true);
let minino=new gatitos("juancho",5,"pequeño","cariñoso",6, "gris", "angora",true);


console.log(juanchoDelCampo);
juanchoDelCampo.maullar();
juanchoDelCampo.cuidarGato();


/*


JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})


JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.

*/

objeto={
    nombre:"felipe",
    edad:15,
}

console.log(objeto);

//como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. este proceos se le conoce serializar

let objetoSerializado=(JSON.stringify(objeto));

console.log(objetoSerializado);


//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"s


// Para desserializar un objeto JSON, vamos a utilzar un metodo llamado  JSON.parse (objeto que queremos deserializar)

let objetoDeserializado=(JSON.parse(objetoSerializado));

console.log(objetoDeserializado);

