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
    if (palabras[i] === "objetivo") {
        console.log("La palabra objetivo está en la posición: " + i);
        break;
    }
    i++;
}


/*--ALGORITMO--

--Iniciar programa.

1- Crear una variable para la batería con valor 100.
2- Crear una variable para contar las tareas realizadas.
3- Mientras la batería sea mayor que 0:
   - Generar un consumo aleatorio entre 5 y 20.
   - Restar el consumo a la batería.
   - Aumentar el contador de tareas.
4- Mostrar la cantidad de tareas realizadas.
5- Mostrar la batería restante.
6- Finalizar programa. */


let bateria = 100;
let tareasRealizadas = 0;

while (bateria > 0) {
    const consumo = Math.floor(Math.random() * 16) + 5;

    bateria -= consumo;
    tareasRealizadas++;
}

console.log("Tareas realizadas: " + tareasRealizadas);
console.log("Batería restante: "  + bateria);