/*function velocidad(distancia,tiempo){

    operacion=distancia/tiempo;
    console.log(operacion);

}

velocidad(500,40);*/



function velocidad(){

    let distancia=500;
    let tiempo=40;

    operacion=distancia/tiempo

    console.log(operacion);

}

velocidad();

function formulaGeneral(a,b,c,x){

    var a=4;
    var b=6;
    var c=2;


    operacion1=[(Math.pow(b,2))-(4*a*c)];
    operacion2=Math.sqrt(operacion1);
    operacion3=-b+operacion2
    var x=operacion3/(2*a);
    console.log(operacion2);

    console.log(x);
}

formulaGeneral();

function formulaGeneral2 (a,b,c,x1, x2){

    var x1=(-b+Math.sqrt((Math.pow(b,2)-(4*a*c))))/(2*a);
    
    var x2=(-b-Math.sqrt((Math.pow(b,2)-(4*a*c))))/(2*a);
    console.log("el valor de x1 es: "+x1+"el valor de x2 es: "+x2);
    

}

formulaGeneral2(4,6,2);


