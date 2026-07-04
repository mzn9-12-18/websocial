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