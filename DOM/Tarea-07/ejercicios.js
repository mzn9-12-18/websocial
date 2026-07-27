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