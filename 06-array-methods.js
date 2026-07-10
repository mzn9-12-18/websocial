/*
ejercicio 1 : EL TRANSFORMADOR DE DATOS. (map)
--ALGORITMO--

--Iniciar programa.

1- Crear una función llamada convertirAFahrenheit.
2- Recibir un array de temperaturas en Celsius.
3- Recorrer el array utilizando map().
4- Convertir cada temperatura a Fahrenheit.
5- Devolver un nuevo array con las temperaturas convertidas.
6- Mostrar el resultado en consola.

--Finalizar programa. */

const temperaturas = [0, 10, 20, 30, 40];

const convertirAFahrenheit = (temperaturas) => 
     temperaturas.map((temperatura) =>  (temperatura * 9 / 5) + 32);
console.log(convertirAFahrenheit(temperaturas));