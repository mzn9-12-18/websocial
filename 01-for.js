
  //mostrar numeros en la consola del 1 al 10

/*--ALGORITMO--
  1 - Iniciar el programa.
  2 - Establecer el numero inicial en 1.
  3 - Establecer el numero final en 10.
  4 - Comenzar un recorrido desde el numero inicial hasta el final.
  5 - Mostrar cada numero en la consola.
  6 - Repetir el proceso hasta llegar al numero 10.
  7 - Finalizar el programa.*/

let num1 = 1;
let num2 = 10;
for (let i = num1; i <= num2; i++) 
   {
    console.log(i);
  }



  // Tabla de multiplicar de un numero

  /*--ALGORITMO--
  1 - Iniciar el programa.
  2 - Pedir al usuario un numero.
  3 - si no pone ningun valor, mostrar error.
  4 - si ingresa un valor, mostrar su tabla de multiplcar del 1 al 10 en consola.
  5 - Finalizar el programa.*/
  
  let tabla = prompt("Ingresá el número de la tabla a calcular");
if (!tabla) {
  console.log("Debe ingresar un valor numerico");
} else {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
  }
}