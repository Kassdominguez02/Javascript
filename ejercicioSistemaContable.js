//Ejercico de un sistema contable


const isr=0.31

class empleados {

    //1.- Definimos propiedades

    nombre="";
    edad=0;
    rfc="";
    numDiasLaborados=0;
    sueldoDiario=0;

    //3.- Construccion

    constructor (nombre, edad,rfc,numDiasLaborados,sueldoDiario){

        this.nombre=nombre;
        this.edad=edad;
        this.rfc=rfc;
        this.numDiasLaborados=numDiasLaborados;
        this.sueldoDiario=sueldoDiario;
    }

    //2.- Definimos los metodos

    imprimirInfo(){

        console.log("el nombre del empleado es :", this.nombre);
        console.log("la edad  del empleado es :", this.edad);
        console.log("el rc del empleado es :", this.rfc);
        console.log("el numero de dias laborados por ", this.nombre, "es : ", this.numDiasLaborados);
        console.log("el sueldo diario del empleado es :", this.sueldoDiario);


    }

    calcularSueldoMensualBruto(){

        if(this.numDiasLaborados<30){

       let sueldoMensualBruto=(this.numDiasLaborados*this.sueldoDiario);

        console.log("el sueldo mensual bruto del empleado es :", sueldoMensualBruto);}

        else { let sueldoMensualBruto=(30*this.sueldoDiario);
            
            console.log("el sueldo mensual bruto del empleado es :", sueldoMensualBruto);
        }
    }

    calcularSueldoMensualNeto(){

        let sueldoMensualNeto=(this.numDiasLaborados*this.sueldoDiario*(1-isr));
 
         console.log("el sueldo mensual neto del empleado es :", sueldoMensualNeto);
     }
    

     calcularSueldoQuincenalBruto(){

        let sueldoQuincenalBruto=(this.numDiasLaborados*this.sueldoDiario)/2;
 
         console.log("el sueldo quincenal bruto del empleado es :", sueldoQuincenalBruto);
     }
 
     calcularSueldoQuincenalNeto(){
 
         let sueldoQuincenalNeto=(this.numDiasLaborados*this.sueldoDiario*(1-isr))/2;
  
          console.log("el sueldo quincenal bruto del empleado es :", sueldoQuincenalNeto);
      }
     
    
   
}


// Instanciar


let empleado1=new empleados("Julio", "31","hyvtvdtd",20, 156.78);

empleado1.imprimirInfo();
empleado1.calcularSueldoMensualBruto();
empleado1.calcularSueldoMensualNeto();
empleado1.calcularSueldoQuincenalBruto();
empleado1.calcularSueldoQuincenalNeto();

console.log("***********");

let empleado2=new empleados("kass", "29","hyvtvdtd",28, 156.78);

empleado2.imprimirInfo();
empleado2.calcularSueldoMensualBruto();
empleado2.calcularSueldoMensualNeto();
empleado2.calcularSueldoQuincenalBruto();
empleado2.calcularSueldoQuincenalNeto();

console.log("***********");

let empleado3=new empleados("Alex", "29","hyvtvdtd",28, 156.78);

empleado3.imprimirInfo();
empleado3.calcularSueldoMensualBruto();
empleado3.calcularSueldoMensualNeto();
empleado3.calcularSueldoQuincenalBruto();
empleado3.calcularSueldoQuincenalNeto();

