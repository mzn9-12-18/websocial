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


console.log("");
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


/*
Ejercicio 4: El Acumulador Maestro ( reduce) 

-- ALGORITMO --

--iniciar programa 

1- Crear una función llamada calcularTotalVentas.
2- recibir un array de numeros
3- recorrer el array utilizando .reduce().
4- sumar todas las ventas del dia.
5- deolver el total de las ventas.
6- mostrar el resultado en consola.

  finalizar programa. -- */

  const ventas = [100, 250, 50, 300, 120];

  const calcularTotalVentas = (ventas) =>
    ventas.reduce((total, ventaActual) => total + ventaActual, 0);

  console.log(calcularTotalVentas(ventas));

  console.log("");


  /*
  Ejercicio 5: Gestión de Objetos (El "Inventario Simple")

  --ALGORITMO--

--Iniciar programa.

1- Crear un array llamado inventario.
2- Agregar 3 objetos con nombre y precio.
3- Crear una función llamada listarPrecios.
4- Recibir el array de productos.
5- Recorrer el array utilizando map().
6- Obtener el precio de cada producto.
7- Devolver un nuevo array con los precios.
8- Mostrar el resultado en consola.

--Finalizar programa. */

const inventario = [
    { nombre: "Mouse", precio: 15000 },
    { nombre: "Teclado", precio: 30000},
    { nombre: "Monitor", precio: 25000}
];

const listarPrecios = (inventario) =>
    inventario.map((producto) => producto.precio);
console.log(listarPrecios(inventario));

console.log("");


/*
Ejercicio 6: El Desafío Combinado (Integración)

--ALGORITMO--

--Iniciar programa.

1- Crear un array llamado estudiantes.
2- Agregar objetos con nombre y nota.
3- Crear una función llamada obtenerAprobados.
4- Recibir el array de estudiantes.
5- Filtrar los estudiantes con nota mayor o igual a 6.
6- Obtener los nombres de los estudiantes aprobados utilizando map().
7- Devolver un nuevo array con los nombres.
8- Mostrar el resultado en consola.

--Finalizar programa. */

const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Beto", nota: 4 },
  { nombre: "Carla", nota: 10 },
  { nombre: "David", nota: 5 }
];

const obtenerAprobados = (estudiantes) =>
  estudiantes
    .filter((estudiante) => estudiante.nota >= 6)
    .map((estudiante) => estudiante.nombre);

console.log(obtenerAprobados(estudiantes));