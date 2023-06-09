//1.- Creamos un arreglo de objetos para nuestras tareas, estas tareas tendran atributos  como id, titulo, estatus completada o no completada.

// Esro donde se ejecuta? del lado del cliente (local), no esta en el servidor.
let tareas = [
    {
        id: 1,
        titulo: "bañar al perro",
        estatus:true,
    },

    {
        id:2,
        titulo: "preparar la comida",
        estatus:false,
    }
]

// Enviar ese arreglo al servidor
let tareasJSON=JSON.stringify(tareas);
console.log(tareasJSON);


//Ejemplo de carrito de compra


let carritoDeCompras=[];

let producto={
    id:1,
    nombre:"camisa de pokemon",
    precio:299.99,
    cantidad: 1
}

//mostrar informacion del carrito de compras

console.log("tienes: ",carritoDeCompras.length, "en tu carrito de compra"); //undefined

//agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto);

//muestro la nueva info de mi carrito
console.log("tienes ",carritoDeCompras.length, " en tu carrito de compra");

//actualizar la cantidad de productos en el carrito

let productoId=1; // producto a antualizar
let nuevaCantidad=3; //cantidad nueva de productos

//verifco si el producto existe en el carrito de compras, si existe actualizo la cantidad y esta debe coincidir con el id de mi carrito de compras

let  productoExiste=carritoDeCompras.find(producto => producto.id === productoId);

if (productoExiste){

    productoExiste.cantidad=nuevaCantidad;


}

console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1

console.log(producto);



/*
//Con funcion flecha 
carritoDeCompras.find(producto => producto.id === productoId);


//Sin funcion flecha

carritoDeCompras.find(function(producto){
    return producto.id === productoID; //true or false
})

*/

//Eliminar un producto del carrito

let productoAEliminar = 1;
let indiceProductoAEliminar = carritoDeCompras.findIndex(function(producto){

    return producto.id === productoAEliminar;
});

if(indiceProductoAEliminar !== -1){
    carritoDeCompras.splice(indiceProductoAEliminar, 1);
}
console.log("Tienes : ", carritoDeCompras.length, " producto(s) en el carrito");




/*

el metodo forEach es un metodo de array de JS, que nos va ayudar a poder ejecutar una funcion en cada elemento de nuestro array.

sintaxis de un for each

array.forEach(function(elemento, indice, arreglo));


*/ 


let total=0;

//Oye JS, en mi carrito de compras, para cada producto que encuentres, ejecuta una funcion donde tomes un producto con parametros, y al encontrar lo vas a multiplicar el precio de ese producto por su cantidad. Ya que lo hayas echo, vas a tomar ese valor y lo vas a sumar y a reasignar a la variable total que declare alla arribita


//Agregar un nuevo producto para mi carrito de compras
carritoDeCompras.push(producto);

carritoDeCompras.forEach(function(producto){
    total += producto.precio*producto.cantidad;
});


//Reviso el total de mi carrito de compras

console.log("El total de su carrito de compras es de: ", total);

