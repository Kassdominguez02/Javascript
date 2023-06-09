//1.- Obtener los elementos del HTML para guardarlos en variables

//almaceno el lugar de mi tarjetita en una constante

const container=document.getElementById("product-container");

const botonAgregarProductos=document.getElementById("agregarProducto");

// Almacenar elementos del formulario en variables JS

let nombreProducto=document.getElementById("nombreProducto");

let descripcionProducto=document.getElementById("descripcionProducto");

let imagenProducto=document.getElementById("imagenProducto");



//Quiero que cada tarjeta tenga su propio div o contenedor



function agregarProductos(){


    //Guardo los valores de mis variables

var valorInputProducto=nombreProducto.value;

var valorInputDescripcion=descripcionProducto.value;

var valorInputImagen=imagenProducto.value;



    const productCard=document.createElement("div");

productCard.innerHTML=`
<img src="${valorInputImagen}" alt="Producto">

<h3>${valorInputProducto}</h3>

<p>Descripcion:${valorInputDescripcion}</p>

<p>Precio: $9.99</p>
<button class="btn">Agregar al carrito</button>


`;

//agregar esta tarjeta de producto al container especificado

container.appendChild(productCard);
}

//creamos el evento

botonAgregarProductos.addEventListener("click",agregarProductos);



