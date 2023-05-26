console.log("Calcular IMC");

///////////////////////////Variables

let peso = prompt("Ingresa tu peso en libras");
let altura = prompt("Ingresa tu altura en cm");

const resultado = resultadoIMC(peso,altura);
let estatusIMC="";

///////////////////////////If
if(resultado < 16){
    console.log("Ingrese los datos correctamente");
}else if (resultado > 16 && resultado < 16.9){
    estatusIMC="infrapeso";
}else if (resultado > 17 && resultado <18.4){
    estatusIMC="esta en bajo peso";
}else if (resultado > 18.5 && resultado <24.9){
    estatusIMC="esta en peso normal";
}else if (resultado > 25 && resultado <29.9){
    estatusIMC="esta en sobrepeso";
}else if (resultado > 30 && resultado <34.9){
    estatusIMC="esta en obesidad premorbida";
}else if (resultado > 40 && resultado <45){
    estatusIMC="esta en obesidad morbida";
}else if (45<resultado){
    estatusIMC="esta en obesidad hipermorbida";
}else{
    estatusIMC="dato no valido";
}

console.log("el resultado de si IMC es ", operacion,"su estado es",estatusIMC);
///////////////////////////Function
function resultadoIMC(peso,altura){
    peso=peso*0.453592;
    altura=altura/100;
    operacion = (peso/(altura*altura));
    return operacion;
}