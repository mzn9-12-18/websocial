let compra = Number(prompt("Ingrese el valor de su compra"));

if (compra < 100) {
    console.log ("No tienes descuento");
}
else if (compra >= 100 && compra <= 300) {
    let descuento = compra * 0.05;
    console.log ("Si tienes un 5% de descuento");
    console.log ("el descuento es de " + descuento +" dolares.");
}
else if (compra > 300 && compra <= 500) {
    let descuento = compra * 0.10;
    console.log (" tienes un 10% de descuento");
    console.log ("el descuento es de " + descuento +" dolares.");
 }
 else if (compra > 500) { 
    let descuento = compra * 0.15;
    console.log (" tienes un 15% de descuento");
    console.log ("el descuento es de " + descuento +" dolares.");
}





//comparar numeros enteros
let num1 = parseInt(prompt("Ingrese el primer numero entero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero entero:"));

if (num1 > num2) {
    console.log ("El numero mayor es: " + num1);
}
     else if (num2 > num1) {  
    console.log ("El numero mayor es: " + num2);
  }
    else {  
    console.log ("Ambos numeros son iguales");
} 


// notas de alumnos

