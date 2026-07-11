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


console.log("")

/*
Ejercicio 2: El Filtro de Seguridad ( filter)

--ALGORITMO--

-- iniciar programa 

-- iniciar programa
1- Crear una función llamada obtenerMayresDeEdad.
2- Recibir un array de edades.
3- recorrer el array utilizando (filter).
4- devolver un nuevo array con las edades mayores o iguales a 18.
5- mostrar resultado en consola. 
  finalizar programa. -- */

const edades = [12, 18, 25, 10, 30, 15];

const obtenerMayoresDeEdad = (edades) =>
    edades.filter((edad) => edad >= 18);

console.log(obtenerMayoresDeEdad(edades));


/*
Ejercicio 3: El Buscador de Códigos ( find)

--ALGORITMO--

-- iniciar programa

1- Crear una función llamada buscarProducto
2- Recibir un array de codigos y un codigo a buscar.
3- recorrer el array usando .find() 
4- buscar el primer codigo que coincida.
5- si existe, devolver el codigo encontrado.
6- si no existe, devolver "no encontrado".
7- mostrar el resultado en consola.

  finalizar programa. -- */


const codigos = ["A10", "B20", "C30", "D40"];

const buscarProducto = (codigos, codigoBuscado) =>
    codigos.find(codigo => codigo === codigoBuscado) || "No encontrado";

console.log(buscarProducto(codigos, "C30"));
console.log(buscarProducto(codigos, "Z99"));

console.log("");


