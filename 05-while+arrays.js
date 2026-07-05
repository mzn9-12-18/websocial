/* --ALGORITMO--

--Iniciar programa.

1- Crear un array con las palabras.
2- Crear una variable para controlar el índice.
3- Recorrer el array con un ciclo while.
4- Comparar si la palabra actual es “objetivo”.
5- Si la encuentra, mostrar la posición y finalizar el ciclo con break.
6- Si no la encuentra, avanzar al siguiente elemento.
7- Finalizar programa. */

const palabras = ["hola", "javascript", "objetivo", "programacion", "codigo"];

let i = 0;

while (i < palabras.length) {
    if (palabras[i] === “objetivo”) {
        console.log("La palabra objetivo está en la posición: " + i);
        break;
    }

    i++;
}