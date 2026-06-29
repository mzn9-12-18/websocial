function acumuladorDinero () {
    let objetivo = 1000
let suma = 0

let monto= Number(prompt("Ingresá un monto de ahorro diario"));

while (suma < objetivo) {
    if (monto >= 0) {
        suma = suma + monto;
 }
     
    else { 
        console.log("Monto invalido. Ingresa un nuevo monto.");
     }
    
    if (suma < objetivo) {
      monto= Number(prompt("Ingresá un monto nuevo"));
 }
 }
 console.log ("¡Objetivo alcanzado!");


}
acumuladorDinero() ;


function tokenSeguridad () {
let codigoCorrecto = 4567;
let intentos = 0;
let codigoIngresado;

while(codigoIngresado !== codigoCorrecto && intentos < 3) {
    codigoIngresado = Number(prompt("ingrese el codigo de verificacion"));
    intentos++;
    if (codigoIngresado === codigoCorrecto) {
        console.log("¡Codigo Correcto!");
    }
    else {
        console.log("¡Codigo Incorrecto!");
    }
    if (codigoIngresado !== codigoCorrecto && intentos < 3) {
        console.log("Te quedan " + (3 - intentos) + " intentos") ;
    }
    }

    if (codigoIngresado !== codigoCorrecto) {
        console.log("¡Se acabaron los intentos!.")
    }
}
tokenSeguridad () ;


function simuladorCarritos () {
    let total = 0;

let continuar = "si";

while (continuar === "si") {

    let precio = Number(prompt("Ingresá el precio del producto"));

    total += precio;

    continuar = prompt("¿Querés agregar otro producto? (si/no)");
}

if (total > 5000) {
    total = total * 0.90;
    console.log("¡Has obtenido un 10% de descuento!");
}

console.log("Total a pagar: $" + total);
}

simuladorCarritos();


function trianguloAsterisco() {
    

for (let fila = 1; fila <= 5; fila++) {
    let linea = ""
     for (let asterisco = 1; asterisco <= fila; asterisco++ ) {
        linea += "*";
     }
     console.log(linea);
}
}

trianguloAsterisco();


function gestorHoras () {
    let totalHoras = 0;

for (let dia = 1; dia <= 7; dia++) {
    let horas = Number(prompt("Ingresá las horas del día " + dia));

    if (horas >= 0) {
        totalHoras += horas;
    } else {
        console.log("Valor inválido.");
        dia--; 
    }
}

let promedio = totalHoras / 7;

console.log("Promedio de horas: " + promedio);

}

gestorHoras();
