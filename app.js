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

let nota1 = parseFloat(prompt("Ingrese la primera nota"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota"));

let promedio = (nota1 + nota2 + nota3) / 3
      console.log ("el resultado promedio es: " + promedio)
      if ( promedio >= 6) {
        console.log ("Felicidades Aprobaste");
      }
      else {
        console.log ("Lo siento, Desaprobaste");
      }

