let carrera=["Roberto", "Andrea", "Jorge","Ramiro", "Sofia"];

console.log(carrera);

//Jorge adelanta a Roberto
carrera.splice(0,0,"Jorge");
carrera.splice(3,1);
console.log(carrera);

//Ramiro adelanta a Jorge
carrera.splice(0,0,"Ramiro");
carrera.splice(4,1);
console.log(carrera);

//Roberto se sale de la carrera

carrera.splice(2,1);
console.log(carrera);

//Andrea baja una posicion
carrera.pop();
console.log(carrera);
carrera.splice(2,0,"sofia");
console.log(carrera);

//Quinto lugar reemplazado por jose

carrera.push("jose");
console.log("el resultado final es :\n",carrera.join("\n"));




















