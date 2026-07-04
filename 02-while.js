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
    if ( !isNaN(monto) && monto >= 0) {
         suma += monto;
 }
     
    else { 
        console.log("Monto invalido. Ingresa un monto mayor o igual que el 0.");
     }
    
    if (suma < objetivo) {
      monto= Number(prompt("Ingresá un monto nuevo"));
 }
 }
 console.log ("¡Objetivo alcanzado!");



 console.log("");


/* token de seguridad.

--ALGORITMO--
--iniciar el programa.
1- agregar el codigo fijo.
2- pedir al usuario que ingrese el codigo de verificacion.
3- indicar al usuario que solo tiene 3 intentos para ingresarlo correctamente.
4- un contador que cada vez que el usuario haga un intento fallido aumente.
5- verificar que el codigo sea incorrecto.
  - y que los intentos sean menores a 3.
--finalizar el programa. */

let codigoCorrecto = 4567;
let intentos = 0;
let codigoIngresado;

while(codigoIngresado !== codigoCorrecto && intentos < 3) {
    codigoIngresado = Number(prompt("ingrese el codigo de verificacion"));
    intentos++;
    if (codigoIngresado === codigoCorrecto) {
        console.log("¡Codigo Correcto!");
        break;
 }
    else {
        console.log("¡Codigo Incorrecto!");
    }
    if (intentos < 3) {
        console.log("Te quedan " + (3 - intentos) + " intentos") ;
    }
    }

    if (codigoIngresado !== codigoCorrecto) {
        console.log("¡Se acabaron los intentos!.")
    }
    //tarea de simulador de carritos

   /* --ALGORITMO--

--iniciar programa.
1- inicializar el total en 0.
2- pedir el precio del primer producto.
3- preguntar si desea agregar otro producto.
4- mientras la respuesta sea “si”:
   - sumar el precio al total.
   - pedir el precio del siguiente producto.
   - preguntar si desea agregar otro producto.
5- si el total supera los $5000:
   - aplicar un 10% de descuento.
6- mostrar el total final.
--finalizar el programa. */


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