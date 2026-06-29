
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


//tarea de sumas del 1 al 10

/* 
--ALGORITMO--
1- iniciar el programa.
2- comenzar una suma en 0.
3- recorrer los numeros del 1 al 10.
4- sumar cada numero al total.
5- mostrar la suma total.
6- finalizar el programa. */
console.log("");

let suma = 0
for (let i = 1; i <= 10; i++) {
    suma = suma + i
}
console.log ("la suma total es: " + suma);


console.log("");

/* triangulo de asteriscos con el ciclo for anidado.

--ALGORITMO--
-- iniciar el programa
1- definir la cantidad de filas (5).
2- recorrer cada fila desde la primera hasta la quinta.
3- en cada fila :
  -imprimir la cantidad de asteriscos correspondientes a esa fila.
finalizar el programa-- */

let fila = ""

for (let fila = 1; fila <= 5; fila++) {
    let linea = ""
     for (let asterisco = 1; asterisco <= fila; asterisco++ ) {
        linea += "*";
     }
     console.log(linea);
}
 /*
--ALGORITMO--
--iniciar programa.
1- inicializar un acumulador de horas en 0.
2- repetir 7 veces:
   - pedir al usuario las horas de estudio.
   - si las horas son mayores o iguales a 0, sumarlas al acumulador.
   - si son menores a 0, informar que el valor es inválido.
3- calcular el promedio de horas (total / 7).
4- mostrar el promedio en consola.
--finalizar el programa. */


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


