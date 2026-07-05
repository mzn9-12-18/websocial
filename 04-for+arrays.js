 /*
 --ALGORITMO--
 --iniciar programa.
 1- crear un nuevo array vacio para guardar las palabras transformadas.
 2- recorrer el array de palabaras con un for.
 3-en cada recorrido:
  - obtener la palabra actual.
  - convertir la primera letra a mayuscula.
  - convertir el resto de la palabra a minuscula.
  - unir ambas partes para formar la palabra correctamente escrita.
  - agregar la nueva palabra al array resultado.
 5- mostrar el nuevo array por pantalla.
 --finalizar programa. */


const palabras = ["jAvAsCrIpT", "pRoGrAmAcIoN", "eJeRcIcIo"];

const palabarasTransformadas = [];

for(let i = 0; i < palabras.length ; i++ ) {
    const palabraActual = palabras [i];
    const primeraLetra = palabraActual.slice(0,1).toUpperCase();
    const restoPalabra = palabraActual.slice(1).toLowerCase();
    palabarasTransformadas.push(primeraLetra + restoPalabra);
}
    
    console.log(palabarasTransformadas);


/*
--ALGORITMO--
--iniciar programa.
1- crear una variable para encontrar la temperatura maxima.
2- crear una variable para encontrar la temperatura minima.
3- recorrer el array de temperaturas con un for.
4- comparar cada temperatura con la maxima y actualizarla si es mayor.
5- comparar cada temperatura con la minima y actualizarla si es menor.
6- mostrar la temperatura maxima y la temperatura minima.
--finalizar programa. */

const temperaturas = [18, 22, 15, 28, 12, 25, 19];
let temperaturaMax = temperaturas [0];
let temperaturaMin = temperaturas [0];

for(let i = 0; i < temperaturas.length ; i++ ) {
    const temperaturaActual = temperaturas [i];

   if( temperaturaActual > temperaturaMax) {
         temperaturaMax = temperaturaActual;
   }
  
    if( temperaturaActual < temperaturaMin) {
         temperaturaMin = temperaturaActual;
   }
}

console.log("la temperatura maxima es " +  temperaturaMax );
console.log("la temperatura minima es " +  temperaturaMin );

/*
--ALGORITMO--
1. Iniciar programa.
2. Crear un array vacío para guardar los resultados.
3. Recorrer el array de números con un for.
4. Obtener el número actual.
5. Si el número es par, elevarlo al cuadrado y guardarlo en el nuevo array.
6. Si el número es impar, guardarlo sin modificar.
7. Mostrar el nuevo array.
8. Finalizar programa. */

const numeros = [2, 5, 8, 11, 4, 7];

const numerosCodificados = [];

for (let i = 0; i < numeros.length; i++) {
    const numeroActual = numeros[i];

    if (numeroActual % 2 === 0) {
        numerosCodificados.push(numeroActual ** 2);
    } else {
        numerosCodificados.push(numeroActual);
    }
}

console.log(numerosCodificados);