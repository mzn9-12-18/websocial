/* --ALGORITMO--
1- iniciar programa.
2- definir numero inicial para el contador.
3- definir el numero final.
4- mientras el contador no llegue al numero final:
   - mostrar numero en consola.
   - incrementar el contador
5- finalizar programa. */


let contador = 1;

while (contador <= 10) {
  console.log(contador);
  contador++;
}

console.log( "")
/* cuenta regresiva desde el 10 al 1

--ALGORITMO--
- iniciar programa
1- definir el numero inicial de la cuenta regresiva
2- definir el numero final.
3- mientras no se llegue al numero final:
  - mostrar en consola el numero.
  - restar 1 al contador
-- finalizar el programa. */


let contadorRegresivo = 10;

while (contadorRegresivo >= 1) {
  console.log(contadorRegresivo);
  contadorRegresivo--;
}

console.log ("¡Despegue! 🚀")

console.log ("")

/* mostrar numeros pares hasta el 20
--ALGORITMO--
--iniciar programa.
1- definir el primer numero par.
2- definir el segundo numero par.
3- mostrar los numeros pares hasta el 20.
--finalizar el programa.*/

let numero1 = 2
while (numero1 <= 20) {
  console.log(numero1);
  numero1+= 2;
}



/* El acumulador de "Dinero con Tope".

--ALGORITMO--
--iniciar programa.
1- definir el objetivo de ahorro.
2- inicializar la suma total en 0.
3- pedir al usuario que ingrese un monto de ahorro diario.
4- mientras la suma total sea menor al objetivo:
  - sumarlo al total.
  - si el monto es invalido (menor a 0), informar que es invalido.
  - pedir un monto nuevo de ahorro.
5- mostrar "¡Objetivo alcanzado!".
--finalizar el programa. */

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
  monto= Number(prompt("Ingresá un monto nuevo de ahorro"));
 }

 console.log ("¡Objetivo alcanzado!");