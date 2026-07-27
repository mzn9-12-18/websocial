
//ejercicio 1 de la cuenta regresiva de despegue
const contador = document.querySelector("#contador");
const btnIniciar = document.querySelector("#btnIniciar");

let numero = 10;
btnIniciar.addEventListener("click", () => {

    const intervalo = setInterval(() => {

        numero--;

        contador.textContent = numero;
        if (numero === 0) {
            clearInterval(intervalo);
            contador.textContent = "¡Despegue! 🚀";
        }

    }, 1000);

});

//ejercicio 2 de el semaforo inteligente

const semaforo = document.getElementById("semaforo");
const btnSemaforo = document.getElementById("btnSemaforo");

btnSemaforo.addEventListener("click", () => {

    semaforo.style.backgroundColor = "red";

    setTimeout(() => {

        semaforo.style.backgroundColor = "yellow";

        setTimeout(() => {

            semaforo.style.backgroundColor = "green";

        }, 2000);

    }, 3000);

});

// ejercicio 3 de el mensaje flash 

const boton = document.getElementById("btnGuardar");
const alerta = document.getElementById("alerta");

boton.addEventListener("click", () => {

    alerta.classList.remove("d-none");

    setTimeout(() => {

        alerta.classList.add("d-none");

    }, 3000);

});

// ejercicio 4 de el buscador de usuario

const btnCargar = document.getElementById("btnCargar");
const tarjeta = document.getElementById("tarjeta");

btnCargar.addEventListener("click", async () => {
const respuesta = await fetch("https://jsonplaceholder.typicode.com/users/1");
const datos = await respuesta.json();
tarjeta.innerHTML = `
    <h2>${datos.name}</h2>
    <p>${datos.email}</p>
`;
});

// ejercicio 5 de Galería de Personajes con Indicador de Carga

const btnPersonaje = document.getElementById("btnPersonaje");
const resultado = document.getElementById("resultado");

btnPersonaje.addEventListener("click", async () => {

    resultado.innerHTML = "<p>Cargando...</p>";
    await new Promise(resolve => setTimeout(resolve, 2000));
    const respuesta = await fetch("https://rickandmortyapi.com/api/character/5");
    const data = await respuesta.json();

    resultado.innerHTML = `
        <h2>${data.name}</h2>
        <img src="${data.image}" alt="${data.name}">
    `;

});